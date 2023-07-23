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
} from "@chakra-ui/react";
import { MoreIcon } from "~/components/Icons";
import { orders } from "../fake-data";
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
  useEffect(() => {
    if (!filter) {
      setShowedOrders(orders);
      return;
    }
    setShowedOrders(orders?.filter((o) => o.status == filter));
  }, [filter]);

  return (
    <>
      <OrderDetailModal
        isOpen={isOpen}
        onClose={onClose}
        orderDetail={selectedOrder}
      />
      <TableContainer mt={4} rounded={8}>
        <Table size="md" variant="simple" textAlign="center">
          <Thead background="gray.100" rounded="8px">
            <Tr>
              <Th fontSize="md" fontWeight="bold">
                Bàn
              </Th>
              <Th fontSize="md" fontWeight="bold">
                Số món
              </Th>
              <Th fontSize="md" fontWeight="bold">
                Ước tính
              </Th>
              <Th fontSize="md" fontWeight="bold">
                trạng thái
              </Th>
              <Th></Th>
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
                  bg={
                    order.status == "processing"
                      ? "blue.100"
                      : order.status == "cancelled"
                      ? "red.100"
                      : order.status == "delivered"
                      ? "green.100"
                      : ""
                  }
                  fontWeight={500}
                >
                  <Td>{order.table_id}</Td>
                  <Td>
                    {order.items.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                  </Td>
                  <Td>{order.estime_total}m</Td>
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
                        <MenuItem>Đang làm</MenuItem>
                        <MenuItem>Đã nấu xong</MenuItem>
                        <MenuItem>Hủy đơn</MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                  <Td>
                    <Button
                      bg="primary.200"
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
