import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Linkedin,
  Github,
  Mail,
  FileText,
  ArrowUpRight,
  GraduationCap,
  Award,
  ArrowRight,
} from "lucide-react";
import { portfolioContent } from "../content";
import ContactCTA from "../components/shell/ContactCTA";
import ShinyText from "../components/ui/ShinyText";
import PixelTransition from "../components/ui/PixelTransition";
import TechIcon from "../components/ui/TechIcon";
import styles from "../components/home/Home.module.css";

export const Home: React.FC = () => {
  const { profile, experiences, projects, tools, education, certifications } =
    portfolioContent;
  const navigate = useNavigate();

  // Show top 3 latest items on Home page
  const latestExperiences = experiences.slice(0, 3);
  const latestProjects = projects.slice(0, 3);

  const handleResumeClick = () => {
    window.open(profile.resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.homeContainer}>
      {/* 1. Hero / Profile Header */}
      <section className={styles.heroSection} aria-label="Introduction">
        <div className={styles.avatarRow}>
          {/* Circular Pixelated Hover Profile Picture */}
          <div className={styles.circularAvatarWrapper} title="Emanuel Cruzat">
            <PixelTransition
              firstContent={
                <img
                  src={profile.portraitUrl}
                  alt={profile.portraitAlt}
                  className={styles.circularAvatarImg}
                />
              }
              secondContent={
                <img
                  src={profile.portraitHoverUrl || profile.portraitUrl}
                  alt={profile.portraitAlt}
                  className={styles.circularAvatarImg}
                />
              }
              gridSize={8}
              pixelColor="var(--color-accent)"
              animationStepDuration={0.35}
            />
          </div>

          <div className={styles.nameHeaderDetails}>
            <h1 className={styles.developerName}>{profile.name}</h1>
            <span className={styles.primaryJobTitle}>
              <ShinyText
                text="Aspiring Data Engineer"
                speed={3}
                color="var(--color-text-secondary)"
                shineColor="var(--color-accent)"
              />
            </span>

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
            aria-label="View Resume in a new tab"
          >
            <FileText size={16} />
            <span>View Resume</span>
            <ArrowUpRight size={14} className={styles.externalIcon} />
          </button>
        </div>
      </section>

      {/* 2. Technologies Preview Section */}
      <section
        className={styles.sectionContainer}
        aria-label="Technologies Overview"
      >
        <div className={styles.sectionHeaderRow}>
          <h2 className={styles.sectionHeading}>
            <ShinyText
              text="✦ Technologies"
              speed={3}
              color="var(--color-text-primary)"
              shineColor="var(--color-accent)"
            />
          </h2>
          <button
            onClick={() => navigate("/technologies")}
            className={styles.viewAllButton}
            aria-label="View all technologies"
          >
            <span>All Technologies</span>
            <ArrowRight size={14} />
          </button>
        </div>
        <div className={styles.toolsBadgeGrid}>
          {tools.slice(0, 10).map((tool) => (
            <span key={tool.name} className={styles.toolBadge}>
              <TechIcon name={tool.name} iconName={tool.iconName} size={15} />
              <span>{tool.name}</span>
            </span>
          ))}
        </div>
      </section>

      {/* 3. Selected Projects (Top 3 Latest) */}
      <section
        id="projects"
        className={styles.sectionContainer}
        aria-label="Selected Projects"
      >
        <div className={styles.sectionHeaderRow}>
          <h2 className={styles.sectionHeading}>
            <ShinyText
              text="✦ Projects"
              speed={3}
              color="var(--color-text-primary)"
              shineColor="var(--color-accent)"
            />
          </h2>
          <button
            onClick={() => navigate("/projects")}
            className={styles.viewAllButton}
            aria-label="View all projects"
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
      <section
        id="experience"
        className={styles.sectionContainer}
        aria-label="Experience"
      >
        <div className={styles.sectionHeaderRow}>
          <h2 className={styles.sectionHeading}>
            <ShinyText
              text="✦ Experience"
              speed={3}
              color="var(--color-text-primary)"
              shineColor="var(--color-accent)"
            />
          </h2>
          <button
            onClick={() => navigate("/experience")}
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
              {exp.description && (
                <p className={styles.expDesc}>{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. Education Section */}
      <section className={styles.sectionContainer} aria-label="Education">
        <div className={styles.sectionHeaderRow}>
          <h2 className={styles.sectionHeading}>
            <ShinyText
              text="✦ Education"
              speed={3}
              color="var(--color-text-primary)"
              shineColor="var(--color-accent)"
            />
          </h2>
          <button
            onClick={() => navigate("/experience")}
            className={styles.viewAllButton}
            aria-label="View education background"
          >
            <span>All Education</span>
            <ArrowRight size={14} />
          </button>
        </div>
        <div className={styles.experienceList}>
          {education.map((edu) => (
            <div key={edu.id} className={styles.experienceCard}>
              <div className={styles.expHeaderRow}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                  }}
                >
                  <GraduationCap
                    size={20}
                    style={{
                      marginTop: "0.2rem",
                      color: "var(--color-text-primary)",
                    }}
                  />
                  <div>
                    <h3 className={styles.expRole}>{edu.degree}</h3>
                    <span className={styles.expOrg}>{edu.institution}</span>
                  </div>
                </div>
                <span className={styles.expYear}>{edu.year}</span>
              </div>
              {edu.description && (
                <p className={styles.expDesc}>{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. Certifications Section */}
      <section className={styles.sectionContainer} aria-label="Certifications">
        <div className={styles.sectionHeaderRow}>
          <h2 className={styles.sectionHeading}>
            <ShinyText
              text="✦ Certifications"
              speed={3}
              color="var(--color-text-primary)"
              shineColor="var(--color-accent)"
            />
          </h2>
          <button
            onClick={() => navigate("/certifications")}
            className={styles.viewAllButton}
            aria-label="View all certifications"
          >
            <span>All Certifications</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className={styles.experienceList}>
          {certifications.slice(0, 2).map((cert) => (
            <div key={cert.id} className={styles.experienceCard}>
              <div className={styles.expHeaderRow}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                  }}
                >
                  <Award
                    size={20}
                    style={{
                      marginTop: "0.2rem",
                      color: "var(--color-text-primary)",
                    }}
                  />
                  <div>
                    <h3 className={styles.expRole}>{cert.title}</h3>
                    <span className={styles.expOrg}>{cert.issuer}</span>
                  </div>
                </div>
                <span className={styles.expYear}>{cert.year}</span>
              </div>
              {cert.description && (
                <p className={styles.expDesc}>{cert.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. Contact CTA */}
      <section
        id="contact"
        className={styles.sectionContainer}
        aria-label="Contact"
      >
        <ContactCTA />
      </section>
    </div>
  );
};

export default Home;
