import { Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import ProductContext from "../context";
import ItemComponent from "./ItemComponent";

const List = () => {
  const { items } = useContext(ProductContext);

  if (!items.length)
    return (
      <Text textAlign={"center"} color={"gray.500"}>
        List is empty
      </Text>
    );
  return (
    <Flex direction={"column"}>
      {items.map((item) => (
        <ItemComponent item={item} key={item.id}></ItemComponent>
      ))}
    </Flex>
  );
};

export default List;
