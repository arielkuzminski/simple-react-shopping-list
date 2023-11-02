import { Box } from "@chakra-ui/react";
import Form from "./Form";

interface Props {
  onAddItem: (name: string) => void;
}

const Footer = ({ onAddItem }: Props) => {
  const handleAddItem = (name: string) => onAddItem(name);
  return (
    <Box padding={5}>
      <Form addItem={handleAddItem} />
    </Box>
  );
};

export default Footer;
