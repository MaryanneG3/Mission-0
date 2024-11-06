import styles from "./homepage.module.css";
import Navbar from "./components/Navbar.jsx";

export default function homepage() {
  return (
    <div className={styles.main}>
      <Navbar />
    </div>
  );
}
