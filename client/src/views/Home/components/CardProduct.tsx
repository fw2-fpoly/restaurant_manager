import React from "react";
import { Flex, GridItem, Heading, Spacer, Text } from "@chakra-ui/layout";
import { Button, Img } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { IconAddCart, IconHeart } from "~/components/Icons";

type Props = {};

const CardProduct = (props: Props) => {
  return (
    <GridItem cursor="pointer" position="relative" minH="300px">
      <Img
        position="absolute"
        top={0}
        right={0}
        borderRadius="lg"
        objectFit="cover"
        h="100%"
        src="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium"
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
            Mon an 1
          </Text>
        </CardBody>
        <CardFooter>
          <Button variant="outline" rounded="full" bgColor="gray.100">
            <Text color="black">$10</Text>
            <IconAddCart boxSize={4} color="black" />
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default CardProduct;
