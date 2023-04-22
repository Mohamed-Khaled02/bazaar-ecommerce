import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import { productsData } from "../api/ApiData";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../components/Login";
import Product from "../components/Product";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
