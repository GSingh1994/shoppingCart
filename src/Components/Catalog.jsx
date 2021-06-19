import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

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

  function handleClick(category) {
    setStoreData(category);
  }

  return (
    <>
      <Navbar />

      <div className="flex container mx-auto px-30 py-40">
        <Sidebar changeCategory={handleClick} />

        <div className="flex-grow grid gap-10 grid-cols-3">
          {storeData.map((item) => (
            <div
              key={item.id}
              className=" overflow-hidden  shadow-lg  rounded p-4 transition duration-300 ease-in-out hover:shadow-2xl"
            >
              <Link to={`/catalog/${item.id}`}>
                <img
                  className="w-auto h-72 relative m-auto  transition-transform duration-300 transform hover:scale-105"
                  src={item.image}
                  alt={item.title}
                />
                <h4 className="mt-6">{item.title}</h4>
                <div className="text-blue-500">${item.price}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
//
