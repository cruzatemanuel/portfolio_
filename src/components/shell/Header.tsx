import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const isHome = location.pathname === '/';

  return (
    <header className={styles.headerShell}>
      <div className={styles.innerNav}>
        <Link to="/" className={styles.brand} aria-label="Emanuel Cruzat Home">
          Emanuel Cruzat
        </Link>

        <nav className={styles.desktopNav} aria-label="Main Navigation">
          {isHome ? (
            <a href="#projects" className={styles.navLink}>
              Projects
            </a>
          ) : (
            <NavLink
              to="/dev-projects"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
              }
            >
              Projects
            </NavLink>
          )}

          {isHome ? (
            <a href="#experience" className={styles.navLink}>
              Experience
            </a>
          ) : (
            <Link to="/#experience" className={styles.navLink}>
              Experience
            </Link>
          )}

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
            }
          >
            Contact
          </NavLink>

          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle dark/light theme"
            title="Toggle theme"
          >
            {resolvedTheme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </nav>

        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className={styles.mobileDrawer} aria-label="Mobile Navigation">
          <Link to="/" onClick={() => setMobileOpen(false)} className={styles.navLink}>
            Emanuel Cruzat
          </Link>
          {isHome ? (
            <a href="#projects" onClick={() => setMobileOpen(false)} className={styles.navLink}>
              Projects
            </a>
          ) : (
            <NavLink
              to="/dev-projects"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
              }
            >
              Projects
            </NavLink>
          )}
          {isHome ? (
            <a href="#experience" onClick={() => setMobileOpen(false)} className={styles.navLink}>
              Experience
            </a>
          ) : (
            <Link to="/#experience" onClick={() => setMobileOpen(false)} className={styles.navLink}>
              Experience
            </Link>
          )}
          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
            }
          >
            Contact
          </NavLink>

          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            style={{ width: 'fit-content', marginTop: '0.25rem' }}
            aria-label="Toggle dark/light theme"
          >
            {resolvedTheme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            <span style={{ fontSize: '0.8125rem' }}>Switch Mode</span>
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;

