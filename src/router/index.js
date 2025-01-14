import Login from "../pages/Login";
import Article from "../pages/Article";
import Layout from "../pages/layout";
import Board from "../pages/Board";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

import { createBrowserRouter, createHashRouter } from "react-router-dom";

// createBrowserRouter --- 使用历史模式
// createHashRouter --- 使用hash模式

// 创建 router 实例，并配置路由规则数组
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/article",
    // path: "/article/:id",
    element: <Article />,
  },

  {
    path: "/any",
    // element 支持 React 组件，也支持直接写 JSX
    element: <div>any</div>,
  },

  // 包含二级路由
  {
    path: "/",
    element: <Layout />,
    children: [
      // 将 board 设置为默认显示的二级路由, 只要移除 path 属性, 添加 index 属性即可
      {
        // path: "board",
        index: true,
        element: <Board />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },

  // 404 Not Found 兜底的路由规则
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
