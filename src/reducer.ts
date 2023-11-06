import Item from "./Entities/Item";

interface AddItem {
  type: "ADD";
  name: string;
}

interface EditItem {
  type: "EDIT";
  item: Item;
}

interface ClearItems {
  type: "CLEAR";
}

export type ItemAction = AddItem | EditItem | ClearItems;

const productReducer = (state: Item[], action: ItemAction): Item[] => {
  if (action.type === "ADD") {
    const updatedItems = [
      ...state,
      {
        id: crypto.randomUUID().toString(),
        completed: false,
        date: Date.now(),
        name: action.name,
      },
    ];
    localStorage.setItem("items", JSON.stringify(updatedItems));
    return updatedItems;
  }

  if (action.type === "EDIT") {
    const updatedItems = state.map((i) =>
      i.id === action.item.id ? { ...i, completed: !i.completed } : i
    );
    localStorage.setItem("items", JSON.stringify(updatedItems));
    return updatedItems;
  }

  if (action.type === "CLEAR") {
    const filteredItems: Item[] = state.filter((i) => !i.completed);
    localStorage.setItem("items", JSON.stringify(filteredItems));
    return filteredItems;
  }

  return state;
};

export default productReducer;
