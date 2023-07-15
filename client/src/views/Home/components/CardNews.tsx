import React from "react";
import { Heading, Text, Box } from "@chakra-ui/layout";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Img,
} from "@chakra-ui/react";
import { IconEye } from "~/components/Icons";
type Props = {};

const CardNews = (props: Props) => {
  return (
    <Box position="relative" cursor="pointer">
      <Img
        position="absolute"
        top={0}
        right={0}
        borderRadius="lg"
        objectFit="cover"
        h="100%"
        src="https://thuthuatnhanh.com/wp-content/uploads/2021/06/hinh-anh-nhat-ban-dep.jpg"
        alt=""
      />
      <Card
        borderRadius="8px"
        height="100%"
        width="100%"
        bgColor="rgba(0,0,0,0.3)"
        _hover={{
          bgColor: "rgba(0,0,0,0)",
        }}
      >
        <CardHeader>
          <Heading size="md" color="white">
            {" "}
            Customer dashboard
          </Heading>
        </CardHeader>
        <CardBody>
          <Text color="white">
            View a summary of all your customers over the last month.
          </Text>
        </CardBody>
        <CardFooter display="flex" justifyContent="flex-end">
          <Button
            bg="gray.100"
            rounded="full"
            color="black.500"
            _hover={{ bg: "primary.100", color: "white" }}
            fontWeight={400}
          >
            <IconEye boxSize={4} />
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default CardNews;
