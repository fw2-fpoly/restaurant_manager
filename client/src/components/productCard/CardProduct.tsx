import React from "react";
import { Flex, GridItem, Spacer, Text } from "@chakra-ui/layout";
import { Button, Img } from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { IconAddCart, IconHeart } from "~/components/Icons";
import { IProduct } from "~/interface/products";

type Props = {
  handleAddProduct: (item:IProduct) => void;
  item:IProduct
};

const CardProduct = ({ handleAddProduct,item }: Props) => {
  return (
    <GridItem cursor="pointer" position="relative" minH="300px">
      <Img
        position="absolute"
        top={0}
        right={0}
        borderRadius="lg"
        objectFit="cover"
        h="100%"
        src={item.image}
        alt=""
      />
      <Card
        w="100%"
        h="100%"
        bgColor="rgba(0,0,0,0.3)"
        _hover={{
          bgColor: "rgba(0,0,0,0)",
        }}
      >
        <Flex>
          <Spacer />
          <Button
            bg="gray.100"
            rounded="full"
            p={2}
            color="black.500"
            size="xs"
            m={2}
          >
            <IconHeart boxSize={4} color="black" />
          </Button>
        </Flex>
        <CardBody>
          <Text color="text.100" fontSize="20px">
            {item.name}
          </Text>
        </CardBody>
        <CardFooter>
          <Button
            variant="outline"
            rounded="full"
            bgColor="gray.100"
            onClick={()=>handleAddProduct(item)}
          >
            <Text color="black">${item.price}</Text>
            <IconAddCart boxSize={4} color="black" />
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default CardProduct;
