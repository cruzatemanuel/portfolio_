import React from 'react';
import { portfolioContent } from '../content';
import ContactCTA from '../components/shell/ContactCTA';
import styles from '../components/home/Home.module.css';

export const ExperiencePage: React.FC = () => {
  const { experiences } = portfolioContent;

  return (
    <div className={styles.homeContainer}>
      <section className={styles.sectionContainer} aria-label="Professional Experience History">
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionHeading}>Experience</h1>
          <p className={styles.sectionSubheading}>
            Full career background spanning distributed data engineering pipelines, backend architecture, and software development.
          </p>
        </div>

        <div className={styles.experienceList}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.experienceCard}>
              <div className={styles.expHeaderRow}>
                <div>
                  <h2 className={styles.expRole}>{exp.role}</h2>
                  <span className={styles.expOrg}>{exp.organization}</span>
                </div>
                <span className={styles.expYear}>{exp.year}</span>
              </div>
              {exp.description && <p className={styles.expDesc}>{exp.description}</p>}
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default ExperiencePage;
