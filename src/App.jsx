import { Routes, Route } from "react-router-dom";

import Layout from "./componentes/Layout/Layout";

import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Obras from "./pages/Obras";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Biografia from "./pages/Biografia";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="historia" element={<Historia />} />
        <Route path="obras" element={<Obras />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="biografia" element={<Biografia />} />
      </Route>
    </Routes>
  );
}

export default App;