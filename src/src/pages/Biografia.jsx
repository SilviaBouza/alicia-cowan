import styles from "./Biografia.module.css";
import heroImg from "../assets/hero.png";

const Biografia = () => {
  return (
    <main className={styles.biografia}>
      {/* Hero */}
      <section
        className={styles.hero}
        style={{ backgroundImage: `linear-gradient(rgba(74,20,28,.78), rgba(74,20,28,.78)), url("${heroImg}")` }}
      >
        <div className={styles.overlay}>
          <div className={styles.heroContent}>
            <span className={styles.subtitle}>Legado • Arte • Restauración</span>

            <h1>Alicia Cowan</h1>

            <div className={styles.line}></div>

            <p>
              Más de seis décadas dedicadas a la restauración, policromía y
              conservación del patrimonio religioso argentino.
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className={styles.section}>
        <div className={styles.container}>

          <h2>Una vida dedicada al arte sacro</h2>

          <p>
            Alicia Cowan pertenece a una familia con una profunda tradición
            artística. Tanto su abuelo como su madre fueron pintores, influencia
            que despertó desde muy temprana edad su pasión por las artes
            plásticas y el trabajo artesanal.
          </p>

          <p>
            A los quince años comenzó su formación como aprendiz en una
            tradicional santería, donde recibió las enseñanzas del maestro
            Vior, especialista en policromía de imágenes religiosas egresado
            de la Escuela de Artes y Oficios Pío IX.
          </p>

          <p>
            Allí adquirió los conocimientos que marcarían el inicio de una
            trayectoria excepcional, convirtiéndose con el paso de los años en
            una de las restauradoras más reconocidas del país.
          </p>

        </div>
      </section>

      {/* NODARCO */}
      <section className={styles.altSection}>
        <div className={styles.container}>

          <h2>El nacimiento de NODARCO</h2>

          <p>
            Junto a otros dos socios fundó la histórica casa NODARCO, cuyo
            nombre surgió de la unión de los apellidos Noseda, D'Argenio y
            Cowan.
          </p>

          <p>
            El taller desarrolló su actividad entre 1957 y 1981, siendo un
            referente nacional en imaginería religiosa, restauración y
            policromía.
          </p>

          <p>
            Finalizada esa etapa, Alicia continuó desarrollando su labor en
            forma independiente, consolidando una trayectoria reconocida por
            parroquias, diócesis y congregaciones religiosas de todo el país.
          </p>

        </div>
      </section>

      {/* Restauraciones */}
      <section className={styles.section}>
        <div className={styles.container}>

          <h2>Restauraciones más destacadas</h2>

          <div className={styles.cards}>

            <article className={styles.card}>
              <h3>Basílica de San Francisco</h3>

              <p>
                Restauración de numerosas imágenes dañadas durante el incendio
                ocurrido en 1955, recuperando su policromía y belleza original.
              </p>
            </article>

            <article className={styles.card}>
              <h3>Basílica Nacional de Luján</h3>

              <p>
                Realización de cuarenta y dos réplicas exactas de la imagen de
                Nuestra Señora de Luján durante la administración de los Padres
                Vicentinos.
              </p>
            </article>

            <article className={styles.card}>
              <h3>San Nicolás de los Arroyos</h3>

              <p>
                Restauración y nueva policromía de la imagen de Nuestra Señora
                del Rosario de San Nicolás.
              </p>
            </article>

            <article className={styles.card}>
              <h3>Catedral de Catamarca</h3>

              <p>
                Realización de una réplica procesional de Nuestra Señora del
                Valle respetando fielmente la imagen original.
              </p>
            </article>

            <article className={styles.card}>
              <h3>San José de Flores</h3>

              <p>
                Restauración de la histórica imagen de vestir y elaboración de
                una réplica destinada a las celebraciones religiosas.
              </p>
            </article>

            <article className={styles.card}>
              <h3>Otras obras</h3>

              <p>
                Santa Lucía, Santa Rita, La Dolorosa, San Cosme y San Damián,
                Basílica de la Piedad y numerosas restauraciones distribuidas
                en distintos puntos del país.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* Legado */}
      <section className={styles.altSection}>
        <div className={styles.container}>

          <h2>Un legado que continúa</h2>

          <p>
            Aunque hoy se encuentra retirada de la actividad profesional,
            Alicia Cowan continúa presente en cada trabajo realizado por el
            equipo formado por los hermanos Bouza, quienes heredaron su
            conocimiento, sus técnicas y el compromiso por preservar el
            patrimonio artístico religioso.
          </p>

          <p>
            Francisca del Carmen Bouza, Silvia Marcela Bouza, Mauricio Javier
            Bouza y Carlos Guillermo Bouza desarrollan distintas especialidades
            dentro de la restauración, la policromía, la decoración artística,
            la moldería y los proyectos escultóricos, manteniendo viva una
            tradición artesanal transmitida de generación en generación.
          </p>

        </div>
      </section>

      {/* Cierre */}
      <section className={styles.closing}>
        <div className={styles.container}>

          <h2>Preservando el patrimonio religioso argentino</h2>

          <p>
            La obra de Alicia Cowan trasciende la restauración de imágenes.
            Representa el compromiso con la conservación de un patrimonio
            histórico, artístico y espiritual que forma parte de la identidad
            cultural de nuestro país.
          </p>

        </div>
      </section>

    </main>
  );
};

export default Biografia;