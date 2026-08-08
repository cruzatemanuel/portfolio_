import { useState, useMemo } from 'react';
import { ProjectRecord, ProjectCategory } from '../types/content';

export const useProjectSearch = (initialProjects: ProjectRecord[], categoryFilter?: ProjectCategory) => {
  const [searchQuery, setSearchQuery] = useState('');

  const categoryProjects = useMemo(() => {
    if (!categoryFilter) return initialProjects;
    return initialProjects.filter((p) => p.category === categoryFilter);
  }, [initialProjects, categoryFilter]);

  const filteredProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return categoryProjects;

    return categoryProjects.filter((p) => {
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchCategory = p.category.toLowerCase().includes(q);
      const matchYear = p.year.toLowerCase().includes(q);
      const matchTags = p.tags?.some((t) => t.toLowerCase().includes(q)) ?? false;
      const matchDesc = p.description?.toLowerCase().includes(q) ?? false;

      return matchTitle || matchCategory || matchYear || matchTags || matchDesc;
    });
  }, [categoryProjects, searchQuery]);

  const clearSearch = () => setSearchQuery('');

  return {
    searchQuery,
    setSearchQuery,
    filteredProjects,
    clearSearch,
    totalProjectsCount: categoryProjects.length,
    hasMatches: filteredProjects.length > 0,
  };
};
