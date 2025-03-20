import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { SUGGESTIONS } from '@/constants/suggestions';

import styles from './styles.module.scss';

interface ChatMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  inputValue: string;
  onInputChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onInputSendClick: () => void;
  onButtonClick: (action: string) => void;
  isStreaming: boolean;
}

export const ChatMenu: React.FC<ChatMenuProps> = ({
  inputValue,
  onInputChange,
  onInputSendClick,
  onButtonClick,
  isStreaming,
}) => {
  return (
    <div className={styles['menu']}>
      <Input value={inputValue} onChange={onInputChange} onSendClick={onInputSendClick} />

      <div className={styles['menu__buttons']}>
        {SUGGESTIONS.map((item, index) => (
          <Button
            key={index}
            icon={item.icon}
            onClick={() => onButtonClick(item.action)}
            disabled={isStreaming}>
            {item.title}
          </Button>
        ))}
      </div>
    </div>
  );
};
