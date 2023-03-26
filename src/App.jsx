import CardInfo from "./components/CardInfo";
import "./App.css";
import Navbar from "./components/Navbar";
import {  Route, Routes } from "react-router-dom";
import PagePerfil from "./pages/PagePerfil";
function App() {
  return (
    <div className="flex">
      <Navbar />
      <Routes>
        <Route path="/" element={<CardInfo />} />
        <Route path="/perfil" element={<PagePerfil/>} />
      </Routes>
    </div>
  );
}

export default App;
