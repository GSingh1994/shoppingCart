import { useEffect, useState } from "react";
import Navbar from "./Navbar";

type AppProps = {
  match: any;
};

export default function Product({ match }: AppProps) {
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
  return (
    <div>
      <Navbar />
      <h1>{item.title}</h1>
      <img src={item.image} alt="" />
      <p>{item.description}</p>
    </div>
  );
}
