import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

interface Props {
  match: any;
}

interface StateProperties {
  item: {
    title: string;
    image: string;
    description: string;
  };
}

const Product: React.FC<Props> = ({ match }) => {
  const [item, setItem] = useState<StateProperties["item"]>([] as any);
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
};

export default Product;
