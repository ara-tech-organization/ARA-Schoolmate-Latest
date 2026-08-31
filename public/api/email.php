<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

header("Content-Type: application/json");
date_default_timezone_set("Asia/Kolkata");

// TODO: replace with the real inbox that should receive SchoolMate enquiries
$ADMIN_EMAIL = "support@schoolmate.in";
// TODO: replace with your deployed Google Apps Script web-app URL (see server/apps-script/contact-sheet.gs)
$GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEBAPP_URL";

/* GET JSON INPUT */
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid input"
    ]);
    exit;
}

/* FIELDS — matches src/pages/Contact/ContactDetails.jsx's FIELDS list */
$name        = trim($data['name'] ?? '');
$email       = trim($data['email'] ?? '');
$phone       = trim($data['phone'] ?? '');
$institution = trim($data['institution'] ?? '');
$city        = trim($data['city'] ?? '');
$message     = trim($data['message'] ?? '');
$source      = trim($data['source'] ?? 'Website Contact Form');

/* VALIDATION — required fields match the form's required inputs (name, phone, institution, city) */
if ($name === '' || $phone === '' || $institution === '' || $city === '') {
    echo json_encode([
        "success" => false,
        "message" => "Missing required fields"
    ]);
    exit;
}

/* SAFE OUTPUT */
$name_safe        = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email_safe       = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$phone_safe       = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$institution_safe = htmlspecialchars($institution, ENT_QUOTES, 'UTF-8');
$city_safe        = htmlspecialchars($city, ENT_QUOTES, 'UTF-8');
$message_safe     = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
$source_safe      = htmlspecialchars($source, ENT_QUOTES, 'UTF-8');

$timestamp = date('D, d M Y \a\t h:i A');

/* SUBJECT */
$subject = "New Enquiry | $institution_safe | $name_safe";

/* EMAIL TEMPLATE — SchoolMate brand red (#D1131B) in place of the salon's palette */
$emailBody = '
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#fef2f2;font-family:Arial,sans-serif;">
<div style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e7e9ed;">

    <div style="background:#14171B;padding:30px;text-align:center;color:#ffffff;">
        <div style="font-size:26px;font-weight:bold;">New SchoolMate Enquiry</div>
        <div style="font-size:12px;color:#d3d7dd;margin-top:6px;">'.$timestamp.'</div>
        <div style="margin-top:10px;background:#D1131B;padding:6px 12px;border-radius:20px;display:inline-block;font-size:12px;">'.$institution_safe.'</div>
    </div>

    <div style="padding:24px;">
        <p><strong>Name:</strong> '.$name_safe.'</p>
        <p><strong>Email:</strong> '.($email_safe ?: 'Not provided').'</p>
        <p><strong>Phone:</strong> '.$phone_safe.'</p>
        <p><strong>Institution / School Name:</strong> '.$institution_safe.'</p>
        <p><strong>City:</strong> '.$city_safe.'</p>
        <p><strong>Message:</strong> '.($message_safe ?: 'Not provided').'</p>
        <p><strong>Source:</strong> '.$source_safe.'</p>
    </div>

    <div style="text-align:center;padding:20px;">
        <a href="tel:'.$phone_safe.'" style="background:#D1131B;color:#fff;padding:10px 15px;border-radius:6px;text-decoration:none;margin:5px;display:inline-block;">Call</a>
        <a href="https://wa.me/'.preg_replace('/\D/', '', $phone).'" style="background:#16a34a;color:#fff;padding:10px 15px;border-radius:6px;text-decoration:none;margin:5px;display:inline-block;">WhatsApp</a>
    </div>

</div>
</body>
</html>
';

/* HEADERS */
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
// TODO: replace with a real sending address on your domain
$headers .= "From: SchoolMate <no-reply@schoolmate.in>\r\n";

if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $headers .= "Reply-To: $email\r\n";
}

/* SEND MAIL */
$mailSent = mail($ADMIN_EMAIL, $subject, $emailBody, $headers);

/* SEND TO GOOGLE SHEET */
$sheetPayload = [
    "name" => $name,
    "email" => $email,
    "phone" => $phone,
    "institution" => $institution,
    "city" => $city,
    "message" => $message,
    "source" => $source
];

$sheetSent = false;
$sheetDebug = null;

if (empty($GOOGLE_SCRIPT_URL) || $GOOGLE_SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_WEBAPP_URL") {
    $sheetDebug = "GOOGLE_SCRIPT_URL is still the placeholder — deploy contact-sheet.gs as a web app and paste its /exec URL in here.";
} else {
    $ch = curl_init($GOOGLE_SCRIPT_URL);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($sheetPayload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 15);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

    $sheetResponse = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($sheetResponse !== false && $httpCode >= 200 && $httpCode < 300) {
        $sheetSent = true;
    }

    // Surfaced only so you can see *why* the sheet call failed — trim this once things work.
    $sheetDebug = [
        "http_code" => $httpCode,
        "curl_error" => $curlError ?: null,
        "response" => $sheetResponse !== false ? $sheetResponse : null,
    ];
}

/* RESPONSE */
echo json_encode([
    "success" => ($mailSent || $sheetSent),
    "mail_sent" => $mailSent,
    "sheet_sent" => $sheetSent,
    "sheet_debug" => $sheetDebug,
    "message" => ($mailSent || $sheetSent) ? "Enquiry submitted successfully" : "Mail and Sheet both failed"
]);
