import React from 'react';
import { Search, X, FolderX } from 'lucide-react';
import { portfolioContent } from '../content';
import { useProjectSearch } from '../hooks/useProjectSearch';
import ShinyText from '../components/ui/ShinyText';
import ClickSpark from '../components/ui/ClickSpark';
import ChromaGrid from '../components/ui/ChromaGrid';
import ContactCTA from '../components/shell/ContactCTA';
import styles from '../components/projects/ProjectListingPage.module.css';

export const GraphicDesign: React.FC = () => {
  const { searchQuery, setSearchQuery, filteredProjects, clearSearch, hasMatches } =
    useProjectSearch(portfolioContent.projects, 'Graphic Design');

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section with ClickSpark interaction */}
      <section className={styles.heroBox} aria-label="Graphic Design Hero">
        <ClickSpark sparkColor="var(--color-accent)" sparkCount={10} sparkRadius={30}>
          <div className={styles.heroContent}>
            <div className={styles.label}>
              <ShinyText text="My work" color="var(--color-accent)" />
            </div>
            <h1 className={styles.heading}>Graphic Design</h1>
            <p className={styles.subheading}>
              Visual identity systems, typography posters, print editorials, and digital graphic assets. Click anywhere in the hero to generate spark ripples.
            </p>

            <div className={styles.searchBarWrapper}>
              <div className={styles.searchInputContainer}>
                <Search size={18} className={styles.searchIcon} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search design projects by title, tag, or year..."
                  className={styles.searchInput}
                  aria-label="Search graphic design projects"
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
        </ClickSpark>
      </section>

      {/* Projects Grid or Empty State */}
      <section aria-label="Graphic Design Projects Listing">
        {hasMatches ? (
          <ChromaGrid items={filteredProjects} radius={380} />
        ) : (
          <div className={styles.emptyStateContainer}>
            <FolderX size={44} className={styles.emptyStateIcon} />
            <h2 className={styles.emptyStateTitle}>No design projects found</h2>
            <p className={styles.emptyStateText}>
              No graphic design work matched your search "{searchQuery}". Try searching for another keyword, tag, or year.
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

export default GraphicDesign;
