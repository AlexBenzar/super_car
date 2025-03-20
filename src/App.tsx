import { useEffect, useRef, useState } from 'react';

import Typography from '@/components/Typography';
import { ChatMenu } from '@/components/ChatMenu';
import { ChatHistory } from '@/components/ChatHistory';
import { generateSessionId } from '@/helpers/sessionId';
import { EventType, MessageType } from '@/enums/message';
import { ChatType } from '@/types/chat';

import { getAIResponse } from '@/api/ChatApi';

import styles from '@/App.module.scss';

function App() {
  const [chatHistory, setChatHistory] = useState<ChatType[]>([]);
  const [sessionId, setSessionId] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [message, setMessage] = useState('');
  const [liveMessage, setLiveMessage] = useState<string[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  // Generate sessionId
  useEffect(() => {
    setSessionId(generateSessionId());
  }, []);

  // Save new messages to chat
  useEffect(() => {
    if (!isStreaming && liveMessage.length) {
      setChatHistory((prev) => [...prev, { type: MessageType.AI, text: liveMessage.join('') }]);
      setLiveMessage([]);
    }
  }, [isStreaming, liveMessage]);

  // Scroll to the end of the conversation
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [chatHistory]);

  // Send request to AI
  const onSendQuery = async (query: string) => {
    // Save user message
    setChatHistory((prev) => [...prev, { type: MessageType.USER, text: query }]);

    setIsStreaming(true);

    try {
      // Make request to AI
      const response = await getAIResponse(query, sessionId);

      // Checks for data availability
      if (!response.ok || !response.body) {
        return setChatHistory((prev) => [
          ...prev,
          {
            type: MessageType.ERROR,
            text: 'There was an error on the server, please try again later',
          },
        ]);
      }

      await processStream(response.body);
    } catch (error) {
      setChatHistory((prev) => [
        ...prev,
        { type: MessageType.ERROR, text: `an unexpected error occurred: ${error}` },
      ]);
    } finally {
      setIsStreaming(false);
    }
  };

  // Decode data
  const processStream = async (responseBody: ReadableStream<Uint8Array<ArrayBufferLike>>) => {
    const reader = responseBody.getReader();
    const decoder = new TextDecoder();

    // Decode data and save it in the liveMessage
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const text = decoder.decode(value);
      const events = text.trim().split('\r\n');
      const type = events[0]?.split(': ')[1];
      const answear = events[1]?.split(': ')[1];

      if (type === EventType.CHUNK && answear) {
        setLiveMessage((prev) => [...prev, answear]);
      } else if (type === EventType.END) {
        setIsStreaming(false);
      }
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
    <div className={styles['chat']} ref={chatRef}>
      {/* AI chat */}
      {chatHistory.length ? (
        <ChatHistory chat={chatHistory} isStreaming={isStreaming} liveMessage={liveMessage} />
      ) : (
        <Typography variant="h1" className={styles['chat__title']}>
          How can i help you?
        </Typography>
      )}

      {/* Field for command input and buttons for AI tools */}
      <ChatMenu
        inputValue={message}
        onInputChange={(e) => setMessage(e.target.value)}
        onInputSendClick={onSendMessage}
        onButtonClick={(action) => onSendQuery(action)}
        isStreaming={isStreaming}
      />
    </div>
  );
}

export default App;
