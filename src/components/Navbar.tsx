import { Button, useColorMode, Flex, Spacer } from "@chakra-ui/react";
import { BsTrash, BsSun, BsMoon } from "react-icons/bs";

interface Props {
  count: number;
  onClearItems: () => void;
}

const Navbar = ({ onClearItems, count }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" width={"full"}>
      <Button onClick={toggleColorMode} margin={2}>
        {colorMode === "light" ? <BsMoon /> : <BsSun />}
      </Button>
      <Spacer />

      {count > 0 && <Button
        rightIcon={<BsTrash />}
        colorScheme="blue"
        variant="outline"
        onClick={onClearItems}
        margin={2}
      >
        Clear completed
      </Button>}
    </Flex>
  );
};

export default Navbar;
