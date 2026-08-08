import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ShinyText from '../components/ui/ShinyText';
import ClickSpark from '../components/ui/ClickSpark';
import GradualBlur from '../components/ui/GradualBlur';
import SpecularButton from '../components/ui/SpecularButton';
import ChromaGrid from '../components/ui/ChromaGrid';
import PixelBlast from '../components/ui/PixelBlast';
import Stepper, { Step } from '../components/ui/Stepper';
import { portfolioContent } from '../content';

describe('Referenced UI Components (Phase 4)', () => {
  it('renders ShinyText component with text prop', () => {
    render(<ShinyText text="Graphic Designer" />);
    expect(screen.getByText('Graphic Designer')).toBeInTheDocument();
  });

  it('renders ClickSpark container with children', () => {
    render(
      <ClickSpark>
        <div>Click Area</div>
      </ClickSpark>
    );
    expect(screen.getByText('Click Area')).toBeInTheDocument();
  });

  it('renders GradualBlur overlay layer', () => {
    const { container } = render(<GradualBlur position="top" height="4rem" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders SpecularButton with label text', () => {
    render(<SpecularButton size="lg">Download Résumé</SpecularButton>);
    expect(screen.getByText('Download Résumé')).toBeInTheDocument();
  });

  it('renders ChromaGrid with project records', () => {
    render(<ChromaGrid items={portfolioContent.projects} />);
    expect(screen.getByText(portfolioContent.projects[0].title)).toBeInTheDocument();
  });

  it('renders PixelBlast canvas background wrapper', () => {
    const { container } = render(<PixelBlast color="#0071e3" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders Stepper with active step content', () => {
    render(
      <Stepper>
        <Step>
          <div>Step 1 Content</div>
        </Step>
        <Step>
          <div>Step 2 Content</div>
        </Step>
      </Stepper>
    );
    expect(screen.getByText('Step 1 Content')).toBeInTheDocument();
    expect(screen.getByText('Continue')).toBeInTheDocument();
  });
});
