import { useContext } from "react";
import ProductContext from "../context";

const useProducts = () => useContext(ProductContext);

export default useProducts;
