// src/redux/usersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockUsers } from '../mocks/data';

// Keep the async thunk
export const addUser = createAsyncThunk('users/addUser', async (userData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...userData, id: Date.now() });
    }, 500);
  });
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: mockUsers,
    status: 'idle',
    error: null
  },
  reducers: {
    updateUser: (state, action) => {
      const index = state.items.findIndex(u => u.id === action.payload.id);
      if (index >= 0) state.items[index] = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  }
});

// Only export synchronous actions
export const { updateUser } = usersSlice.actions;
export default usersSlice.reducer;