import styles from "./Card.module.css";

const Card = (props) => {
  const { children, className = "", variant = "default" } = props;
  const variantClassName =
    {
      default: styles.card,
      gray: styles.cardGray,
      dark: styles.cardDark,
    }[variant] || styles.card;
  const classes = [variantClassName, className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
};

export default Card;
