import { Flex, Spacer, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { BellIcon, IconChat } from "~/components/Icons";
import BreadcrumbHome from "./component/BreadcrumbHome";

type Props = {};

const Header = (props: Props) => {
	return (
		<Flex
			w="100%"
			h={12}
			px={3}
			alignItems="center"
			justifyContent="space-between"
		>
			<BreadcrumbHome />
			<Spacer />
			<Flex
				w={{ md: "50%" }}
				alignItems="center"
				justifyContent="space-between"
			>
				{/* <SearchBar /> */}
				<Spacer />
				<Flex
					w={{ md: "30%" }}
					alignItems="center"
					justifyContent="space-between"
				>
					<Text fontSize="sm">Hello, UserName</Text>
					<Button
						bg="gray.100"
						rounded="full"
						p={2.5}
						color="black.500"
						_hover={{ bg: "primary.100", color: "white" }}
						fontWeight={400}
					>
						<IconChat boxSize={5} />
					</Button>

					<Button
						bg="gray.100"
						rounded="full"
						p={2.5}
						color="black.500"
						_hover={{ bg: "primary.100", color: "white" }}
						fontWeight={400}
					>
						<BellIcon boxSize={5} />
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Header;
