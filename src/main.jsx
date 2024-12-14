import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Router } from "./app/routes/Router";
import "./app/styles/normalize.scss";
import "./app/styles/global.scss";
import { store } from "./app/store/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={Router} />
  </Provider>
);
