import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import { IProductTitleProps } from "../interfaces/product.model";

export const ProductTitle = ({
  title,
  className,
  style
}: IProductTitleProps) => {
  const { product } = useContext(ProductContext);
  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {title ? title : product && product.title}
    </span>
  );
};
