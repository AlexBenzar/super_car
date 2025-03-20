import React from 'react';
import { BeatLoader } from 'react-spinners';

import ErrorIcon from '@/assets/images/error.svg';

import { Message } from '@/components/Message';
import Typography from '@/components/Typography';
import { MessageType } from '@/enums/message';
import { ChatType } from '@/types/chat';

import styles from './styles.module.scss';

interface ChatHistoryProps extends React.HTMLAttributes<HTMLDivElement> {
  chat: ChatType[];
  liveMessage: string[];
  isStreaming: boolean;
}

export const ChatHistory: React.FC<ChatHistoryProps> = ({ chat, liveMessage, isStreaming }) => {
  return (
    <div className={styles['history']}>
      {chat.map((item) =>
        item.type === MessageType.USER ? (
          <Message className={styles['history__question']} text={item.text} />
        ) : item.type === MessageType.AI ? (
          <Typography className={styles['history__answear']}>{item.text}</Typography>
        ) : (
          <Typography className={styles['history__error']}>
            <img src={ErrorIcon} alt="error" />
            {item.text}
          </Typography>
        ),
      )}

      {isStreaming &&
        (liveMessage.length ? (
          <Typography className={styles['chat__answear']}>{liveMessage.join('')}</Typography>
        ) : (
          <BeatLoader color="#a2cff4" />
        ))}
    </div>
  );
};
