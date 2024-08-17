import React, { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ConfigProvider } from "antd";
import { store as store_item } from "../../config/auth-provider/store";
import AuthProvider from "react-auth-kit/AuthProvider";
import Modals from "../../components/modals";

interface PropChildren {
  children: React.ReactNode;
}

const ProviderConf: FC<PropChildren> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <AuthProvider store={store_item}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <ConfigProvider>
              <Modals />
              {children}
            </ConfigProvider>
          </QueryClientProvider>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default ProviderConf;
