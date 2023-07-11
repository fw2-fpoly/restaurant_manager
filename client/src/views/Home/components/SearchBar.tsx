import { InputGroup, Input, InputRightElement } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "~/components/Icons";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <form action="">
      <InputGroup w="100%">
        <Input placeholder="Tìm kiếm" borderRadius="full" />
        <InputRightElement>
          <Button
            _hover={{ bg: "primary.100", color: "white", borderRadius: "full" }}
            size="md"
            borderRadius="full"
            bg="none"
            color="blackAlpha.600"
          >
            <Flex justifyItems="center">
              <SearchIcon size={22} />
            </Flex>
          </Button>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default SearchBar;
