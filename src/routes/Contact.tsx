import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, CheckCircle2, AlertCircle } from 'lucide-react';
import { portfolioContent } from '../content';
import ShinyText from '../components/ui/ShinyText';
import Stepper, { Step } from '../components/ui/Stepper';
import styles from '../components/contact/ContactPage.module.css';

export interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const { profile } = portfolioContent;

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    message: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Email format validation (RFC 5322 regex pattern)
  const isValidEmail = (emailStr: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailStr.trim());
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Step progress validation checks
  const isStep1Valid = formData.fullName.trim().length >= 2;
  const isStep2Valid = isValidEmail(formData.email);
  const isStep3Valid = formData.message.trim().length >= 5;

  const isCurrentNextDisabled = () => {
    if (currentStep === 1) return !isStep1Valid;
    if (currentStep === 2) return !isStep2Valid;
    if (currentStep === 3) return !isStep3Valid;
    return false;
  };

  const handleFormSubmit = async () => {
    setSubmissionStatus('sending');
    setErrorMessage('');

    const formspreeEndpoint =
      import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/placeholder';

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to send message via Formspree.');
      }
    } catch (err: unknown) {
      const errorText = err instanceof Error ? err.message : 'A network error occurred. Please try again.';
      setSubmissionStatus('error');
      setErrorMessage(errorText);
    }
  };

  return (
    <div className={styles.contactContainer}>
      <section aria-label="Contact Page">
        <div className={styles.twoColumnGrid}>
          {/* Left Column: Intro Bio & Social Details */}
          <div className={styles.leftColumn}>
            <div>
              <ShinyText text="Get in touch" color="var(--color-accent)" />
            </div>
            <h1 className={styles.heading}>Contact</h1>
            <p className={styles.subheading}>
              Have a design project, a data engineering initiative, or a collaboration idea? Send a message through the form or connect directly via social media.
            </p>

            <div className={styles.portraitWrapper}>
              <img
                src={profile.portraitUrl}
                alt={profile.portraitAlt}
                className={styles.portraitImage}
              />
            </div>

            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <Mail size={18} className={styles.detailIcon} />
                <span>{profile.socials.email.replace('mailto:', '')}</span>
              </div>
              <div className={styles.detailItem}>
                <Linkedin size={18} className={styles.detailIcon} />
                <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </div>
              <div className={styles.detailItem}>
                <Github size={18} className={styles.detailIcon} />
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </div>
              <div className={styles.detailItem}>
                <Instagram size={18} className={styles.detailIcon} />
                <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram Profile
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-step Stepper Form */}
          <div className={styles.rightColumn}>
            {submissionStatus === 'sending' && (
              <div className={styles.statusBanner} aria-live="polite">
                <div className={styles.spinner} />
                <h2 className={styles.statusTitle}>Sending your message...</h2>
                <p className={styles.statusText}>Please wait while your inquiry is delivered.</p>
              </div>
            )}

            {submissionStatus === 'success' && (
              <div className={styles.statusBanner} aria-live="polite">
                <CheckCircle2 size={48} className={styles.successIcon} />
                <h2 className={styles.statusTitle}>Message Sent Successfully!</h2>
                <p className={styles.statusText}>
                  Thank you, {formData.fullName}. Your message has been sent. I will get back to you shortly at {formData.email}.
                </p>
              </div>
            )}

            {submissionStatus === 'error' && (
              <div className={styles.statusBanner} aria-live="assertive">
                <AlertCircle size={48} className={styles.errorIcon} />
                <h2 className={styles.statusTitle}>Delivery Failed</h2>
                <p className={styles.statusText}>
                  {errorMessage || 'Unable to submit form. Please check your network connection and try again.'}
                </p>
                <button onClick={handleFormSubmit} className={styles.retryBtn}>
                  Retry Submission
                </button>
              </div>
            )}

            {submissionStatus === 'idle' && (
              <Stepper
                initialStep={currentStep}
                onStepChange={(step) => setCurrentStep(step)}
                onFinalStepCompleted={handleFormSubmit}
                isNextDisabled={isCurrentNextDisabled()}
                finalStepButtonText="Submit Message"
              >
                {/* Step 1: Full Name */}
                <Step>
                  <div className={styles.fieldGroup}>
                    <label htmlFor="fullName" className={styles.fieldLabel}>
                      Step 1 of 4: What is your full name?
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className={styles.textInput}
                      autoFocus
                    />
                    {!isStep1Valid && formData.fullName.length > 0 && (
                      <span className={styles.errorText}>Please enter at least 2 characters.</span>
                    )}
                  </div>
                </Step>

                {/* Step 2: Email Address */}
                <Step>
                  <div className={styles.fieldGroup}>
                    <label htmlFor="email" className={styles.fieldLabel}>
                      Step 2 of 4: What is your email address?
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="e.g. sarah@example.com"
                      className={styles.textInput}
                      autoFocus
                    />
                    {!isStep2Valid && formData.email.length > 0 && (
                      <span className={styles.errorText}>Please enter a valid email address.</span>
                    )}
                  </div>
                </Step>

                {/* Step 3: Message */}
                <Step>
                  <div className={styles.fieldGroup}>
                    <label htmlFor="message" className={styles.fieldLabel}>
                      Step 3 of 4: How can I help you?
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Describe your design, data engineering project, or inquiry..."
                      className={styles.textareaInput}
                      autoFocus
                    />
                    {!isStep3Valid && formData.message.length > 0 && (
                      <span className={styles.errorText}>Please enter a message (min. 5 characters).</span>
                    )}
                  </div>
                </Step>

                {/* Step 4: Review and Submit */}
                <Step>
                  <div className={styles.fieldGroup}>
                    <span className={styles.fieldLabel}>Step 4 of 4: Review your details before sending</span>
                    <div className={styles.reviewCard}>
                      <div className={styles.reviewItem}>
                        <span className={styles.reviewKey}>Full Name</span>
                        <span className={styles.reviewVal}>{formData.fullName}</span>
                      </div>
                      <div className={styles.reviewItem}>
                        <span className={styles.reviewKey}>Email Address</span>
                        <span className={styles.reviewVal}>{formData.email}</span>
                      </div>
                      <div className={styles.reviewItem}>
                        <span className={styles.reviewKey}>Message</span>
                        <span className={styles.reviewVal}>{formData.message}</span>
                      </div>
                    </div>
                  </div>
                </Step>
              </Stepper>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
