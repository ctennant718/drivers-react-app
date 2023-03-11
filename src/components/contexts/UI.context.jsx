import React, { createContext, useState } from "react";

export const UIContext = createContext({
  snackbar: {
    isOpen: false,
    message: "success",
    hideDuration: 6000,
    onClose: () => {},
    showMessage: () => {},
  },
});

export const UIProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("info");

  const onClose = () => {
    setOpen(false);
    setMessage("");
    setSeverity("");
  };

  const showMessage = ({ type, string }) => {
    console.log(type, string);
    setOpen(true);
    setMessage(string);
    setSeverity(type);
  };

  return (
    <UIContext.Provider
      value={{
        isOpen: open,
        message,
        hideDuration: 6000,
        onClose,
        showMessage,
        severity,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
