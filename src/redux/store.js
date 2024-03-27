import flightSlice from "./slices/flightSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({ reducer: flightSlice });
