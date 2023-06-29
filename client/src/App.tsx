import { useState } from "react";
import { CheckIcon } from "./components/Icons";
import { Box, Button, IconButton, Heading, Center, Flex, Code } from "@chakra-ui/react";

function App() {
	return (
		<Center my={6}>
			<Box
				w={{ md: "768px", lg: "1200px" }}
				h={"full"}
			>
				<Flex
					gap={4}
					justify={"space-between"}
				>
					<Box
						flex={1}
						h={"400px"}
						bg={"red.100"}
						borderRadius={"md"}
					>
						<Center h={"full"}>
							<Code
								px={6}
								py={6}
								borderRadius={"md"}
								bg={"white"}
							>
								<Heading>
									React <Button isLoading>Hello</Button>
								</Heading>
							</Code>
						</Center>
					</Box>
					<Box
						flex={1}
						h={"400px"}
						bg={"green.100"}
						borderRadius={"md"}
					>
						<Center h={"full"}>
							<Code
								px={6}
								py={6}
								borderRadius={"md"}
								bg={"white"}
							>
								<Heading>Vue</Heading>
							</Code>
						</Center>
					</Box>
					<Box
						flex={1}
						h={"400px"}
						bg={"yellow.100"}
						borderRadius={"md"}
					>
						<Center h={"full"}>
							<Code
								px={6}
								py={6}
								borderRadius={"md"}
								bg={"white"}
							>
								<Heading>Angular</Heading>
							</Code>
						</Center>
					</Box>
				</Flex>
			</Box>
		</Center>
	);
}

export default App;
