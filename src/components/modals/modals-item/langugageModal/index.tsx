import React from "react";
import { Avatar, Modal, Segmented } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setLangugageModalVisiblt } from "../../../../redux/modal-slice";
import { useSegementedApi } from "../../../../generic/segmented-api";

const LangueaageModal = () => {
  const { selectlangugageModalVisiblt } = useReduxSelector(
    (state) => state.modalSlice
  );
  const dispatch = useReduxDispatch();
  const { segmentedApi } = useSegementedApi();
  return (
    <Modal
      onCancel={() => dispatch(setLangugageModalVisiblt())}
      open={selectlangugageModalVisiblt}
    >
      <div className="flex items-center justify-center gap-10 mt-8">
        <Segmented options={segmentedApi()} />
      </div>
    </Modal>
  );
};

export default LangueaageModal;
