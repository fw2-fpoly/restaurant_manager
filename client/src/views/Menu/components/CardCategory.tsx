import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { CakeIcon } from "~/components/Icons";
import { ICategory } from "~/interface/products";

type Props = {
  category: ICategory;
};

const CardCategory = ({ category }: Props) => {
  return (
    <Button
      border="1px solid black"
      size="lager"
      bg="gray.100"
      borderRadius="8px"
      color="black.500"
      _hover={{ bg: "primary.100", color: "white" }}
      leftIcon={<CakeIcon boxSize={"10"} />}
    >
      <Text>{category.title}</Text>
    </Button>
  );
};

export default CardCategory;
