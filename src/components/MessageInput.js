import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { sendMessage, receiveMessage } from '../store/chatSlice';
import SendIcon from '@mui/icons-material/Send';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const possibleReplies = [
    'This is a simulated reply!',
    'How can I help you today?',
    'Thanks for reaching out!',
    'I appreciate your message!',
    'What else would you like to know?',
    'Feel free to ask anything!',
    'I’m here to assist you!',
  ];

  const handleSend = () => {
    if (message.trim()) {
      dispatch(sendMessage({ text: message }));
      setMessage('');
      const randomReply = possibleReplies[Math.floor(Math.random() * possibleReplies.length)];

      setTimeout(() => {
        dispatch(receiveMessage({ user: 'Suraj', text: randomReply }));
      }, 1000);
    }
  };

  return (
    <Box display="flex" p={2} alignItems="center">
      <TextField
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        variant="outlined"
        sx={{
          marginRight: '10px',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
          backgroundColor: 'rgba(255, 255, 255, 0.5)', 
        }}
      />
      <Button
        variant="contained"
        onClick={handleSend}
        sx={{
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', 
          background: 'linear-gradient(45deg, #FF5722 30%, #FF9800 90%)', 
        }}
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
