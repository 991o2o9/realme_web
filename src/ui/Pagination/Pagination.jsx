import styles from "./Pagination.module.scss";
import ArrowLeftPagination from "../../assets/ArrowLeftPagination";
import ArrowRightPagination from "../../assets/ArrowRightPagination";
import { Container } from "../container/Container";

export const Pagination = ({ total, current, onClick }) => {
  const handlePageChange = (page) => {
    if (page !== current && page >= 1 && page <= total) {
      onClick(page);
    }
  };

  window.scrollTo({ top: 0, behavior: "smooth" });

  const getPages = () => {
    const pages = [];

    if (total <= 7) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      if (current <= 4) {
        pages.push(1, 2, 3, 4, "...", total);
      } else if (current >= total - 3) {
        pages.push(1, "...", total - 4, total - 3, total - 2, total - 1, total);
      } else {
        pages.push(1, "...", current - 1, current, current + 1, "...", total);
      }
    }

    return pages;
  };

  const pages = getPages();

  return (
    <Container>
      <nav className={styles.mainBlock}>
        <ul>
          <li>
            <button
              className={`${styles.prev} ${
                current === 1 ? styles.disabled : ""
              }`}
              onClick={() => handlePageChange(current - 1)}
              disabled={current === 1}
              aria-label="button"
            >
              <ArrowLeftPagination color={current === 1 ? "#A9A5A5" : "#000"} />
            </button>
          </li>

          {pages.map((page, index) => (
            <li
              key={index}
              className={`${styles.pageItem} ${
                page === current ? styles.active : ""
              }`}
            >
              {page === "..." ? (
                <span className={`${styles.pageMiddle} ${styles.pageLink}`}>
                  . . .
                </span>
              ) : (
                <button
                  aria-label="button"
                  className={styles.pageLink}
                  onClick={() => handlePageChange(page)}
                >
                  <span className={styles.number}>{page}</span>
                </button>
              )}
            </li>
          ))}

          <li>
            <button
              className={`${styles.next} ${
                current === total ? styles.disabled : ""
              }`}
              onClick={() => handlePageChange(current + 1)}
              disabled={current === total}
              aria-label="button"
            >
              <ArrowRightPagination
                color={current === total ? "#A9A5A5" : "#000"}
              />
            </button>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
