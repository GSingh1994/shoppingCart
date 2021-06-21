import { Link } from "react-router-dom";
import { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import arrowSvg from "../assets/arrow.svg";

export default function Navbar() {
  const [paneOpen, setPaneOpen] = useState(false);
  return (
    <>
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
          <li onClick={() => setPaneOpen(!paneOpen)} className="mr-40">
            <Link to="#">Cart</Link>
          </li>
        </ul>
      </nav>

      <SlidingPane
        width="400px"
        isOpen={paneOpen}
        title="Hey, it is optional pane title.  I can be React component too."
        // subtitle="Optional subtitle."
        // closeIcon={arrowSvg}
        onRequestClose={() => setPaneOpen(!paneOpen)}
      >
        <div>And I am pane content. BTW, what rocks?</div>
        <br />
      </SlidingPane>
    </>
  );
}
