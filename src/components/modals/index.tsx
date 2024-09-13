import React from "react";
import { useReduxSelector } from "../../hooks/useRedux";
import LocationModal from "./modals-item/location-modal";
import LangueaageModal from "./modals-item/langugageModal";
import AuthorizationModal from "./modals-item/authorization-modal";

const Modals = () => {
  const {
    locationModalVisiblity,
    selectlangugageModalVisiblt,
    authorizationModalVisiblity,
  } = useReduxSelector((state) => state.modalSlice);
  return (
    <>
      {locationModalVisiblity && <LocationModal />}
      {selectlangugageModalVisiblt && <LangueaageModal />}
      {authorizationModalVisiblity.open && <AuthorizationModal />}
    </>
  );
};

export default Modals;
