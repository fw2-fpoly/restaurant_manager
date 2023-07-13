import React from "react";
import { Tag, Center } from "@chakra-ui/react";

type Props = {};

const TableView = (props: Props) => {
	return (
		<Center>
			<Tag
				size="lg"
				fontSize="xs"
			>
				Home
			</Tag>
		</Center>
	);
};

export default TableView;
