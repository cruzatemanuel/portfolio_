import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from '../context/ThemeContext';
import App from '../App';
import Home from '../routes/Home';
import GraphicDesign from '../routes/GraphicDesign';
import DevProjects from '../routes/DevProjects';
import Contact from '../routes/Contact';

describe('Accessibility & Landmarks (Phase 9 & 11)', () => {
  it('renders semantic landmarks across the application', () => {
    render(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument(); // <header>
    expect(screen.getByRole('navigation', { name: 'Main Navigation' })).toBeInTheDocument(); // <nav>
    expect(screen.getByRole('main')).toBeInTheDocument(); // <main>
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // <footer>
  });

  it('ensures all images have descriptive alt text', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ThemeProvider>
    );

    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  it('ensures all interactive social links have descriptive aria-labels', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByRole('link', { name: 'LinkedIn Profile' })).toHaveAttribute('href');
    expect(screen.getByRole('link', { name: 'GitHub Profile' })).toHaveAttribute('href');
    expect(screen.getByRole('link', { name: 'Instagram Profile' })).toHaveAttribute('href');
    expect(screen.getByRole('link', { name: 'Email Contact' })).toHaveAttribute('href');
  });

  it('renders accessible section landmarks on Graphic Design and Dev Projects pages', () => {
    const { container: gdContainer } = render(
      <ThemeProvider>
        <MemoryRouter>
          <GraphicDesign />
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(gdContainer.querySelector('section[aria-label="Graphic Design Hero"]')).toBeInTheDocument();

    const { container: devContainer } = render(
      <ThemeProvider>
        <MemoryRouter>
          <DevProjects />
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(devContainer.querySelector('section[aria-label="Dev Projects Hero"]')).toBeInTheDocument();
  });

  it('renders accessible form labels in Contact stepper flow', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Contact />
        </MemoryRouter>
      </ThemeProvider>
    );

    const input = screen.getByLabelText(/Step 1 of 4: What is your full name?/i);
    expect(input).toBeInTheDocument();
  });
});
