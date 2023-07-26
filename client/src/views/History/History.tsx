import { Box, Center, Flex } from "@chakra-ui/layout";
import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SearchIconHistory } from "~/components/Icons";

import { Grid, GridItem } from "@chakra-ui/react";
import { OrderCard } from "~/components/OrderCard";
import TableHistory from "./components/TableHistory";

type Props = {};

const HistoryView = (props: Props) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [value, setValue] = useState<string>("");
	const [showDetail, setShowDetail] = useState<boolean>(true);

	useEffect(() => {
		setLoading(false);
	}, []);

	const handleChange = (event: any) => setValue(event.target.value);
	const handleClick = (event: any) => {
		console.log("abc");
	};
	const handleChangeShowDetail = () => {
		setShowDetail(!showDetail);
	};
	return (
		<Center my={8}>
			{loading ? (
				<Box>Loading...</Box>
			) : (
				<Grid
					templateColumns="repeat(3,1fr)"
					gap={6}
					width="full"
				>
					<GridItem
						w="full"
						h="full"
						colSpan={showDetail ? 3 : 2}
						bgColor="white"
						rounded="sm"
						p={6}
					>
						<Flex gap={6}>
							<Box flex={1}>
								<InputGroup
									size="md"
									borderRadius="8px"
								>
									<Input
										size="medium"
										background="bgGray"
										border="none"
										placeholder="Nhập mã đơn hàng"
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
							</Box>
							<Box flex={1}>
								<Input
									size="medium"
									type="date"
									border="none"
									background="bgGray"
									w="auto"
								/>
							</Box>
						</Flex>
						<Box mt={8}>
							<TableHistory handleChangeShowDetail={handleChangeShowDetail} />
						</Box>
					</GridItem>

					<GridItem
						colSpan={1}
						display={showDetail ? "none" : "block"}
						bgColor="white"
						rounded="sm"
					>
						<Box
							p={6}
							onClick={handleChangeShowDetail}
						>
							<OrderCard />
						</Box>
					</GridItem>
				</Grid>
			)}
		</Center>
	);
};

export default HistoryView;
