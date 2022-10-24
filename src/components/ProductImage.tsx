import React, { useContext } from "react";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import { IProductImageProps } from "../interfaces/product.model";

export const ProductImage = ({ img = "", className, style }: IProductImageProps) => {
    const { product } = useContext(ProductContext);
    let imgToShow: string;
    imgToShow = img ? img : product && product.img ? product.img : noImage;
  
    return (
      <img style={style} className={`${styles.productImg} ${className}`} src={imgToShow} alt="img2" />
    );
  };