import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRequest } from '../middleWare/getRequest';


const initialState = {
  loading: false,
  error: '',
  getRequestData: [],
};

const getRequestSlice = createSlice({
  name: 'getRequest',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRequest.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getRequest.fulfilled,
      (state, action) => {
        state.loading = false;

        state.getRequestData = action.payload;
      }
    );
  },
});
export default getRequestSlice.reducer;