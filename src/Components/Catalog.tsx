import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Catalog() {
  const [storeData, setStoreData] = useState([]);

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
}
