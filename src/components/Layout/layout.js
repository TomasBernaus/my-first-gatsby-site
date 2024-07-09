import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navBar,
  navLinks,
  navLinkItem,
  navLinkText,
  logoContainer,
  navContent,
  // siteTitle,
} from './layout.module.css'
import Footer from '../Footer/footer';
import logoWF from '../../assets/img/logo-wf.png';



const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav className={navBar}>
        <div className={logoContainer}>
          <img src={logoWF} alt="logo ITDO" />
        </div>
        <div className={navContent}>

          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/portafolio" className={navLinkText}>
                Portafolios
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/project" className={navLinkText}>
                Projectes
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Articles
              </Link>
            </li>
          </ul>
        </div>

      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout