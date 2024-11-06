import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div class={styles.logoSection}>
        <img src="#" alt="Company logo" />
        <h2>Company name</h2>
      </div>

      <div class={styles.navLinksContainer}>
        <NavLink className={styles.navlink} to="/">
          Home
        </NavLink>
        <NavLink className={styles.navlink} to="/contact">
          Contact
        </NavLink>
        <NavLink className={styles.navlink} to="/about">
          About us
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
