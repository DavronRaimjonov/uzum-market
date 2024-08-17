import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProviderConf from "./tools/provider";
import Root from "./root";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProviderConf>
      <Root />
    </ProviderConf>
  </StrictMode>
);
