import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  locationModalVisiblity: boolean;
  selectlangugageModalVisiblt: boolean;
  authorizationModalVisiblity: { open: boolean; loading: boolean };
}
const initialState: InitialStateType = {
  locationModalVisiblity: false,
  selectlangugageModalVisiblt: false,
  authorizationModalVisiblity: { open: false, loading: false },
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setLocationModalVisibility(state) {
      state.locationModalVisiblity = !state.locationModalVisiblity;
    },
    setLangugageModalVisiblt(state) {
      state.selectlangugageModalVisiblt = !state.selectlangugageModalVisiblt;
    },
    setAuthorizationModalVisiblity(state, { payload }) {
      state.authorizationModalVisiblity = payload;
    },
  },
});

export const {
  setLocationModalVisibility,
  setLangugageModalVisiblt,
  setAuthorizationModalVisiblity,
} = modalSlice.actions;
export default modalSlice.reducer;
