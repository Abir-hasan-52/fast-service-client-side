import { createBrowserRouter } from "react-router";
import RootLayout from "../MainLayOut/RootLayout";
import Home from "../Pages/Homes/Home/Home";
import AuthLayOut from "../MainLayOut/AuthLayOut";
import Login from "../Pages/Shared/Authentication/Login";
import Register from "../Pages/Shared/Authentication/Register";
import Coverage from "../Pages/Coverage/Coverage";
import SendParcel from "../Pages/SendParcel/SendParcel";
import PrivateRoutes from "../routes/PrivateRoutes";
import DashboardLayOut from "../MainLayOut/DashboardLayOut";
import MyParcels from "../Pages/DashBoard/MyParcels/MyParcels";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/Payment/PaymentHistory/PaymentHistory";
import Trackparcel from "../Pages/DashBoard/Payment/TrackParcel/TrackParcel";
import TrackParcel from "../Pages/DashBoard/Payment/TrackParcel/TrackParcel";
import BeARider from "../Pages/BeARider/BeARider";
import PendingRiders from "../Pages/DashBoard/PendingRiders/PendingRiders";
import ActiveRiders from "../Pages/DashBoard/ActiveRiders/ActiveRiders";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("./warehouses.json"),
      },
      {
        path: "/beARider",
        element: (
          <PrivateRoutes>
            <BeARider />
          </PrivateRoutes>
        ),
        loader: () => fetch("./warehouses.json"),
      },
      {
        path: "/SendParcel",
        element: (
          <PrivateRoutes>
            <SendParcel></SendParcel>
          </PrivateRoutes>
        ),
        loader: () => fetch("./warehouses.json"),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayOut,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayOut></DashboardLayOut>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "myParcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "paymentHistory",
        Component: PaymentHistory,
      },
      {
        path: "track",
        Component: TrackParcel,
      },
      {
        path: "pendingRiders",
        Component: PendingRiders,
      },
      {
        path: "activeRiders",
        Component: ActiveRiders,
      },
    ],
  },
]);
