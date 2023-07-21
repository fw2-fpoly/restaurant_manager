import React from "react";
import TableProducts from "./components/TableProducts";
import Addproduct from "./components/Addproduct";
import { Box } from "@chakra-ui/layout";

type Props = {};

const ProductManager = (props: Props) => {
	return (
		<div>
			<Box marginY={"20px"}>
				<Addproduct />
			</Box>
			<TableProducts />
		</div>
	);
};

export default ProductManager;
