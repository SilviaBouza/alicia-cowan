import { Link } from "react-router-dom";

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

        {/* Marca */}
        <div className={styles.brand}>

          <div className={styles.logo}>
            <span>✚</span>
            <strong>AC</strong>
          </div>

          <h3>
            ALICIA COWAN
          </h3>

          <p className={styles.subtitle}>
            TALLER DE RESTAURACIÓN
            <br />
            Y ARTE SACRO
          </p>

          <div className={styles.decoracion}>
            <span></span>
            <i>✦</i>
            <span></span>
          </div>

          <div className={styles.socials}>

            <a
              href="https://instagram.com/aliciabcowan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/Alicia.Beatriz.Cowan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
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

        {/* Enlaces */}
        <div className={styles.column}>

          <h4>Enlaces</h4>

          <Link to="/#taller">
            El Taller
          </Link>

          <Link to="/servicios">
            Servicios
          </Link>

          <Link to="/obras">
            Obras
          </Link>

          <Link to="/historia">
            Historia
          </Link>

          <Link to="/contacto">
            Contacto
          </Link>

        </div>

        {/* Servicios */}
        <div className={styles.column}>

          <h4>Servicios</h4>

          <span>Restauración de imágenes</span>
          <span>Restauración de esculturas</span>
          <span>Dorado a la hoja</span>
          <span>Policromía</span>
          <span>Réplicas</span>
          <span>Obras por encargo</span>

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
            href="tel:+5491162948947"
          >
            <FaPhoneAlt />
            +54 9 11 6294-8947
          </a>

          <a
            href="mailto:aliciabcowan@gmail.com"
          >
            <FaEnvelope />
            aliciabcowan@gmail.com
          </a>

          <a
            href="https://wa.me/5491162948947"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

        </div>

      </div>

      {/* Pie */}
      <div className={styles.bottom}>

        <p>
          © {year} Alicia Cowan · Taller de Restauración y Arte Sacro.
          Todos los derechos reservados.
        </p>

        <p className={styles.signature}>
          Diseñado con pasión por el arte y el patrimonio.
        </p>

        <button
          className={styles.topButton}
          onClick={scrollTop}
          aria-label="Volver arriba"
        >
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
};

export default Footer;