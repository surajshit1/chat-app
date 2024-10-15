import React from 'react';
import { Box, Typography, Paper, Avatar } from '@mui/material';

// Color mapping for different users
const userColors = {
  Suraj: '#4CAF50', 
};

const Message = ({ text, user, timestamp, isSent }) => {
  
  const avatarColor = userColors[user] || '#9e9e9e';

  return (
    <Box
      display="flex"
      justifyContent={isSent ? 'flex-end' : 'flex-start'}
      my={1}
    >
      {/* Include Avatar for received messages */}
      {!isSent && (
        <Avatar
          sx={{
            width: 30,
            height: 30,
            marginRight: '10px', // Space between avatar and message
            backgroundColor: avatarColor, // Use user-specific color
          }}
          alt={user}
        >
          {user.charAt(0)} {/* Display the first letter of the username */}
        </Avatar>
      )}
      <Paper
        elevation={3}
        sx={{
          maxWidth: '60%',
          padding: '12px',
          borderRadius: '15px',
          background: isSent
            ? 'linear-gradient(45deg, #007BFF 30%, #00C6FF 90%)'
            : 'linear-gradient(45deg, #e0e0e0 30%, #f5f5f5 90%)', 
          color: isSent ? '#ffffff' : '#000000', 
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', 
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {user}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1rem' }}>
          {text}
        </Typography>
        <Typography variant="caption" sx={{ fontSize: '0.8rem', opacity: 0.7 }}>
          {timestamp}
        </Typography>
      </Paper>
      {/* Avatar for sent messages */}
      {isSent && (
        <Avatar
          sx={{
            width: 30,
            height: 30,
            marginLeft: '10px', // Space between message and avatar
            backgroundColor: avatarColor, // Use user-specific color
          }}
          alt={user}
        >
          {user.charAt(0)} {/* Display the first letter of the username */}
        </Avatar>
      )}
    </Box>
  );
};

export default Message;
