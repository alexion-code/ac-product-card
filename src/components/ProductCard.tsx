import React, { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import {
  IProductContextProps,
  IProductCardProps,
} from '../interfaces/product.model';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  style,
  className,
  children,
  product,
  onChange,
  value,
  initialValues = {},
}: IProductCardProps) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({ onChange, product, value, initialValues });
  return (
    <Provider value={{ product, counter, maxCount, increaseBy }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          isMaxCountReached:
            isMaxCountReached === true ? isMaxCountReached : false,
          maxCount:
            initialValues && initialValues.maxCount
              ? initialValues.maxCount
              : undefined,
          reset,
          increaseBy,
          product,
        })}
      </div>
    </Provider>
  );
};
