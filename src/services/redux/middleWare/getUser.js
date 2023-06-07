import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";

export const getUser = createAsyncThunk("getUser", async (id) => {
  try {
    const res = await client.get("getUser");
    console.log("i am the id of user" , res.data.data);
    for (let i of res.data.data) {
      if (i._id === id) {
        return i;
      }
    }
  } catch (err) {
    console.log(err);
  }
});
