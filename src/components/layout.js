import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  // siteTitle,
} from './layout.module.css'
import Footer from './footer';

// import '../../public/assets/css/bootstrap.min.css';
// import '../../public/assets/css/themify-icons.css';
import '../../public/assets/css/style.css';
import '../../public/assets/css/responsive.css';


const Layout = ({ pageTitle, children }) => {
    return (
      <div className={container}>
        <nav>
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