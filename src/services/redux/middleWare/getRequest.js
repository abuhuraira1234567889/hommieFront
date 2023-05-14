import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";

export const getRequest = createAsyncThunk("getRequest", async () => {
  try {
    const res = await client.get("getRequest");
    console.log("i am the get request",res.data.data)

    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});
