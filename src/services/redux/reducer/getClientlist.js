import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getClient } from '../middleWare/getClient';


const initialState = {
  loading: false,
  error: '',
  getClientData: [],
};

const getClientSlice = createSlice({
  name: 'getComplain',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getClient.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
        getClient.fulfilled,
      (state, action) => {
        state.loading = false;

        state.getClientData = action.payload;
      }
    );
  },
});
export default getClientSlice.reducer;