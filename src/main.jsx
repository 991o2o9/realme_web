import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Router } from "./app/routes/Router";
import "./app/styles/normalize.scss";
import "./app/styles/global.scss";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
