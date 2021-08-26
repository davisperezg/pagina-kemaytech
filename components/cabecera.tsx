import styles from "../styles/Cabecera.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Cabecera = () => {
  const [isActiveMenu, setActiveMenu] = useState<boolean>(false);

  const handleMenu = () => setActiveMenu(!isActiveMenu);

  return (
    <div className={styles.cabecera}>
      <div className={styles.content_logo}>
        <div className={styles.logo}>
          <Image
            priority
            src="/images/logo_kemay_antena.png"
            height={50}
            width={68}
            alt="KemayTechnology"
          />
        </div>
        <div className={styles.title_logo}>Kemaytechnology</div>
        <div className={styles.iconbar}>
          <FontAwesomeIcon onClick={handleMenu} size="lg" icon={faBars} />
        </div>
      </div>
      {isActiveMenu && (
        <div className={styles.menu_cel}>
          <div className={styles.content_menu_cel}>
            <ul>
              <li>
                <Link href="/">
                  <a>Inicio</a>
                </Link>
              </li>
              <li>
                <Link href="/precios">
                  <a>Precios</a>
                </Link>
              </li>
              <li>
                <Link href="/contactanos">
                  <a>Contactanos</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className={styles.content_links}>
        <nav className={styles.nav_content_links}>
          <ul className={styles.content_ul}>
            <li>
              <Link href="/">
                <a>Inicio</a>
              </Link>
            </li>
            <li>
              <Link href="/precios">
                <a>Precios</a>
              </Link>
            </li>
            <li>
              <Link href="/contactanos">
                <a>Contactanos</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Cabecera;
