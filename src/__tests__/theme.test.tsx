import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { ThemeProvider, useThemeContext } from '../context/ThemeContext';

const TestComponent: React.FC = () => {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useThemeContext();
  return (
    <div>
      <span data-testid="theme-mode">{theme}</span>
      <span data-testid="resolved-theme">{resolvedTheme}</span>
      <button data-testid="set-dark" onClick={() => setTheme('dark')}>Set Dark</button>
      <button data-testid="set-light" onClick={() => setTheme('light')}>Set Light</button>
      <button data-testid="toggle" onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

describe('ThemeContext System', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('defaults to system theme when no preference is stored', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-mode').textContent).toBe('system');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('persists theme selection to localStorage and updates data-theme attribute', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByTestId('set-dark'));

    expect(screen.getByTestId('theme-mode').textContent).toBe('dark');
    expect(screen.getByTestId('resolved-theme').textContent).toBe('dark');
    expect(localStorage.getItem('emanuel-cruzat-portfolio-theme')).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('toggles theme between light and dark', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByTestId('set-light'));
    expect(screen.getByTestId('resolved-theme').textContent).toBe('light');

    fireEvent.click(screen.getByTestId('toggle'));
    expect(screen.getByTestId('resolved-theme').textContent).toBe('dark');

    fireEvent.click(screen.getByTestId('toggle'));
    expect(screen.getByTestId('resolved-theme').textContent).toBe('light');
  });
});
