import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Monitor, Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  };

  const renderThemeIcon = () => {
    if (theme === 'system') return <Monitor size={16} />;
    return resolvedTheme === 'dark' ? <Moon size={16} /> : <Sun size={16} />;
  };

  return (
    <header className={styles.headerShell}>
      <div className={styles.innerNav}>
        <Link to="/" className={styles.brand} aria-label="Emanuel Cruzat Home">
          Emanuel Cruzat
        </Link>

        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/graphic-design"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
            }
          >
            Graphic Design
          </NavLink>
          <NavLink
            to="/dev-projects"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
            }
          >
            Dev Projects
          </NavLink>
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
            aria-label={`Current theme ${theme}. Click to switch theme.`}
            title={`Theme: ${theme} (${resolvedTheme})`}
          >
            {renderThemeIcon()}
            <span style={{ textTransform: 'capitalize' }}>{theme}</span>
          </button>
        </nav>

        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className={styles.mobileDrawer} aria-label="Mobile Navigation">
          <NavLink
            to="/"
            end
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/graphic-design"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
            }
          >
            Graphic Design
          </NavLink>
          <NavLink
            to="/dev-projects"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
            }
          >
            Dev Projects
          </NavLink>
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
            style={{ width: 'fit-content', marginTop: '0.5rem' }}
          >
            {renderThemeIcon()}
            <span style={{ textTransform: 'capitalize' }}>Theme: {theme}</span>
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
