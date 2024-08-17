import { Modal } from "antd";
import React from "react";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useREdux";
import { setLocationModalVisibility } from "../../../../redux/modal-slice";

const LocationModal = () => {
  const { locationModalVisiblity } = useReduxSelector(
    (state) => state.modalSlice
  );
  const dispatch = useReduxDispatch();
  const closeModal = () => {
    dispatch(setLocationModalVisibility());
  };
  return (
    <Modal
      footer={false}
      open={locationModalVisiblity}
      onCancel={closeModal}
      width={"40%"}
    >
      <div className="text-center pt-4 pb-7 font-medium text-text_color">
        <h1 className="text-[24px]">Yetkazish berish shahrini koʻrsating</h1>
        <h3 className="text-[18px] pt-4">
          Oʻzbekiston 146 ta shahriga ertasi kun bepul yetkazib berish:
        </h3>
      </div>
      <form>
        <input
          type="text"
          placeholder="Shaharni topish"
          className="border outline-none w-full border-[#C8CACE] rounded-sm h-[40px] pl-4 bg-[#EDEFF2]"
        />
      </form>
      <div className="grid grid-cols-2 gap-8 mt-7">
        <div className="border-b w-full pl-2 border-[#C8CACE] text-text_color text-[18px] font-light font-roboto cursor-pointer">
          Angren
        </div>
        <div className="border-b w-full pl-2 border-[#C8CACE] text-text_color text-[18px] font-light font-roboto cursor-pointer">
          Angren
        </div>
      </div>
    </Modal>
  );
};

export default LocationModal;
