import { useState } from "react";
import { AppContext } from "./AppContext";

export function AppProvider({ children }) {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <AppContext.Provider value={{ isMenu, setIsMenu }}>
      {children}
    </AppContext.Provider>
  );
}
