import { Outlet } from "react-router-dom";
import { Header } from "../../modules/header/Header";
import { Footer } from "../../modules/footer/Footer";
import { Suspense } from "react";
import Loader from "../../ui/Loading/Loader";

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
