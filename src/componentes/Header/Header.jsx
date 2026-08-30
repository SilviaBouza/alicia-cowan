import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const navigate = useNavigate();

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  const irASeccion = (id) => {
    cerrarMenu();

    // Si ya estamos en Home, hacemos scroll directamente
    if (window.location.pathname === "/") {
      const elemento = document.getElementById(id);

      if (elemento) {
        elemento.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // Si estamos en otra página, primero volvemos a Home
    navigate("/");

    // Esperamos a que Home se renderice
    setTimeout(() => {
      const elemento = document.getElementById(id);

      if (elemento) {
        elemento.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* LOGO */}
        <Link
          to="/"
          className={styles.logo}
          onClick={cerrarMenu}
        >
          <div className={styles.logoMarca}>
            <span className={styles.cruz}>✚</span>
            <span>AC</span>
          </div>

          <div className={styles.logoTexto}>
            <strong>ALICIA COWAN</strong>
            <small>TALLER DE RESTAURACIÓN</small>
            <small>Y ARTE SACRO</small>
          </div>
        </Link>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label={
            menuAbierto
              ? "Cerrar menú"
              : "Abrir menú"
          }
          aria-expanded={menuAbierto}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAVEGACIÓN */}
        <nav
          className={`${styles.nav} ${
            menuAbierto ? styles.navAbierto : ""
          }`}
        >

          {/* INICIO */}
          <NavLink
            to="/"
            end
            onClick={cerrarMenu}
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Inicio
          </NavLink>

          {/* EL TALLER */}
          <button
            type="button"
            className={styles.navButton}
            onClick={() => irASeccion("taller")}
          >
            El Taller
          </button>

          {/* SERVICIOS */}
          <button
            type="button"
            className={styles.navButton}
            onClick={() => irASeccion("servicios")}
          >
            Servicios
          </button>

          {/* OBRAS */}
          <NavLink
            to="/obras"
            onClick={cerrarMenu}
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Obras
          </NavLink>

          {/* PROYECTOS */}
          <button
            type="button"
            className={styles.navButton}
            onClick={() => irASeccion("proyectos")}
          >
            Proyectos
          </button>

          {/* HISTORIA */}
          <button
            type="button"
            className={styles.navButton}
            onClick={() => irASeccion("historia")}
          >
            Historia
          </button>

          {/* CONTACTO */}
          <NavLink
            to="/contacto"
            onClick={cerrarMenu}
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Contacto
          </NavLink>

          {/* CONTACTAR */}
          <Link
            to="/contacto"
            className={styles.button}
            onClick={cerrarMenu}
          >
            Contactar
            <span className={styles.whatsappIcon}>◔</span>
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Header;
