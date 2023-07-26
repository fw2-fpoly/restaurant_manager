import { Flex, Grid, GridItem } from "@chakra-ui/layout";
import { IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import { OrderCard } from "~/components/OrderCard";
import { dataTable } from ".";
import CardTable from "./components/CardTable";

type Props = {};

const TableView = (props: Props) => {
	const [open, setOpen] = useState<boolean>(false);

	const handleOpenDetailTable = (id: string | any) => {
		console.log(id);
		setOpen(true);
	};
	const handleCloseDetailTable = () => {
		setOpen(false);
	};
	return (
		<Grid
			gap={4}
			gridTemplateColumns="repeat(12,1fr)"
			my={8}
		>
			<GridItem
				colSpan={!open ? 12 : 8}
				px={3}
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				flexDirection="column"
			>
				<Flex
					w="100%"
					py={6}
					gap={4}
					flexWrap="wrap"
					bgColor="white"
					rounded="md"
				>
					{dataTable.map((item) => {
						return (
							<CardTable
								item={item}
								key={item.id}
								handleOpenDetailTable={handleOpenDetailTable}
							/>
						);
					})}
				</Flex>
				<Grid
					w="50%"
					p={4}
					mt={8}
					gridTemplateColumns="repeat(4,1fr)"
					bgColor="white"
					rounded="md"
				>
					<GridItem
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<IconButton
							aria-label="status"
							bgColor="yellow"
							border="1px"
							w={5}
							h={5}
							rounded="full"
						/>
						<Text
							mx={2}
							fontSize="sm"
						>
							Chờ
						</Text>
					</GridItem>
					<GridItem
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<IconButton
							aria-label="status"
							bgColor="red"
							border="1px"
							w={5}
							h={5}
							rounded="full"
						/>
						<Text
							mx={2}
							fontSize="sm"
						>
							Có Người
						</Text>
					</GridItem>
					<GridItem
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<IconButton
							aria-label="status"
							bgColor="#37b24d"
							border="1px"
							w={5}
							h={5}
							rounded="full"
						/>
						<Text
							mx={2}
							fontSize="sm"
						>
							Trống
						</Text>
					</GridItem>
					<GridItem
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<IconButton
							aria-label="status"
							bgColor="red"
							border="1px"
							w={5}
							h={5}
							rounded="full"
						/>
						<Text
							mx={2}
							fontSize="sm"
						>
							Trống
						</Text>
					</GridItem>
				</Grid>
			</GridItem>

			<GridItem
				colSpan={4}
				display={!open ? "none" : "block"}
			>
				<Flex
					flexDirection="column"
					alignItems="center"
					justifyContent="space-around"
					w="100%"
					bgColor="white"
					rounded="md"
					height="100%"
					p={6}
				>
					<OrderCard handleClose={handleCloseDetailTable} />
				</Flex>
			</GridItem>
		</Grid>
	);
};

export default TableView;
