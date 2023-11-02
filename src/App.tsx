import { Box, Flex } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";
import useItems from "./hooks/useItems";

function App() {
  const { items, handleAddItem, editItem, clearItems } = useItems();

  return (
    <Flex
      minWidth={"max-content"}
      alignItems={"center"}
      gap={2}
      direction={"column"}
      height={"100vh"}
      maxW={"100vw"}
    >
      <Navbar onClearItems={clearItems}></Navbar>
      <Box flex="1" overflow={"auto"} width={"full"} padding={2}>
        <List onEditItem={editItem} items={items}></List>
      </Box>
      <Footer onAddItem={handleAddItem}></Footer>
    </Flex>
  );
}

export default App;
