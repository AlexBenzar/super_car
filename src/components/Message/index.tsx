import Typography from '@/components/Typography';

import './styles.scss';

interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export const Message: React.FC<MessageProps> = ({ text, ...props }) => {
  return (
    <div className={`message ${props.className}`}>
      <Typography>{text}</Typography>
    </div>
  );
};
