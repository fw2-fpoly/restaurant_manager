import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";

type Props = {
  handleOpen: (id: string) => void;
};

const CardOrder = ({ handleOpen }: Props) => {
  return (
    <Box
      bg="#fff"
      w="100%"
      h="150px"
      padding="18px"
      borderRadius="18px"
      _hover={{
        border: "2px solid #ff666d",
        transform: "scale(1.01)",
      }}
      cursor="pointer"
      boxSizing="border-box"
      transition="transform 0.3s ease-in"
      onClick={() => handleOpen("acb")}
    >
      <Flex justifyContent="space-between" h="100%">
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Text>Orders: #545345</Text>
            <Text>Table: 11</Text>
          </Box>
          <Text color="#b4b4b4">Qta: 7</Text>
        </Box>

        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Text color="#b4b4b4" textAlign="end">
            20:30pm
          </Text>
          <HStack marginTop="18px">
            <Box>$40,49</Box>
            <Button bgColor="#47B649" rounded="full" width="66px" height="24px">
              Dine-In
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default CardOrder;
