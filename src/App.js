import {BrowserRouter} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Desktop } from "./components/desktop/desktop";

function App() {
  return (
    <BrowserRouter>
    <Desktop />
    </BrowserRouter>
  );
}

export default App;
