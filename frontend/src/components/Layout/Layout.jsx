import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CookieConsent from "../ui/CookieConsent/CookieConsent";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.baseContainer}>
      <Header />
      <main className={styles.main}>{children}</main>
      <CookieConsent />
      <Footer />
    </div>
  );
}
