import { Link } from "react-router-dom";
import styles from "./About.module.css";
import tallerImg from "../../assets/taller religioso.png";

const About = () => {
  return (
    <section className={styles.about} id="taller">

      <div className={styles.container}>

        <div className={styles.content}>

          <span className={styles.subtitle}>
            El Taller
          </span>

          <h2>
            Arte, técnica y devoción
            <br />
            al servicio del patrimonio
          </h2>

          <div className={styles.line}></div>

          <p>
            Nuestro trabajo combina conocimiento técnico,
            sensibilidad artística y profundo respeto por cada obra.
          </p>

          <p>
            Intervenimos con criterios de conservación rigurosos
            para devolver a cada pieza su belleza original
            y asegurar su legado a las futuras generaciones.
          </p>

          <Link
            to="/historia"
            className={styles.button}
          >
            <span>Conocer nuestra historia</span>
            <strong>→</strong>
          </Link>

        </div>

        <div className={styles.imageWrapper}>

          <img
            src={tallerImg}
            alt="Restauración de una imagen religiosa en el taller"
          />

        </div>

        <aside className={styles.experience}>

          <div className={styles.icon}>
            ✦
          </div>

          <strong className={styles.number}>
            30+
          </strong>

          <span className={styles.years}>
            AÑOS DE TRAYECTORIA
          </span>

          <div className={styles.separator}></div>

          <p>
            CADA OBRA
            <br />
            ES ÚNICA.
            <br />
            CADA DETALLE
            <br />
            IMPORTA.
          </p>

        </aside>

      </div>

    </section>
  );
};

export default About;