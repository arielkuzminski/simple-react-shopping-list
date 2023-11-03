import { Button, Icon, Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsPlus } from "react-icons/bs";

interface Props {
  addItem: (name: string) => void;
}

const Form = ({ addItem }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!ref.current?.value) return;
        if (ref.current) {
          addItem(ref.current.value);
          ref.current.value = "";
        }
      }}
    >
      <InputGroup gap={2}>
        <Input ref={ref} placeholder="Add new product..." variant="filled" />
        <Button type="submit">
          <Icon as={BsPlus} boxSize={6}></Icon>
        </Button>
      </InputGroup>
    </form>
  );
};

export default Form;
