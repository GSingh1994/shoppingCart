import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";

export default function Product({ match }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${match.params.id}`
    );
    const data = await response.json();
    setItem(data);
  };

  const handleClick = () => {
    console.log("yeet");
  };
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div>{item.title}</div>
        <img className="w-80 h-80" src={item.image} alt={item.title} />
        <p>{item.description}</p>
        <button onClick={handleClick} className="ring-2 p-1	uppercase">
          Add To Cart
        </button>

        <Cart title={item.title} image={item.image} />
      </div>
    </>
  );
}
