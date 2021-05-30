import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

interface StateProperties {
  id: number;
  title: string;
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
    <div>
      <Navbar />
      {storeData.map((item) => (
        <ul key={item.id}>
          <Link to={`/catalog/${item.id}`}>
            <li>{item.title}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
};
export default Catalog;
