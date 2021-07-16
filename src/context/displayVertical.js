import React, { createContext, useState } from "react";

export const DisplayVerticalContext = createContext();
export const DisplayVerticalProvider = ({ children }) => {
  const [displayVertical, setDisplayVertical] = useState(false);
  const toggleDisplayVertical = () => setDisplayVertical((p) => !p);

  const value = { displayVertical, setDisplayVertical, toggleDisplayVertical };
  return (
    <DisplayVerticalContext.Provider value={value}>
      {children}
    </DisplayVerticalContext.Provider>
  );
};
