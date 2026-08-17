import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `linear-gradient(rgba(74,20,28,.72), rgba(74,20,28,.72)), url("${heroImg}")` }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>

          <p className={styles.subtitle}>
            Taller Artístico Religioso
          </p>

          <h1>
            Alicia Cowan
          </h1>

          <h2>
            Restauración y creación de arte religioso
          </h2>

          <p className={styles.description}>
            Cada obra recibe un tratamiento artesanal,
            respetando su historia, su significado y su
            valor espiritual.
          </p>

          <div className={styles.buttons}>
            <Link
              to="/obras"
              className={styles.primary}
            >
              Ver obras
            </Link>

            <Link
              to="/contacto"
              className={styles.secondary}
            >
              Contactar
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;