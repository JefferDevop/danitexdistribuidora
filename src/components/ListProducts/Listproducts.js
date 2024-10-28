import { map } from "lodash";
import styles from "./ListProduts.module.scss";
import { Available } from "./Available";
import { SoldOut } from "./SoldOut";

export function Listproducts(props) {
  const { products, title } = props;

  return (
    <div className={styles.product}>
      <h4>{title}</h4>
      <div className={styles.listProduct}>
        <h4>{title}</h4>
        <div className={styles.product}>
          {map(products, (product, index) => (
            <>
              {product.productData.active && (
                <div className={styles.content_image}>
                  <>
                    {!product.productData.soldout ? (
                      <Available key={index} product={product} />
                    ) : (
                      <SoldOut kay={index} product={product} />
                    )}
                  </>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
