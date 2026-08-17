import { Routes, Route } from "react-router-dom";

import Layout from "./componentes/Layout/Layout";

import Home from "./pages/Home";
import Biografia from "./pages/Biografia";
import Obras from "./pages/Obras";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";

const App = () => {
  return (
    <Routes>

      <Route element={<Layout />}>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/historia"
          element={<Biografia />}
        />

        <Route
          path="/obras"
          element={<Obras />}
        />

        <Route
          path="/servicios"
          element={<Servicios />}
        />

        <Route
          path="/contacto"
          element={<Contacto />}
        />

      </Route>

    </Routes>
  );
};

export default App;