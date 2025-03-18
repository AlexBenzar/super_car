import React, { JSX } from 'react';

interface TypographyProps {
  size?: number;
  weight?: number;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({
  size = 14,
  weight = 400,
  children,
  className,
  style,
}) => {
  let Tag: keyof JSX.IntrinsicElements;
  if (size > 50) {
    Tag = 'h1';
  } else if (size > 42) {
    Tag = 'h2';
  } else if (size > 34) {
    Tag = 'h3';
  } else if (size > 26) {
    Tag = 'h4';
  } else if (size > 18) {
    Tag = 'h5';
  } else if (size > 12) {
    Tag = 'p';
  } else {
    Tag = 'h6';
  }

  return (
    <Tag className={className} style={{ fontSize: `${size}px`, fontWeight: weight, ...style }}>
      {children}
    </Tag>
  );
};

export default Typography;
