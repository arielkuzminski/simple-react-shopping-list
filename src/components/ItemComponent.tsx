import { Checkbox } from "@chakra-ui/react";
import Item from "../Entities/Item";
import { useState } from "react";

interface Props {
  item: Item;
}

const ItemComponent = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      isChecked={isChecked}
      textDecoration={isChecked ? "line-through" : ""}
      onChange={() => setIsChecked(!isChecked)}
    >
      {item.name}
    </Checkbox>
  );
};

export default ItemComponent;
