import { Box } from "@chakra-ui/layout";
import { useRadio, Button, IconButton, Text } from "@chakra-ui/react";

type Props = {
  item: any;
};

const RadioCard = ({ item, ...radioProps }: Props) => {

  const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
    useRadio(radioProps);

  return (
    <Box as={"label"} {...htmlProps}>
      <input {...getInputProps()} hidden />
      <Button
        w="100%"
        h="auto"
        color="text.300"
        bgColor="gray.100"
        rounded="lg"
        px={2}
        py={4}
        display="flex"
        flexDirection="column"
        border={state.isChecked ? "1px solid black" : "none"}
        {...getRadioProps()}
      >
        <IconButton
          aria-label="payment"
          icon={item.icon}
          background="none"
          color="black"
        />
        <Text color="green" {...getLabelProps()}>
          {item.name}
        </Text>
      </Button>
    </Box>
  );
};

export default RadioCard;
