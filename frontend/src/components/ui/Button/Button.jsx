import styles from "./Button.module.css";

const Button = ({
  label,
  icon,
  iconAlt = "",
  onClick,
  type = "button",
  className = "",
  variant = "green",
}) => {
  const variantClass =
    variant === "red"
      ? styles.red
      : variant === "brown"
        ? styles.brown
        : styles.green;
  const hasIcon = Boolean(icon);
  const hasLabel = Boolean(label);

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${variantClass} ${className}`}
    >
      {hasIcon && (
        <img
          className={styles.icon}
          src={icon}
          alt={iconAlt}
          aria-hidden={!iconAlt}
        />
      )}
      {hasLabel && <span className={styles.label}>{label}</span>}
    </button>
  );
};

export default Button;
