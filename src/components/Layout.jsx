import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Container from "@mui/system/Container";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { UIContext } from "./contexts/UI.context";
import Alert from "@mui/material/Alert";

function Layout() {
  const {
    isOpen: open,
    severity,
    onClose: handleClose,
    message,
    hideDuration,
  } = useContext(UIContext);

  const action = (props) => {
    console.log(props);
    return (
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  };

  return (
    <>
      <header>
        <h1>My Drivers App</h1>
        <Header />
      </header>
      <main>
        <Container maxWidth="md">
          <Outlet />
        </Container>
      </main>
      <Snackbar
        open={open}
        autoHideDuration={hideDuration}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
          {action}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Layout;
