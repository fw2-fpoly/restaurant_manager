import { InputGroup, Input, InputRightElement } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { Button, FormControl } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "~/components/Icons";

type Props = {};

const SearchBar = (props: Props) => {
	return (
		<FormControl border="none">
			<InputGroup w="100%">
				<Input
					placeholder="Tìm kiếm"
					border="none"
				/>
				<InputRightElement>
					<Button
						_hover={{ bg: "primary.100", color: "#ccc", borderRadius: "full" }}
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
