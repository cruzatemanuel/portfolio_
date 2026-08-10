import React from 'react';
import { portfolioContent } from '../content';
import ContactCTA from '../components/shell/ContactCTA';
import BackButton from '../components/ui/BackButton';
import styles from '../components/home/Home.module.css';

export const TechnologiesPage: React.FC = () => {
  const { tools } = portfolioContent;

  const categories = [
    { key: 'backend-db', title: 'Backend & Database' },
    { key: 'analytics', title: 'Analytics' },
    { key: 'design', title: 'Design' },
    { key: 'tools-vc', title: 'Tools and Version controls' },
    { key: 'ai', title: 'AI' },
  ];

  return (
    <div className={styles.homeContainer}>
      <BackButton />
      <section className={styles.sectionContainer} aria-label="Technologies and Tech Stack">
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionHeading}>Technologies</h1>
          <p className={styles.sectionSubheading}>
            Comprehensive breakdown of my technical stack grouped by domain specialization.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {categories.map((cat) => {
            const catTools = tools.filter((t) => t.category === cat.key);
            if (catTools.length === 0) return null;

            return (
              <div key={cat.key} className={styles.experienceCard}>
                <h2 className={styles.sectionHeading} style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>
                  {cat.title}
                </h2>
                <div className={styles.toolsBadgeGrid}>
                  {catTools.map((tool) => (
                    <span key={tool.name} className={styles.toolBadge}>
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default TechnologiesPage;
