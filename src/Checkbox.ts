import { checkboxAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

// default base style from the Checkbox theme
const baseStyle = definePartsStyle({
  control: {
    padding: 3,
    borderRadius: 2,
  },
});

const sizes = {
  xl: definePartsStyle({
    control: defineStyle({
      boxSize: 1,
    }),
    label: defineStyle({
      fontSize: "2xl",
    }),
  }),
};

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
});
