import { Flex, Text } from "@chakra-ui/react";
import Item from "../Entities/Item";
import ItemComponent from "./ItemComponent";

interface Props {
  items: Item[];
  onEditItem: (item: Item) => void;
}

const List = ({ items, onEditItem }: Props) => {
  if (!items.length)
    return (
      <Text textAlign={"center"} color={"gray.500"}>
        List is empty
      </Text>
    );
  return (
    <Flex direction={"column"}>
      {items.map((item) => (
        <ItemComponent
          item={item}
          key={item.id}
          onEditItem={onEditItem}
        ></ItemComponent>
      ))}
    </Flex>
  );
};

export default List;
