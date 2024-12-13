import { createBrowserRouter } from "react-router-dom";
import { path } from "../../utils/constants/Constants";
import { Layout } from "../layout/Layout";
import { HomePage } from "../../pages/homePage/HomePage";
import { LoginPage } from "../../pages/loginPage/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";
import { ProductPage } from "../../pages/productPage/ProductPage";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: path.home,
        element: <HomePage />,
      },
      {
        path: path.login,
        element: <LoginPage />,
      },
      {
        path: path.register,
        element: <RegisterPage />,
      },
      {
        path: path.productPage,
        element: <ProductPage />,
      },
    ],
  },
]);
