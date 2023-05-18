import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userid: "",
  catagory:"All",
  search:"",
};
export function setNavBar(value) {
  return value;
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setState: (state, action) => {
      state.userid = action.payload;
    },
    setCatagory: (state, action) => {
      state.catagory = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});
export const {
  setState,
  setCatagory,
  setSign,
  setSearch,
  setToken,
  setSummary,
  setHandler,
  setTwiterData,
  setSideBar,
} = userSlice.actions;
export default userSlice.reducer;
