import { AppContext } from "./AppContext";

export function AppProvider({ children }) {
  const name = "SABLIS";

  return <AppContext.Provider value={{ name }}>{children}</AppContext.Provider>;
}
