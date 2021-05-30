import React from "react";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
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
};
export default Navbar;
