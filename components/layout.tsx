import Head from "next/head";
import Cabecera from "./cabecera";
import Pie from "./pie";
import styles from "../styles/Home.module.css";

export const siteTitle = "Sitio Web de Kemay Technology";

const Layout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kemay Technology</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Empresa dedicada el monitoreo y seguimiento de GPS"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className={styles.cuerpo}>
        <Cabecera />
        {children}
      </div>

      <Pie />
    </div>
  );
};

export default Layout;
