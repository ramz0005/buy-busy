import { useState } from "react";
import styles from "./Home.module.css";
import Products from "../Products/Products";

export default function Home() {
  const [price, setPrice] = useState(75000);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);

  // Handle category checkbox change
  const handleCategoryChange = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setCategory((prevCategories) => [...prevCategories, id]);
    } else {
      setCategory((prevCategories) =>
        prevCategories.filter((category) => category !== id)
      );
    }
  };

  return (
    <div className={styles.homePageContainer}>
      <aside className={styles.filterContainer}>
        <h2>Filter</h2>
        <form>
          <label htmlFor="price">Price: {price}</label>
          <input
            type="range"
            id="price"
            name="price"
            min="1"
            max="100000"
            className={styles.priceRange}
            step="10"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <h2>Category</h2>
          <div className={styles.categoryContainer}>
            <div>
              <input
                type="checkbox"
                id="men"
                name="mensFashion"
                onChange={handleCategoryChange}
              />
              <label htmlFor="mensFashion">Men's Clothing</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="women"
                name="womensFashion"
                onChange={handleCategoryChange}
              />
              <label htmlFor="womensFashion">Women's Clothing</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="jewellery"
                name="jewellery"
                onChange={handleCategoryChange}
              />
              <label htmlFor="jewellery">Jewellery</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="electronics"
                name="electronics"
                onChange={handleCategoryChange}
              />
              <label htmlFor="electronics">Electronics</label>
            </div>
          </div>
        </form>
      </aside>
      <form className={styles.homePageForm}>
        <input
          type="search"
          placeholder="Search By Name"
          className={styles.homePageSearch}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {/* Pass the filter states to Products component */}
      <Products price={price} search={search} category={category} />
    </div>
  );
}
