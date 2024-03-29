import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import "../styles.css";

import Header from "./components/Header";
import AppBody from "./components/AppBody";
import AboutUs from "./components/AboutUs";
import ValuesAtSwiggy from "./components/ValuesAtSwiggy";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import {useEffect} from "react"
import { DataContextProvider } from "./components/DataContextProvider";
import ErrorPage from "./components/ErrorPage";
import ShimmerUI from "./components/ShimmerUI";

const App = () => {
  
  useEffect(()=>{
    document.title = "Order Food Online from India's Best Food Delivery Service | Swiggy";
  },[]);

  return (
    <DataContextProvider >
      <div className="appLayout">
        <Header />
        <Outlet />
        <Footer/>
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
        element: <AboutUs/>
      },
      {
        path: "value",
        element: <ValuesAtSwiggy/>
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