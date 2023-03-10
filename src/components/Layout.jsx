import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <header>
      <h1>My Dogs App</h1>
      <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
