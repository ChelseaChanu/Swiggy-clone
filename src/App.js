import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import "../index.css";

import Header from "./components/Header";
import AppBody from "./components/AppBody";
import RestaurantMenu from "./components/RestaurantMenu";
import {useEffect} from "react"
import { DataContextProvider } from "./components/DataContextProvider";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  
  useEffect(()=>{
    document.title = "Order Food Online from India's Best Food Delivery Service | Swiggy";
  },[]);

  return (
    <DataContextProvider >
      <div className="select-none">
        <Header />
        <Outlet />
      </div>
    </DataContextProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <AppBody />
      },
      {
        path: "about",
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);