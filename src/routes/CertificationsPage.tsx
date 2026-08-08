import React from 'react';
import { Award, ArrowUpRight } from 'lucide-react';
import { portfolioContent } from '../content';
import ContactCTA from '../components/shell/ContactCTA';
import styles from '../components/home/Home.module.css';

export const CertificationsPage: React.FC = () => {
  const { certifications } = portfolioContent;

  return (
    <div className={styles.homeContainer}>
      <section className={styles.sectionContainer} aria-label="Certifications & Credentials">
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionHeading}>Certifications</h1>
          <p className={styles.sectionSubheading}>
            Verified professional credentials in cloud data engineering, distributed analytics, and database architecture.
          </p>
        </div>

        <div className={styles.experienceList}>
          {certifications.map((cert) => (
            <article key={cert.id} className={styles.experienceCard}>
              <div className={styles.expHeaderRow}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Award size={20} style={{ marginTop: '0.2rem', color: 'var(--color-text-primary)' }} />
                  <div>
                    <h2 className={styles.expRole}>
                      {cert.credentialUrl ? (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          <span>{cert.title}</span>
                          <ArrowUpRight size={15} className={styles.arrowIcon} />
                        </a>
                      ) : (
                        cert.title
                      )}
                    </h2>
                    <span className={styles.expOrg}>{cert.issuer}</span>
                  </div>
                </div>
                <span className={styles.expYear}>{cert.year}</span>
              </div>
              {cert.description && <p className={styles.expDesc}>{cert.description}</p>}
            </article>
          ))}
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default CertificationsPage;
