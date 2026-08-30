import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Obras.module.css";
import obras from "../data/obras";

const Obras = () => {
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");

  const categorias = [
    "Todas",
    ...new Set(obras.map((obra) => obra.categoria)),
  ];

  const obrasFiltradas =
    categoriaActiva === "Todas"
      ? obras
      : obras.filter(
          (obra) => obra.categoria === categoriaActiva
        );

  return (
    <main className={styles.obrasPage}>

      {/* ENCABEZADO */}
      <section className={styles.heroObras}>
        <div className={styles.heroContent}>

          <span className={styles.eyebrow}>
            PORTFOLIO
          </span>

          <div className={styles.decoracion}>
            <span></span>
            <i>✦</i>
            <span></span>
          </div>

          <h1>
            Obras
          </h1>

          <p>
            Una selección de trabajos de restauración,
            conservación y arte sacro realizados en el
            taller de Alicia Cowan.
          </p>

        </div>
      </section>

      {/* GALERÍA */}
      <section className={styles.gallerySection}>

        <div className={styles.container}>

          {/* TÍTULO */}
          <div className={styles.heading}>

            <div>
              <span className={styles.subtitle}>
                TRABAJOS REALIZADOS
              </span>

              <h2>
                Restauración, conservación y arte sacro
              </h2>
            </div>

            <Link
              to="/"
              className={styles.backLink}
            >
              ← Volver al inicio
            </Link>

          </div>

          {/* FILTROS */}
          <div className={styles.filters}>

            {categorias.map((categoria) => (
              <button
                key={categoria}
                type="button"
                className={
                  categoriaActiva === categoria
                    ? styles.filterActive
                    : styles.filter
                }
                onClick={() =>
                  setCategoriaActiva(categoria)
                }
              >
                {categoria}
              </button>
            ))}

          </div>

          {/* CONTADOR */}
          <div className={styles.resultsInfo}>
            <span>
              {obrasFiltradas.length}{" "}
              {obrasFiltradas.length === 1
                ? "obra"
                : "obras"}
            </span>
          </div>

          {/* OBRAS */}
          <div className={styles.grid}>

            {obrasFiltradas.map((obra) => (
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

                  <span className={styles.category}>
                    {obra.categoria}
                  </span>

                  <h3>
                    {obra.titulo}
                  </h3>

                  <span className={styles.lugar}>
                    {obra.lugar}
                  </span>

                  <p>
                    {obra.descripcion}
                  </p>

                  <div className={styles.cardFooter}>

                    <span>
                      {obra.tecnica}
                    </span>

                    <span className={styles.arrow}>
                      →
                    </span>

                  </div>

                </div>

              </article>
            ))}

          </div>

          {/* SIN RESULTADOS */}
          {obrasFiltradas.length === 0 && (
            <div className={styles.empty}>
              <p>
                No hay obras disponibles en esta categoría.
              </p>
            </div>
          )}

        </div>

      </section>

    </main>
  );
};

export default Obras;
