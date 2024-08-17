import { useQuery } from "react-query";
import { useAxios } from "../useAxios";
interface QueryType {
  pathname: string;
  url: string;
}
export const useQueryHandler = ({ pathname, url }: QueryType) => {
  const axios = useAxios();
  return useQuery(
    pathname,
    () => axios({ url: url }).then((data) => data.data),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: false,
    }
  );
};
