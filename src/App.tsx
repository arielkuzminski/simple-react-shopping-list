import { Box, Container, Flex } from "@chakra-ui/react";
import { useReducer, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";
import ProductContext from "./context";
import productReducer from "./reducer";

function App() {
  const [sorting, setSorting] = useState("byDate");

  const localStorageItems = localStorage.getItem("items");
  const storedItems = localStorageItems ? JSON.parse(localStorageItems) : [];

  const [items, dispatch] = useReducer(productReducer, storedItems);

  const handleSorting = () => {
    if (sorting === "byDate") {
      return items.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }

    if (sorting === "byName") {
      return items.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sorting === "byCompleted") {
      return items.sort((a, b) => +a.completed - +b.completed);
    }

    return items;
  };

  const sortedItems = handleSorting();

  return (
    <ProductContext.Provider value={{ items, dispatch }}>
      <Container>
        <Flex
          minWidth={"max-content"}
          alignItems={"center"}
          gap={2}
          direction={"column"}
          height={"100dvh"}
          maxW={"100dvw"}
        >
          <Navbar
            onSort={setSorting}
            onClearItems={() => dispatch({ type: "CLEAR" })}
            count={items.length}
            completed={items.filter((item) => item.completed).length}
          ></Navbar>
          <Box flex="1" overflow={"auto"} width={"full"} padding={2}>
            <List
              onEditItem={(item) => dispatch({ type: "EDIT", item })}
              items={sortedItems}
            ></List>
          </Box>
          <Footer></Footer>
        </Flex>
      </Container>
    </ProductContext.Provider>
  );
}

export default App;
