import { Box, Flex } from "@chakra-ui/react";
import "./App.css";
import Item from "./Entities/Item";
import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
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

  return (
    <Flex
      minWidth={"max-content"}
      alignItems={"center"}
      gap={2}
      direction={"column"}
      height={"100vh"}
    >
      <Navbar></Navbar>
      <Box flex="1" overflow={"scroll"}>
        <List items={items}></List>
      </Box>
      <Footer onAddItem={handleAddItem}></Footer>
    </Flex>
  );
}

export default App;
