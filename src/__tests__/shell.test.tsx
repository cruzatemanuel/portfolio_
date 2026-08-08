import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from '../context/ThemeContext';
import Header from '../components/shell/Header';
import Footer from '../components/shell/Footer';
import ContactCTA from '../components/shell/ContactCTA';

describe('Shared Shell Components', () => {
  it('renders Header brand text and navigation links', () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/']}>
          <Header />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('Emanuel Cruzat')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Experience' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });

  it('renders Footer social links and copyright', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByRole('link', { name: 'LinkedIn Profile' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub Profile' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Email Contact' })).toBeInTheDocument();
  });

  it('renders ContactCTA section with call to action button', () => {
    render(
      <MemoryRouter>
        <ContactCTA />
      </MemoryRouter>
    );

    expect(screen.getByText("Let's build scalable systems together.")).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Navigate to Contact page/i })).toBeInTheDocument();
  });
});

