import { Container } from "../../../ui/container/Container";
import { ProductCard } from "../../../ui/productCard/ProductCard";
import styles from "./ProductList.module.scss";
import { useEffect, useState } from "react";
import { getAllProducts } from "../Api/ProductApi";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Pagination } from "../../../ui/Pagination/Pagination";
import { scrollToTop } from "../../../utils/helper/helper";
import Loader from "../../../ui/Loading/Loader";

export const ProductList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [useful, setUseful] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const itemsPerPage = 6;

  const query = new URLSearchParams(location.search);
  const currentPage = parseInt(query.get("page")) || 1;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await dispatch(getAllProducts(currentPage));
        setUseful(response.payload.results);
        setTotalItems(response.payload.count);
      } catch (error) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location.search, dispatch, currentPage]);
  const handlePageChange = (newPage) => {
    scrollToTop();
    navigate(`?page=${newPage}`);
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (loading) return <Loader />;

  return (
    <div className={styles.productSection}>
      <section className={styles.prodHero}>
        <Container>
          <h2>Товары</h2>
          <span>
            {`Общее количество товаров — ${useful.length} на ${currentPage}-й странице `}
          </span>
        </Container>
      </section>
      <Container>
        <div className={styles.productList}>
          {useful.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
        <Pagination
          onClick={handlePageChange}
          current={currentPage}
          total={totalPages}
        />
      </Container>
    </div>
  );
};
