import { Button, Icon, Input, InputGroup } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { BsPlus } from "react-icons/bs";
import ProductContext from "../context";

const Form = () => {
  const { dispatch } = useContext(ProductContext);

  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!ref.current?.value) return;
        if (ref.current) {
          dispatch({ type: "ADD", name: ref.current.value });
          ref.current.value = "";
          ref.current.focus();
        }
      }}
    >
      <InputGroup gap={2}>
        <Input
          ref={ref}
          placeholder="Add new product..."
          variant="filled"
          type="text"
        />
        <Button type="submit">
          <Icon as={BsPlus} boxSize={6}></Icon>
        </Button>
      </InputGroup>
    </form>
  );
};

export default Form;
