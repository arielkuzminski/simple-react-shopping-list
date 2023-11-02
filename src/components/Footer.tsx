import { Box, Input } from "@chakra-ui/react";
import Form from "./Form";

interface Props {
  onAddItem: (name: string) => void;
}

const Footer = ({ onAddItem }: Props) => {
  const handleAddItem = (name: string) => onAddItem(name);
  return (
    <Box padding={5}>
      <Form addItem={handleAddItem} />
      {/* <Input placeholder="Add new product" onChange={handleChange} /> */}
    </Box>
  );
};

export default Footer;
