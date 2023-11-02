import { Box, Flex } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";

function App() {
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
        <List></List>
      </Box>
      <Footer></Footer>
    </Flex>
  );
}

export default App;
