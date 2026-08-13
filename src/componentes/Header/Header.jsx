import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <h1>Alicia Cowan</h1>
          <span>Artesanía Religiosa</span>
        </Link>

        <nav className={styles.nav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/historia"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Historia
          </NavLink>

          <NavLink
            to="/obras"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Obras
          </NavLink>

          <NavLink
            to="/servicios"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Servicios
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Contacto
          </NavLink>
        </nav>

        <Link to="/contacto" className={styles.button}>
          Solicitar presupuesto
        </Link>
      </div>
    </header>
  );
};

export default Header;