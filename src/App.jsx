import {} from "react";
import "./App.css";
import Navbar_ from "./components/navbar_";
import "bootstrap/dist/css/bootstrap.min.css";
import { ExplorePage } from "./pages/ExplorePage";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
function App() {
  return (
    <div>
      <Navbar_ />
      <div className="containerforroutes">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Explore" element={<ExplorePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
