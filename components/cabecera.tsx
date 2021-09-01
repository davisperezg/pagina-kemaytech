import styles from "../styles/Cabecera.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Cabecera = () => {
  const [isActiveMenu, setActiveMenu] = useState<boolean>(false);

  const handleMenu = () => setActiveMenu(!isActiveMenu);

  const IraInicio  = () => window.location.href = '/' 


  return (
    <div className={styles.cabecera}>
      <div className={styles.content_logo}>
        <div className={styles.div_logo_title}>
          <div className={styles.logo} onClick={IraInicio}>
            
            <Image
              priority
              src="/images/logo_kemay_antena.png"
              height={50}
              width={58}
              alt="KemayTechnology"
            />
          </div>
          <div className={styles.title_logo}>
            <strong>KEMAYTECHNOLOGY</strong>
          </div>
        </div>
       
        <div className={styles.div_iconbar}>
        <div className={styles.iconbar}>
          <FontAwesomeIcon onClick={handleMenu} size="lg" icon={faBars} />
        </div>
        </div>
      </div>
      {isActiveMenu && (
        <div className={styles.menu_cel}>
          <div className={styles.content_menu_cel}>
            <ul>
              <li className={styles.li_menu_celulares} >
              <Link href="/">
                <a className={styles.menu_celulares}>
                  Inicio
                </a>
                </Link>
              </li>

              <li className={styles.li_menu_celulares}>
                <Link href="/precios">
                  <a className={styles.menu_celulares}>Precios</a>
                </Link>
              </li>
              <li className={styles.li_menu_celulares}>
                <Link href="/contactanos">
                  <a className={styles.menu_celulares}>Contactanos</a>
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
