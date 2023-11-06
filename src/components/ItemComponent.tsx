import { Checkbox } from "@chakra-ui/react";
import { useContext } from "react";
import Item from "../Entities/Item";
import ProductContext from "../context";

interface Props {
  item: Item;
}

const ItemComponent = ({ item }: Props) => {
  const { dispatch } = useContext(ProductContext);

  return (
    <Checkbox
      size={"lg"}
      isChecked={item.completed}
      textDecoration={item.completed ? "line-through" : ""}
      onChange={() => dispatch({ type: "EDIT", item })}
    >
      {item.name}
    </Checkbox>
  );
};

export default ItemComponent;
