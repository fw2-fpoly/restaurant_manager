import React from "react";
import { Box, Flex, HStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import CardDetailOder from "./CardDetailOder";
import { Button } from "@chakra-ui/react";

type Props = {
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
};

const BoxDetailHistory = (props: Props) => {
  return (
    <Box p={4}>
      <Box>
        <Flex justifyContent="space-between">
          <Box>
            <Text color="#b4b4b4">Orders ID</Text>
            <Text>#534534</Text>
          </Box>
          <Box>
            <Text color="#b4b4b4">Table</Text>
            <Text textAlign="end">T1</Text>
          </Box>
        </Flex>
      </Box>
      <CardDetailOder/>
      <Box paddingY="26px">
        <Box borderBottom="1px solid  rgb(248 250 252)" paddingBottom="10px">
          <Flex justifyContent="space-between">
            <Text fontSize="xs" color="#D0D0D0">
              Items(7)
            </Text>
            <Text fontSize="sm">$28,67</Text>
          </Flex>
          <Flex justifyContent="space-between" marginTop="10px">
            <Text fontSize="xs" color="#D0D0D0">
              Tax(10%)
            </Text>
            <Text fontSize="sm">$2,86</Text>
          </Flex>
        </Box>
        <Flex justifyContent="space-between" marginTop="24px">
          <Text fontSize="xs" color="#D0D0D0">
            Total
          </Text>
          <Text fontSize="sm">$31,53</Text>
        </Flex>
        <Box>
          <Text fontSize="lg" my="4">
            Payment Methods
          </Text>
          <Flex justifyContent="space-between">
            <Button color="text.300" bgColor="#dbdbd6" rounded="lg" size="sm">
              Cash
            </Button>
          </Flex>
          <Text fontSize="lg" my="4">
            User ID
          </Text>
          <Flex justifyContent="space-between">
            <Button color="text.300" bgColor="#dbdbd6" rounded="lg" size="sm">
              #1111
            </Button>
          </Flex>
          <Button rounded="12px" mt="26px" w="full">
            Pay Bills
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BoxDetailHistory;
