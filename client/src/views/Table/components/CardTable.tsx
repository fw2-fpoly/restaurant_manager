import React from "react";
import { Box, Center, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";

type Props = {
  item: any;
};

const CardTable = (props: Props) => {
  return (
    <Box
      width="30%"
      minH="150px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {props.item.size === 6 && (
        <Flex w="100%" my={2} gap={2} justifyContent="center">
          <Box
            width="20%"
            height="20%"
            p={2}
            borderRadius={8}
            bgColor="gray.200"
          ></Box>
          <Box
            width="20%"
            height="20%"
            p={2}
            borderRadius={8}
            bgColor="gray.200"
          ></Box>
          <Box
            width="20%"
            height="20%"
            p={2}
            borderRadius={8}
            bgColor="gray.200"
          ></Box>
        </Flex>
      )}
      {props.item.size === 4 && (
        <Flex w="100%" my={2} gap={2} justifyContent="center">
          <Box
            width="20%"
            height="20%"
            p={2}
            borderRadius={8}
            bgColor="gray.200"
          ></Box>
          <Box
            width="20%"
            height="20%"
            p={2}
            borderRadius={8}
            bgColor="gray.200"
          ></Box>
        </Flex>
      )}
      {props.item.size === 2 && (
        <Flex w="100%" my={2} gap={2} justifyContent="center">
          <Box
            width="20%"
            height="20%"
            p={2}
            borderRadius={8}
            bgColor="gray.200"
          ></Box>
        </Flex>
      )}
      <Box
        border={
          props.item.status == "check-in"
            ? `4px solid red`
            : `4px solid yellow`
        }
        borderRadius={16}
        w={props.item.size == 2 ? `30%` : props.item.size == 4 ? `50%` : `80%`}
        height="60%"
      >
        <Text textAlign="center" lineHeight={10}>
          T1
        </Text>
        <Text textAlign="center">#99999</Text>
      </Box>
      {props.item.size === 6 && (
        <Flex w="100%" my={2} gap={2} justifyContent="center">
          <Box
            width="20%"
            height="20%"
            p={2}
            borderRadius={8}
            bgColor="gray.200"
          ></Box>
          <Box
            width="20%"
            height="20%"
            p={2}
            borderRadius={8}
            bgColor="gray.200"
          ></Box>
          <Box
            width="20%"
            height="20%"
            p={2}
            borderRadius={8}
            bgColor="gray.200"
          ></Box>
        </Flex>
      )}
      {props.item.size === 4 && (
        <Flex w="100%" my={2} gap={2} justifyContent="center">
          <Box
            width="20%"
            height="20%"
            p={2}
            borderRadius={8}
            bgColor="gray.200"
          ></Box>
          <Box
            width="20%"
            height="20%"
            p={2}
            borderRadius={8}
            bgColor="gray.200"
          ></Box>
        </Flex>
      )}
      {props.item.size === 2 && (
        <Flex w="100%" my={2} gap={2} justifyContent="center">
          <Box
            width="20%"
            height="20%"
            p={2}
            borderRadius={8}
            bgColor="gray.200"
          ></Box>
        </Flex>
      )}
    </Box>
  );
};

export default CardTable;
