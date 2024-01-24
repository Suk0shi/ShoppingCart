import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import { useState } from 'react'
// import ErrorPage from "./ErrorPage";

const Router = () => {
  const [cartNum, setCartNum] = useState(0);
  const [cart, setCart] = useState([]);

  const cartHandler = (product) => {
    setCart([...cart, product]);
    setCartNum(cartNum + 1);
    alert("Product Added to Cart");
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App cartNum={cartNum}/>,
      // errorElement: <ErrorPage />,
    },
    {
      path: "home",
      element: <Home cartNum={cartNum}/>,
    },
    {
      path: "shop",
      element: <Shop cartNum={cartNum} cartHandler={cartHandler}/>,
    },
    {
      path: "cart",
      element: <Cart cartNum={cartNum} cart={cart}/>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;