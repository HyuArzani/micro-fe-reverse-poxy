import { useState, useEffect } from 'react';
import { postMessage, getMessage } from '../helpers/commons';

export default function usePostMessage() {
  const [responseMessage, setResponseMessage] = useState();

  const receiveMessage = (event: any) => {
    if (event.data?.responseMessage) {
      setResponseMessage(event.data?.responseMessage);
    }
  };

  useEffect(() => {
    window.addEventListener('message', receiveMessage);
    return () => { window.removeEventListener('message', receiveMessage); };
  }, []);

  return {
    responseMessage,
    postMessage,
    getMessage,
  };
}
