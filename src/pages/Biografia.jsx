import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import styles from "./Biografia.module.css";
import tallerImg from "../assets/taller religioso.png";

const Biografia = () => {
  return (
    <section className={styles.cta}>

      <div
        className={styles.background}
        style={{
          backgroundImage: `url("${tallerImg}")`,
        }}
      ></div>

      <div className={styles.overlay}></div>

      <div className={styles.container}>

        {/* Frase */}
        <div className={styles.quote}>

          <span className={styles.comillas}>
            “
          </span>

          <blockquote>
            Restaurar no es solo recuperar una obra,
            es honrar su historia y su propósito.
          </blockquote>

          <span className={styles.autor}>
            — Alicia Cowan
          </span>

        </div>

        {/* Separador */}
        <div className={styles.separator}></div>

        {/* Contacto */}
        <div className={styles.contact}>

          <span className={styles.smallTitle}>
            ¿TENÉS UN PROYECTO?
          </span>

          <h2>
            Hablemos sobre cómo
            podemos ayudarte a
            preservar tu obra.
          </h2>

          <div className={styles.buttons}>

            <Link
              to="/contacto"
              className={styles.button}
            >
              Contactar
            </Link>

            <a
              href="https://wa.me/5491162948947"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsapp}
              aria-label="Contactar por WhatsApp"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Biografia;