import { Routes, Route } from "react-router-dom";

import Layout from "./componentes/Layout/Layout";

import Home from "./pages/Home";
import Obras from "./pages/Obras";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        {/* INICIO */}
        <Route index element={<Home />} />

        {/* PÁGINAS INDEPENDIENTES */}
        <Route path="obras" element={<Obras />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="contacto" element={<Contacto />} />

      </Route>
    </Routes>
  );
}

export default App;

