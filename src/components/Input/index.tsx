import ArrowSvg from '@/assets/images/arrow.svg';

import styles from './styles.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSendClick: () => void;
}

export const Input: React.FC<InputProps> = ({ className = '', onSendClick, ...props }) => {
  return (
    <div className={styles['input']}>
      <input
        {...props}
        placeholder="Ask something..."
        className={`${styles['input__field']} ${className}`}
      />

      <img src={ArrowSvg} alt="arrow" className={styles['input__icon']} onClick={onSendClick} />
    </div>
  );
};
