import styles from "./Button.module.css";

function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${
        variant === "primary"
          ? styles.primary
          : styles.outline
      }`}
    >
      {children}
    </button>
  );
}

export default Button;