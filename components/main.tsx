import styles from "../styles/Home.module.css";

const Main = ({ children }: any) => {
  return <main className={styles.main_home}>{children}</main>;
};

export default Main;
