import React from "react";
import { Form, Input } from "antd";
import { useAxios } from "../../../../../hooks/useAxios";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import useNotificationApi from "../../../../../generic/notification";
import { useDispatch } from "react-redux";
import { setAuthorizationModalVisiblity } from "../../../../../redux/modal-slice";
import { useReduxSelector } from "../../../../../hooks/useRedux";
import { LoadingOutlined } from "@ant-design/icons";

const Login = () => {
  const signIn = useSignIn();
  const notify = useNotificationApi();
  const axios = useAxios();
  const dispatch = useDispatch();
  const { authorizationModalVisiblity } = useReduxSelector(
    (state) => state.modalSlice
  );
  const submit = (e: { email: string; password: string }) => {
    dispatch(setAuthorizationModalVisiblity({ open: true, loading: true }));
    axios({ url: "authorization/login", method: "POST", body: { ...e } })
      .then((data) => {
        const { access_token } = data.data.result;
        signIn({
          auth: {
            token: access_token,
            type: "Bearer",
          },
          userState: data.data.result,
        });
        notify("login");
        dispatch(
          setAuthorizationModalVisiblity({ open: false, loading: false })
        );
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(
          setAuthorizationModalVisiblity({ open: true, loading: false })
        );
        notify("login_error");
      });
  };
  return (
    <Form onFinish={submit} className="mt-8">
      <Form.Item
        name={"email"}
        rules={[{ required: true, message: "Iltimos email kiriting !" }]}
      >
        <Input
          placeholder="Emailingizni kiriting..."
          className="focus:border-main_color hover:border-main_color border-2 h-10"
        />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "Iltimos parol kiriting !" }]}
      >
        <Input.Password
          placeholder="Emailingizni kiriting..."
          className="focus:border-main_color hover:border-main_color border-2 h-10"
        />
      </Form.Item>
      <button
        type="submit"
        className="w-full bg-main_color text-[white] h-10 rounded-lg"
      >
        {authorizationModalVisiblity.loading ? (
          <LoadingOutlined />
        ) : (
          "Jo'natmoq"
        )}
      </button>
    </Form>
  );
};

export default Login;
