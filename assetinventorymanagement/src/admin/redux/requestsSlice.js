// src/redux/requestsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockRequests } from '../mocks/data';

export const createRequest = createAsyncThunk('requests/create', async (requestData) => {
  return new Promise(resolve => setTimeout(() => {
    resolve({ ...requestData, id: Date.now(), status: 'pending', createdAt: new Date().toISOString() });
  }, 500));
});

export const approveAllRequests = createAsyncThunk('requests/approveAll', async () => {
  return new Promise(resolve => setTimeout(resolve, 500));
});

const requestsSlice = createSlice({
  name: 'requests',
  initialState: {
    items: mockRequests,
    status: 'idle',
    error: null
  },
  reducers: {
    updateRequest: (state, action) => {
      const index = state.items.findIndex(r => r.id === action.payload.id);
      if (index >= 0) state.items[index] = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(approveAllRequests.fulfilled, (state) => {
        state.items = state.items.map(req => ({ ...req, status: 'approved' }));
      });
  }
});

export const { updateRequest } = requestsSlice.actions;
export default requestsSlice.reducer;