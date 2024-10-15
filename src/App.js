import React from 'react';
import { Container, Paper, Typography, Box } from '@mui/material';
import { Provider } from 'react-redux';
import store from './store/store';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

const App = () => {
  return (
    <Provider store={store}>
      <Box
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1628683668627-e5458dd3aabc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Wallpaper for the background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            height: '98vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRadius: '20px',
            background: 'rgba(255, 255, 255, 0.15)', 
            backdropFilter: 'blur(10px)', 
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
            padding: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.2)', 
          }}
        >
          <Paper
            elevation={0}
            sx={{
              padding: '20px',
              backgroundColor: 'transparent', 
              boxShadow: 'none',
            }}
          >
            <img
              src="https://th.bing.com/th/id/OIP.D3hRRHYYd9VhmkTU87d3rgHaHa?w=900&h=900&rs=1&pid=ImgDetMain"
              alt="Chat Logo"
              style={{
                width: '20%', 
                maxWidth: '50px', 
                borderRadius: '15px', 
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', 

                 
              }}
            />
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ color: '#ffffff', fontWeight: 700, letterSpacing: '0.1em' }} 
            >
            </Typography>
            <ChatWindow />
            <MessageInput />
          </Paper>
        </Container>
      </Box>
    </Provider>
  );
};

export default App;