import styles from "./Contact.module.scss";
import { FooterApp } from "../FooterApp";

export function Contact() {
  return (
    <>
      <div className={styles.container}>
        <h1>NACIOTEX DISTRIBUIDORA</h1>
        <div className={styles.phone}>
        <h5>Líneas de atención</h5>
        <ul>
          <li>(+57) 313 6051041</li>
          <li>(+57) 310 8936205</li>
          <li> danitex.dg@gmail.com</li>
        </ul>
        </div>

        <div className={styles.adress}>
        <h5>Ubicación:</h5>
        <p>Carrera 8 # 17-02 centro de Cali, Valle del Cauca</p>
        </div>
      </div>
      <FooterApp />
    </>
  );
}

