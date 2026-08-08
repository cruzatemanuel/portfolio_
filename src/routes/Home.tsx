import React from 'react';
import { Linkedin, Github, Instagram, Mail, FileText } from 'lucide-react';
import { portfolioContent } from '../content';
import ShinyText from '../components/ui/ShinyText';
import SpecularButton from '../components/ui/SpecularButton';
import ChromaGrid from '../components/ui/ChromaGrid';
import ContactCTA from '../components/shell/ContactCTA';
import ToolMarquee from '../components/home/ToolMarquee';
import styles from '../components/home/Home.module.css';

export const Home: React.FC = () => {
  const { profile, experiences, projects } = portfolioContent;
  const featuredProjects = projects.filter((p) => p.featured);

  const handleResumeClick = () => {
    window.open(profile.resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.homeContainer}>
      {/* 1. Introduction / Hero */}
      <section className={styles.heroSection} aria-label="Introduction">
        <div className={styles.portraitWrapper}>
          <img
            src={profile.portraitUrl}
            alt={profile.portraitAlt}
            className={styles.portraitImage}
          />
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroName}>{profile.name}</h1>
          <div className={styles.heroRole}>
            <ShinyText
              text={profile.role}
              color="var(--color-accent)"
              shineColor="#ffffff"
              spread={120}
              speed={2.5}
            />
          </div>
          <p className={styles.heroBio}>{profile.bio}</p>

          <div style={{ marginTop: '0.5rem' }}>
            <SpecularButton
              size="lg"
              onClick={handleResumeClick}
              lineColor="#ffffff"
              baseColor="#0071e3"
              tint="#0071e3"
            >
              <FileText size={18} />
              <span>View Résumé</span>
            </SpecularButton>
          </div>

          <div className={styles.heroSocials} aria-label="Social Profiles">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram Profile"
            >
              <Instagram size={18} />
            </a>
            <a
              href={profile.socials.email}
              className={styles.socialLink}
              aria-label="Email Contact"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Tool Marquee */}
      <ToolMarquee />

      {/* 3. Experience */}
      <section aria-label="Experience">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>
            <ShinyText text="Background" color="var(--color-accent)" />
          </div>
          <h2 className={styles.sectionHeading}>Experience</h2>
          <p className={styles.sectionDesc}>
            Professional background spanning visual brand design and data engineering architecture.
          </p>
        </div>

        <div className={styles.experienceList}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.experienceCard}>
              <div className={styles.expLeft}>
                <img
                  src={exp.logoUrl}
                  alt={exp.logoAlt}
                  className={styles.expLogo}
                  loading="lazy"
                />
                <div className={styles.expInfo}>
                  <h3 className={styles.expRole}>{exp.role}</h3>
                  <span className={styles.expOrg}>{exp.organization}</span>
                </div>
              </div>
              <span className={styles.expYear}>{exp.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Selected Projects */}
      <section aria-label="Selected Projects">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>
            <ShinyText text="My work" color="var(--color-accent)" />
          </div>
          <h2 className={styles.sectionHeading}>Selected Projects</h2>
          <p className={styles.sectionDesc}>
            Featured graphic design brand systems and data engineering projects.
          </p>
        </div>

        <ChromaGrid items={featuredProjects} radius={400} />
      </section>

      {/* 5. Contact Call to Action */}
      <ContactCTA />
    </div>
  );
};

export default Home;
