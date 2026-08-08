import React from 'react';
import { Search, X, Code2 } from 'lucide-react';
import { portfolioContent } from '../content';
import { useProjectSearch } from '../hooks/useProjectSearch';
import ShinyText from '../components/ui/ShinyText';
import PixelBlast from '../components/ui/PixelBlast';
import ChromaGrid from '../components/ui/ChromaGrid';
import ContactCTA from '../components/shell/ContactCTA';
import styles from '../components/projects/ProjectListingPage.module.css';

export const DevProjects: React.FC = () => {
  const { searchQuery, setSearchQuery, filteredProjects, clearSearch, hasMatches } =
    useProjectSearch(portfolioContent.projects, 'Dev Project');

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section with PixelBlast WebGL background */}
      <section className={styles.heroBox} aria-label="Dev Projects Hero">
        <PixelBlast color="#0071e3" pixelSize={5} speed={0.5} />
        <div className={styles.heroContent}>
          <div className={styles.label}>
            <ShinyText text="My work" color="var(--color-accent)" />
          </div>
          <h1 className={styles.heading}>Dev Projects</h1>
          <p className={styles.subheading}>
            Distributed data engineering pipelines, SQL analytics tools, full-stack applications, and high-performance WebGL portfolio engines.
          </p>

          <div className={styles.searchBarWrapper}>
            <div className={styles.searchInputContainer}>
              <Search size={18} className={styles.searchIcon} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dev projects by title, stack, or year..."
                className={styles.searchInput}
                aria-label="Search dev projects"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className={styles.clearSearchBtn}
                  aria-label="Clear search query"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid or Empty State */}
      <section aria-label="Dev Projects Listing">
        {hasMatches ? (
          <ChromaGrid items={filteredProjects} radius={380} />
        ) : (
          <div className={styles.emptyStateContainer}>
            <Code2 size={44} className={styles.emptyStateIcon} />
            <h2 className={styles.emptyStateTitle}>No dev projects found</h2>
            <p className={styles.emptyStateText}>
              No development projects matched your search "{searchQuery}". Try searching for another tech stack, keyword, or year.
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
