import React from 'react';
import { Search, X, Code2, ArrowUpRight } from 'lucide-react';
import { portfolioContent } from '../content';
import { useProjectSearch } from '../hooks/useProjectSearch';
import ContactCTA from '../components/shell/ContactCTA';
import styles from '../components/projects/ProjectListingPage.module.css';

export const DevProjects: React.FC = () => {
  const { searchQuery, setSearchQuery, filteredProjects, clearSearch, hasMatches } =
    useProjectSearch(portfolioContent.projects, 'Dev Project');

  return (
    <div className={styles.pageContainer}>
      {/* Header & Search */}
      <section className={styles.heroBox} aria-label="Dev Projects Hero">
        <h1 className={styles.heading}>Projects</h1>
        <p className={styles.subheading}>
          Distributed data engineering pipelines, SQL analytics tools, full-stack applications, and high-performance Web systems.
        </p>

        <div className={styles.searchBarWrapper}>
          <div className={styles.searchInputContainer}>
            <Search size={16} className={styles.searchIcon} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by stack, title, or year..."
              className={styles.searchInput}
              aria-label="Search projects"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className={styles.clearSearchBtn}
                aria-label="Clear search query"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects List or Empty State */}
      <section aria-label="Dev Projects Listing">
        {hasMatches ? (
          <div className={styles.projectsList}>
            {filteredProjects.map((project) => (
              <article key={project.id} className={styles.projectCard}>
                <div className={styles.projectHeaderRow}>
                  <h2 className={styles.projectTitle}>
                    <a
                      href={project.destinationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight size={15} className={styles.arrowIcon} />
                    </a>
                  </h2>
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
        ) : (
          <div className={styles.emptyStateContainer}>
            <Code2 size={36} className={styles.emptyStateIcon} />
            <h2 className={styles.emptyStateTitle}>No dev projects found</h2>
            <p className={styles.emptyStateText}>
              No projects matched your search "{searchQuery}". Try searching for another tech stack or keyword.
            </p>
            <button onClick={clearSearch} className={styles.resetBtn}>
              Clear search filter
            </button>
          </div>
        )}
      </section>

      {/* Shared Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default DevProjects;

