import styles from "./Products.module.css";
import { useProductContext } from "../../ProductContext";

export default function Products({ price, search, category }) {
  const { data, addToCart } = useProductContext();

  // Apply filtering logic
  const filteredProducts = data.filter((product) => {
    // Filter by price
    const matchesPrice = product.price <= price;

    // Filter by search term (case-insensitive)
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    // Filter by category (if any category is selected)
    const matchesCategory =
      category.length === 0 || category.includes(product.category);

    // Return products that match all filters
    return matchesPrice && matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.productGrid}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className={styles.productContainer}>
            <div className={styles.productImageContainer}>
              <img
                src={product.image}
                alt={product.name}
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles.productDetails}>
              <div className={styles.productName}>
                <p>{product.name}</p>
              </div>
              <div className={styles.productPrice}>
                <p>₹ {product.price}</p>
              </div>
              <button className={styles.addBtn} title="Add to Cart" onClick={()=>addToCart(product)}>
                Add To Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No products match your criteria.</p>
      )}
    </div>
  );
}
