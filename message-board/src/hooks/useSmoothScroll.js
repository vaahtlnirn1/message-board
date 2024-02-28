import { useEffect } from 'react';

const useSmoothScroll = (messageContainerRef, messages) => {
  useEffect(() => {
    if (messageContainerRef.current) {
      const container = messageContainerRef.current;
      const scrollHeight = container.scrollHeight;
      container.scrollTo({
        top: scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, messageContainerRef]);
};

export default useSmoothScroll;