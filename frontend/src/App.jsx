import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <Logo />
        <Nav />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
