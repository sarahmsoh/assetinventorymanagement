// src/redux/assetsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockAssets } from '../mocks/data';

// Keep the async thunk
export const addAsset = createAsyncThunk('assets/addAsset', async (assetData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...assetData, id: Date.now() });
    }, 500);
  });
});

const assetsSlice = createSlice({
  name: 'assets',
  initialState: {
    items: mockAssets,
    status: 'idle',
    error: null
  },
  reducers: {
    updateAsset: (state, action) => {
      const index = state.items.findIndex(a => a.id === action.payload.id);
      if (index >= 0) state.items[index] = action.payload;
    },
    deleteAsset: (state, action) => {
      state.items = state.items.filter(a => a.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAsset.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addAsset.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.push(action.payload);
      });
  }
});

// Only export synchronous actions
export const { updateAsset, deleteAsset } = assetsSlice.actions;
export default assetsSlice.reducer;