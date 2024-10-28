import styles from "./TopBar.module.scss";
import { CardImg } from "reactstrap";
import Link from "next/link";

export function TopBar() {
  return (
    <>
      <div className={styles.topBar}>
  
        <Link href="/">
          <CardImg src="/image/logo.png" alt="Naciotex" />{" "}
        </Link>
 
      
        <div className={styles.title}>         
          <p className={styles.name}>VENTAS AL POR MAYOR Y AL DETAL</p>
          <p className={styles.extra}>EN ROPA INTERIOR PARA DAMAS, CABALLEROS, NIÑOS, MEDIAS, LENCERIAS Y MUCHO MÁS.</p>
        </div>
      </div>
    </>
  );
}
