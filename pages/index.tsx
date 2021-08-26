/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Aside from "../components/aside";
import Layout from "../components/layout";
import Main from "../components/main";
import Nav from "../components/nav";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faUser,
  faEnvelope,
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faDesktop,
  faExpand,
  faFileMedicalAlt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import Image from "next/image";
import {
  faFile,
  faMap,
  faCheckCircle,
  faListAlt,
} from "@fortawesome/free-regular-svg-icons";

const Home: NextPage = () => {
  const [isActivePremiun, setActivePremiun] = useState<boolean>(false);
  const [isActiveStandar, setActiveStandar] = useState<boolean>(false);
  const [isActiveIMG1, setActiveIMG1] = useState<boolean>(true);
  const [isActiveIMG2, setActiveIMG2] = useState<boolean>(false);
  const [isActiveIMG3, setActiveIMG3] = useState<boolean>(false);
  const [isActiveIMG4, setActiveIMG4] = useState<boolean>(false);
  const [isActiveIMG5, setActiveIMG5] = useState<boolean>(false);
  const [isActiveIMG6, setActiveIMG6] = useState<boolean>(false);

  const [isActiveIMG1WEB, setActiveIMG1WEB] = useState<boolean>(true);
  const [isActiveIMG2WEB, setActiveIMG2WEB] = useState<boolean>(false);
  const [isActiveIMG3WEB, setActiveIMG3WEB] = useState<boolean>(false);
  const [isActiveIMG4WEB, setActiveIMG4WEB] = useState<boolean>(false);

  const handleActivationPremiun = () => {
    setActivePremiun(!isActivePremiun);
    setActiveStandar(false);
  };

  const handleActivationStandar = () => {
    setActiveStandar(!isActiveStandar);
    setActivePremiun(false);
  };

  const hableActivationIMG1WEB = () => {
    setActiveIMG1WEB(true);
    setActiveIMG2WEB(false);
    setActiveIMG3WEB(false);
    setActiveIMG4WEB(false);
  };

  const hableActivationIMG2WEB = () => {
    setActiveIMG1WEB(false);
    setActiveIMG2WEB(true);
    setActiveIMG3WEB(false);
    setActiveIMG4WEB(false);
  };

  const hableActivationIMG3WEB = () => {
    setActiveIMG1WEB(false);
    setActiveIMG2WEB(false);
    setActiveIMG3WEB(true);
    setActiveIMG4WEB(false);
  };

  const hableActivationIMG4WEB = () => {
    setActiveIMG1WEB(false);
    setActiveIMG2WEB(false);
    setActiveIMG3WEB(false);
    setActiveIMG4WEB(true);
  };

  const hableActivationIMG1 = () => {
    setActiveIMG1(true);
    setActiveIMG2(false);
    setActiveIMG3(false);
    setActiveIMG4(false);
    setActiveIMG5(false);
    setActiveIMG6(false);
  };

  const hableActivationIMG2 = () => {
    setActiveIMG1(false);
    setActiveIMG2(true);
    setActiveIMG3(false);
    setActiveIMG4(false);
    setActiveIMG5(false);
    setActiveIMG6(false);
  };

  const hableActivationIMG3 = () => {
    setActiveIMG1(false);
    setActiveIMG2(false);
    setActiveIMG3(true);
    setActiveIMG4(false);
    setActiveIMG5(false);
    setActiveIMG6(false);
  };

  const hableActivationIMG4 = () => {
    setActiveIMG1(false);
    setActiveIMG2(false);
    setActiveIMG3(false);
    setActiveIMG4(true);
    setActiveIMG5(false);
    setActiveIMG6(false);
  };

  const hableActivationIMG5 = () => {
    setActiveIMG1(false);
    setActiveIMG2(false);
    setActiveIMG3(false);
    setActiveIMG4(false);
    setActiveIMG5(true);
    setActiveIMG6(false);
  };

  const hableActivationIMG6 = () => {
    setActiveIMG1(false);
    setActiveIMG2(false);
    setActiveIMG3(false);
    setActiveIMG4(false);
    setActiveIMG5(false);
    setActiveIMG6(true);
  };

  return (
    <Layout>
      <div className={styles.content_nav_main_aside}>
        <Nav>
          <div className={styles.content_nav}>
            <div className={`${styles.div_item} ${styles.left}`}>
              <FontAwesomeIcon icon={faEnvelope} />
              <a
                href="https://privateemail.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Correo
              </a>
            </div>
            <div className={`${styles.div_item} ${styles.left}`}>
              <FontAwesomeIcon icon={faUser} />
              <a
                href="https://app.kemaytechnology.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Acceso al sistema
              </a>
            </div>
          </div>
        </Nav>
        <Main>
          <div className={styles.content_main}>
            <section className={styles.section}>
              <div className={styles.article_one}>
                <div>
                  <h1>Localización y monitoreo vehicular</h1>
                  <p>
                    Seguridad y Localización satelital con visualización en
                    tiempo real en mapas digitalizados. Notificaciones de
                    eventos vía correo electrónico cada vez que el vehículo
                    entre o salga de un área geográfica predeterminada, exceda
                    un límite de velocidad establecido e históricos de
                    recorridos.
                  </p>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send?phone=51936680337&text=Hola,%20informaci%C3%B3n%20sobre%20GPS%20por%20favor."
                    type="button"
                  >
                    <button>COTIZAR SERVICIO</button>
                  </a>
                </div>
              </div>
              <div className={styles.article_two}>
                <Image
                  src="/images/new-wialon.png"
                  height={350}
                  width={450}
                  alt="Wialon app"
                />
              </div>
            </section>

            <section className={styles.servicios}>
              <div className={styles.imgback}>
                <Image
                  src="/images/img_background.jpg"
                  height={700}
                  width={1500}
                  alt="Kemay web"
                />
              </div>
              <div className={styles.tituloservicios}>
                <h1>Servicios</h1>
              </div>
              <div className={styles.listaservicios}>
                <FontAwesomeIcon color="green" icon={faCheck} />
                <label>Plataforma de monitoreo 24/7</label>
                <FontAwesomeIcon color="green" icon={faCheck} />
                <label>Soporte 24/7</label>
                <FontAwesomeIcon color="green" icon={faCheck} />
                <label>Calidad y Garantia</label>
                <FontAwesomeIcon color="green" icon={faCheck} />
                <label>Instalaciones para todo tipo de vehiculo</label>
              </div>
            </section>

            <section className={styles.web}>
              <div className={styles.section_item_title}>
                <h1>Funciones principales para monitoreo web</h1>
              </div>
              {/* CEL */}
              <div className={styles.content_lista_CEL}>
                <div
                  onClick={hableActivationIMG1WEB}
                  className={
                    isActiveIMG1WEB
                      ? styles.item_lista_active
                      : styles.item_lista
                  }
                >
                  <div className={styles.number_lista}>1</div>
                  <div className={styles.text_lista}>
                    <p>Seguimiento en linea</p>
                  </div>
                </div>
                <div
                  onClick={hableActivationIMG2WEB}
                  className={
                    isActiveIMG2WEB
                      ? styles.item_lista_active
                      : styles.item_lista
                  }
                >
                  <div className={styles.number_lista}>2</div>
                  <div className={styles.text_lista}>
                    <p> Control de combustible</p>
                  </div>
                </div>
                <div
                  onClick={hableActivationIMG3WEB}
                  className={
                    isActiveIMG3WEB
                      ? styles.item_lista_active
                      : styles.item_lista
                  }
                >
                  <div className={styles.number_lista}>3</div>
                  <div className={styles.text_lista}>
                    <p>Enrutamiento</p>
                  </div>
                </div>
                <div
                  onClick={hableActivationIMG4WEB}
                  className={
                    isActiveIMG4WEB
                      ? styles.item_lista_active
                      : styles.item_lista
                  }
                >
                  <div className={styles.number_lista}>4</div>
                  <div className={styles.text_lista}>
                    <p>Geocercas</p>
                  </div>
                </div>
              </div>
              {/* FIN CEL */}
              <div className={styles.content_web}>
                <div className={styles.content_titulo_img}>
                  <div className={styles.titulo_web}>
                    <h1>
                      {isActiveIMG1WEB &&
                        "1.- Reaccionar inmediatamente ante cualquier evento"}
                      {isActiveIMG2WEB &&
                        "2.- Calcular el consumo de combustible con la máxima precisión"}
                      {isActiveIMG3WEB &&
                        "3.- Reducir el tiempo de viaje y el kilometraje"}
                      {isActiveIMG4WEB &&
                        "4.- Seguir unidades y eventos dentro de un área especificada"}
                    </h1>
                  </div>
                  <div className={styles.content_img_web}>
                    <div className={styles.img_web}>
                      {isActiveIMG1WEB && (
                        <Image
                          src="/images/5c87cd30990d4.jpg"
                          height={1000}
                          width={2060}
                          alt="Kemay web"
                        />
                      )}
                      {isActiveIMG2WEB && (
                        <Image
                          src="/images/5c87cd3cd24bd.jpg"
                          height={1000}
                          width={2060}
                          alt="Kemay web"
                        />
                      )}
                      {isActiveIMG3WEB && (
                        <Image
                          src="/images/5c87cd4899731.jpg"
                          height={1000}
                          width={2060}
                          alt="Kemay web"
                        />
                      )}
                      {isActiveIMG4WEB && (
                        <Image
                          src="/images/5c87cd994b93f.jpg"
                          height={1000}
                          width={2060}
                          alt="Kemay web"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.content_lista}>
                  <div
                    onClick={hableActivationIMG1WEB}
                    className={
                      isActiveIMG1WEB
                        ? styles.item_lista_active
                        : styles.item_lista
                    }
                  >
                    <div className={styles.number_lista}>1</div>
                    <div className={styles.text_lista}>
                      Seguimiento en linea
                    </div>
                  </div>
                  <div
                    onClick={hableActivationIMG2WEB}
                    className={
                      isActiveIMG2WEB
                        ? styles.item_lista_active
                        : styles.item_lista
                    }
                  >
                    <div className={styles.number_lista}>2</div>
                    <div className={styles.text_lista}>
                      Control de combustible
                    </div>
                  </div>
                  <div
                    onClick={hableActivationIMG3WEB}
                    className={
                      isActiveIMG3WEB
                        ? styles.item_lista_active
                        : styles.item_lista
                    }
                  >
                    <div className={styles.number_lista}>3</div>
                    <div className={styles.text_lista}>Enrutamiento</div>
                  </div>
                  <div
                    onClick={hableActivationIMG4WEB}
                    className={
                      isActiveIMG4WEB
                        ? styles.item_lista_active
                        : styles.item_lista
                    }
                  >
                    <div className={styles.number_lista}>4</div>
                    <div className={styles.text_lista}>Geocercas</div>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section_item}>
              <div className={styles.section_item_title_cel}>
                <h1>Funciones principales para dispositivos mobiles</h1>
              </div>
              {/* INICIO CARD1 <FontAwesomeIcon size="lg" icon={faCheckCircle} />*/}
              <div className={styles.contents_cards}>
                <div className={styles.section_card}>
                  <div
                    onClick={hableActivationIMG1}
                    className={
                      isActiveIMG1 ? styles.card_isActive : styles.card
                    }
                  >
                    <div className={styles.card_title}>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <strong>Lista de unidades</strong>
                    </div>
                    <div className={styles.card_text}>
                      <p>
                        Obtenga toda la información necesaria sobre el
                        movimiento y el estado de encendido, la actualidad de
                        los datos y la ubicación de la unidad en tiempo real.
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={hableActivationIMG2}
                    className={
                      isActiveIMG2 ? styles.card_isActive : styles.card
                    }
                  >
                    <div className={styles.card_title}>
                      <FontAwesomeIcon icon={faDesktop} />
                      <strong>Comandos</strong>
                    </div>
                    <div className={styles.card_text}>
                      <p>
                        Enviar comandos: mensaje, ruta, solicitudes de
                        configuración o foto de la cámara para el control remoto
                        de la unidad.
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={hableActivationIMG3}
                    className={
                      isActiveIMG3 ? styles.card_isActive : styles.card
                    }
                  >
                    <div className={styles.card_title}>
                      <FontAwesomeIcon icon={faExpand} />
                      <strong>Geocercas</strong>
                    </div>
                    <div className={styles.card_text}>
                      <p>
                        Encienda / apague la pantalla visual de la ubicación de
                        la unidad dentro de una geovalla en lugar de la
                        información de la dirección.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FIN CARD1 <FontAwesomeIcon size="lg" icon={faCheckCircle} />*/}
                {/* INICIO IMAGEN */}
                <div className={styles.imagen}>
                  <div className={styles.mascara}>
                    <div className={styles.frame}></div>
                    <div className={styles.mascaraCli}>
                      {isActiveIMG1 && (
                        <img
                          src="/images/5e1f2adf244b3.png"
                          // width={1080}
                          // height={2330}
                          className={styles.imagenimage}
                          alt="Kemay app"
                        />
                      )}
                      {isActiveIMG2 && (
                        <img
                          src="/images/5dbc4369c6992.png"
                          className={styles.imagenimage}
                          alt="Kemay app"
                        />
                      )}
                      {isActiveIMG3 && (
                        <img
                          src="/images/5dbc4388032dc.png"
                          className={styles.imagenimage}
                          alt="Kemay app"
                        />
                      )}
                      {isActiveIMG4 && (
                        <img
                          src="/images/5dbfec5c00c6b.png"
                          className={styles.imagenimage}
                          alt="Kemay app"
                        />
                      )}
                      {isActiveIMG5 && (
                        <img
                          src="/images/5dbc43ad2d2b0.png"
                          className={styles.imagenimage}
                          alt="Kemay app"
                        />
                      )}
                      {isActiveIMG6 && (
                        <img
                          src="/images/5dbc43d054efa.png"
                          className={styles.imagenimage}
                          alt="Kemay app"
                        />
                      )}
                    </div>
                  </div>
                </div>
                {/* FIN IMAGEN */}
                <div className={styles.section_card}>
                  <div
                    onClick={hableActivationIMG4}
                    className={
                      isActiveIMG4 ? styles.card_isActive : styles.card
                    }
                  >
                    <div className={styles.card_title}>
                      <FontAwesomeIcon icon={faFile} />
                      <strong>Informes</strong>
                    </div>
                    <div className={styles.card_text}>
                      <p>
                        Utilice los datos detallados sobre los viajes, las
                        paradas, los robos de combustible y los repostajes del
                        vehículo para tomar decisiones en el momento.
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={hableActivationIMG5}
                    className={
                      isActiveIMG5 ? styles.card_isActive : styles.card
                    }
                  >
                    <div className={styles.card_title}>
                      <FontAwesomeIcon icon={faListAlt} />
                      <strong>Historia</strong>
                    </div>
                    <div className={styles.card_text}>
                      <p>
                        Controle los eventos de la unidad (movimiento, parada,
                        llenado de combustible, robo de combustible) en orden
                        cronológico y muéstrelos en el mapa.
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={hableActivationIMG6}
                    className={
                      isActiveIMG6 ? styles.card_isActive : styles.card
                    }
                  >
                    <div className={styles.card_title}>
                      <FontAwesomeIcon icon={faMap} />
                      <strong>Mapa</strong>
                    </div>
                    <div className={styles.card_text}>
                      <p>
                        Accede a unidades, geocercas, pistas y marcadores de
                        eventos en el mapa con la opción de detectar tu propia
                        ubicación.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.content_imgs_cel}>
                <div className={styles.mascara}>
                  <div className={styles.frame} />
                  <div className={styles.mascaraCli}>
                    {isActiveIMG1 && (
                      <img
                        src="/images/5e1f2adf244b3.png"
                        // width={1080}
                        // height={2330}
                        className={styles.imagenimage}
                        alt="Kemay app"
                      />
                    )}
                    {isActiveIMG2 && (
                      <img
                        src="/images/5dbc4369c6992.png"
                        className={styles.imagenimage}
                        alt="Kemay app"
                      />
                    )}
                    {isActiveIMG3 && (
                      <img
                        src="/images/5dbc4388032dc.png"
                        className={styles.imagenimage}
                        alt="Kemay app"
                      />
                    )}
                    {isActiveIMG4 && (
                      <img
                        src="/images/5dbfec5c00c6b.png"
                        className={styles.imagenimage}
                        alt="Kemay app"
                      />
                    )}
                    {isActiveIMG5 && (
                      <img
                        src="/images/5dbc43ad2d2b0.png"
                        className={styles.imagenimage}
                        alt="Kemay app"
                      />
                    )}
                    {isActiveIMG6 && (
                      <img
                        src="/images/5dbc43d054efa.png"
                        className={styles.imagenimage}
                        alt="Kemay app"
                      />
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Main>
        <Aside>
          <div className={styles.content_aside}>
            <div className={styles.div_item}>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              <Link href="/">
                <a onClick={handleActivationPremiun}>Plataforma Premiun</a>
              </Link>
              {/* <div className={styles.div_item_arrow}>
                {isActivePremiun ? (
                  <FontAwesomeIcon icon={faArrowAltCircleDown} />
                ) : (
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                )}
              </div> */}
            </div>
            {isActivePremiun && (
              <div className={styles.transision}>
                <label>
                  Acceder a la plataforma{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://hosting.wialon.com/"
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    <strong>Click aqui</strong>
                  </a>
                  . Tambien disponibles en:
                </label>
                <div className={styles.apps}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://itunes.apple.com/app/id960699792"
                  >
                    <Image
                      src="/images/apple.svg"
                      height={200}
                      width={100}
                      alt="Kemay apple"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://play.google.com/store/apps/details?id=com.gurtam.wialon_client&hl=en"
                  >
                    <Image
                      src="/images/google.svg"
                      height={200}
                      width={100}
                      alt="Kemay google"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://appgallery.huawei.com/app/C103010347"
                  >
                    <Image
                      src="/images/huawei.svg"
                      height={200}
                      width={100}
                      alt="Kemay huawei"
                    />
                  </a>
                </div>
              </div>
            )}

            <div className={styles.div_item}>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              <Link href="/">
                <a onClick={handleActivationStandar}>Plataforma Standar</a>
              </Link>
              {/* <div className={styles.div_item_arrow}>
                {isActiveStandar ? (
                  <FontAwesomeIcon icon={faArrowAltCircleDown} />
                ) : (
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                )}
              </div> */}
            </div>
            {isActiveStandar && (
              <>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://45.77.202.56:8056/track/Track"
                      style={{ color: "blue" }}
                    >
                      Opcion 1
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://cloud2.smartindustrype.com/webapp/"
                      style={{ color: "blue" }}
                    >
                      Opcion 2
                    </a>
                  </li>
                </ul>
              </>
            )}
            <div className={styles.logo_mtc}>
              <div className={styles.div_img_mtc}>
                <label>Equipos homologados por</label>
                <Image
                  src="/images/kemay_mtc_2.png"
                  height={250}
                  width={1080}
                  alt="Wialon app"
                />
              </div>
              <div className={styles.div_img_mtc}>
                <Image
                  src="/images/kemay_mtc.jpg"
                  height={250}
                  width={1080}
                  alt="Wialon app"
                />
              </div>
            </div>
          </div>
        </Aside>
      </div>
    </Layout>
  );
};

export default Home;
