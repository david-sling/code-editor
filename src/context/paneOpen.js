import React, { createContext, useState } from "react";

export const PaneOpenContext = createContext();
export const PaneOpenProvider = ({ children }) => {
  const [panelOpen, setPaneOpen] = useState(false);
  const togglePaneOpen = () => setPaneOpen((p) => !p);

  const value = { panelOpen, setPaneOpen, togglePaneOpen };
  return (
    <PaneOpenContext.Provider value={value}>
      {children}
    </PaneOpenContext.Provider>
  );
};
