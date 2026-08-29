import styles from "./Taller.module.css";

const Taller = () => {
  return (
    <section className={styles.taller} id="taller">
      {/* Ornamento decorativo lateral */}
      <div className={styles.ornamento}></div>

      <div className={styles.contenedor}>
        {/* =========================
            COLUMNA IZQUIERDA
        ========================== */}
        <div className={styles.contenido}>
          <span className={styles.etiqueta}>EL TALLER</span>

          <h2 className={styles.titulo}>
            Arte, técnica y devoción
            <br />
            al servicio del patrimonio
          </h2>

          <div className={styles.linea}></div>

          <p className={styles.descripcion}>
            Nuestro trabajo combina conocimiento técnico,
            sensibilidad artística y profundo respeto por cada obra.
            Intervenimos con criterios de conservación rigurosos
            para devolver a cada pieza su belleza original
            y asegurar su legado a las futuras generaciones.
          </p>

          <a href="/biografia" className={styles.boton}>
            CONOCER NUESTRA HISTORIA
            <span>→</span>
          </a>
        </div>

        {/* =========================
            COLUMNA DERECHA
        ========================== */}
        <div className={styles.visual}>
          {/* Fotografía */}
          <div className={styles.imagenWrapper}>
            <img
              src="/images/taller.jpg"
              alt="Trabajo de restauración artística religiosa"
              className={styles.imagen}
            />
          </div>

          {/* Panel lateral */}
          <div className={styles.panel}>
            <div className={styles.icono}>
              ✝
            </div>

            <strong className={styles.numero}>30+</strong>

            <span className={styles.trayectoria}>
              AÑOS DE<br />
              TRAYECTORIA
            </span>

            <div className={styles.separador}></div>

            <p>
              CADA OBRA
              <br />
              ES ÚNICA
            </p>

            <p>
              CADA DETALLE
              <br />
              IMPORTA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Taller;