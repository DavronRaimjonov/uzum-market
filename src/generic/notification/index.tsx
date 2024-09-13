import { notification } from "antd";
import React from "react";
type NotificationApiType =
  | "login"
  | "register"
  | "register_error"
  | "login_error";

const useNotificationApi = () => {
  const notify = (type: NotificationApiType) => {
    switch (type) {
      case "login":
        return notification.success({ message: "Muvaffaqiyatli kirdingiz" });
      case "register":
        return notification.success({
          message: "Muvaffaqiyatli ro'yxatdan o'tingiz",
        });
      case "register_error":
        return notification.error({
          message: "Bu foydalanuvchi oldin ro'yxatdan o'tkan",
        });
      case "login_error":
        return notification.error({
          message: "Email yoki parol xato",
        });
      default:
        break;
    }
  };
  return notify;
};

export default useNotificationApi;
