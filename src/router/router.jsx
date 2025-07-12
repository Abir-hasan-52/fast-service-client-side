import { createBrowserRouter } from "react-router";
import RootLayout from "../MainLayOut/RootLayout";
import Home from "../Pages/Homes/Home/Home";
import AuthLayOut from "../MainLayOut/AuthLayOut";
import Login from "../Pages/Shared/Authentication/Login";
import Register from "../Pages/Shared/Authentication/Register";
import Coverage from "../Pages/Coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout ,
    children:[
        {
            index:true,
            Component:Home,
        },{
          path:"/coverage",
          Component:Coverage,
          loader:()=>fetch("./warehouses.json")
        }
    ]
  },{
    path:"/",
    Component:AuthLayOut,
    children:[
      {
        path:"/login",
        Component:Login,
      },
      {
        path:"/register",
        Component:Register,
      }
    ]
  }
]);