import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SpecularButton from '../ui/SpecularButton';
import styles from './ContactCTA.module.css';

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  title = "Let's build something exceptional together.",
  subtitle = "Whether you have a design project, a data engineering challenge, or just want to connect — I'd love to hear from you.",
  buttonText = 'Contact me',
}) => {
  const navigate = useNavigate();

  return (
    <section className={styles.ctaContainer} aria-label="Contact Call to Action">
      <h2 className={styles.heading}>{title}</h2>
      <p className={styles.subtext}>{subtitle}</p>
      <div style={{ marginTop: '0.5rem' }}>
        <SpecularButton
          size="lg"
          onClick={() => navigate('/contact')}
          lineColor="#ffffff"
          baseColor="#0071e3"
          tint="#0071e3"
        >
          <span>{buttonText}</span>
          <ArrowRight size={18} style={{ marginLeft: '0.4rem' }} />
        </SpecularButton>
      </div>
    </section>
  );
};

export default ContactCTA;
