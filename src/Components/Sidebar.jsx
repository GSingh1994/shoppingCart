import { useEffect, useState } from "react";

export default function Sidebar({ changeCategory }) {
  const fetchCategory = async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();

    changeCategory(data); //Lifting state up
  };

  const [storeCategory, setStoreCategory] = useState([]);

  const handleClick = (category) => {
    setStoreCategory(category);
  };

  useEffect(() => {
    fetchCategory(storeCategory);
  }, [storeCategory]);

  return (
    <aside className=" font-semibold text-lg uppercase p-2.5  flex flex-col justify-between h-80">
      <div className="text-2xl w-80 ">
        Shop/{storeCategory.length ? storeCategory : "All Products"}
      </div>
      <div
        className="category-links"
        onClick={() => handleClick("electronics")}
      >
        electronics
      </div>
      <div className="category-links" onClick={() => handleClick("jewelery")}>
        jewelery
      </div>
      <div
        className="category-links"
        onClick={() => handleClick("men's clothing")}
      >
        men's clothing
      </div>
      <div
        className="category-links"
        onClick={() => handleClick("women's clothing")}
      >
        women's clothing
      </div>
    </aside>
  );
}
