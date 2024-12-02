import { createBrowserRouter } from "react-router-dom";

// Components
import { Login, ErrorPage } from "./common/components";
import Layout from "./components/Layout";
import HomePage from "./components/Home";
import ProductsPage from "./components/Product";
import ProductDetail from "./components/Product/Detail";
import ProductForm from "./components/Product/Create";
import ProductsGrid from "./components/Product/List";
import EditProduct from "./components/Product/Edit";


const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>,
    },
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/products",
          element: <ProductsPage />,
          children: [
            {
              path: "/products",
              element: <ProductsGrid />,
            },
            {
              path: "create",
              element: <ProductForm />,
            },
            {
              path: ":id",
              element: <ProductDetail />,
            },
            {
              path: ":id/edit",
              element: <EditProduct />,
            }
          ],
        },
      ],
    },
]);

export default router;