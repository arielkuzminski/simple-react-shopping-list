import { Box, Flex } from "@chakra-ui/react";
import "./App.css";
import Item from "./Entities/Item";
import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";

const items: Item[] = [
  {
    id: crypto.randomUUID().toString(),
    completed: false,
    date: new Date(),
    name: "Mleko",
  },
  {
    id: crypto.randomUUID().toString(),
    completed: false,
    date: new Date(),
    name: "Jajka",
  },
];

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
        <List items={items}></List>
      </Box>
      <Footer></Footer>
    </Flex>
  );
}

export default App;
