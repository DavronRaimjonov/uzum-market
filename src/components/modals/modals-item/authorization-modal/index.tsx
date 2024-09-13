import { Modal } from "antd";
import React, { useState } from "react";
import {
  useReduxDispatch,
  useReduxSelector,
} from "../../../../hooks/useRedux/index";
import Login from "./login";
import Register from "./register";
import { setAuthorizationModalVisiblity } from "../../../../redux/modal-slice";
const AuthorizationModal = () => {
  const { authorizationModalVisiblity } = useReduxSelector(
    (state) => state.modalSlice
  );
  const dispatch = useReduxDispatch();
  const [active_color, setActiveColor] = useState<boolean>(true);
  return (
    <Modal
      footer={false}
      open={authorizationModalVisiblity.open}
      onCancel={() =>
        dispatch(
          setAuthorizationModalVisiblity({ open: false, loading: false })
        )
      }
    >
      <div className="flex items-center justify-center gap-4 ">
        <button
          className={`text-[18px] ${active_color && "text-main_color"}`}
          onClick={() => setActiveColor(!active_color)}
        >
          Login
        </button>
        <div>|</div>
        <button
          className={`text-[18px] ${!active_color && "text-main_color"}`}
          onClick={() => setActiveColor(!active_color)}
        >
          Register
        </button>
      </div>

      {active_color ? <Login /> : <Register />}
    </Modal>
  );
};

export default AuthorizationModal;
