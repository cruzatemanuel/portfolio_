import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './ContactCTA.module.css';

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  title = "Let's build scalable systems together.",
  subtitle = "Have a data engineering challenge, a software architecture initiative, or want to collaborate? Get in touch.",
  buttonText = 'Contact Me',
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.ctaCard} aria-label="Contact Call to Action">
      <h2 className={styles.heading}>{title}</h2>
      <p className={styles.subtext}>{subtitle}</p>
      <div>
        <button
          onClick={() => navigate('/contact')}
          className={styles.ctaButton}
          aria-label="Navigate to Contact page"
        >
          <span>{buttonText}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ContactCTA;

