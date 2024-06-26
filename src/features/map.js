import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myLocation: null,
  onlineUsers: [],
  cardChosenOption: null,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMyLocation: (state, action) => {
      state.myLocation = action.payload;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
    removeDisconnectedUser: (state, action) => {
      state.onlineUsers = state.onlineUsers
        .filter((user) => user.socketId !== action.payload);
    },
    setCardChosenOption: (state, action) => {
      state.cardChosenOption = action.payload;
    },
  },
});

export default mapSlice.reducer;
export const { actions } = mapSlice;
