import ArrowSvg from '@/assets/images/arrow.svg';

import styles from './styles.module.scss';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className = '',
  ...props
}) => {
  return (
    <div className={styles['input']}>
      <input
        {...props}
        placeholder="Ask something..."
        className={`${styles['input__field']} ${className}`}
      />

      <img src={ArrowSvg} alt="arrow" className={styles['input__icon']} />
    </div>
  );
};
