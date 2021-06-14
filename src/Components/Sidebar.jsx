import { useEffect, useState } from "react";

export default function Sidebar() {
  const [storeCategory, setStoreCategory] = useState([]);

  let category = "jewelery";

  useEffect(() => {
    fetchCategory(category);
  }, [category]);

  const fetchCategory = async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    setStoreCategory(data);
    console.log(storeCategory);
  };

  return (
    <>
      <div className="w-60">
        <div className="text-xl">Shop/All Products</div>
        <div>electronics</div>
        <div onClick={() => (category = "jewelery")}>jewelery</div>
        <div>men clothing</div>
        <div>women clothing</div>
      </div>
    </>
  );
}
