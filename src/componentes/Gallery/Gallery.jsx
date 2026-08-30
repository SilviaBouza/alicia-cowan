import { Link } from "react-router-dom";
import styles from "./Gallery.module.css";
import obras from "../../data/obras";

const Gallery = () => {
  // Mostramos solamente una selección de proyectos destacados
  const proyectosDestacados = obras.slice(0, 6);

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>

        {/* ENCABEZADO */}
        <div className={styles.heading}>

          <div>
            <span className={styles.subtitle}>
              PROYECTOS DESTACADOS
            </span>

            <div className={styles.titleDecor}>
              <span></span>
            </div>

            <h2 className={styles.title}>
              Una selección de nuestro trabajo
            </h2>

            <p className={styles.introduction}>
              Cada obra refleja el compromiso del taller con la
              restauración, la conservación y el arte sacro,
              respetando la historia y los materiales originales.
            </p>
          </div>

          {/* ENLACE A LA GALERÍA COMPLETA */}
          <Link
            to="/obras"
            className={styles.allLink}
          >
            Ver todas las obras
            <span>→</span>
          </Link>

        </div>

        {/* PROYECTOS DESTACADOS */}
        <div className={styles.grid}>

          {proyectosDestacados.map((obra) => (
            <article
              key={obra.id}
              className={styles.card}
            >

              <div className={styles.imageWrapper}>
                <img
                  src={obra.imagen}
                  alt={obra.titulo}
                  loading="lazy"
                />
              </div>

              <div className={styles.info}>

                <h3>
                  {obra.titulo}
                </h3>

                {obra.lugar && (
                  <span className={styles.lugar}>
                    {obra.lugar}
                  </span>
                )}

                {obra.descripcion && (
                  <p>
                    {obra.descripcion}
                  </p>
                )}

                <div className={styles.footerCard}>

                  <span>
                    {obra.tecnica}
                  </span>

                  <Link
                    to="/obras"
                    className={styles.viewLink}
                    aria-label={`Ver obra ${obra.titulo}`}
                  >
                    →
                  </Link>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* BOTÓN FINAL */}
        <div className={styles.bottomLink}>
          <Link
            to="/obras"
            className={styles.moreButton}
          >
            Explorar todas las obras
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
