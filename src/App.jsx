import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import PageLoader from './components/layout/PageLoader'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import MobileApp from './pages/MobileApp/MobileApp'
import ThankYou from './pages/ThankYou/ThankYou'

function App() {
  return (
    <>
      <PageLoader />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="mobile-app" element={<MobileApp />} />
            <Route path="contact" element={<Contact />} />
            <Route path="thank-you" element={<ThankYou />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
