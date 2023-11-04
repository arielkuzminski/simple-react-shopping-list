import {
  Button,
  useColorMode,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsTrash, BsSun, BsMoon } from "react-icons/bs";

interface Props {
  count: number;
  completed: number;
  onClearItems: () => void;
  onSort: (id: string) => void;
}

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

const Navbar = ({ onClearItems, onSort, count, completed }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const handleChange = (id: string) => {
    onSort(id);
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

      {count > 0 && completed > 0 && (
        <Button
          rightIcon={<BsTrash />}
          colorScheme="blue"
          variant="outline"
          onClick={onClearItems}
        >
          Clear completed
        </Button>
      )}
    </Flex>
  );
};

export default Navbar;
