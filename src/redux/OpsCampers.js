import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getAllCampers = createAsyncThunk(
  "campers/getAllCampers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/campers?limit=4");
      console.log(response)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
