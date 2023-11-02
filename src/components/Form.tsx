import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  addItem: (name: string) => void;
}

const Form = ({ addItem }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          addItem(ref.current.value);
          ref.current.value = "";
        }
      }}
    >
      <InputGroup>
        {/* <InputLeftElement children={<BsSearch />} /> */}
        <Input ref={ref} placeholder="Add new product..." variant="filled" />
      </InputGroup>
    </form>
  );
};

export default Form;
