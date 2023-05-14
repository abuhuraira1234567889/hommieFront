import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUser } from '../middleWare/getUser';


const initialState = {
  loading: false,
  error: '',
  getUserData: [],
};

const getUserSlice = createSlice({
  name: 'getComplain',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getUser.fulfilled,
      (state, action) => {
        state.loading = false;

        state.getUserData = action.payload;
      }
    );
  },
});
export default getUserSlice.reducer;