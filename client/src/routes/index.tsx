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
import KitchenView from "~/views/Kitchen/Kitchen";

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
