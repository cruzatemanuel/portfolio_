import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Instagram, Mail } from 'lucide-react';
import { portfolioContent } from '../../content';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { name, socials } = portfolioContent.profile;

  return (
    <footer className={styles.footerShell} aria-label="Site Footer">
      <div className={styles.innerFooter}>
        <Link to="/" className={styles.brand} aria-label="Emanuel Cruzat Home">
          {name}
        </Link>

        <nav className={styles.socialsNav} aria-label="Social Media Links">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>

          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub Profile"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>

          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Instagram Profile"
          >
            <Instagram size={18} />
            <span>Instagram</span>
          </a>

          <a
            href={socials.email}
            className={styles.socialLink}
            aria-label="Email Contact"
          >
            <Mail size={18} />
            <span>Email</span>
          </a>
        </nav>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} {name}. Designed with Apple-inspired visual hierarchy.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
