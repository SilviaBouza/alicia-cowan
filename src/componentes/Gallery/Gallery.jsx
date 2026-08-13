import styles from "./Gallery.module.css";

import SectionTitle from "../SectionTitle/SectionTitle";

import obras from "../../data/obras";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <div className="container">

        <SectionTitle
          subtitle="Galería"
          title="Obras Destacadas"
        >
          Una selección de trabajos realizados en el taller,
          donde cada obra recibe un tratamiento artesanal
          y personalizado.
        </SectionTitle>

        <div className={styles.grid}>

          {obras.map((obra) => (

            <article
              key={obra.id}
              className={styles.card}
            >

              <img
                src={obra.imagen}
                alt={obra.titulo}
              />

              <div className={styles.info}>

                <h3>{obra.titulo}</h3>

                <p>{obra.descripcion}</p>

                <button>
                  Ver Obra
                </button>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;