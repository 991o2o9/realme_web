import { Container } from "../../../ui/container/Container";
import { ProductCard } from "../../../ui/productCard/ProductCard";
import styles from "./DetailedProduct.module.scss";
export const DetailedProduct = () => {
  const data = [
    {
      img: "https://hisense.com.au/wp-content/uploads/2023/07/4-scaled.jpg",
      title: "Realme C33",
      desc: "50MP Sejutaan Terjangkau",
      price: " 22400",
      id: 1,
    },
    {
      img: "https://hisense.com.au/wp-content/uploads/2023/07/4-scaled.jpg",
      title: "Realme C33",
      desc: "50MP Sejutaan Terjangkau",
      price: " 22400",
      id: 2,
    },
    {
      img: "https://hisense.com.au/wp-content/uploads/2023/07/4-scaled.jpg",
      title: "Realme C33",
      desc: "50MP Sejutaan Terjangkau",
      price: " 22400",
      id: 3,
    },
    {
      img: "https://hisense.com.au/wp-content/uploads/2023/07/4-scaled.jpg",
      title: "Realme C33",
      desc: "50MP Sejutaan Terjangkau",
      price: " 22400",
      id: 4,
    },
  ];

  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.products.products);

  // useEffect(() => {
  //   if (products.length === 0) {
  //     dispatch(fetchProducts());
  //   }
  // }, [dispatch, products.length]);

  // console.log(products);
  return (
    <Container>
      <div className={styles.contentArea}>
        <div className={styles.textArea}>
          <div className={styles.textItself}>
            <h2>Широкий ассортимент</h2>
            <h3>Качество, которое вы цените</h3>
          </div>
        </div>
        <div className={styles.productList}>
          {data.slice(0, 4).map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};
