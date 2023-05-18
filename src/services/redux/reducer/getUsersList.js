import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUsers } from '../middleWare/getUser';


const initialState = {
  loading: false,
  error: '',
  getUsersData: [],
};

const getUsersSlice = createSlice({
  name: 'getUsers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getUsers.fulfilled,
      (state, action) => {
        state.loading = false;

        state.getUsersData = action.payload;
      }
    );
  },
});
export default getUsersSlice.reducer;