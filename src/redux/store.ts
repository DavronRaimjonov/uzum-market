import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal-slice";
import locationStore from "./lcoation-store";
export const store = configureStore({
  reducer: {
    modalSlice,
    locationStore,
  },
});
export type RootStore = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
