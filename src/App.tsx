import { Box, Container, Flex } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";
import useItems from "./hooks/useItems";
import { useState } from "react";

function App() {
  const { items, handleAddItem, editItem, clearItems } = useItems();
  const [sorting, setSorting] = useState("byDate");

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
          onClearItems={clearItems}
          count={items.length}
          completed={items.filter((item) => item.completed).length}
        ></Navbar>
        <Box flex="1" overflow={"auto"} width={"full"} padding={2}>
          <List onEditItem={editItem} items={sortedItems}></List>
        </Box>
        <Footer onAddItem={handleAddItem}></Footer>
      </Flex>
    </Container>
  );
}

export default App;
