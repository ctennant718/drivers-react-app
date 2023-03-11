import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Container from "@mui/system/Container";

function Layout() {
  return (
    <>
      <header>
        <h1>My Dogs App</h1>
        <Header />
      </header>
      <main>
        <Container maxWidth="md">
          <Outlet />
        </Container>
      </main>
    </>
  );
}

export default Layout;
