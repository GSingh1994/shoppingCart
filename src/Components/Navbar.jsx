import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

export default function Navbar({ openDrawer }) {
  const [paneOpen, setPaneOpen] = useState(false);
  useEffect(() => {
    if (openDrawer) {
      setPaneOpen(openDrawer);
    }
  }, [openDrawer]);
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
              onClick={() => setPaneOpen(!paneOpen)}
              className="mr-40 cursor-pointer"
            >
              Cart
            </li>
          </ul>
        </nav>
      </header>
      <SlidingPane
        width="400px"
        isOpen={paneOpen}
        onRequestClose={() => setPaneOpen(false)}
      >
        <div>And I am pane content. BTW, what rocks?</div>
        <br />
      </SlidingPane>
    </>
  );
}
