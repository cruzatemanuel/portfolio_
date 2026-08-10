import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Linkedin, Github, Mail, FileText, ArrowUpRight, GraduationCap, Award, ArrowRight } from 'lucide-react';
import { portfolioContent } from '../content';
import ContactCTA from '../components/shell/ContactCTA';
import styles from '../components/home/Home.module.css';

export const Home: React.FC = () => {
  const { profile, experiences, projects, tools, education, certifications } = portfolioContent;
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  // Show top 3 latest items on Home page
  const latestExperiences = experiences.slice(0, 3);
  const latestProjects = projects.slice(0, 3);

  const handleResumeClick = () => {
    window.open(profile.resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.homeContainer}>
      {/* 1. Hero / Profile Header */}
      <section className={styles.heroSection} aria-label="Introduction">
        <div className={styles.avatarRow}>
          {/* Circular Hover Profile Picture */}
          <div
            className={styles.circularAvatarWrapper}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            title="Emanuel Cruzat"
          >
            <img
              src={isHovered && profile.portraitHoverUrl ? profile.portraitHoverUrl : profile.portraitUrl}
              alt={profile.portraitAlt}
              className={styles.circularAvatarImg}
            />
          </div>

          <div className={styles.nameHeaderDetails}>
            <h1 className={styles.developerName}>{profile.name}</h1>
            <span className={styles.primaryJobTitle}>Software &amp; Data Engineer</span>
            
            {/* Social Icons right beside profile header */}
            <div className={styles.socialsGroup} aria-label="Social Links">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconLink}
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconLink}
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={profile.socials.email}
                className={styles.socialIconLink}
                aria-label="Email Contact"
                title="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Specialization subtitle & Bio at bottom */}
        <div className={styles.heroSubtitleBlock}>
          <span className={styles.secondarySpecialization}>
            &mdash; Distributed Data Pipelines &amp; High-Performance Systems
          </span>
          <p className={styles.heroBio}>{profile.bio}</p>
        </div>

        {/* Isolated "View Resume" Button */}
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
      </section>

      {/* 2. Technologies Preview Section */}
      <section className={styles.sectionContainer} aria-label="Technologies Overview">
        <div className={styles.sectionHeaderRow}>
          <h2 className={styles.sectionHeading}>Technologies</h2>
          <button
            onClick={() => navigate('/technologies')}
            className={styles.viewAllButton}
            aria-label="View all technology categories"
          >
            <span>All Stacks</span>
            <ArrowRight size={14} />
          </button>
        </div>
        <div className={styles.toolsBadgeGrid}>
          {tools.slice(0, 10).map((tool) => (
            <span key={tool.name} className={styles.toolBadge}>
              {tool.name}
            </span>
          ))}
        </div>
      </section>

      {/* 3. Selected Projects (Top 3 Latest) */}
      <section id="projects" className={styles.sectionContainer} aria-label="Selected Projects">
        <div className={styles.sectionHeaderRow}>
          <div>
            <h2 className={styles.sectionHeading}>Projects</h2>
          </div>
          <button
            onClick={() => navigate('/projects')}
            className={styles.viewAllButton}
            aria-label="View all projects page"
          >
            <span>All Projects</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className={styles.projectsList}>
          {latestProjects.map((project) => (
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

      {/* 4. Experience (Top 3 Latest) */}
      <section id="experience" className={styles.sectionContainer} aria-label="Experience">
        <div className={styles.sectionHeaderRow}>
          <div>
            <h2 className={styles.sectionHeading}>Experience</h2>
          </div>
          <button
            onClick={() => navigate('/experience')}
            className={styles.viewAllButton}
            aria-label="View full experience page"
          >
            <span>All Experience</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className={styles.experienceList}>
          {latestExperiences.map((exp) => (
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

      {/* 5. Education Section */}
      <section className={styles.sectionContainer} aria-label="Education">
        <h2 className={styles.sectionHeading}>Education</h2>
        <div className={styles.experienceList}>
          {education.map((edu) => (
            <div key={edu.id} className={styles.experienceCard}>
              <div className={styles.expHeaderRow}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <GraduationCap size={20} style={{ marginTop: '0.2rem', color: 'var(--color-text-primary)' }} />
                  <div>
                    <h3 className={styles.expRole}>{edu.degree}</h3>
                    <span className={styles.expOrg}>{edu.institution}</span>
                  </div>
                </div>
                <span className={styles.expYear}>{edu.year}</span>
              </div>
              {edu.description && <p className={styles.expDesc}>{edu.description}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* 6. Certifications Section */}
      <section className={styles.sectionContainer} aria-label="Certifications">
        <div className={styles.sectionHeaderRow}>
          <h2 className={styles.sectionHeading}>Certifications</h2>
          <button
            onClick={() => navigate('/certifications')}
            className={styles.viewAllButton}
            aria-label="View all certifications"
          >
            <span>All Certificates</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className={styles.experienceList}>
          {certifications.slice(0, 2).map((cert) => (
            <div key={cert.id} className={styles.experienceCard}>
              <div className={styles.expHeaderRow}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Award size={20} style={{ marginTop: '0.2rem', color: 'var(--color-text-primary)' }} />
                  <div>
                    <h3 className={styles.expRole}>{cert.title}</h3>
                    <span className={styles.expOrg}>{cert.issuer}</span>
                  </div>
                </div>
                <span className={styles.expYear}>{cert.year}</span>
              </div>
              {cert.description && <p className={styles.expDesc}>{cert.description}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* 7. Contact CTA */}
      <section id="contact" className={styles.sectionContainer} aria-label="Contact">
        <ContactCTA />
      </section>
    </div>
  );
};

export default Home;


