import {
	TableContainer,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	Menu,
	MenuButton,
	IconButton,
	MenuList,
	MenuItem,
	Button,
	useDisclosure,
	Code,
} from "@chakra-ui/react";
import { MoreIcon } from "~/components/Icons";
import { useEffect, useState } from "react";
import OrderDetailModal from "./OrderDetailModal";

type Props = {
	filter: string;
};

type OrderType = {
	estime_total: number;
	status: string;
	items: any[];
	table_id: string;
};

const OrderList = ({ filter, ...props }: Props) => {
	const [showedOrders, setShowedOrders] = useState<OrderType[]>([]);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedOrder, setSelectedOrder] = useState<OrderType>({});
	// useEffect(() => {
	// 	if (!filter) {
	// 		setShowedOrders(orders);
	// 		return;
	// 	}
	// 	setShowedOrders(orders?.filter((o) => o.status == filter));
	// }, [filter]);

	return (
		<>
			<OrderDetailModal
				isOpen={isOpen}
				onClose={onClose}
				orderDetail={selectedOrder}
			/>
			<TableContainer
				mt={8}
				rounded="sm"
			>
				<Table>
					<Thead>
						<Tr
							fontSize="xs"
							color="text.200"
						>
							<Th>#</Th>
							<Th>Bàn</Th>
							<Th>Khách hàng</Th>
							<Th>Số món</Th>
							<Th>Ước tính</Th>
							<Th>trạng thái</Th>
							<Th>Thông tin</Th>
						</Tr>
					</Thead>

					<Tbody>
						{showedOrders.map((order) => (
							<>
								<OrderDetailModal
									isOpen={isOpen}
									onClose={onClose}
									orderDetail={order}
								/>
								<Tr
									fontSize="sm"
									color="text.200"
									fontWeight="semibold"
								>
									<Td>1</Td>
									<Td>{order.table_id}</Td>
									<Td>Leader {`<3`}</Td>
									<Td>{order.items.reduce((total, item) => total + item.quantity, 0)}</Td>
									<Td>{order.estime_total}m</Td>
									<Td>
										<Code>Đang Nấu</Code>
									</Td>
									<Td>
										<Button
											size="small"
											onClick={() => {
												onOpen();
												setSelectedOrder(order);
											}}
										>
											Chi tiết
										</Button>
									</Td>
								</Tr>
							</>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
};

export default OrderList;
