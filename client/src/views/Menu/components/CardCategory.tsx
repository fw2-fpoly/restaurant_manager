import { Button, Text,Image  } from "@chakra-ui/react";
import React from "react";
import { CakeIcon } from "~/components/Icons";
import { ICategory } from "~/interface/products";

type Props = {
  category: ICategory;
};

const CardCategory = ({ category }: Props) => {
  return (
    <Button
      size="lager"
      bg="white"
      borderRadius="8px"
      color="black.500"
      py={14}
      _hover={{ bg: "primary.100", color: "white" }}
    >
      <Image />
      <Text>{category.title}</Text>
    </Button>
  );
};

export default CardCategory;
