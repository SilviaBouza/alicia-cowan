import { Link } from "react-router-dom";
import styles from "./Biografia.module.css";

import historiaInicio from "../assets/historia-inicio.jpg";
import nodarco from "../assets/nodarco.jpg";
import sanFrancisco from "../assets/san-francisco.jpg";
import legado from "../assets/legado.jpg";

const Biografia = () => {
  return (
    <main className={styles.biografia}>

      {/* =========================
          HERO
      ========================= */}

      <section className={styles.hero}>

        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>

          <span>Historia</span>

          <h1>Alicia Cowan</h1>

          <div className={styles.ornamento}>
            <i></i>
            <b>✦</b>
            <i></i>
          </div>

          <p>
            Una vida dedicada a preservar
            <br />
            el arte sacro.
          </p>

        </div>

      </section>


      {/* =========================
          SUS COMIENZOS
      ========================= */}

      <section className={styles.introduccion}>

        <div className={styles.container}>

          <div className={styles.imageBlock}>
            <img
              src={historiaInicio}
              alt="Alicia Cowan trabajando en la restauración de una imagen religiosa"
            />
          </div>

          <div className={styles.textBlock}>

            <span className={styles.etiqueta}>
              Sus comienzos
            </span>

            <h2>
              Nace una vocación
            </h2>

            <div className={styles.linea}></div>

            <p>
              A los 15 años, Alicia Cowan comenzó su camino
              en el arte sacro, iniciándose en un oficio que
              marcaría toda su trayectoria profesional.
            </p>

            <p>
              Su formación estuvo vinculada al maestro Vior,
              referente de la santería de Cofiño, donde adquirió
              conocimientos fundamentales sobre las técnicas
              tradicionales de policromía y restauración.
            </p>

            <p>
              Desde aquellos primeros años desarrolló una mirada
              especialmente sensible hacia las imágenes religiosas,
              comprendiendo que restaurar no significa simplemente
              reparar una pieza, sino recuperar su historia,
              su belleza y su significado.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          NODARCO
      ========================= */}

      <section className={styles.nodarco}>

        <div className={styles.container}>

          <div className={styles.textBlock}>

            <span className={styles.etiqueta}>
              Una trayectoria de excelencia
            </span>

            <h2>
              NODARCO
              <small>1957 — 1981</small>
            </h2>

            <div className={styles.linea}></div>

            <p>
              Durante más de dos décadas, Alicia formó parte
              de NODARCO, desarrollando y perfeccionando sus
              conocimientos dentro de un ámbito dedicado al
              arte religioso.
            </p>

            <p>
              Allí consolidó una trayectoria basada en la
              precisión técnica, la sensibilidad artística
              y el profundo respeto por cada obra.
            </p>

            <p>
              En 1981 continuó su labor en su propio taller,
              llevando consigo una experiencia que se convertiría
              en parte fundamental de su legado.
            </p>

          </div>

          <div className={styles.imageBlock}>

            <img
              src={nodarco}
              alt="Etapa de Alicia Cowan en NODARCO"
            />

            <span className={styles.caption}>
              NODARCO · 1957 — 1981
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          BASÍLICA DE SAN FRANCISCO
      ========================= */}

      <section className={styles.sanFrancisco}>

        <div className={styles.container}>

          <div className={styles.imageBlock}>

            <img
              src={sanFrancisco}
              alt="Restauración de una imagen religiosa de la Basílica de San Francisco"
            />

          </div>

          <div className={styles.textBlock}>

            <span className={styles.etiqueta}>
              1955 · El patrimonio que debía ser recuperado
            </span>

            <h2>
              La Basílica
              <br />
              de San Francisco
            </h2>

            <div className={styles.linea}></div>

            <p>
              El incendio ocurrido en Buenos Aires en 1955
              provocó graves daños en distintos templos
              históricos de la ciudad.
            </p>

            <p>
              La Basílica de San Francisco fue uno de los
              edificios más afectados. Algunas imágenes
              religiosas fueron destruidas por completo,
              mientras que muchas otras quedaron seriamente
              dañadas.
            </p>

            <p>
              A través de su maestría, habilidad y sensibilidad
              artística, Alicia Cowan participó en la recuperación
              de imágenes que pudieron volver a lucir su belleza
              y ocupar nuevamente sus lugares en los altares.
            </p>

            <blockquote>
              Recuperar una obra es también recuperar
              una parte de nuestra memoria.
            </blockquote>

          </div>

        </div>

      </section>


      {/* =========================
          OBRAS DESTACADAS
      ========================= */}

      <section className={styles.obras}>

        <div className={styles.sectionHeader}>

          <span className={styles.etiqueta}>
            Restauraciones destacadas
          </span>

          <h2>
            Obras que forman parte de una trayectoria
          </h2>

          <p>
            Una selección de trabajos y restauraciones
            realizados a lo largo de los años.
          </p>

        </div>

        <div className={styles.obrasGrid}>

          <article>
            <div className={styles.obraPlaceholder}>
              Nuestra Señora
            </div>

            <h3>
              Nuestra Señora del Rosario
            </h3>

            <span>
              San Nicolás · 1991
            </span>
          </article>

          <article>
            <div className={styles.obraPlaceholder}>
              Nuestra Señora
            </div>

            <h3>
              Nuestra Señora del Valle
            </h3>

            <span>
              Catedral de Catamarca · 1984
            </span>
          </article>

          <article>
            <div className={styles.obraPlaceholder}>
              Santa Lucía
            </div>

            <h3>
              Santa Lucía
            </h3>

            <span>
              Barracas
            </span>
          </article>

          <article>
            <div className={styles.obraPlaceholder}>
              San Cosme y San Damián
            </div>

            <h3>
              San Cosme y San Damián
            </h3>

            <span>
              La Boca
            </span>
          </article>

          <article>
            <div className={styles.obraPlaceholder}>
              San José
            </div>

            <h3>
              San José de Flores
            </h3>

            <span>
              Buenos Aires
            </span>
          </article>

          <article>
            <div className={styles.obraPlaceholder}>
              Nuestra Señora de Luján
            </div>

            <h3>
              Réplicas de Nuestra Señora de Luján
            </h3>

            <span>
              42 réplicas
            </span>
          </article>

        </div>

        <Link
          to="/obras"
          className={styles.boton}
        >
          Ver todas las obras
          <strong>→</strong>
        </Link>

      </section>


      {/* =========================
          LEGADO
      ========================= */}

      <section className={styles.legado}>

        <div className={styles.container}>

          <div className={styles.textBlock}>

            <span className={styles.etiqueta}>
              El legado continúa
            </span>

            <h2>
              Una tradición que
              <br />
              sigue viva
            </h2>

            <div className={styles.linea}></div>

            <p>
              Aunque Alicia se encuentra retirada de la actividad,
              su legado continúa a través de un equipo formado
              por profesionales que buscan mantener vivos sus
              conocimientos, su sensibilidad y su compromiso
              con el patrimonio.
            </p>

            <p>
              El trabajo continúa bajo la guía y experiencia
              transmitida a lo largo de los años, conservando
              los valores de excelencia, respeto y dedicación
              que caracterizan al taller.
            </p>

            <ul>
              <li>Francisca Bouza</li>
              <li>Silvia Bouza</li>
              <li>Mauricio Bouza</li>
              <li>Carlos Guillermo Bouza</li>
            </ul>

          </div>

          <div className={styles.imageBlock}>

            <img
              src={legado}
              alt="Taller de restauración y continuidad del legado"
            />

          </div>

        </div>

      </section>


      {/* =========================
          CIERRE
      ========================= */}

      <section className={styles.cierre}>

        <span className={styles.comilla}>
          “
        </span>

        <blockquote>
          Preservar una obra es preservar una historia.
          <br />
          Es honrar el pasado y cuidar para las
          futuras generaciones.
        </blockquote>

        <span className={styles.autor}>
          — Alicia Cowan
        </span>

      </section>


      {/* =========================
          CONTACTO
      ========================= */}

      <section className={styles.cta}>

        <div>

          <span>
            ¿TENÉS UN PROYECTO?
          </span>

          <h2>
            Hablemos sobre cómo
            preservar tu obra.
          </h2>

        </div>

        <Link
          to="/contacto"
          className={styles.ctaButton}
        >
          Contactar
          <strong>→</strong>
        </Link>

      </section>

    </main>
  );
};

export default Biografia;