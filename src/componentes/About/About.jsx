import { Link } from "react-router-dom";
import styles from "./About.module.css";
import tallerImg from "../../assets/taller.png";

const About = () => {
  return (
    <section className={styles.about}>

      {/* Ornamento lateral */}
      <div className={styles.ornament}></div>

      <div className={styles.container}>

        {/* TEXTO */}
        <div className={styles.textContent}>

          <span className={styles.label}>
            EL TALLER
          </span>

          <div className={styles.titleLine}></div>

          <h2>
            Arte, técnica y devoción
            <br />
            al servicio del patrimonio
          </h2>

          <div className={styles.smallLine}></div>

          <p>
            Nuestro trabajo combina conocimiento técnico,
            sensibilidad artística y profundo respeto por cada obra.
            Intervenimos con criterios de conservación rigurosos
            para devolver a cada pieza su belleza original
            y asegurar su legado a las futuras generaciones.
          </p>

          <Link to="/historia" className={styles.button}>
            CONOCER NUESTRA HISTORIA
            <span>→</span>
          </Link>

        </div>

        {/* IMAGEN + PANEL */}
        <div className={styles.visual}>

          <div className={styles.imageWrapper}>
            <img
              src={tallerImg}
              alt="Restauración de una imagen religiosa"
            />
          </div>

          <div className={styles.experience}>

            <div className={styles.icon}>
              ♜
            </div>

            <div className={styles.number}>
              30+
            </div>

            <div className={styles.years}>
              AÑOS DE TRAYECTORIA
            </div>

            <div className={styles.divider}></div>

            <p>
              CADA OBRA
              <br />
              ES ÚNICA.
              <br />
              CADA DETALLE
              <br />
              IMPORTA.
            </p>

            <div className={styles.decorativeSymbol}>
              ✦
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;