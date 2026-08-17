import { NavLink } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaTiktok,
  FaArrowUp,
} from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Información */}
        <div className={styles.column}>
          <h3>Alicia Cowan</h3>

          <p>
            Restauración, conservación y creación de arte
            religioso, respetando la historia y el valor
            artístico de cada obra.
          </p>

          <div className={styles.socials}>
          <a
            href="https://www.facebook.com/Alicia.Beatriz.Cowan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://instagram.com/aliciabcowan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.pinterest.com/aliciabcowan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
          >
            <FaPinterestP />
          </a>

          <a
            href="https://www.tiktok.com/@ali.cowan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
        </div>
                </div>

        {/* Navegación */}
        <div className={styles.column}>
          <h4>Navegación</h4>

          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/historia">Historia</NavLink>
          <NavLink to="/obras">Obras</NavLink>
          <NavLink to="/servicios">Servicios</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </div>

        {/* Servicios */}
        <div className={styles.column}>
          <h4>Servicios</h4>

          <span>Restauración</span>
          <span>Conservación</span>
          <span>Escultura</span>
          <span>Pintura</span>
          <span>Dorado</span>
        </div>

        {/* Contacto */}
        <div className={styles.column}>
          <h4>Contacto</h4>

          <p>
            <FaMapMarkerAlt />
            Dean Funes 1154
            <br />
            Buenos Aires, Argentina
          </p>


          <a
            href="https://wa.me/+5491162948947"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
            +54911 6294-8947
          </a>

          <a href="mailto:aliciabcowan@gmail.com">
            <FaEnvelope />
            aliciabcowan@gmail.com
          </a>
        </div>

      </div>

      {/* Parte inferior */}
      <div className={styles.bottom}>
        <p>
          © {year} Alicia Cowan · Todos los derechos reservados
        </p>

        <button
          className={styles.topButton}
          onClick={scrollTop}
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
