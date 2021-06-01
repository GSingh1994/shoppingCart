import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

interface StateProperties {
  id: number;
  title: string;
  image: string;
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
      <div className="container mx-auto px-40 py-20">
        <div className="grid gap-10 grid-cols-4">
          {storeData.map((item) => (
            <div key={item.id} className="shadow-2xl max-w-sm rounded p-5">
              <Link to={`/catalog/${item.id}`}>
                <img
                  className="object-cover	w-60 h-60"
                  src={item.image}
                  alt={item.title}
                />
                <h4>{item.title}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Catalog;
