import { Box, Container, Flex } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";
import useItems from "./hooks/useItems";

function App() {
  const { items, handleAddItem, editItem, clearItems } = useItems();

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
        <Navbar onClearItems={clearItems} count={items.length}></Navbar>
        <Box flex="1" overflow={"auto"} width={"full"} padding={2}>
          <List onEditItem={editItem} items={items}></List>
        </Box>
        <Footer onAddItem={handleAddItem}></Footer>
      </Flex>
    </Container>
  );
}

export default App;
