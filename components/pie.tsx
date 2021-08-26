import styles from "../styles/Pie.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Pie = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_info}>
        {/* cel */}
        <div className={styles.footer_cel}>
          <div className={styles.footer_cel_item}>
            <label>Ubicanos</label>

            <div className={styles.footer_icon_text}>
              <FontAwesomeIcon icon={faMapMarkerAlt} color="white" />
              &nbsp;
              <strong>Perú, Lima</strong>
            </div>
            <span>15136 Huaura, Huacho - Av. Espinar #424</span>
          </div>
          <div className={styles.footer_cel_item}>
            <label>Contactanos</label>
            <div className={styles.footer_icon_text}>
              <FontAwesomeIcon icon={faPhoneAlt} color="white" />
              &nbsp; <span>Tel: +51936680337</span>
            </div>
            <div className={styles.footer_icon_text}>
              <FontAwesomeIcon icon={faEnvelope} color="white" />
              &nbsp; <span>ventas@kemaytechnology.com</span>
            </div>
          </div>
        </div>
        {/* fin cel */}
        <div className={styles.info_one}>
          <label>Ubicanos</label>
          <div className={styles.footer_icon_text}>
            <FontAwesomeIcon icon={faMapMarkerAlt} color="white" />
            &nbsp;
            <strong>Perú, Lima</strong>
          </div>
          <span>15136 Huaura, Huacho - Av. Espinar #424</span>
        </div>
        <div className={styles.info_two}>
          <label>Contactanos</label>
          <div className={styles.footer_icon_text}>
            <FontAwesomeIcon icon={faPhoneAlt} color="white" />
            &nbsp; <span>Tel: +51936680337</span>
          </div>
          <div className={styles.footer_icon_text}>
            <FontAwesomeIcon icon={faEnvelope} color="white" />
            &nbsp; <span>ventas@kemaytechnology.com</span>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by @davisperezg
        </a>
      </div>
    </footer>
  );
};

export default Pie;
