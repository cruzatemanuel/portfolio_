import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail } from 'lucide-react';
import { portfolioContent } from '../../content';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { name, socials } = portfolioContent.profile;

  return (
    <footer className={styles.footerShell} aria-label="Site Footer">
      <div className={styles.innerFooter}>
        <div className={styles.topRow}>
          <Link to="/" className={styles.brand} aria-label="Emanuel Cruzat Home">
            {name}
          </Link>

          <nav className={styles.socialsNav} aria-label="Social Media Links">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub Profile"
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>

            <a
              href={socials.email}
              className={styles.socialLink}
              aria-label="Email Contact"
            >
              <Mail size={15} />
              <span>Email</span>
            </a>
          </nav>
        </div>

        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} {name} &bull; Batangas City, Philippines &bull; Built for clarity &amp; performance.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

