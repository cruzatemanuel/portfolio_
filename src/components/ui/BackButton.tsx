import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import styles from './BackButton.module.css';

interface BackButtonProps {
  label?: string;
  to?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ label = 'Back to Home', to = '/' }) => {
  return (
    <Link to={to} className={styles.backButton} aria-label={label}>
      <ArrowLeft size={15} />
      <span>{label}</span>
    </Link>
  );
};

export default BackButton;
