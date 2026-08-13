import { Link } from "react-router-dom";
import styles from "./Biography.module.css";

const Biography = () => {
  return (
    <section className={styles.biography}>
      <div className={styles.container}>

        <span className={styles.subtitle}>
          Legado • Arte • Restauración
        </span>

        <h2>
          Alicia Cowan
        </h2>

        <div className={styles.line}></div>

        <p>
          Más de seis décadas dedicadas a la restauración, policromía y
          conservación de imágenes religiosas convierten a Alicia Cowan en una
          de las artesanas más reconocidas del país.
        </p>

        <p>
          Su trabajo permitió recuperar obras de incalculable valor histórico y
          espiritual pertenecientes a basílicas, catedrales y santuarios de toda
          la Argentina, preservando un patrimonio artístico que continúa
          inspirando generaciones.
        </p>

        <Link
          to="/biografia"
          className={styles.button}
        >
          Conocer su historia
        </Link>

      </div>
    </section>
  );
};

export default Biography;