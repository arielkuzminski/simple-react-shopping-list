import { Flex, Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ItemComponent from "./ItemComponent";

const List = () => {
  const { items } = useProducts();

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
