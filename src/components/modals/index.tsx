import React from "react";
import { useReduxSelector } from "../../hooks/useREdux";
import LocationModal from "./modals-item/location-modal";

const Modals = () => {
  const { locationModalVisiblity } = useReduxSelector(
    (state) => state.modalSlice
  );
  return <>{locationModalVisiblity && <LocationModal />}</>;
};

export default Modals;
