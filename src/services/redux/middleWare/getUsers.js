import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";

export const getUsers = createAsyncThunk("getUsers", async () => {
  try {
   
    const res = await client.get("getUser");
    return res.data.data;

   
  } catch (err) {
    console.log(err);
  }
});
