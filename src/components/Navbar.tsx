import { Stack, Button } from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";

interface Props {
  onClearItems: () => void;
}

const Navbar = ({ onClearItems }: Props) => {
  return (
    <Stack direction="row" spacing={4} padding={4}>
      <Button
        rightIcon={<BsTrash />}
        colorScheme="blue"
        variant="outline"
        onClick={onClearItems}
      >
        Clear
      </Button>
    </Stack>
  );
};

export default Navbar;
