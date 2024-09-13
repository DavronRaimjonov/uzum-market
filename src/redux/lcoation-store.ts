import { createSlice } from "@reduxjs/toolkit";
import { getLocal, setLocal } from "../store";

interface LocationType {
  value: string;
}
const initialState: LocationType = {
  value: getLocal("location") || "Toshkent",
};
const locationStore = createSlice({
  initialState,
  name: "Location",
  reducers: {
    changeLocation(state, { payload }) {
      state.value = payload;
      setLocal("location", payload);
    },
  },
});

export const { changeLocation } = locationStore.actions;
export default locationStore.reducer;
