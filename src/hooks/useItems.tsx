import { useState } from "react";
import Item from "../Entities/Item";

const useItems = () => {
  const [items, setItems] = useState<Item[]>(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const clearItems = () => {
    const filteredItems: Item[] = [];
    setItems(filteredItems);
    localStorage.setItem("items", JSON.stringify(filteredItems));
  };

  const handleAddItem = (name: string) => {
    const newItem = {
      id: crypto.randomUUID().toString(),
      completed: false,
      date: new Date(),
      name,
    };
    const updatedItems = [newItem, ...items];
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const editItem = (item: Item) => {
    const updatedItems = items.map((i) =>
      i.id === item.id ? { ...i, completed: !i.completed } : i
    );

    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  return { items, handleAddItem, editItem, clearItems };
};

export default useItems;
