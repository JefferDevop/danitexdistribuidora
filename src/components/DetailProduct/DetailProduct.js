import React, { useEffect, useState } from "react";
import { size } from "lodash";
import { BASE_NAME } from "@/config/constants";
import { useWhatsApp, useGallery, useCart } from "@/hooks";
import { toast } from "react-toastify";

import { ImageCarousel } from "../ImageCarousel";

import {
  CardImg,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
} from "reactstrap";

import { BsWhatsapp } from "react-icons/bs";
import styles from "./DetailProduct.module.scss";

export function DetailProduct(props) {
  const { product } = props;

  const scale = "c_scale,f_auto,q_auto,w_800/";
  const upload = "image/upload/";

  const { addCart } = useCart();
  const { getGalleryByCode, gallery } = useGallery();
  const { generateWhatsAppLink, items, selectedItem, handleItemClick } =
    useWhatsApp();

  const [productData, setProductData] = useState("");
  const [idProduct, setIdPropduct] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [propductWhatsApp, setPropductWhatsApp] = useState("");
  const [propductAlternaWhatsApp, setPropductAlternaWhatsApp] = useState("");
  const [quantity, setQuantity] = useState(1);

  const format = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  useEffect(() => {
    getGalleryByCode(productData.codigo);
  }, []);

  useEffect(() => {
    setProductData(product[0]);
  }, []);

  const changeDetail = (data) => {
    setProductData(data);
    getGalleryByCode(data.codigo);
    window.scrollTo(0, 0);
  };

  //-----------------------------------------------

  const openCloseModal = () => setShowModal((prev) => !prev);

  const addProductId = (id) => {
    setIdPropduct(id);
    openCloseModal();
  };

  const addData = () => {
    addCart(idProduct, quantity);
    toast.success("¡Se agrego con exito!");

    openCloseModal();
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
  };

  //-------------------------------------

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const addProductToWhatsApp = (data) => {
    setPropductWhatsApp(data);
    toggleModal();
  };

  const addProductAlternaToWhatsApp = (data) => {
    setPropductAlternaWhatsApp(data);
    toggleModal();
  };

  const addDataToWhatsApp = () => {
    if (propductWhatsApp != "") {
      const whatsappLink = generateWhatsAppLink(
        selectedItem,
        BASE_NAME + propductWhatsApp
      );

      window.location.href = whatsappLink;
      toggleModal();
    } else {
      const whatsappLink = generateWhatsAppLink(
        selectedItem,
        propductAlternaWhatsApp
      );

      window.location.href = whatsappLink;
      toggleModal();
    }
  };

  const gallerySize = size(gallery);

  if (product) {
    return (
      <>
        <div className={styles.detailProduct}>
          <div className={styles.product} id="seccion-1">
            {gallerySize > 0 ? (
              <ImageCarousel images={gallery} />
            ) : productData.images ? (
              <CardImg
                alt="Card image cap"
                src={
                  BASE_NAME +
                  upload +
                  scale +
                  productData.images?.split(upload)[1]
                }
              />
            ) : (
              <CardImg alt="Card image cap" src={productData.image_alterna} />
            )}

            <div className={styles.description}>
              <CardTitle className={styles.title}>
                <h5 className={styles.name_extend}>
                  {productData.name_extend}
                </h5>
                <div className={styles.price}>
                  {productData.price1 > 1 && (
                    <h5>$ {format(productData.price1)} </h5>
                  )}
                  {productData.price2 > 1 && (
                    <h5>POR MAYOR $ {format(productData.price2)}</h5>
                  )}
                </div>
              </CardTitle>

              {productData.images ? (
                <div
                  className={styles.whatsapp}
                  onClick={() =>
                    addProductToWhatsApp(
                      productData.images +
                        " " +
                        productData.name_extend +
                        " " +
                        "Referencia: " +
                        productData.ref
                    )
                  }
                >
                  <BsWhatsapp size={25} color="white" />
                </div>
              ) : (
                <div
                  className={styles.whatsapp}
                  onClick={() =>
                    addProductAlternaToWhatsApp(
                      productData.image_alterna +
                        " " +
                        productData.name_extend +
                        " " +
                        "Referencia: " +
                        productData.ref
                    )
                  }
                >
                  <BsWhatsapp size={25} color="white" />
                </div>
              )}
              {productData.qty && <h6>Disponible {productData.qty}</h6>}
              <Button onClick={() => addProductId(productData.codigo)}>
                Agregar al Carrito
              </Button>
              <label>{productData.description}</label>
            </div>
          </div>

          <Modal centered isOpen={showModal} toggle={openCloseModal}>
            <ModalHeader toggle={openCloseModal}>Ingrese Cantidad</ModalHeader>

            <ModalBody>
              Cantidad
              <FormGroup>
                <Input
                  value={quantity}
                  type="number"
                  name="cantidad"
                  id="cantidad"
                  placeholder="Cantidad"
                  onChange={handleQuantityChange}
                />
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button color="primary" onClick={addData}>
                Aceptar
              </Button>{" "}
              <Button color="secondary" onClick={openCloseModal}>
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>

          <Modal centered isOpen={isOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Seleccione una Lìnea</ModalHeader>

            <ModalBody>
              <FormGroup>
                {items.map((item, index) => (
                  <Button
                    key={index}
                    color="success"
                    size="sm"
                    outline
                    className={index === selectedItem ? "selected" : ""}
                    onClick={() => handleItemClick(item)}
                  >
                    <BsWhatsapp size={20} /> Linea {index + 1}
                  </Button>
                ))}
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button size="sm" outline color="secondary" onClick={toggleModal}>
                Cancelar
              </Button>
              <Button size="sm" color="success" onClick={addDataToWhatsApp}>
                Aceptar
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    );
  } else {
    return <h5> La pagina no existe</h5>;
  }
}
