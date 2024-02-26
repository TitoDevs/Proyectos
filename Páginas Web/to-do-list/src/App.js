import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Profile from "./pages/Profile";
import Java from "./pages/java/Java";
import Dashboard from "./pages/Dashboard";
import Web from "./pages/Web";
import Android from "./pages/Android";
import Settings from "./pages/Settings";
import Introduccion from "./pages/java/introduccion/Introduccion";
import Configuracion from "./pages/java/configuracion/Configuracion";
import Fundamentos from "./pages/java/fundamentos/Fundamentos";
import Poo from "./pages/java/poo/Poo";
import JavaAvanzado from "./pages/java/java-avanzado/JavaAvanzado";
import PrimerPrograma from "./pages/java/primer-programa/PrimerPrograma";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/java" element={<Java/>} />
          <Route path="/java/introduccion" element={<Introduccion/>}/>
          <Route path="/java/configuracion" element={<Configuracion/>}/>
          <Route path="/java/fundamentos" element={<Fundamentos/>}/>
          <Route path="java/java-avanzado" element={<JavaAvanzado />} />
          <Route path="java/primer-programa" element={<PrimerPrograma />} />
          <Route path="java/poo" element={ <Poo /> }/>
          <Route path="/web" element={<Web/>} />
          <Route path="/android" element={<Android/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
