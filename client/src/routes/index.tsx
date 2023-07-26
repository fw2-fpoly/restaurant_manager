import { RouteObject } from "react-router-dom";

import MainLayout from "~/layouts/MainLayout";
import AuthLayout from "~/layouts/AuthLayout";

import { HomeView } from "~/views/Home";
import { TableView } from "~/views/Table";
import { MenuView } from "~/views/Menu";
import { OrderView } from "~/views/Order";
import { NotFoundView } from "~/views/404";

import { HistoryView } from "~/views/History";

import { LoginView } from "~/views/Login";
import { RegisterView } from "~/views/Register";
import { Profile } from "~/views/Profile";
import { ResetPasswordView } from "~/views/ResetPassword";
import Manager from "~/views/Manager";
import Dashboard from "~/views/Manager/Dashboard";
import ProductManager from "~/views/Manager/ProductManager";
import KitchenView from "~/views/Kitchen/Kitchen";
import CateManager from "~/views/Manager/CateFood";
import { elements } from "chart.js";
import Editproduct from "~/views/Manager/ProductManager/components/Editproduct";
import Editcate from "~/views/Manager/CateFood/components/Editcate";
import StaffsManager from "~/views/Manager/staffs";
import EditStaff from "~/views/Manager/staffs/components/EditStaff";

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
						path: "history",
						element: <HistoryView />,
					},
					{
						path: "kitchen",
						element: <KitchenView />,
					},
					{
						path: "manager",
						element: <Manager />,
						children: [
							{
								index: true,
								path: "dashboard",
								element: <Dashboard />,
							},
							{
								path: "products",
								element: <ProductManager />,
							},
							{
								path: "products/edit/:id",
								element: <Editproduct />,
							},
							{
								path: "cates",
								element: <CateManager />,
							},
							{
								path: "cates/edit/:id",
								element: <Editcate />,
							},
							{
								path: "staff",
								element: <StaffsManager />,
							},
							{
								path: "staff/edit/:id",
								element: <EditStaff />,
							},
						],
					},
					{
						path: "*",
						element: <NotFoundView />,
					},
				],
			},
			{
				path: "*",
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
					{
						path: "reset-password",
						element: <ResetPasswordView />,
					},
				],
			},
		],
	},
];

export default routes;
