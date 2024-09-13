import React from "react";
import { Form, Input } from "antd";
import { useAxios } from "../../../../../hooks/useAxios";
import useNotificationApi from "../../../../../generic/notification";
import { useReduxSelector } from "../../../../../hooks/useRedux";
import { useDispatch } from "react-redux";
import { setAuthorizationModalVisiblity } from "../../../../../redux/modal-slice";
import { LoadingOutlined } from "@ant-design/icons";
interface FormType {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
const Register = () => {
  const axios = useAxios();
  const notify = useNotificationApi();
  const { authorizationModalVisiblity } = useReduxSelector(
    (state) => state.modalSlice
  );
  const dispatch = useDispatch();
  const submit = (e: FormType) => {
    dispatch(setAuthorizationModalVisiblity({ open: true, loading: true }));
    axios({
      url: "authorization/register",
      method: "POST",
      body: { ...e, user_type: 1, language: "uz" },
    })
      .then(() => {
        notify("register");
        dispatch(
          setAuthorizationModalVisiblity({ open: false, loading: false })
        );
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(
          setAuthorizationModalVisiblity({ open: true, loading: false })
        );
        notify("register_error");
      });
  };
  return (
    <Form onFinish={submit} className="mt-8">
      <Form.Item
        name={"first_name"}
        rules={[{ required: true, message: "Iltimos ismingizni kiriting !" }]}
      >
        <Input
          placeholder="Ismingizni kiriting..."
          className="focus:border-main_color hover:border-main_color border-2 h-10"
        />
      </Form.Item>
      <Form.Item
        name={"last_name"}
        rules={[
          { required: true, message: "Iltimos familyangizni kiriting !" },
        ]}
      >
        <Input
          placeholder="Familyanginzi kiriting..."
          className="focus:border-main_color hover:border-main_color border-2 h-10"
        />
      </Form.Item>
      <Form.Item
        name={"email"}
        rules={[{ required: true, message: "Iltimos emailingzni kiriting !" }]}
      >
        <Input
          placeholder="Emailingzni kiriting..."
          className="focus:border-main_color hover:border-main_color border-2 h-10"
        />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "Iltimos parol kiriting !" }]}
      >
        <Input.Password
          placeholder="Parol kiriting..."
          className="focus:border-main_color hover:border-main_color border-2 h-10"
        />
      </Form.Item>
      <button
        type="submit"
        className="w-full bg-main_color text-[white] h-10 rounded-lg"
        disabled={authorizationModalVisiblity.loading}
      >
        {authorizationModalVisiblity.loading ? (
          <LoadingOutlined />
        ) : (
          " Jo'natmoq"
        )}
      </button>
    </Form>
  );
};

export default Register;
