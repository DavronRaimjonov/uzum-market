import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  locationModalVisiblity: boolean;
}
const initialState: InitialStateType = {
  locationModalVisiblity: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setLocationModalVisibility(state) {
      state.locationModalVisiblity = !state.locationModalVisiblity;
    },
  },
});

export const { setLocationModalVisibility } = modalSlice.actions;
export default modalSlice.reducer;
