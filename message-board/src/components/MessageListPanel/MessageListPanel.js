import { useEffect } from 'react';

const MessageListPanel = ({ messages, formatTimestamp, messageContainerRef }) => {
  useEffect(() => {
    // Class for new message twinkle/black border effect
    const newMessages = document.querySelectorAll('.new-message');
    newMessages.forEach(message => {
      setTimeout(() => {
        message.classList.remove('new-message');
      }, 4000);
    });
  }, [messages]);

  return (
    <div className="message-list-panel">
      <h2>Messages</h2>
      <div className="message-container" ref={messageContainerRef}>
        <ul>
          {messages.map((message, index) => (
            <li key={index} className={message.new ? 'new-message' : ''}>
              <span className="message-text">{message.text}</span>
              <span className="timestamp">{formatTimestamp(message.timestamp)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MessageListPanel;
