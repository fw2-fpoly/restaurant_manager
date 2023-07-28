import React from "react";
import { Thead, Tbody, Tr, Th, Td, TableContainer, Table } from "@chakra-ui/react";

import { IconButton, Tag } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { MoreIcon } from "~/components/Icons";
import { useNavigate } from "react-router";

type Props = {};
const TableCate = (props: Props) => {
	const navigate = useNavigate();
	const editcate = () => {
		navigate("/manager/cates/edit/1");
	};
	return (
		<>
			<TableContainer borderRadius="8px" background="#ffffff">
				<Table size="md" variant="simple">
					<Thead>
						<Tr>
							<Th fontSize="md" fontWeight="bold">
								Id
							</Th>
							<Th fontSize="md" fontWeight="bold">
								Tên danh mục
							</Th>
							<Th fontSize="md" fontWeight="bold">
								Số lượng sản phẩm
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
										<MenuItem onClick={() => editcate()}>Update</MenuItem>
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

export default TableCate;
