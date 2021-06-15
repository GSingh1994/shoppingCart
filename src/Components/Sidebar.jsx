import { useEffect, useState } from "react";

export default function Sidebar({ changeCategory }) {
  const [storeCategory, setStoreCategory] = useState([]);

  const fetchCategory = async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();

    changeCategory(data); //Lifting state up
  };

  useEffect(() => {
    fetchCategory(storeCategory);
  }, [storeCategory]);

  const handleClick = (category) => {
    setStoreCategory(category);
  };

  return (
    <>
      <div className="font-semibold text-lg uppercase w-70 p-2.5 mr-4 flex flex-col justify-between h-80">
        <div className="text-2xl">
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
      </div>
    </>
  );
}
