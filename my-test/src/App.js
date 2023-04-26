import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
