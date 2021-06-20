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

      <div className="flex container mx-auto py-40">
        <Sidebar changeCategory={handleClick} />

        <div className=" grid gap-16 grid-cols-3">
          {storeData.map((item) => (
            <div
              key={item.id}
              className=" relative overflow-hidden  shadow-lg  rounded  transition duration-300 ease-in-out hover:shadow-2xl"
            >
              <Link to={`/catalog/${item.id}`}>
                <img
                  className="w-auto px-10 h-72 relative m-auto mb-36 transition-transform duration-300 transform hover:scale-105"
                  src={item.image}
                  alt={item.title}
                />
              </Link>

              <div className="absolute bottom-0	w-full 	text-center">
                <h4 className="px-5 font-bold	truncate overflow-hidden ">
                  {item.title}
                </h4>
                <div className="text-blue-500 py-1.5">${item.price}</div>
                <div className=" bg-black text-white uppercase tracking-wide	 p-3 m-1 	">
                  Add To Cart
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
//
