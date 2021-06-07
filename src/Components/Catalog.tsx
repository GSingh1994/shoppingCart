import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

interface StateProperties {
  id: number;
  title: string;
  image: string;
  price: number;
}

const Catalog: React.FC = () => {
  const [storeData, setStoreData] = useState<StateProperties[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    setStoreData(data);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-60 py-40">
        <div className="grid gap-10 grid-cols-3">
          {storeData.map((item) => (
            <div
              key={item.id}
              className="shadow-lg transition duration-300 ease-in-out hover:shadow-2xl max-w-sm rounded p-5"
            >
              <Link to={`/catalog/${item.id}`}>
                <img className="h-60 p-10" src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <div className="text-blue-500">${item.price}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Catalog;
