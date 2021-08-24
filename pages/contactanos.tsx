import Aside from "../components/aside";
import Layout from "../components/layout";
import Main from "../components/main";
import Nav from "../components/nav";
import styles from "../styles/Home.module.css";
import stylesContactanos from "../styles/Contactanos.module.css";
import stylesPrecios from "../styles/Precios.module.css";
import { useState } from "react";
import axios from "axios";

interface Contacto {
  Nombres: string;
  Apellidos: string;
  Celular: string;
  Correo: string;
  Mensaje: string;
}

const intialValueContacto = {
  Nombres: "",
  Apellidos: "",
  Celular: "",
  Correo: "",
  Mensaje: "",
};

const Contactacnos = () => {
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
          <div className={stylesContactanos.content_frame}>
            <iframe
              className={stylesContactanos.frame}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.0664974023657!2d-77.59899368458572!3d-11.10842202817964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9106dfa2b692a90d%3A0x1b336ccb195ca310!2sKemay%20Technology!5e0!3m2!1ses-419!2spe!4v1629751991531!5m2!1ses-419!2spe"
              width="800"
              height="600"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

          <div className={stylesContactanos.content_empresa}>
            <h1>Contactanos</h1>

            <div className={stylesPrecios.content_formaulario}>
              <form onSubmit={onSubmit}>
                <div className={stylesPrecios.row}>
                  <div className={stylesPrecios.col_4}>
                    <input
                      autoComplete="off"
                      onChange={onChange}
                      name="Nombres"
                      type="text"
                      className={stylesPrecios.class_input}
                      placeholder="Nombres"
                      required
                    />
                  </div>
                  <div className={stylesPrecios.col_4}>
                    <input
                      autoComplete="off"
                      onChange={onChange}
                      name="Apellidos"
                      type="text"
                      className={stylesPrecios.class_input}
                      placeholder="Apellidos"
                      required
                    />
                  </div>
                  <div className={stylesPrecios.col_4}>
                    <input
                      autoComplete="off"
                      onChange={onChange}
                      name="Celular"
                      type="text"
                      className={stylesPrecios.class_input}
                      placeholder="Celular"
                      required
                    />
                  </div>
                </div>
                <div className={stylesPrecios.row}>
                  <div className={stylesPrecios.col_12}>
                    <input
                      autoComplete="off"
                      onChange={onChange}
                      name="Correo"
                      type="email"
                      className={stylesPrecios.class_input}
                      placeholder="Correo"
                      required
                    />
                  </div>
                </div>
                <div className={stylesPrecios.row}>
                  <div className={stylesPrecios.col_12}>
                    <textarea
                      autoComplete="off"
                      onChange={onChange}
                      name="Mensaje"
                      rows={10}
                      className={stylesPrecios.class_input}
                      placeholder="Mensaje"
                      required
                    />
                  </div>
                </div>
                <div className={stylesPrecios.row}>
                  <div className={stylesPrecios.col_12}>
                    <button className={stylesPrecios.btn_enviar} type="submit">
                      {isCargando ? "Enviando..." : "ENVIAR"}
                    </button>
                  </div>
                </div>
              </form>
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

export default Contactacnos;
