import { createBrowserRouter } from "react-router";
import RootLayout from "../MainLayOut/RootLayout";
import Home from "../Pages/Homes/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout ,
    children:[
        {
            index:true,
            Component:Home,
        }
    ]
  },
]);