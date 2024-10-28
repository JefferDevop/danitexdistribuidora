import React from "react";
import { BASE_NAME } from "@/config/constants";

import { CardImg } from "reactstrap";

import styles from "./SoldOut.module.scss";

export function SoldOut(props) {
  const scale = "c_scale,f_auto,q_20,w_400/";
  const upload = "image/upload/";
  const { product } = props;

  return (
    <div className={styles.list__product}>
      <div className={styles.soldout}>
        <span>AGOTADO</span>
      </div>
      {product.productData.images ? (
        <CardImg
          alt="Card image cap"
          src={
            BASE_NAME +
            upload +
            scale +
            product.productData.images.split(upload)[1]
          }
        />
      ) : (
        <CardImg alt="Card image cap" src={product.productData.image_alterna} />
      )}
      <p>{product.productData.name_extend}</p>
    </div>
  );
}
