import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Register from "pages/Register";
import Login from "pages/Login";
import DashboardHome from "pages/DashboardHome";
import Allproducts from "pages/Allproducts";
import Orderslist from "pages/Orderslist";
import ProductDetails from "pages/ProductDetails";




const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Register /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboardhome",
      element: <DashboardHome />,
    },
    {
      path: "/allproducts",
      element: <Allproducts />,
    },
    {
      path: "/orderslist",
      element: <Orderslist />,
    }, {
      path: "/productlist",
      element: <ProductDetails />,
    },

    
  ]);

  return element;
};

export default ProjectRoutes;
