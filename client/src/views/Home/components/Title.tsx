import React from "react";
import { Flex, Grid, Text, Box, Spacer } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { IconChevronBack, IconChevronFoward } from "~/components/Icons";

type Props = {
    title:string
};

const Title = (props: Props) => {
  return (
    <Flex alignItems="center" my={10}>
      <Text w="auto" fontSize="lg" fontWeight={900}>
        {props.title}
      </Text>
      <Spacer />
      <Box display="flex" alignItems="center" width="6%">
        <Button
          w="50%"
          bg="none"
          rounded="full"
          color="black.500"
          _hover={{ bg: "primary.100", color: "white" }}
          fontWeight={400}
        >
          <IconChevronBack size={6} />
        </Button>

        <Button
          w="50%"
          bg="none"
          rounded="full"
          color="black.500"
          _hover={{ bg: "primary.100", color: "white" }}
          fontWeight={400}
        >
          <IconChevronFoward size={6} />
        </Button>
      </Box>
    </Flex>
  );
};

export default Title;
