import axios from "axios";

interface useAxiosType {
  url: string;
  body?: object;
  method?: "GET" | "POST" | "PUT" | "DELETE";
}

export const useAxios = () => {
  const request = ({ url, body, method = "GET" }: useAxiosType) => {
    return axios({
      url: `${import.meta.env.BASE_URL}/${url}`,
      method,
      data: body,
      headers: {
        Authorization: `jwt ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        "Accsess-Control-Allow-Origin": true,
      },
    });
  };
  return request;
};
