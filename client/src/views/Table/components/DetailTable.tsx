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
  handleCloseDetailTable: () => void;
};

const DetailTable = ({ handleCloseDetailTable }: Props) => {
  return (
    <Box>
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
      <Box marginTop="10px">
        <HStack
          alignItems="flex-start"
          paddingY="14px"
          borderBottom="1px solid  rgb(228 228 231)"
        >
          <Box
            width="20%"
            borderRadius="16px"
            overflow="hidden"
            marginTop="6px"
          >
            <Image
              src="https://i.pinimg.com/originals/60/10/4a/60104a06b2c5da9e7ab683b3d6cfdd15.jpg"
              alt="Anh do an"
            ></Image>
          </Box>
          <Box width="80%">
            <Text fontSize="md" fontWeight="800">
              Orange Juice
            </Text>
            <Text fontSize="xs" mt="2px" color="#b4b4b4">
              Note: Less ice
            </Text>
            <Text fontSize="xs" mt="2px" color="#b4b4b4">
              Extras: Extra Mazaredo
            </Text>
            <Flex justifyContent="space-between" marginTop="10px">
              <HStack>
                <Text fontSize="sm" color="rgb(113 113 122)">
                  $2,87
                </Text>
                <Text fontSize="xs" color="#b4b4b4">
                  x4
                </Text>
              </HStack>
              <Text fontSize="sm">$11,48</Text>
            </Flex>
          </Box>
        </HStack>
      </Box>
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
          <Flex mt={4} alignItems={"center"} gap={4}>
            <Button
              px={3}
              py={4}
              w="100%"
              color="black"
              bgColor="none"
              border="1px solid green"
              borderRadius={8}
              onClick={handleCloseDetailTable}
            >
              Close
            </Button>
            <Button borderRadius={8} w="full">
              Pay Bills
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailTable;
