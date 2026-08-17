import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import heroImage from "../../assets/taller religioso.png";

const Hero = () => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url("${heroImage}")` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.container}>

        <div className={styles.content}>

          <span className={styles.eyebrow}>
            TALLER ARTÍSTICO RELIGIOSO
          </span>

          <div className={styles.decoracion}>
            <span></span>
            <i>✦</i>
            <span></span>
          </div>

          <h1>
            Preservamos lo sagrado.
            <br />
            Restauramos{" "}
            <em>historia.</em>
          </h1>

          <p className={styles.description}>
            Más de tres décadas dedicadas a la restauración
            y conservación de imágenes religiosas,
            esculturas y obras de arte sacro.
          </p>

          <div className={styles.buttons}>

            <Link
              to="/obras"
              className={styles.primary}
            >
              Ver obras
              <span>→</span>
            </Link>

            <Link
              to="/#taller"
              className={styles.secondary}
            >
              Conocer el taller
              <span>→</span>
            </Link>

          </div>

        </div>

        <div className={styles.indicadores}>
          <span className={styles.indicadorActivo}>01</span>
          <span>02</span>
          <span>03</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;