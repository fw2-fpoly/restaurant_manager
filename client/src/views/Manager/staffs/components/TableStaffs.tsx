import React from "react";
import { Thead, Tbody, Tr, Th, Td, TableContainer, Table, Image } from "@chakra-ui/react";

import { IconButton, Tag } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { MoreIcon } from "~/components/Icons";
import { useNavigate } from "react-router";

type Props = {};
const TableStaffs = (props: Props) => {
	const navigate = useNavigate();
	const editStaff = () => {
		navigate("/manager/staff/edit/1");
	};
	return (
		<>
			<TableContainer
				borderRadius="8px"
				background="#ffffff"
			>
				<Table
					fontSize="sm"
					fontWeight="600"
				>
					<Thead>
						<Tr>
							<Th>#</Th>
							<Th>Ngày</Th>
							<Th>Tên Nhân Viên</Th>
							<Th>Ảnh</Th>
							<Th>Chức Vụ</Th>
							<Th>Action</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>#9999</Td>
							<Td>28 Jun 2022</Td>
							<Td>
								<Image
									w={"50"}
									h={"50"}
									src="https://picsum.photos/200/300.jpg"
								/>
							</Td>
							<Td>11</Td>
							<Td>$ 45.00</Td>
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
										<MenuItem onClick={() => editStaff()}>Update</MenuItem>
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

export default TableStaffs;
