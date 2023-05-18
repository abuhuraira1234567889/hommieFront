import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";

export const getNotification = createAsyncThunk("getNotification", async (id) => {
  try {
    console.log("i am the id",id);
    const res = await client.get(`notification/${id}`);

    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});
