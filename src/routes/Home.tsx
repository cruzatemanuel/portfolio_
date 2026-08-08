import React from 'react';
import { Linkedin, Github, Mail, FileText, ArrowUpRight, Code2 } from 'lucide-react';
import { portfolioContent } from '../content';
import ContactCTA from '../components/shell/ContactCTA';
import styles from '../components/home/Home.module.css';

export const Home: React.FC = () => {
  const { profile, experiences, projects, tools } = portfolioContent;

  const handleResumeClick = () => {
    window.open(profile.resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.homeContainer}>
      {/* 1. Hero / Developer Profile Header */}
      <section className={styles.heroSection} aria-label="Introduction">
        <div className={styles.heroHeaderGroup}>
          <h1 className={styles.developerName}>{profile.name}</h1>
          <div className={styles.jobTitleGroup}>
            <span className={styles.primaryJobTitle}>Software &amp; Data Engineer</span>
            <span className={styles.secondarySpecialization}>
              &mdash; Distributed Data Pipelines &amp; High-Performance Systems
            </span>
          </div>
        </div>

        <p className={styles.heroBio}>{profile.bio}</p>

        {/* Isolated "View Resume" Button with generous vertical spacing */}
        <div className={styles.resumeWrapper}>
          <button
            onClick={handleResumeClick}
            className={styles.resumeButton}
            aria-label="View Résumé in a new tab"
          >
            <FileText size={16} />
            <span>View R&eacute;sum&eacute;</span>
            <ArrowUpRight size={14} className={styles.externalIcon} />
          </button>
        </div>

        {/* Social Links with tight, uniform gap */}
        <div className={styles.socialsGroup} aria-label="Social Links">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconLink}
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconLink}
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.socials.email}
            className={styles.socialIconLink}
            aria-label="Email Contact"
            title="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </section>

      {/* 2. Minimal Tech Stack List */}
      <section className={styles.sectionContainer} aria-label="Technologies & Tools">
        <h2 className={styles.sectionHeading}>Technologies</h2>
        <div className={styles.toolsBadgeGrid}>
          {tools.map((tool) => (
            <span key={tool.name} className={styles.toolBadge}>
              {tool.name}
            </span>
          ))}
        </div>
      </section>

      {/* 3. Experience */}
      <section id="experience" className={styles.sectionContainer} aria-label="Experience">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>Experience</h2>
          <p className={styles.sectionSubheading}>
            Professional background in data engineering architecture and software development.
          </p>
        </div>

        <div className={styles.experienceList}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.experienceCard}>
              <div className={styles.expHeaderRow}>
                <div>
                  <h3 className={styles.expRole}>{exp.role}</h3>
                  <span className={styles.expOrg}>{exp.organization}</span>
                </div>
                <span className={styles.expYear}>{exp.year}</span>
              </div>
              {exp.description && <p className={styles.expDesc}>{exp.description}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Selected Projects */}
      <section id="projects" className={styles.sectionContainer} aria-label="Selected Projects">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>Projects</h2>
          <p className={styles.sectionSubheading}>
            Featured engineering projects and system architectures.
          </p>
        </div>

        <div className={styles.projectsList}>
          {projects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              <div className={styles.projectHeaderRow}>
                <h3 className={styles.projectTitle}>
                  <a
                    href={project.destinationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight size={15} className={styles.arrowIcon} />
                  </a>
                </h3>
                <span className={styles.projectYear}>{project.year}</span>
              </div>
              <p className={styles.projectDesc}>{project.description}</p>
              {project.tags && (
                <div className={styles.projectTagsGroup}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className={styles.sectionContainer} aria-label="Contact">
        <ContactCTA />
      </section>
    </div>
  );
};

export default Home;

