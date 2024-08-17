import React from "react";
import flag_uz from "../../../assets/svg/flag_uz.svg";
import { EnvironmentOutlined } from "@ant-design/icons";
import { useReduxDispatch } from "../../../hooks/useREdux";
import { setLocationModalVisibility } from "../../../redux/modal-slice";
const NavbarTop = () => {
  const dispatch = useReduxDispatch();
  return (
    <nav className="w-[85%] m-auto flex items-center justify-between">
      <nav className="flex items-center gap-3 ">
        <EnvironmentOutlined className="cursor-pointer" />
        <h3 className="font-normal text-[14px] text-text_color">
          Shahar:{" "}
          <span
            onClick={() => dispatch(setLocationModalVisibility())}
            className="underline cursor-pointer text-[15px] font-medium text-text_color"
          >
            Toshekent
          </span>
        </h3>
        <h3 className="cursor-pointer text-[15px] font-medium pl-3 text-text_color">
          Topshirish punktlari
        </h3>
      </nav>
      <nav className="flex items-center gap-4">
        <a
          className="text-[#7000ff] font-medium text-[14px]"
          href="https://seller.uzum.uz/uz?utm_source=uzum_market_main&utm_medium=web&utm_campaign=header_link"
        >
          Uzumda soting
        </a>
        <h3 className="font-medium text-[#4d4f59] text-[14px] cursor-pointer">
          Savol-javoblar
        </h3>
        <h3 className="font-medium text-[#4d4f59] text-[14px] cursor-pointer">
          Buyurtmalarim
        </h3>
        <button className="flex items-center gap-2 ml-5">
          <img src={flag_uz} alt="" /> O'zbekcha
        </button>
      </nav>
    </nav>
  );
};

export default NavbarTop;
