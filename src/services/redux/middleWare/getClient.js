import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";

export const getClient = createAsyncThunk("getClient", async () => {
  try {
    const res = await client.get("getClient");

    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});
