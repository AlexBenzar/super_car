import Typography from '@/components/Typography';

import styles from './styles.module.scss';

interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export const Message: React.FC<MessageProps> = ({ text, ...props }) => {
  return (
    <div className={`${styles['message']} ${props.className}`}>
      <Typography>{text}</Typography>
    </div>
  );
};
