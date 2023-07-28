import { Box, Flex, Grid, GridItem, Text, Spacer } from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";
import { useState } from "react";
import CardOrder from "./components/CardOrder";
import { OrderCard } from "~/components/OrderCard";

type Props = {};
const status = [
  {
    title: "Tất cả",
    color: "#0abb87",
    background: "#0abb871a",
  },
  {
    title: "Đang xử lý",
    color: "#ffe066",
    background: "#ffe0661a",
  },
  {
    title: "Đã xác nhận",
    color: "#0abb87",
    background: "#0abb871a",
  },
  {
    title: "Đang vận chuyển",
    color: "#0abb87",
    background: "#0abb871a",
  },
  {
    title: "Đã hủy",
    color: "#fe3464",
    background: "#fe34641a",
  },
  {
    title: "Hoàn thành",
    color: "#0abb87",
    background: "#0abb871a",
  },
];
const KitchenView = (props: Props) => {
	
  const checkOrderStatus = (status: string) => {
    switch (status) {
      case "processing":
        return {
          status: "Đang xử lý",
          color: "#ffe066",
          background: "#ffe0661a",
        };
      case "confirmed":
        return {
          status: "Đã xác nhận",
          color: "#0abb87",
          background: "#0abb871a",
        };
      case "delivering":
        return {
          status: "Đang vận chuyển",
          color: "#0abb87",
          background: "#0abb871a",
        };
      case "cancelled":
        return {
          status: "Đã hủy",
          color: "#fe3464",
          background: "#fe34641a",
        };
      case "delivered":
        return {
          status: "Hoàn thành",
          color: "#0abb87",
          background: "#0abb871a",
        };
    }
  };

  return (
    <Box mt={8} px={3}>
      <Box mb={8}>
        <Flex gap={4}>
          {status.map((item: any) => {
            return (
              <Button
                color={item.color}
                backgroundColor={item.background}
                position="relative"
                _before={{
                  w: 5,
                  h: 5,
                  rounded: "full",
                  position: "absolute",
                  backgroundColor: "red",
                }}
              >
                {item.title}
              </Button>
            );
          })}
        </Flex>
      </Box>
      <Grid templateColumns="repeat(12, 1fr)" gap={8}>
        <GridItem colSpan={8}>
          <Box>
            <Grid gap="6">
              <GridItem>
                <CardOrder />
              </GridItem>
              <GridItem>
                <CardOrder />
              </GridItem>
            </Grid>
          </Box>
        </GridItem>
        <GridItem colSpan={4} p={6} bg="white" rounded="sm">
          <OrderCard />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default KitchenView;
