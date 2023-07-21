import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";

const Addproduct = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button bg={"green.300"} onClick={onOpen}>
				Thêm mới
			</Button>

			<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Thêm mới sản phẩm</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}></ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3}>
							Save
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
export default Addproduct;
