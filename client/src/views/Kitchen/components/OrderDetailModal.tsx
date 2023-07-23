import {
  Button,
  Flex,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  orderDetail: any;
  isOpen: boolean;
  onClose: () => void;
};

const OrderDetailModal = ({
  orderDetail,
  isOpen,
  onClose,
  ...props
}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg="gray.50">Chi tiết</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List>
            <ListItem>
              <Flex justifyContent="space-between">
                <Text fontWeight={700}>Món ăn</Text>
                <Text fontWeight={700}>Số lượng</Text>
              </Flex>
            </ListItem>
            {orderDetail.items?.map((item: any) => (
              <ListItem>
                <Flex justifyContent="space-between">
                  <p>{item.name ?? "Tên món"}</p>
                  <p>x{item.quantity}</p>
                </Flex>
              </ListItem>
            ))}
          </List>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OrderDetailModal;
