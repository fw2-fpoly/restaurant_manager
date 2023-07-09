import { RouteObject } from "react-router-dom";

import MainLayout from "~/layouts/MainLayout";
import AuthLayout from "~/layouts/AuthLayout";

import { HomeView } from "~/views/Home";
import { TableView } from "~/views/Table";
import { MenuView } from "~/views/Menu";
import { OrderView } from "~/views/Order";
import { NotFoundView } from "~/views/404";
import { LoginView } from "~/views/Login";
import { RegisterView } from "~/views/Register";
import { Profile } from "~/views/Profile";


const routes: RouteObject[] = [
	{
		path: "/",
		children: [
			{
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
						path: "profile",
						element: <Profile />,
					},
					{
						path: "*",
						element: <NotFoundView />,
					},
				],
			},
			{
				element: <AuthLayout />,
				children: [
					{
						path: "login",
						element: <LoginView />,
					},
					{
						path: "register",
						element: <RegisterView />,
					},
				],
			},
		],
	},
];

export default routes;
