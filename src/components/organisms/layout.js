import React from "react";

// 例: import Header from "../molecules/Header";

const Layout = ({ children }) => {
  return (
    <div>
      {/* ここにHeaderなどを追加予定 */}
      {/* <Header /> */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
