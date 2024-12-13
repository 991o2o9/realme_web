import { Outlet } from "react-router-dom";
import { Header } from "../../modules/header/Header";
import { Footer } from "../../modules/footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
