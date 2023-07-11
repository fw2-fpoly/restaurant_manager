import { RouteObject } from "react-router-dom";

import MainLayout from "~/layouts/MainLayout";
import { HomeView } from "~/views/Home";
import { TableView } from "~/views/Table";
import { MenuView } from "~/views/Menu";
import { OrderView } from "~/views/Order";
import { NotFoundView } from "~/views/404";
import { HistoryView } from "~/views/History";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <HomeView />,
			},
			{
				path: "table",
				element: <TableView />,
			},
			{
				path: "menu",
				element: <MenuView />,
			},
			{
				path: "orders",
				element: <OrderView />,
			},
			{
				path: "history",
				element: <HistoryView />,
			},
			{
				path: "*",
				element: <NotFoundView />,
			},
		],
	},
];

export default routes;
