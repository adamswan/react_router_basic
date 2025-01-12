import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";

// 1、导入创建好的 router
import router from "./router/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 2、将 router 实例传递给 RouterProvider */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
