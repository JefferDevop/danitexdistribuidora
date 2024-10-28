import React, { useEffect, useState } from "react";
import { Categories } from "@/api/category";
import {
  ListCategories,
  Footer,
  FooterApp,
} from "@/components";

import { BasicLayout } from "../../layouts";

const categoriesCtrl = new Categories();

export default function HomePage() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await categoriesCtrl.getAll();
        setCategories(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);


  if (categories !== null) {
    return (
      <>
        <BasicLayout>
          <ListCategories categories={categories} />
          <FooterApp />
          <Footer />
        </BasicLayout>
      </>
    );
  } else {
    return (
      <>
        <BasicLayout>
         <h4>Cargando...</h4>
          <FooterApp />
          <Footer />
        </BasicLayout>
      </>
    );
  }
}
