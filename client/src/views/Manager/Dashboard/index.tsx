import { Box, Grid, GridItem, Heading } from "@chakra-ui/layout";
import React from "react";
type Props = {};
import { Bar } from "react-chartjs-2";
import { ChartLine } from "./components/Chart";
const Dashboard = (props: Props) => {
	return (
		<>
			<Heading size="md" mx="auto" my="20px">
				Thống kê
			</Heading>
			<Grid templateColumns="repeat(5, 1fr)" gap={6}>
				<GridItem w="100%" borderRadius={"lg"}>
					Doanhh thu
				</GridItem>
				<GridItem w="100%" borderRadius={"lg"}>
					Số lượng hóa đơn
				</GridItem>
				<GridItem w="100%" borderRadius={"lg"}>
					số lượng nhân viên
				</GridItem>
				<GridItem w="100%" borderRadius={"lg"}>
					Doanh thu ngày
				</GridItem>
				<GridItem w="100%" borderRadius={"lg"}>
					Số lượng danh mục
				</GridItem>
			</Grid>

			<Box marginTop={"20px"}>
				<ChartLine />
			</Box>
		</>
	);
};

export default Dashboard;
