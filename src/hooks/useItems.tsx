import { useState } from "react";
import Item from "../Entities/Item";

const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (name: string) => {
    const newItem = {
      id: crypto.randomUUID().toString(),
      completed: false,
      date: new Date(),
      name,
    };
    setItems([newItem, ...items]);
  };
  return { items, handleAddItem };
};

export default useItems;
