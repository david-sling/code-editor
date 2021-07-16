import React, { createContext, useState } from "react";

export const PaneOpenContext = createContext();
export const PaneOpenProvider = ({ children }) => {
  const [paneOpen, setPaneOpen] = useState(false);
  const togglePaneOpen = () => setPaneOpen((p) => !p);

  const value = { paneOpen, setPaneOpen, togglePaneOpen };
  return (
    <PaneOpenContext.Provider value={value}>
      {children}
    </PaneOpenContext.Provider>
  );
};
