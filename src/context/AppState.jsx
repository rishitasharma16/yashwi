import React, { useState } from "react";
import AppContext from "./AppContext";

function AppState({ children }) {

  const [isDarkMode, setDarkMode] = useState(true)

  return (
  <AppContext.Provider value={{isDarkMode, setDarkMode}}>
    {children}
    </AppContext.Provider>
    );
}

export default AppState;
