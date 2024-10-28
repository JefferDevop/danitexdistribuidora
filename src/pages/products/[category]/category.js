import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import {
  Listproducts,
  Footer,
  NotFound,
  FooterApp,
  Separator,
  Redes,
} from "@/components";

export default function category(props) {
  const { products, category } = props;
  const hasProduct = size(products) > 0;

  return (
    <div>
      <BasicLayout>
        {hasProduct ? (
          <Listproducts products={products} title={category.name} />
        ) : (
          <>
            <Separator />
            <NotFound
              title={
                "Upppss... No hay productos para mostrar en esta categoría"
              }
            />
          </>
        )}
        <FooterApp />
        <Footer />
      </BasicLayout>
    </div>
  );
}
