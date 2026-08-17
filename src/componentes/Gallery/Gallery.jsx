import { Link } from "react-router-dom";
import styles from "./Gallery.module.css";
import obras from "../../data/obras";

const Gallery = () => {
  return (
    <section className={styles.gallery} id="proyectos">

      <div className={styles.container}>

        <div className={styles.heading}>

          <div>
            <span className={styles.subtitle}>
              Proyectos destacados
            </span>

            <div className={styles.titleDecor}>
              <span></span>
            </div>
          </div>

          <Link
            to="/obras"
            className={styles.allLink}
          >
            Ver todos los proyectos
            <span>→</span>
          </Link>

        </div>

        <div className={styles.grid}>

          {obras.map((obra) => (
            <article
              key={obra.id}
              className={styles.card}
            >

              <div className={styles.imageWrapper}>

                <img
                  src={obra.imagen}
                  alt={obra.titulo}
                />

              </div>

              <div className={styles.info}>

                <h3>
                  {obra.titulo}
                </h3>

                <span className={styles.lugar}>
                  {obra.lugar}
                </span>

                <p>
                  {obra.descripcion}
                </p>

                <div className={styles.footerCard}>

                  <span>
                    {obra.tecnica}
                  </span>

                  <button aria-label={`Ver ${obra.titulo}`}>
                    +
                  </button>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Gallery;