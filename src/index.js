import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import UserLogin from "./UserLogin";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UserLogin />
  </StrictMode>
);
