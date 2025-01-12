import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div>我是Layout，一级路由</div>

      <br />

      {/* 看板, 他是默认显示的二级路由 */}
      <Link to="/">显示--看板--board</Link>

      <br />
      
      {/* 关于 */}
      <Link to="/about">显示--关于--about</Link>

      {/* 二级路由的出口 */}
      <Outlet />
    </div>
  );
}

export default Layout;
