import styles from "./SectionTitle.module.css";

const SectionTitle = ({ subtitle, title, children, center = true }) => {
  return (
    <div
      className={`${styles.container} ${
        center ? styles.center : ""
      }`}
    >
      <span className={styles.subtitle}>
        {subtitle}
      </span>

      <h2 className={styles.title}>
        {title}
      </h2>

      {children && (
        <p className={styles.description}>
          {children}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;