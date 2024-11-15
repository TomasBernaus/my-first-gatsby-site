import * as React from 'react';
import { Link } from 'gatsby';
import {
  container,
  heading,
  navBar,
  navLinks,
  navLinkItem,
  navLinkText,
  logoContainer,
  navContent,
  dropdownMenu,
  dropdownItem,
  dropdownToggle,
  navLinkDropdown,
} from './layout.module.css';
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
              <div className={navLinkDropdown}>
                <button className={dropdownToggle}>
                  Servicios
                </button>
                <ul className={dropdownMenu}>
                  <li>
                    <Link to="/desarrollo-app" className={dropdownItem}>
                      Desarrollo App
                    </Link>
                  </li>
                  <li>
                    <Link to="/desarrollo-web" className={dropdownItem}>
                      Desarrollo Web
                    </Link>
                  </li>
                  <li>
                    <Link to="/desarrollo-web-a-medida" className={dropdownItem}>
                      Desarrollo Web a Medida
                    </Link>
                  </li>
                  <li>
                    <Link to="/diseno-web-ui-ux" className={dropdownItem}>
                      Diseño Web UI/UX
                    </Link>
                  </li>
                  <li>
                    <Link to="/automatizacion-erp-crm" className={dropdownItem}>
                      Automatización ERP/CRM
                    </Link>
                  </li>
                </ul>
              </div>
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
              <Link to="/Contact" className={navLinkText}>
                Contacte
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
        {/* <h1 className={heading}>{pageTitle}</h1> */}
        {children}
      <Footer />
    </div>
  );
};

export default Layout;
