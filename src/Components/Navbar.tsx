import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
