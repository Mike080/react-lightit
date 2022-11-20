import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api';

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/products');
      return data;
    } catch (e: any) {
      rejectWithValue(e);
    }
  }
);
