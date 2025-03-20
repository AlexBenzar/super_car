import React, { JSX } from 'react';

import styles from './styles.module.scss';

interface TypographyProps {
  variant?: 'h1' | 'p';
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant = 'p', className = '', children }) => {
  const Tag = variant as keyof JSX.IntrinsicElements;
  return <Tag className={`${styles[variant]} ${className}`}>{children}</Tag>;
};

export default Typography;
