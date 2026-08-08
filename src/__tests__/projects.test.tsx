import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from '../context/ThemeContext';
import GraphicDesign from '../routes/GraphicDesign';
import DevProjects from '../routes/DevProjects';

describe('Project Listing Pages (Phase 6)', () => {
  describe('Graphic Design Page', () => {
    it('renders heading, ClickSpark hero, and design projects', () => {
      render(
        <ThemeProvider>
          <MemoryRouter>
            <GraphicDesign />
          </MemoryRouter>
        </ThemeProvider>
      );

      expect(screen.getByRole('heading', { level: 1, name: 'Graphic Design' })).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/Search design projects/i)).toBeInTheDocument();
      expect(screen.getByText('Oceanic Brand System')).toBeInTheDocument();
    });

    it('filters projects by search input and shows empty state when no match', () => {
      render(
        <ThemeProvider>
          <MemoryRouter>
            <GraphicDesign />
          </MemoryRouter>
        </ThemeProvider>
      );

      const input = screen.getByPlaceholderText(/Search design projects/i);
      fireEvent.change(input, { target: { value: 'NonExistentProject123' } });

      expect(screen.getByText('No design projects found')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Clear search filter' })).toBeInTheDocument();

      fireEvent.click(screen.getByRole('button', { name: 'Clear search filter' }));
      expect(screen.getByText('Oceanic Brand System')).toBeInTheDocument();
    });
  });

  describe('Dev Projects Page', () => {
    it('renders heading, PixelBlast hero, and dev projects', () => {
      render(
        <ThemeProvider>
          <MemoryRouter>
            <DevProjects />
          </MemoryRouter>
        </ThemeProvider>
      );

      expect(screen.getByRole('heading', { level: 1, name: 'Dev Projects' })).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/Search dev projects/i)).toBeInTheDocument();
      expect(screen.getByText('Real-time Streaming Pipeline')).toBeInTheDocument();
    });

    it('filters projects by search input and clears filter', () => {
      render(
        <ThemeProvider>
          <MemoryRouter>
            <DevProjects />
          </MemoryRouter>
        </ThemeProvider>
      );

      const input = screen.getByPlaceholderText(/Search dev projects/i);
      fireEvent.change(input, { target: { value: 'Pipeline' } });

      expect(screen.getByText('Real-time Streaming Pipeline')).toBeInTheDocument();

      fireEvent.change(input, { target: { value: 'ZeroMatchXYZ' } });
      expect(screen.getByText('No dev projects found')).toBeInTheDocument();
    });
  });
});
