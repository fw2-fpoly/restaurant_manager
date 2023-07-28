import { Flex } from "@chakra-ui/layout";
import { Button, IconButton, Input, InputGroup, InputRightElement, Select } from "@chakra-ui/react";
import React from "react";
import { SearchIconHistory } from "~/components/Icons";

type Props = {
	filter: string;
	setFilter: (s: string) => void;
};

const FilterGroup = ({ filter, setFilter, ...props }: Props) => {
	return (
		<Flex justifyContent="space-between">
			<Select
				w="200px"
				onChange={(e) => setFilter(e.target.value)}
			>
				<option value="">Tất cả</option>
				<option value="confirmed">Đã xác nhận</option>
				<option value="processing">Đang làm</option>
				<option value="delivered">Đã xong</option>
				<option value="cancelled">Đã hủy</option>
			</Select>
			<InputGroup
				size="md"
				w={60}
				borderRadius="8px"
			>
				<Input
					type="text"
					size="medium"
					placeholder="Tìm theo bàn..."
					background="bgGray"
					border="none"
				/>
				<InputRightElement width="4rem">
					<IconButton
						fontSize="20px"
						colorScheme="blue"
						aria-label="Search database"
						icon={<SearchIconHistory />}
						backgroundColor="none"
						color="black"
					/>
				</InputRightElement>
			</InputGroup>
		</Flex>
	);
};

export default FilterGroup;
