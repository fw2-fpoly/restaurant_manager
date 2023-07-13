import React from "react";
import { Box, Center, Flex, Spacer } from "@chakra-ui/layout";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

type Props = {};

const CardDetailOder = (props: Props) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      alignItems="center"
      border="none"
    >
      <Image
        objectFit="cover"
        w={24}
        h={24}
        borderRadius="16px"
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <CardBody pr={0} pl={4}>
        <Heading size="md">The perfect latte</Heading>
        <Text py="2" size="xs" color="#ccc">
          Note:
        </Text>
        <Flex justifyContent="space-between" alignItems="center">
          <Text size="xs">$2.87 X 4</Text>
          <Text size="xs">$10.00</Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CardDetailOder;
