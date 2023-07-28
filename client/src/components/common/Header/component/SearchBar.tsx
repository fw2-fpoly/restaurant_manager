import { InputGroup, Input, InputRightElement } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { Button, FormControl } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "~/components/Icons";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <FormControl>
      <InputGroup w="90%">
        <Input placeholder="Tìm kiếm" borderRadius="8px" />
        <InputRightElement>
          <Button
            _hover={{ bg: "primary.100", color: "#ccc", borderRadius: "full" }}
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
    </FormControl>
  );
};

export default SearchBar;
