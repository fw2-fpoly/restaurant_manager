import React from "react";
import { Button, Grid, GridItem } from "@chakra-ui/react";

type Props = {};

const OrderView = (props: Props) => {
	return (
		<Grid templateColumns="repeat(12, 1fr)">
			<GridItem
				colSpan={9}
				bg="red.100"
			>
				1
			</GridItem>
			<GridItem
				colSpan={3}
				bg="green.100"
			>
				2
			</GridItem>
		</Grid>
	);
};

export default OrderView;
