import React from "react";
import {
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Table,
} from "@chakra-ui/react";

import { IconButton, Tag } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { MoreIcon } from "~/components/Icons";

type Props = {
  handleChangeShowDetail: () => void;
};
const TableHistory = (props: Props) => {
  return (
    <>
      <TableContainer
        borderRadius="8px"
        background="#ffffff"
        boxShadow="md"
      >
        <Table size="md" variant="simple">
          <Thead>
            <Tr>
              <Th fontSize="md" fontWeight="bold">
                Order Id
              </Th>
              <Th fontSize="md" fontWeight="bold">
                Date
              </Th>
              <Th fontSize="md" fontWeight="bold">
                Table
              </Th>
              <Th fontSize="md" fontWeight="bold">
                Amount{" "}
              </Th>
              <Th fontSize="md" fontWeight="bold">
                Payment
              </Th>
              <Th fontSize="md" fontWeight="bold">
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>#9999</Td>
              <Td>28 Jun 2022</Td>
              <Td>11</Td>
              <Td>$ 45.00</Td>
              <Td>
                <Tag>Cash</Tag>
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
                    <MenuItem>Delete</MenuItem>
                    <MenuItem onClick={props.handleChangeShowDetail}>
                      Detail
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableHistory;
