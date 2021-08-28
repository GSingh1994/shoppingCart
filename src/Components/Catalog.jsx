import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Catalog() {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      setStoreData(data);
    };
    fetchData();
  }, []);

  function changeCategory(category) {
    setStoreData(category);
  }

  // open drawer upon adding items to cart
  const [openDrawer, setOpenDrawer] = useState(false);
  useEffect(() => {
    if (openDrawer) {
      const timer = setTimeout(() => {
        setOpenDrawer(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [openDrawer]);

  // Add items to cart
  const [cart, setCart] = useState([]);
  const handleCart = (itemId, itemTitle, itemPrice, itemImage) => {
    setOpenDrawer(true);
    setCart([
      ...cart,
      {
        id: itemId,
        title: itemTitle,
        image: itemImage,
        price: itemPrice,
        quantity: 1,
      },
    ]);
  };

  return (
    <>
      <Navbar openDrawer={openDrawer} cart={cart} />

      <main className="flex container mx-auto py-40">
        {/* <Sidebar changeCategory={changeCategory} /> */}

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

                <button
                  onClick={() =>
                    handleCart(item.id, item.title, item.price, item.image)
                  }
                  className="cursor-pointer bg-black text-white uppercase tracking-wide	 p-3 m-1 	"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
