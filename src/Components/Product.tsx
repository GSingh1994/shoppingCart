import { useEffect, useState } from "react";
import Navbar from "./Navbar";

interface Props {
  match: any;
}

interface StateProps {
  item: {
    title: string;
    image: string;
    description: string;
  };
}

export default function Product({ match }: Props) {
  const [item, setItem] = useState<StateProps["item"]>([] as any);
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
    <>
      <Navbar />
      <div className="pt-20">
        <div>{item.title}</div>
        <img className="w-80 h-80" src={item.image} alt={item.title} />
        <p>{item.description}</p>
      </div>
    </>
  );
}
