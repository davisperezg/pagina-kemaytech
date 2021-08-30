import { faBuilding, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Aside from "../components/aside";
import Layout from "../components/layout";
import Main from "../components/main";
import Nav from "../components/nav";
import styles from "../styles/Home.module.css";
import stylesPrecios from "../styles/Precios.module.css";
import axios from "axios";

interface Contacto {
  RUC: string;
  Unidades: string;
  Correo: string;
  Mensaje: string;
}

const intialValueContacto :Contacto = {
  RUC:"",
  Unidades:"",
  Correo:"",
  Mensaje:"",
};

const Precios: NextPage = () => {
  const [isActivePerson, setActivePerson] = useState<boolean>(true);
  const [isActiveCompany, setActiveCompany] = useState<boolean>(false);

  const activarPersona = () => {
    setActivePerson(true);
    setActiveCompany(false);
  };

  const activarEmpresa = () => {
    setActivePerson(false);
    setActiveCompany(true);
  };

  const [contacto, setContacto] = useState<Contacto>(intialValueContacto);
  const [isCargando, setCargando] = useState<boolean>(false);

  const onChange = (e: any) => {
    setContacto({ ...contacto, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: any) => {
    setCargando(true);
    e.preventDefault();
    try {
      const result = await axios.post("/api/mail", contacto);
      alert(`${result.data.message}. Mensaje enviado`);
      e.target.reset();
    } catch (e) {
      alert(
        "Ha ocurrido un error interno. Por favor comuniquese por whatsapp."
      );
    }
    setCargando(false);
  };

  return (
    <Layout>
      <div className={styles.content_nav_main_aside}>
        <Nav></Nav>
        <Main>
          <div className={styles.content_main}>
            <div className={stylesPrecios.titulo}>
              <h1>Precios por: </h1>
            </div>
            <div className={stylesPrecios.planes}>
              <div className={stylesPrecios.plan}>
                <div
                  onClick={activarPersona}
                  className={
                    isActivePerson
                      ? stylesPrecios.item_isActive
                      : stylesPrecios.item
                  }
                >
                  <h2>Persona</h2>
                  <div className={stylesPrecios.item_icon}>
                    <FontAwesomeIcon size="8x" icon={faUser} />
                  </div>
                </div>
              </div>
              <div className={stylesPrecios.plan}>
                <div
                  onClick={activarEmpresa}
                  className={
                    isActiveCompany
                      ? stylesPrecios.item_isActive
                      : stylesPrecios.item
                  }
                >
                  <h2>Empresa</h2>
                  <div className={stylesPrecios.item_icon}>
                    <FontAwesomeIcon size="8x" icon={faBuilding} />
                  </div>
                </div>
              </div>
            </div>

            <div className={stylesPrecios.info}>
              {(!isActiveCompany && !isActivePerson) || (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <div className={stylesPrecios.tituloplates}>
                    <h1>
                      {isActivePerson ? "Planes persona" : "Planes empresa"}
                    </h1>
                  </div>
                  <Image
                    src="/images/kemay-mobile.png"
                    layout="responsive"
                    width={1080}
                    height={300}
                    alt="Kemay mobile"
                  />
                </div>
              )}
              {isActivePerson ? (
                <>
                  <div className={stylesPrecios.planes}>
                    <div className={stylesPrecios.planoptions1}>
                      <div className={stylesPrecios.plan_persona}>
                        <div className={stylesPrecios.plan_persona_titulo}>
                          Plan Standar
                        </div>
                        <div className={stylesPrecios.descripcion}>
                          Costo anual S/480.00 y renovacion S/200.00,{" "}
                          <label style={{ color: "red" }}>
                            plataforma no recomendable para vehiculos pesados
                          </label>
                        </div>
                        <div className={stylesPrecios.caracteristicas}>
                          <div className={stylesPrecios.item_caracteristicas}>
                            <FontAwesomeIcon color="green" icon={faCheck} />
                            <label>GPS Generico</label>
                          </div>
                          <div className={stylesPrecios.item_caracteristicas}>
                            <FontAwesomeIcon color="green" icon={faCheck} />
                            <label>SIM Nacional</label>
                          </div>
                          <div className={stylesPrecios.item_caracteristicas}>
                            <FontAwesomeIcon color="green" icon={faCheck} />
                            <label>Plataforma de monitoreo solo web</label>
                          </div>
                          <div className={stylesPrecios.item_caracteristicas}>
                            <FontAwesomeIcon color="green" icon={faCheck} />
                            <label>
                              Ubicacion en tiempo real las 24hrs del dia
                            </label>
                          </div>
                          <div className={stylesPrecios.item_caracteristicas}>
                            <FontAwesomeIcon color="green" icon={faCheck} />
                            <label>Reportes</label>
                          </div>
                          <div className={stylesPrecios.item_caracteristicas}>
                            <FontAwesomeIcon color="green" icon={faCheck} />
                            <label>Soporte tecnico 24/7</label>
                          </div>
                          <div className={stylesPrecios.item_caracteristicas}>
                            <FontAwesomeIcon color="green" icon={faCheck} />
                            <label>
                              Apagado de motor a distancia (solo para vehiculos
                              livianos)
                            </label>
                          </div>

                          <div className={stylesPrecios.item_caracteristicas}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://api.whatsapp.com/send?phone=51936680337&text=Hola,%20quiero%20instalar%20un%20gps%20con%20el%20plan%20standar"
                            >
                              SOLICITAR
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={stylesPrecios.planoptions2}>
                      <div className={stylesPrecios.plan_persona}>
                        <div className={stylesPrecios.plan_persona_titulo}>
                          Plan Premiun
                        </div>
                        <div className={stylesPrecios.descripcion}>
                          Costo anual S/590.00 y renovacion S/280.00, para
                          vehiculos pesados S/720.00
                        </div>
                        <div className={stylesPrecios.caracteristicas}>
                          <div className={stylesPrecios.item_caracteristicas}>
                            <FontAwesomeIcon color="green" icon={faCheck} />
                            <label>GPS Europeo y homologado</label>
                          </div>
                          <div className={stylesPrecios.item_caracteristicas}>
                            <FontAwesomeIcon color="green" icon={faCheck} />
                            <label>SIM Multioperador</label>
                          </div>
                          <div className={stylesPrecios.item_caracteristicas}>
                            <FontAwesomeIcon color="green" icon={faCheck} />
                            <label>Plataforma de monitoreo web y mobil</label>
                          </div>
                          <div className={stylesPrecios.item_caracteristicas}>
                            <FontAwesomeIcon color="green" icon={faCheck} />
                            <label>
                              Geocerca, notificaciones, reportes, ubicacion en
                              tiempo real las 24hrs del dia
                            </label>
                          </div>
                          <div className={stylesPrecios.item_caracteristicas}>
                            <FontAwesomeIcon color="green" icon={faCheck} />
                            <label>Alerta de exceso de velocidad</label>
                          </div>
                          <div className={stylesPrecios.item_caracteristicas}>
                            <FontAwesomeIcon color="green" icon={faCheck} />
                            <label>Compartir ubicacion</label>
                          </div>
                          <div className={stylesPrecios.item_caracteristicas}>
                            <FontAwesomeIcon color="green" icon={faCheck} />
                            <label>Creacion de rutas y estado de GPS</label>
                          </div>
                          <div className={stylesPrecios.item_caracteristicas}>
                            <FontAwesomeIcon color="green" icon={faCheck} />
                            <label>Soporte tecnico 24/7</label>
                          </div>
                          <div className={stylesPrecios.item_caracteristicas}>
                            <FontAwesomeIcon color="green" icon={faCheck} />
                            <label>
                              Apagado de motor a distancia (solo para vehiculos
                              livianos)
                            </label>
                          </div>
                          <div className={stylesPrecios.item_caracteristicas}>
                            <FontAwesomeIcon color="green" icon={faCheck} />
                            <label>Informe personalizado</label>
                          </div>
                          <div className={stylesPrecios.item_caracteristicas}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://api.whatsapp.com/send?phone=51936680337&text=Hola,%20quiero%20instalar%20un%20gps%20con%20el%20plan%20premiun"
                            >
                              SOLICITAR
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                isActiveCompany && (
                  <>
                    <div className={stylesPrecios.content_empresa}>
                      <p>
                        Completa el formulario e informanos cuantas unidades
                        tiene.
                      </p>

                      <div className={stylesPrecios.content_formaulario}>
                        <form onSubmit={onSubmit}>
                          <div className={stylesPrecios.row}>
                            <div className={stylesPrecios.col_6}>
                              <input
                                className={stylesPrecios.class_input}
                                placeholder="RUC"
                                type="text"
                                name="RUC"
                                autoComplete="off"
                                onChange={onChange}
                              />
                            </div>
                            <div className={stylesPrecios.col_6}>
                              <input
                                className={stylesPrecios.class_input}
                                placeholder="Unidades"
                                type="text"
                                name="Unidades"
                                autoComplete="off"
                                onChange={onChange}
                              />
                            </div>
                          </div>
                          <div className={stylesPrecios.row}>
                            <div className={stylesPrecios.col_12}>
                              <input
                                className={stylesPrecios.class_input}
                                placeholder="Correo"
                                type="text"
                                name="Correo"
                                autoComplete="off"
                                onChange={onChange}
                              />
                            </div>
                          </div>
                          <div className={stylesPrecios.row}>
                            <div className={stylesPrecios.col_12}>
                              <textarea
                                rows={10}
                                className={stylesPrecios.class_input}
                                placeholder="Mensaje"
                                name="Mensaje"
                                autoComplete="off"
                                onChange={onChange}
                              />
                            </div>
                          </div>
                          <div className={stylesPrecios.row}>
                            <div className={stylesPrecios.col_12}>
                              <button
                                className={stylesPrecios.btn_enviar}
                                type="submit"
                              >
                                {isCargando ? "Enviando..." : "ENVIAR"}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </>
                )
              )}
            </div>
          </div>
        </Main>
        <Aside>
          <div className={styles.content_aside} />
        </Aside>
      </div>
    </Layout>
  );
};

export default Precios;
