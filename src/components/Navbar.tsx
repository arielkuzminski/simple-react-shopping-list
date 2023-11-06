import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BsMoon, BsSun, BsTrash } from "react-icons/bs";
import ProductContext from "../context";

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
  const { items, dispatch } = useContext(ProductContext);
  const { colorMode, toggleColorMode } = useColorMode();

  const completed = items.filter((item) => item.completed).length;
  const handleChange = (id: string) => {
    dispatch({ type: "SORT", sort: id });
  };
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      width={"full"}
      marginTop={2}
    >
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <BsMoon /> : <BsSun />}
      </Button>
      <Menu>
        <MenuButton as={Button}>Sort by:</MenuButton>
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
