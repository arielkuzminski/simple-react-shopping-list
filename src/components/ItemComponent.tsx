import { Checkbox } from "@chakra-ui/react";
import Item from "../Entities/Item";
import { useState } from "react";

interface Props {
  item: Item;
  onEditItem: (item: Item) => void;
}

const ItemComponent = ({ item, onEditItem }: Props) => {
  const [isChecked, setIsChecked] = useState(item.completed);

  const handleCheckItem = () => {
    setIsChecked(!isChecked);
    onEditItem(item);
  };

  return (
    <Checkbox
      size={"lg"}
      isChecked={isChecked}
      textDecoration={isChecked ? "line-through" : ""}
      onChange={() => handleCheckItem()}
    >
      {item.name}
    </Checkbox>
  );
};

export default ItemComponent;
