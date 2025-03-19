import { useEffect, useState } from 'react';
import styles from '@/App.module.scss';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Typography from '@/components/Typography';
import { SUGESTIONS } from '@/constants/button';
import { Message } from '@/components/Message';
import { generateSessionId } from '@/helpers/sessionId';
import { BeatLoader } from 'react-spinners';
import { API_URL } from '@/constants/urls';

function App() {
  const [chat, setChat] = useState<{ type: string; text: string }[]>([]);
  const [sessionId, setSessionId] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [message, setMessage] = useState('');
  const [liveMessage, setLiveMessage] = useState<string[]>([]);

  // Generate sessionId
  useEffect(() => {
    setSessionId(generateSessionId());
  }, []);

  // Save new messages to chat
  useEffect(() => {
    if (!isStreaming && liveMessage.length) {
      setChat((prev) => [...prev, { type: 'ai', text: liveMessage.join('') }]);
      setLiveMessage([]);
    }
  }, [isStreaming, liveMessage]);

  // Send request to AI
  const onSendQuery = async (query: string) => {
    // Save user message
    setChat((prev) => [...prev, { type: 'user', text: query }]);

    setIsStreaming(true);

    try {
      // Make request to AI
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, session_id: sessionId }),
      });

      // Checks for data availability
      if (!response.body) throw new Error('No data stream from server');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      // Decode data and save it in the liveMessage
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = decoder.decode(value);
        const events = text.trim().split('\r\n');
        const type = events[0]?.split(': ')[1];
        const aswear = events[1]?.split(': ')[1];

        if (type === 'chunk' && aswear) {
          setLiveMessage((prev) => [...prev, aswear]);
        } else if (type === 'end') {
          setIsStreaming(false);
        }
      }
    } catch (error) {
      console.error('Error while taking data:', error);
    } finally {
      setIsStreaming(false);
    }
  };

  // Send message from input field
  const onSendMessage = () => {
    if (message && !isStreaming) {
      onSendQuery(message);
      setMessage('');
    }
  };

  return (
    <div className={styles['chat']}>
      {/* AI chat */}
      {chat.length ? (
        <div className={styles['chat__content']}>
          {chat.map((item) =>
            item.type === 'user' ? (
              <Message className={styles['chat__question']} text={item.text} />
            ) : (
              <div className={styles['chat__answear']}>
                <Typography>{item.text}</Typography>
              </div>
            ),
          )}
          {liveMessage.length && isStreaming ? (
            <div className={styles['chat__answear']}>
              <Typography>{liveMessage.join('')}</Typography>
            </div>
          ) : !liveMessage.length && isStreaming ? (
            <BeatLoader color="#a2cff4" />
          ) : (
            ''
          )}
        </div>
      ) : (
        <div className={styles['chat__title']}>
          <Typography variant="h1">How can i help you?</Typography>
        </div>
      )}

      {/* Field for command input and buttons for AI tools */}
      <div className={styles['chat__menu']}>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onSendClick={onSendMessage}
        />
        <div className={styles['chat__buttons']}>
          {SUGESTIONS.map((item, index) => (
            <Button
              key={index}
              icon={item.icon}
              onClick={() => onSendQuery(item.action)}
              disabled={isStreaming}>
              {item.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
