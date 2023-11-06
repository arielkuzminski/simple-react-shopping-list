import React, { Dispatch } from "react";
import Item from "./Entities/Item";
import { ItemAction } from "./reducer";

interface ProductContextType {
  items: Item[];
  dispatch: Dispatch<ItemAction>;
}

const ProductContext = React.createContext<ProductContextType>(
  {} as ProductContextType
);

export default ProductContext;
