import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useReduxDispatch } from "../../../hooks/useRedux";
import { setAuthorizationModalVisiblity } from "../../../redux/modal-slice";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { userType } from "../../../@types";
// import { useIsAuthenticated } from "react-auth-kit";

const NavbarMedium = () => {
  const dispatch = useReduxDispatch();
  const auth: userType | null = useAuthUser();
  const isAuthenticated = useIsAuthenticated();
  // console.log(isAuthenticated, auth);

  const icons_style =
    "flex items-center gap-2 cursor-pointer hover:bg-[#edeff2] py-2 px-3 rounded-[8px]";
  return (
    <nav className="py-4 flex items-center justify-between gap-10">
      <Link to={"/"}>
        <img width={200} src={logo} alt="" />
      </Link>
      <form className="border-[1px] border-[rgba(54,55,64,0.2)] rounded-[4px] w-[60%] h-[36px] flex items-center justify-between gap-6">
        <input
          className="outline-none pl-4 w-[80%]"
          type="text"
          placeholder="Mahsulot va turkumlar izlash"
        />
        <button className="border-none w-[10%] bg-[#edeff2] h-full text-[14px] font-normal">
          <SearchOutlined className="text-[#4D4F59] text-[20px]" />
        </button>
      </form>
      <div className="flex items-center  gap-3">
        <div
          onClick={() =>
            dispatch(
              setAuthorizationModalVisiblity({ open: true, loading: false })
            )
          }
          className={`${icons_style}`}
        >
          <UserOutlined className="text-[19px]" />
          <p>{isAuthenticated ? auth?.first_name : "Kirish"}</p>
        </div>
        <div className={`${icons_style}`}>
          <HeartOutlined className="text-[19px]" />
          <p>Saralangan</p>
        </div>
        <div className={`${icons_style}`}>
          <ShoppingOutlined className="text-[19px]" />
          <p>Savat</p>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMedium;
