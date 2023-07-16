import { Grid, GridItem } from "@chakra-ui/layout";
import { Outlet } from "react-router-dom";
import { Header } from "~/components/Header";
import { OrderDetail } from "~/components/OrderDetail";
import { Sidebar } from "~/components/Sidebar";

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <Grid
      templateAreas={`"nav main"`}
      gridTemplateColumns={"200px 1fr"}
      h="100vh"
      fontWeight="bold"
      bg="bgGray"
    >
      <GridItem
        w="200px"
        h="full"
        px="6"
        py="8"
        bg="white"
        area={"nav"}
        position="fixed"
        borderTopRightRadius="2xl"
        borderBottomRightRadius="2xl"
      >
        <Sidebar />
      </GridItem>
      <GridItem pl="2" bg="bgGray" area={"main"} p="8">
        <Header />
        <Outlet />
      </GridItem>
      {/* <GridItem
        w="400px"
        position="fixed"
        top={6}
        right={2}
        py="8"
        px="4"
        h="90%"
        bg="white"
        borderRadius="2xl"
      >
        <OrderDetail />
      </GridItem> */}
    </Grid>
  );
};

export default MainLayout;
