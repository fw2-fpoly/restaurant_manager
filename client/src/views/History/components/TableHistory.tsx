import { Code, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { IconButton, Menu, MenuButton, MenuItem, MenuList, Tag } from "@chakra-ui/react";
import { MoreIcon } from "~/components/Icons";

type Props = {
	handleChangeShowDetail: () => void;
};
const TableHistory = (props: Props) => {
	return (
		<TableContainer
			background="#ffffff"
			p={0}
		>
			<Table
				size="md"
				fontStyle="inherit"
			>
				<Thead>
					<Tr
						fontSize="xs"
						fontWeight="bold"
					>
						<Th>Mã đơn hàng</Th>
						<Th>Khách hàng</Th>
						<Th>Ngày đặt</Th>
						<Th>Bàn</Th>
						<Th>Tổng tiền</Th>
						<Th>Trạng thái thanh toán</Th>
						<Th>Phương thức thanh toán</Th>
						<Th>Action</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr
						fontSize="sm"
						fontWeight="medium"
					>
						<Td>#9999</Td>
						<Td>Nguoi Khong Ten</Td>
						<Td>27-07-2023 19:30 PM</Td>
						<Td>
							<Code>T11</Code>
						</Td>
						<Td fontWeight="bold">1.000.000 VNĐ</Td>
						<Td>
							<Code
								rounded="full"
								color="#0abb87"
								background="#0abb871a"
								fontWeight="bold"
							>
								Đã thanh toán
							</Code>
						</Td>
						<Td>
							<Code>MOMO</Code>
						</Td>
						<Td>
							<Menu>
								<MenuButton
									as={IconButton}
									aria-label="Options"
									icon={<MoreIcon />}
									variant="outline"
									color="black"
									backgroundColor="none"
									fontSize="26px"
									border="none"
								/>
								<MenuList>
									<MenuItem>Xóa</MenuItem>
									<MenuItem onClick={props.handleChangeShowDetail}>Chi tiết</MenuItem>
								</MenuList>
							</Menu>
						</Td>
					</Tr>
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default TableHistory;
