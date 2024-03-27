import { createSlice } from "@reduxjs/toolkit";
import { getFlight } from "../actions/flightAction";
const initialState = {
  isLoading: false,
  isError: false,
  flights: [],
  trail: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getFlight.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFlight.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(getFlight.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.flights = action.payload;
    });
  },
  reducers: {
    setTrail: (state, action) => {
      const trail = action.payload.map((i) => [i.lat, i.lng]);
      state.trail = trail;
    },
    clear: (state) => {
      state.trail = [];
    },
  },
});
export const { setTrail, clear } = flightSlice.actions;
export default flightSlice.reducer;
