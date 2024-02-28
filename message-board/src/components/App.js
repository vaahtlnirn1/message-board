import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import NavigationPanel from './NavigationPanel/NavigationPanel';
import MessageListPanel from './MessageListPanel/MessageListPanel';
import formatTimestamp from '../utilities/FormatTimeStamp';
import EditorPanel from './EditorPanel/EditorPanel';
import { fetchChannels } from '../api/api';
import '../styles/App.scss';

const App = () => {
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messageContainerRef = useRef();
  const baseURL = 'http://localhost:3001';

  useEffect(() => {
    fetchChannels()
      .then(response => setChannels(response.data))
      .catch(error => console.error('Error fetching channels:', error));
  }, []);

  useEffect(() => {
    if (selectedChannel) {
      axios.get(`${baseURL}/messages/${selectedChannel}`)
        .then(response => setMessages(response.data))
        .catch(error => console.error(`Error fetching messages for ${selectedChannel}:`, error));
    }
  }, [selectedChannel]);

  // Automatic scrolling behavior when overflow happens and new messages appear
  useEffect(() => {
    if (messageContainerRef.current) {
      const container = messageContainerRef.current;
      const scrollHeight = container.scrollHeight;
      container.scrollTo({
        top: scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleChannelSelect = (channel) => {
    setSelectedChannel(channel);
    setNewMessage('');
  };

  const handleNewMessageSubmit = () => {
    if (newMessage && selectedChannel) {
      axios.post(`${baseURL}/${selectedChannel}`, { message: newMessage })
        .then(response => {
          setMessages([...messages, { ...response.data, new: true }]);
        })
        .catch(error => console.error('Error submitting message:', error));
  
      setNewMessage('');
    }
  };

  return (
    <div className="app">
      <NavigationPanel
        channels={channels}
        selectedChannel={selectedChannel}
        handleChannelSelect={handleChannelSelect}
      />
      {selectedChannel && (
        <MessageListPanel
          messages={messages}
          formatTimestamp={formatTimestamp}
          messageContainerRef={messageContainerRef}
        />
      )}
      {selectedChannel && (
        <EditorPanel
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          handleNewMessageSubmit={handleNewMessageSubmit}
        />
      )}
    </div>
  );
};

export default App;