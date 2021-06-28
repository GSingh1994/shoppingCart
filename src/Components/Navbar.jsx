import { useState } from "react";
import { Link } from "react-router-dom";
import CartPage from "./CartPage";

export default function Navbar({ openDrawer, cart }) {
  const [navbarCart, setnavbarCart] = useState(false);
  return (
    <>
      <header>
        <nav>
          <ul className="z-50	 fixed w-full flex gap-40 bg-black text-white p-5 tracking-wider text-lg">
            <li className="flex-grow text-2xl">
              <Link to="/">LOGO</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li
              onClick={() => setnavbarCart(!navbarCart)}
              className="mr-40 cursor-pointer"
            >
              Cart
            </li>
          </ul>
        </nav>
      </header>
      <CartPage openDrawer={openDrawer} cart={cart} navbarCart={navbarCart} />
    </>
  );
}
