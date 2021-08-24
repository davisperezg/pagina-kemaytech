import styles from "../styles/Home.module.css";

const Nav = ({ children }: any) => {
  return <nav className={styles.nav_home}>{children}</nav>;
};

export default Nav;
