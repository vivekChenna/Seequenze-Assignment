import React from "react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import appStore from "./redux/appStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <App />
    <Toaster />
  </Provider>
);

reportWebVitals();
