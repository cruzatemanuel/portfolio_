import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ThemeProvider } from '../context/ThemeContext';
import Contact from '../routes/Contact';

describe('Contact Page & Stepper Delivery (Phase 7 & 8)', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders two-column layout with heading and social links', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Contact />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { level: 1, name: 'Contact' })).toBeInTheDocument();
    expect(screen.getByText('LinkedIn Profile')).toBeInTheDocument();
    expect(screen.getByText('GitHub Profile')).toBeInTheDocument();
  });

  it('validates required name before allowing step 1 progression', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Contact />
        </MemoryRouter>
      </ThemeProvider>
    );

    const nextBtn = screen.getByRole('button', { name: 'Continue' });
    expect(nextBtn).toBeDisabled();

    const nameInput = screen.getByLabelText(/Step 1 of 4/i);
    fireEvent.change(nameInput, { target: { value: 'Alex' } });
    expect(nextBtn).toBeEnabled();

    fireEvent.click(nextBtn);
    expect(screen.getByLabelText(/Step 2 of 4/i)).toBeInTheDocument();
  });

  it('preserves entered values when navigating backwards', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Contact />
        </MemoryRouter>
      </ThemeProvider>
    );

    const nameInput = screen.getByLabelText(/Step 1 of 4/i);
    fireEvent.change(nameInput, { target: { value: 'Emanuel' } });
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));

    expect(screen.getByLabelText(/Step 2 of 4/i)).toBeInTheDocument();

    const backBtn = screen.getByRole('button', { name: 'Back' });
    fireEvent.click(backBtn);

    expect(screen.getByLabelText(/Step 1 of 4/i)).toHaveValue('Emanuel');
  });

  it('handles Formspree submission success flow', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({}),
    } as Response);

    render(
      <ThemeProvider>
        <MemoryRouter>
          <Contact />
        </MemoryRouter>
      </ThemeProvider>
    );

    // Step 1: Name
    fireEvent.change(screen.getByLabelText(/Step 1 of 4/i), { target: { value: 'Emanuel Cruzat' } });
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));

    // Step 2: Email
    fireEvent.change(screen.getByLabelText(/Step 2 of 4/i), { target: { value: 'emanuel@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));

    // Step 3: Message
    fireEvent.change(screen.getByLabelText(/Step 3 of 4/i), { target: { value: 'Hello, let us build a project!' } });
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));

    // Step 4: Review and Submit
    expect(screen.getByText('Emanuel Cruzat')).toBeInTheDocument();
    expect(screen.getByText('emanuel@example.com')).toBeInTheDocument();

    const submitBtn = screen.getByRole('button', { name: 'Submit Message' });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('Message Sent Successfully!')).toBeInTheDocument();
    });
  });

  it('handles Formspree submission recoverable error state with retry option', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ error: 'Formspree rate limit reached' }),
    } as Response);

    render(
      <ThemeProvider>
        <MemoryRouter>
          <Contact />
        </MemoryRouter>
      </ThemeProvider>
    );

    fireEvent.change(screen.getByLabelText(/Step 1 of 4/i), { target: { value: 'Test User' } });
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));

    fireEvent.change(screen.getByLabelText(/Step 2 of 4/i), { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));

    fireEvent.change(screen.getByLabelText(/Step 3 of 4/i), { target: { value: 'Testing error state' } });
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));

    fireEvent.click(screen.getByRole('button', { name: 'Submit Message' }));

    await waitFor(() => {
      expect(screen.getByText('Delivery Failed')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Retry Submission' })).toBeInTheDocument();
    });
  });
});
