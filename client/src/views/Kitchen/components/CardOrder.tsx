import React from "react";
import {
  Box,
  Code,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";

type Props = {
};

const CardOrder = (props: Props) => {
  return (
    <Box bg="white" w="100%" p={6} rounded="sm" cursor="pointer">
      <Flex justifyContent="space-between">
        <Box fontSize="sm" fontWeight="semibold">
          <Text color="text.200">
            Mã đơn hàng:{" "}
            <Code color="#fe3464" background="#fe34641a">
              #545345
            </Code>
          </Text>
          <Box pt={2} pb={1}>
            <Text color="text.200">
              Bàn:{" "}
              <Code color="#fe3464" background="#fe34641a">
                T11
              </Code>
            </Text>
            <Text color="text.200">
              Khách hàng:{" "}
              <Code color="#fe3464" background="#fe34641a">
                7
              </Code>
            </Text>
          </Box>
        </Box>
        <Box>
          <Text
            color="text.200"
            textAlign="end"
            fontSize="sm"
            fontWeight="semibold"
          >
            20:30 PM
          </Text>
          <Flex pt={2} pb={1} direction="column" gap={1}>
            <Code
              color="#0abb87"
              background="#0abb871a"
              rounded="full"
              fontSize="sm"
            >
              Đang xử lý
            </Code>
            <Text textAlign="end" fontSize="sm" fontWeight="bold">
              100.000 VNĐ
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CardOrder;
