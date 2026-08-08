import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from '../context/ThemeContext';
import DevProjects from '../routes/DevProjects';

describe('Project Listing Pages (Phase 6)', () => {
  describe('Dev Projects Page', () => {
    it('renders heading and dev projects', () => {
      render(
        <ThemeProvider>
          <MemoryRouter>
            <DevProjects />
          </MemoryRouter>
        </ThemeProvider>
      );

      expect(screen.getByRole('heading', { level: 1, name: 'Projects' })).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/Search projects/i)).toBeInTheDocument();
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

      const input = screen.getByPlaceholderText(/Search projects/i);
      fireEvent.change(input, { target: { value: 'Pipeline' } });

      expect(screen.getByText('Real-time Streaming Pipeline')).toBeInTheDocument();

      fireEvent.change(input, { target: { value: 'ZeroMatchXYZ' } });
      expect(screen.getByText('No dev projects found')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Clear search filter' })).toBeInTheDocument();

      fireEvent.click(screen.getByRole('button', { name: 'Clear search filter' }));
      expect(screen.getByText('Real-time Streaming Pipeline')).toBeInTheDocument();
    });
  });
});

