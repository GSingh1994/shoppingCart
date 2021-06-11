import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

interface StateProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

export default function Catalog() {
  const [storeData, setStoreData] = useState<StateProps[]>([]);

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
      <div className="flex container mx-auto px-30 py-40">
        <Sidebar />
        <div className="flex-grow grid gap-10 grid-cols-3">
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
}
