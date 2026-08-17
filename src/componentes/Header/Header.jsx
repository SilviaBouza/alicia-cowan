import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={cerrarMenu}>
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

        {/* Botón menú móvil */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navegación */}
        <nav
          className={`${styles.nav} ${
            menuAbierto ? styles.navAbierto : ""
          }`}
        >
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

          <Link
            to="/#taller"
            className={styles.link}
            onClick={cerrarMenu}
          >
            El Taller
          </Link>

          <Link
            to="/#servicios"
            className={styles.link}
            onClick={cerrarMenu}
          >
            Servicios
          </Link>

          <NavLink
            to="/obras"
            onClick={cerrarMenu}
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Obras
          </NavLink>

          <Link
            to="/#proyectos"
            className={styles.link}
            onClick={cerrarMenu}
          >
            Proyectos
          </Link>

          <NavLink
            to="/historia"
            onClick={cerrarMenu}
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Historia
          </NavLink>

          <NavLink
            to="/contacto"
            onClick={cerrarMenu}
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Contacto
          </NavLink>

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