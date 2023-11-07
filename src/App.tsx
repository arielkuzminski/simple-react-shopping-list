import { Box, Container, Flex } from "@chakra-ui/react";
import "./App.css";
import ProductProvider from "./ProductProvider";
import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Container>
      <Flex
        alignItems={"center"}
        gap={2}
        direction={"column"}
        height={"100dvh"}
      >
        <ProductProvider>
          <Navbar></Navbar>
          <Box
            flex="1"
            overflow={"auto"}
            padding={2}
            maxWidth={"100dvw"}
            width={"full"}
          >
            <List></List>
          </Box>
          <Footer></Footer>
        </ProductProvider>
      </Flex>
    </Container>
  );
}

export default App;
