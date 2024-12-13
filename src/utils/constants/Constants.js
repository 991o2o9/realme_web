export const path = {
  home: "/",
  order: "/order",
  productPage: "/product-list",
  chosenProduct: "/product-list/:id",
  register: "/register",
  login: "/login",
};

export const navigation = [
  { label: "Главная", path: path.home },
  { label: "Товары", path: path.productPage },
  { label: "Заказы", path: path.order },
];
