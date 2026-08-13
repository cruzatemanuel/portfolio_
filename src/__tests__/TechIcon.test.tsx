import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TechIcon from '../components/ui/TechIcon';

describe('TechIcon Component', () => {
  it('renders Python icon for Python', () => {
    const { container } = render(<TechIcon name="Python" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders PostgreSQL icon for PostgreSQL', () => {
    const { container } = render(<TechIcon name="PostgreSQL" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders Figma icon for Figma', () => {
    const { container } = render(<TechIcon name="Figma" iconName="figma" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders Docker icon for Docker', () => {
    const { container } = render(<TechIcon name="Docker" iconName="docker" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
