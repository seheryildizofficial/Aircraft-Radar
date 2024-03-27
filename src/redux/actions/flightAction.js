import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Change this line
import { options } from "../../constant";

export const getFlight = createAsyncThunk("flight/getFlight", async () => {
  const res = await axios.request(options);

  const refinedData = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
  }));
  return refinedData;
});
