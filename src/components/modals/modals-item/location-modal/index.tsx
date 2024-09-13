import { Modal } from "antd";
import React from "react";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setLocationModalVisibility } from "../../../../redux/modal-slice";
import { locationData } from "../../../../utils";
import { LocationType } from "../../../../@types";
import { changeLocation } from "../../../../redux/lcoation-store";

const LocationModal = () => {
  const { locationModalVisiblity } = useReduxSelector(
    (state) => state.modalSlice
  );
  const dispatch = useReduxDispatch();

  return (
    <Modal
      footer={false}
      open={locationModalVisiblity}
      onCancel={() => dispatch(setLocationModalVisibility())}
      width={"600px"}
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
        {locationData.map((value: LocationType) => (
          <div
            onClick={() => {
              dispatch(changeLocation(value.title));
              dispatch(setLocationModalVisibility());
            }}
            key={value.id}
            className="border-b w-full pl-2 border-[#C8CACE] text-text_color text-[18px] font-light font-roboto cursor-pointer hover:bg-[#EDEFF2]"
          >
            {value.title}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default LocationModal;
