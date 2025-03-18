import React from 'react';

import Typography from '@/components/Typography';

import './styles.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, icon, ...props }) => {
  return (
    <button {...props} className={`button ${props.className}`}>
      {icon && <img src={icon} alt="icon" />}
      <Typography>{children}</Typography>
    </button>
  );
};
