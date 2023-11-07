import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsMoon, BsSun, BsTrash } from "react-icons/bs";
import useProducts from "../hooks/useProducts";

const sorting = [
  {
    id: "byDate",
    title: "Creation date",
  },
  {
    id: "byName",
    title: "Name",
  },
  {
    id: "byCompleted",
    title: "Completion",
  },
];

const Navbar = () => {
  const { items, dispatch } = useProducts();
  const { colorMode, toggleColorMode } = useColorMode();
  const [sorted, setSorted] = useState(() => {
    const localStorageSort = localStorage.getItem("sort") ?? "byName";
    return localStorageSort;
  });

  const completed = items.filter((item) => item.completed).length;
  const handleChange = (id: string) => {
    setSorted(id);
    dispatch({ type: "SORT", sort: id });
  };
  return (
    <Flex
      alignItems="center"
      gap="2"
      width={"full"}
      marginTop={2}
      wrap={"wrap"}
      maxWidth={"100dvw"}
    >
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <BsMoon /> : <BsSun />}
      </Button>
      <Menu>
        <MenuButton as={Button}>
          Sort by: {sorting.find((i) => i.id === sorted)?.title}
        </MenuButton>
        <MenuList>
          {sorting.map((menuItem) => (
            <MenuItem
              key={menuItem.id}
              onClick={() => handleChange(menuItem.id)}
            >
              {menuItem.title}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      {completed > 0 && (
        <Button
          rightIcon={<BsTrash />}
          colorScheme="blue"
          variant="outline"
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          Clear completed
        </Button>
      )}
    </Flex>
  );
};

export default Navbar;
