import React from "react";

import { Box } from "@chakra-ui/layout";
import AddCate from "./components/AddCate";
import TableCate from "./components/TableCate";

type Props = {};

const CateManager = (props: Props) => {
	return (
		<div>
			<Box marginY={"20px"}>
				<AddCate />
			</Box>
			<TableCate />
		</div>
	);
};

export default CateManager;
