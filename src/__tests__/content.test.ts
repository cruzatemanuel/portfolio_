import { describe, it, expect } from 'vitest';
import { portfolioContent } from '../content';

describe('Portfolio Content Model', () => {
  it('contains complete profile data', () => {
    expect(portfolioContent.profile.name).toBe('Emanuel Cruzat');
    expect(portfolioContent.profile.role).toContain('Software & Data Engineer');
    expect(portfolioContent.profile.resumeUrl).toBeDefined();
    expect(portfolioContent.profile.socials.linkedin).toBeDefined();
    expect(portfolioContent.profile.socials.github).toBeDefined();
  });

  it('contains non-empty list of tools', () => {
    expect(portfolioContent.tools.length).toBeGreaterThan(5);
    const hasBackend = portfolioContent.tools.some((t) => t.category === 'backend-db');
    const hasAnalytics = portfolioContent.tools.some((t) => t.category === 'analytics');
    const hasAI = portfolioContent.tools.some((t) => t.category === 'ai');
    expect(hasBackend).toBe(true);
    expect(hasAnalytics).toBe(true);
    expect(hasAI).toBe(true);
  });

  it('contains experience records with roles and organizations', () => {
    expect(portfolioContent.experiences.length).toBeGreaterThan(0);
    portfolioContent.experiences.forEach((exp) => {
      expect(exp.id).toBeDefined();
      expect(exp.role).toBeDefined();
      expect(exp.organization).toBeDefined();
    });
  });

  it('contains project records categorized cleanly', () => {
    const devProjects = portfolioContent.projects.filter((p) => p.category === 'Dev Project');
    expect(devProjects.length).toBeGreaterThan(0);

    portfolioContent.projects.forEach((proj) => {
      expect(proj.id).toBeDefined();
      expect(proj.title).toBeDefined();
      expect(proj.accentColor).toBeDefined();
      expect(proj.destinationUrl).toBeDefined();
    });
  });
});

