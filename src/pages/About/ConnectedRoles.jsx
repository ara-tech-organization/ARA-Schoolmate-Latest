import connectors from '../../assets/icons/roles-connectors.svg'
import junction from '../../assets/icons/roles-junction.svg'
import brandMark from '../../assets/images/brand-mark.png'
import buildingIcon from '../../assets/icons/role-building.svg'
import graduationIcon from '../../assets/icons/role-graduation.svg'
import bookIcon from '../../assets/icons/role-book.svg'
import usersIcon from '../../assets/icons/role-users.svg'
import styles from './ConnectedRoles.module.css'

const ROLES = [
  { label: 'Administrators', icon: buildingIcon, corner: 'topLeft' },
  { label: 'Teachers', icon: graduationIcon, corner: 'topRight' },
  { label: 'Students', icon: bookIcon, corner: 'bottomLeft' },
  { label: 'Parents', icon: usersIcon, corner: 'bottomRight' },
]

function RoleCard({ role }) {
  return (
    <div className={`${styles.card} ${styles[role.corner]}`}>
      <span className={styles.iconTile}>
        <img src={role.icon} alt="" width={18} height={18} />
      </span>
      <span className={styles.label}>{role.label}</span>
    </div>
  )
}

function ConnectedRoles() {
  return (
    <div className={styles.wrap}>
      <div className={styles.diagram}>
        <img src={connectors} alt="" className={styles.connectors} />
        <img src={junction} alt="" className={`${styles.junction} ${styles.junctionLeft}`} />
        <img src={junction} alt="" className={`${styles.junction} ${styles.junctionRight}`} />
        {ROLES.map((role) => (
          <RoleCard key={role.label} role={role} />
        ))}
        <div className={styles.hub}>
          <img src={brandMark} alt="" className={styles.hubMark} />
          <span className={styles.hubLabel}>SchoolMate</span>
        </div>
      </div>

      <ul className={styles.stackedList}>
        {ROLES.slice(0, 2).map((role) => (
          <li key={role.label} className={styles.stackedItem}>
            <span className={styles.iconTile}>
              <img src={role.icon} alt="" width={18} height={18} />
            </span>
            <span className={styles.label}>{role.label}</span>
          </li>
        ))}
        <li className={styles.stackedConnector} aria-hidden="true" />
        <li className={styles.stackedHub}>
          <img src={brandMark} alt="" className={styles.hubMark} />
          <span className={styles.hubLabel}>SchoolMate</span>
        </li>
        <li className={styles.stackedConnector} aria-hidden="true" />
        {ROLES.slice(2).map((role) => (
          <li key={role.label} className={styles.stackedItem}>
            <span className={styles.iconTile}>
              <img src={role.icon} alt="" width={18} height={18} />
            </span>
            <span className={styles.label}>{role.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ConnectedRoles
