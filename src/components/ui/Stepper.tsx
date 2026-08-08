import React, { useState, Children, isValidElement } from 'react';
import { Check } from 'lucide-react';
import styles from './Stepper.module.css';

export interface StepProps {
  children: React.ReactNode;
}

export const Step: React.FC<StepProps> = ({ children }) => {
  return <div className="step-wrapper">{children}</div>;
};

export interface StepperProps {
  initialStep?: number;
  onStepChange?: (step: number) => void;
  onFinalStepCompleted?: () => void;
  backButtonText?: string;
  nextButtonText?: string;
  finalStepButtonText?: string;
  isNextDisabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  initialStep = 1,
  onStepChange,
  onFinalStepCompleted,
  backButtonText = 'Back',
  nextButtonText = 'Continue',
  finalStepButtonText = 'Submit',
  isNextDisabled = false,
  children,
  className = '',
}) => {
  const steps = Children.toArray(children).filter(isValidElement);
  const totalSteps = steps.length;
  const [currentStep, setCurrentStep] = useState(
    Math.max(1, Math.min(initialStep, totalSteps))
  );

  const handleNext = () => {
    if (currentStep < totalSteps) {
      const next = currentStep + 1;
      setCurrentStep(next);
      onStepChange?.(next);
    } else {
      onFinalStepCompleted?.();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      const prev = currentStep - 1;
      setCurrentStep(prev);
      onStepChange?.(prev);
    }
  };

  const progressPercentage = ((currentStep - 1) / Math.max(1, totalSteps - 1)) * 100;

  return (
    <div className={`${styles.stepperContainer} ${className}`}>
      <div className={styles.stepIndicators}>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progressPercentage}%` }} />
        </div>
        {steps.map((_, idx) => {
          const stepNum = idx + 1;
          const isCompleted = stepNum < currentStep;
          const isActive = stepNum === currentStep;

          let nodeClass = styles.stepNode;
          if (isCompleted) nodeClass = `${styles.stepNode} ${styles.completedStepNode}`;
          else if (isActive) nodeClass = `${styles.stepNode} ${styles.activeStepNode}`;

          return (
            <div key={idx} className={nodeClass} aria-label={`Step ${stepNum}`}>
              {isCompleted ? <Check size={18} /> : stepNum}
            </div>
          );
        })}
      </div>

      <div className={styles.stepContent}>
        {steps[currentStep - 1]}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          onClick={handleBack}
          disabled={currentStep === 1}
          className={styles.backBtn}
        >
          {backButtonText}
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={isNextDisabled}
          className={styles.nextBtn}
        >
          {currentStep === totalSteps ? finalStepButtonText : nextButtonText}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
