import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav>
        <ul className=" fixed w-full flex gap-40 bg-black text-white p-5 tracking-wider text-lg">
          <li className="flex-grow text-2xl">
            <Link to="/">LOGO</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li className="mr-40">
            <Link to="#">Cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
