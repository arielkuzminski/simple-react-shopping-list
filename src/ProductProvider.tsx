import { ReactNode, useReducer } from "react";
import ProductContext from "./context";
import productReducer from "./reducer";

interface Props {
  children: ReactNode;
}

const ProductProvider = ({ children }: Props) => {
  const localStorageItems = localStorage.getItem("items");
  const storedItems = localStorageItems ? JSON.parse(localStorageItems) : [];
  const [items, dispatch] = useReducer(productReducer, storedItems);

  return (
    <ProductContext.Provider value={{ items, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
