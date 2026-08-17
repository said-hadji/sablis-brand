import { useApp } from "./hooks/useApp";

function App() {
  const { name } = useApp()
  return console.log(name);
}

export default App;
