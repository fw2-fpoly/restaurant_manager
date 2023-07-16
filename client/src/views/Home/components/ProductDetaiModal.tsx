import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Img,
  Text,
  Button,
} from "@chakra-ui/react";

import {
  Flex,
  Grid,
  GridItem,
  ListItem,
  UnorderedList,
} from "@chakra-ui/layout";
import { StarIcon } from "~/components/Icons";

type Props = {};

const ProductDetaiModal = (props: Props) => {
  return (
    <Modal isOpen={false} onClose={() => true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textTransform="uppercase">chi tiết món ăn</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Img
            borderRadius="lg"
            objectFit="cover"
            h="250"
            src="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            alt=""
          />

          <Text my={4} fontSize={22} textAlign="center" noOfLines={2}>
            san pham 1
          </Text>

          <Flex justifyContent="space-between" fontWeight={800} fontSize="sm">
            <Text as="span" color="blackAlpha.500">
              2000
              <Text as="span" color="red.500">
                VND
              </Text>{" "}
            </Text>
            <Flex justifyItems="center" alignItems="center">
              <Text as="span" color="blackAlpha.500">
                4.5
              </Text>
              <StarIcon size={10} />
            </Flex>
            <Text as="span" color="blackAlpha.500">
              100 min
            </Text>
          </Flex>

          <Text my={4} fontSize="sm" fontWeight={700}>
            Mô tả:{" "}
            <Text as="span" fontWeight={600}>
              chưa có mô tả cho sản phẩm này!
            </Text>
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button>Xem chi tiết</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductDetaiModal;
