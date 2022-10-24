import { CSSProperties, ReactElement } from "react";

export interface IProductCardProps {
  product: IProduct;
  // children?: ReactElement | ReactElement[];
  children: (args: IProductCardHandlers)=> JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: IOnChangeArgs) => void;
  value?: number;
  initialValues?: IInitialValues;
}

export interface IInitialValues {
  count?: number;
  maxCount?: number;
}

export interface IProductTitleProps {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export interface IProductImageProps {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export interface IProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}

export interface IProductCardHOCProps {
  (props: IProductCardProps): JSX.Element;
  Title: (props: IProductTitleProps) => JSX.Element;
  Image: (props: IProductImageProps) => JSX.Element;
  Buttons: ({ className }: IProductButtonsProps) => JSX.Element;
}

export interface IProduct {
  id: string;
  title: string;
  img?: string;
}

export interface IProductContextProps {
  product: IProduct;
  counter: number;
  maxCount?: number;

  increaseBy: (value: number) => void;
}

export interface IOnChangeArgs {
  product: IProduct;
  count: number;
}

export interface IUseProductArgs {
  product: IProduct;
  onChange?: (args: IOnChangeArgs) => void;
  value?: number;
  initialValues?: IInitialValues;
}

export interface IProductsInCart extends IProduct {
  count: number;
}

export interface IProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: IProduct;

  increaseBy: (value: number) => void;
  reset: () => void;
}