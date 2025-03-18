import ArrowSvg from '@/img/arrow.svg';

import './styles.scss';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className = '',
  ...props
}) => {
  return (
    <div className="input">
      <input {...props} placeholder="Ask something..." className={`input__field ${className}`} />
      <img src={ArrowSvg} alt="arrow" className="input__icon" />
    </div>
  );
};
