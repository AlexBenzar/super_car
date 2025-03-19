import { useState } from 'react';
import styles from '@/App.module.scss';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Typography from '@/components/Typography';
import { SUGESTIONS } from '@/constants/button';
import { Message } from '@/components/Message';

function App() {
  const [chat] = useState(true);

  return (
    <div className={styles['chat']}>
      {/* AI chat */}
      {chat ? (
        <div className={styles['chat__content']}>
          <Message className={styles['chat__question']} text="text" />
          <div className={styles['chat__answear']}>
            <Typography>text</Typography>
          </div>
        </div>
      ) : (
        <div className={styles['chat__title']}>
          <Typography variant="h1">How can i help you?</Typography>
        </div>
      )}

      {/* Field for command input and buttons for AI tools */}
      <div className={styles['chat__menu']}>
        <Input />
        <div className={styles['chat__buttons']}>
          {SUGESTIONS.map((item, index) => (
            <Button key={index} icon={item.icon}>
              {item.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
