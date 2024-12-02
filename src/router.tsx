import { createBrowserRouter } from "react-router-dom";

// Components
import { Login, CustomError } from "./common/components";

import Layout from "./components/Layout";
import HomePage from "./components/Home";
import ProductsPage from "./components/Product/List";

// Loaders
import { productsLoader } from "./hooks/Product/useGetProducts";
import ProductDetail from "./components/Product/Detail";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>,
    },
    {
      path: "/",
      element: <Layout />,
      errorElement: <CustomError />,
      children: [
        {
          path: "/home",
          element: <HomePage />
        },
        {
          path: "/products",
          element: <ProductsPage />,
          loader: productsLoader,
          children: [
            {
              path: ":id",
              element: <ProductDetail />,
            }
          ],
        },
      ],
    },
]);

export default router;