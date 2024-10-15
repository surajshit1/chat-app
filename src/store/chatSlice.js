import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  currentUser: 'Aman', 
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        user: state.currentUser,
        text: action.payload.text,
        timestamp: new Date().toLocaleTimeString(),
        isSent: true,
      });
    },
    receiveMessage: (state, action) => {
      state.messages.push({
        user: action.payload.user,
        text: action.payload.text,
        timestamp: new Date().toLocaleTimeString(),
        isSent: false,
      });
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
