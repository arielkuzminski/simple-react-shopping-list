import Item from "./Entities/Item";

interface AddItem {
  type: "ADD";
  name: string;
}

interface EditItem {
  type: "EDIT";
  item: Item;
}

interface SortItems {
  type: "SORT";
  sort: string;
}

interface ClearItems {
  type: "CLEAR";
}

export type ItemAction = AddItem | EditItem | ClearItems | SortItems;

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

  if (action.type === "SORT") {
    let sortedItems = [...state];
    localStorage.setItem("sort", action.sort);

    if (action.sort === "byDate") {
      sortedItems.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      localStorage.setItem("items", JSON.stringify(sortedItems));
      return sortedItems;
    }

    if (action.sort === "byName") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
      localStorage.setItem("items", JSON.stringify(sortedItems));
      return sortedItems;
    }

    if (action.sort === "byCompleted") {
      sortedItems.sort((a, b) => +a.completed - +b.completed);
      localStorage.setItem("items", JSON.stringify(sortedItems));
      return sortedItems;
    }
  }

  return state;
};

export default productReducer;
