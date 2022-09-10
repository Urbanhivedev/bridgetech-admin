import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chatMessages: [],
  isLoading: false,
  chatStarted: false,
  selectedChatUser: null,
  message: '',
  error: '',
};

const chatSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    fetchChatsPending: (state) => {
        state.isLoading = true;
        state.error = '';
        state.message = '';
      },
      fetchChatsSuccess: (state, action) => {
        state.isLoading = false;
        state.chatMessages = action.payload;
        state.error = '';
    },
    fetchChatsFailed: (state, { payload }) => {
       state.isLoading = false;
       state.error = payload.errorMessage;
    },
    setCurrentChat: (state, action) => {
       state.chatStarted = true;
       state.selectedChatUser = action.payload;
    },
    clearChat: (state) => {
      return {
        ...initialState,
      };
    },
  },
});

const { actions, reducer } = chatSlice;

export const {
 fetchChatsPending,
 fetchChatsSuccess,
 fetchChatsFailed,
 setCurrentChat,
 clearChat,
} = actions;

export default reducer;


