import { BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Desktop from "./components/desktop/desktop";
import { GlobalProvider } from "./GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Desktop />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
