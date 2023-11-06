import { Box, Container, Flex } from "@chakra-ui/react";
import { useReducer } from "react";
import "./App.css";
import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";
import ProductContext from "./context";
import productReducer from "./reducer";

function App() {
  const localStorageItems = localStorage.getItem("items");
  const storedItems = localStorageItems ? JSON.parse(localStorageItems) : [];

  const [items, dispatch] = useReducer(productReducer, storedItems);

  return (
    <Container>
      <Flex
        alignItems={"center"}
        gap={2}
        direction={"column"}
        height={"100dvh"}
      >
        <ProductContext.Provider value={{ items, dispatch }}>
          <Navbar></Navbar>
          <Box
            flex="1"
            overflow={"auto"}
            padding={2}
            maxWidth={"100dvw"}
            width={"full"}
          >
            <List items={items}></List>
          </Box>
          <Footer></Footer>
        </ProductContext.Provider>
      </Flex>
    </Container>
  );
}

export default App;
