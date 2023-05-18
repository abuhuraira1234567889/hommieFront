import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getNotification } from '../middleWare/getNotification';

const initialState = {
  loading: false,
  error: '',
  getNotificationData: [],
};

const getNotificationSlice = createSlice({
  name: 'getNotification',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotification.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getNotification.fulfilled,
      (state, action) => {
        state.loading = false;

        state.getNotificationData = action.payload;
      }
    );
  },
});
export default getNotificationSlice.reducer;