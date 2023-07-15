import React from "react";
import { Box, Center, Flex, Spacer,HStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

type Props = {};

const CardDetailOder = (props: Props) => {
  return (
    <Box marginTop="10px">
      <HStack
        alignItems="flex-start"
        paddingY="14px"
        borderBottom="1px solid  rgb(228 228 231)"
      >
        <Box width="20%" borderRadius="16px" overflow="hidden" marginTop="6px">
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
  );
};

export default CardDetailOder;
