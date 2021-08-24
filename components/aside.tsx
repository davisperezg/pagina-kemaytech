import styles from "../styles/Home.module.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Aside = ({ children }: any) => {
  return (
    <aside className={styles.aside_home}>
      {children}

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://api.whatsapp.com/send?phone=51936680337&text=Hola,%20informaci%C3%B3n%20sobre%20GPS%20por%20favor."
      >
        <div className={styles.aside_whats}>
          <FontAwesomeIcon size="2x" icon={faWhatsapp} />
        </div>
      </a>
    </aside>
  );
};

export default Aside;
