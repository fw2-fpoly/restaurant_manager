import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import CardDetailOder from "./CardDetailOder";
import { IconButton, Tag, Button } from "@chakra-ui/react";

type Props = {
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
};

const BoxDetailHistory = (props: Props) => {
  return (
    <Box
      width="full"
      height="full"
      p={4}
      borderRadius="8px"
      background="white"
      boxShadow="md"
    >
      <Flex justifyContent="space-between">
        <Box>
          <Text fontSize="lg">Orders ID</Text>
          <Text fontSize="md">#99999</Text>
        </Box>
        <Box>
          <Heading as="h2" size="xl">
            Detail Orders
          </Heading>
        </Box>
        <Box>
          <Text fontSize="lg">Table</Text>
          <Text fontSize="md">T11</Text>
        </Box>
      </Flex>
      <Box my="35px">
        <Text fontSize="lg">List Products</Text>
        <Box maxHeight="500px" overflowY="scroll">
          <CardDetailOder />
          <CardDetailOder />
          <CardDetailOder />
          <CardDetailOder />
          <CardDetailOder />
        </Box>
      </Box>
      <Box my="25px">
        <Flex justifyContent="space-between" my={2}>
          <Text fontSize="lg">Items(7)</Text>
          <Text fontSize="md">$28,67</Text>
        </Flex>
        <Flex justifyContent="space-between" my={2}>
          <Text fontSize="lg">Tax(10%)</Text>
          <Text fontSize="md">$2,67</Text>
        </Flex>
        <Flex justifyContent="space-between" my={2}>
          <Text fontSize="lg">Total</Text>
          <Text fontSize="md">$31.05</Text>
        </Flex>
      </Box>
      <Box>
        <Text fontSize="lg" my={2}>
          Payment Methods:
        </Text>
        <Tag>Cash</Tag>
      </Box>
      <Box>
        <Text fontSize="lg" my={2}>
          ID User:
        </Text>
        <Tag>#123456</Tag>
      </Box>
      <Flex justify="center" my="25px">
        <Button
          w="90%"
          onClick={() => props.setShowDetail(true)}
          fontSize="lg"
          fontWeight={600}
        >
          Close
        </Button>
      </Flex>
    </Box>
  );
};

export default BoxDetailHistory;
