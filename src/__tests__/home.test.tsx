import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from '../context/ThemeContext';
import Home from '../routes/Home';

describe('Home Page (Phase 5)', () => {
  it('renders name, role, bio, and social links', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('Emanuel Cruzat')).toBeInTheDocument();
    expect(screen.getByText('View Résumé')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'LinkedIn Profile' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub Profile' })).toBeInTheDocument();
  });

  it('renders tool marquee badges', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getAllByText('Figma')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Python')[0]).toBeInTheDocument();
    expect(screen.getAllByText('React')[0]).toBeInTheDocument();
  });

  it('renders experience records section', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Lead Visual Designer')).toBeInTheDocument();
    expect(screen.getByText('Data Engineering Associate')).toBeInTheDocument();
  });

  it('renders selected projects section with ChromaGrid', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('Selected Projects')).toBeInTheDocument();
  });
});
