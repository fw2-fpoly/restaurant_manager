import { Box } from "@chakra-ui/layout";
import React from "react";
import TableStaffs from "./components/TableStaffs";
import AddStaff from "./components/AddStaff";

type Props = {};

const StaffsManager = (props: Props) => {
	return (
		<div>
			<Box marginY={"20px"}>
				<AddStaff />
			</Box>
			<TableStaffs />
		</div>
	);
};

export default StaffsManager;
