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
              Proveniente de una familia de artistas plásticos—
              su abuelo y su madre fueron pintores—, Alicia Cowan
              desarrolló desde muy joven una profunda sensibilidad 
              por el arte.
            </p>

            <p>
              Con apenas quince años inició su formación como 
              aprendiz en un reconocido taller de imaginería 
              religiosa perteneciente a la familia Cofiño. 
              Allí aprendió los secretos de la policromía 
              tradicional bajo la enseñanza del maestro Vior, 
              profesor egresado de la Escuela de Artes y 
              Oficios Pío IX de los Salesianos.
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
              Tiempo después fundó, junto con otros dos socios, la casa NODARCO, 
              cuyo nombre surgió de la unión de los apellidos Noseda, D'Argenio y Cowan.
             
              Este taller desarrolló su actividad entre 1957 y 1981, período durante 
              el cual realizó numerosos trabajos de imaginería religiosa y restauración.
              Finalizada esa etapa, Alicia Cowan continuó su labor de manera 
              independiente, consolidando un taller propio que con el tiempo se transformó 
              en un referente dentro del ámbito de la restauración de arte sacro en Argentina.
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
              La experiencia acumulada durante toda una vida 
              fue transmitida a una nueva generación de artesanos.
            </p>

            <p>
              Los hermanos Bouza comenzaron a formarse junto a
              Alicia Cowan desde muy jóvenes, incorporando 
              progresivamente los conocimientos y técnicas que 
              caracterizaron su trabajo.
            </p>

            <p>Con el paso de los años, cada uno desarrolló una
               especialidad dentro del taller —restauración, 
               policromía, decoración, moldería y desarrollo de 
               esculturas—, asegurando la continuidad de un oficio 
               artesanal que requiere paciencia, precisión y 
               profundo respeto por el patrimonio religioso.
            </p>

            <p>Hoy, ese legado permanece vivo, manteniendo los 
              mismos principios de excelencia, dedicación y 
              compromiso que distinguieron la trayectoria de 
              Alicia Cowan desde sus comienzos.
            </p>




            <ul>
              <li>Carlos Guillermo Bouza</li>
              <li>Francisca Bouza</li>
              <li>Silvia Bouza</li>
              <li>Mauricio Bouza</li>
              
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