import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import Message from './Message';

const ChatWindow = () => {
    const messages = useSelector((state) => state.chat.messages);
    const chatRef = useRef(null);
  
    useEffect(() => {
        chatRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
  
    return (
        <Box
            sx={{
                height: '60vh',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                borderRadius: '15px',
                background: 'rgba(255, 255, 255, 0.2)', 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', 
                backdropFilter: 'blur(5px)', 
            }}
        >
            {messages.map((msg, index) => (
                <Message
                    key={index}
                    text={msg.text}
                    user={msg.user}
                    timestamp={msg.timestamp}
                    isSent={msg.isSent}
                />
            ))}
            <div ref={chatRef} />
        </Box>
    );
};

export default ChatWindow;
