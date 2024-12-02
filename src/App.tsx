import ProductsPage from './components/Product/List'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { productsLoader } from './hooks/Product/useGetProducts';
import Layout from './components/Layout';
import HomePage from './components/Home';
import { Login } from './common/components';
import { CustomError } from './common/components/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <CustomError />,
    children: [
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/products",
        element: <ProductsPage />,
        loader: productsLoader
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
