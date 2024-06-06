import React from "react";
import App from "./App";
import "./styles.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashbooard from "./components/dashboard/Dashbooard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashbooard />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
