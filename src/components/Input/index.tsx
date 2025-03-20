import { useEffect, useRef } from 'react';

import ArrowSvg from '@/assets/images/arrow.svg';

import styles from './styles.module.scss';
import { INPUT_MAX_LENGTH } from '@/constants/limits';

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onSendClick: () => void;
}

export const Input: React.FC<InputProps> = ({
  className = '',
  onSendClick,
  onChange,
  ...props
}) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  // Sets the value into span
  useEffect(() => {
    if (spanRef.current) {
      spanRef.current.textContent = props.value as string;
    }
  }, [props.value]);

  // Change input value
  const onSpanInput = (e: React.FormEvent<HTMLSpanElement>) => {
    const textContent = e.currentTarget.textContent || '';

    onChange?.({
      target: { value: textContent },
    } as unknown as React.ChangeEvent<HTMLTextAreaElement>);
  };

  // Send message on Enter click
  const onKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onArrowClick();
    }
  };

  // Send message
  const onArrowClick = () => {
    if (props.value || (props?.value?.toString()?.length || 0) < INPUT_MAX_LENGTH) {
      onSendClick();
    }
  };

  return (
    <div className={styles['input']}>
      <span
        {...props}
        ref={spanRef}
        onInput={onSpanInput}
        onKeyDown={onKeyDown}
        className={`${styles['input__field']} ${className}`}
        role="textbox"
        contentEditable
      />

      <img
        src={ArrowSvg}
        alt="arrow"
        style={{
          opacity: !props.value || props.value.toString().length > INPUT_MAX_LENGTH ? 0.5 : 1,
        }}
        className={styles['input__icon']}
        onClick={onArrowClick}
      />
    </div>
  );
};
