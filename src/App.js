import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet, useLocation} from "react-router-dom";
import "../index.css";

import Header from "./components/Header";
import AppBody from "./components/AppBody";
import About from "./components/About";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import {useEffect} from "react"
import { DataContextProvider } from "./components/DataContextProvider";
import Projects from "./components/Projects";

const App = () => {
  const location = useLocation();
  const{pathname}= location;

  useEffect(()=>{
    document.title = "Order Food Online from India's Best Food Delivery Service | Swiggy";
  },[]);

  return (
    <DataContextProvider >
      <div className="select-none">
        {pathname==="/about"? null : <Header/>}
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
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />
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