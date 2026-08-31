import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CtaBand from './CtaBand'
import FloatingContactActions from './FloatingContactActions'

function Layout() {
  const { pathname } = useLocation()
  const hideCtaBand = pathname === '/mobile-app'

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {!hideCtaBand && <CtaBand />}
      <Footer />
      <FloatingContactActions />
    </>
  )
}

export default Layout
