import { useState, useEffect } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

export default function CartPage({ openDrawer, cart, navbarCart }) {
  const [paneOpen, setPaneOpen] = useState(false);

  useEffect(() => {
    setPaneOpen(navbarCart);
    if (openDrawer) {
      setPaneOpen(openDrawer);
    }
  }, [openDrawer, navbarCart]);

  return (
    <>
      <SlidingPane
        width="20rem"
        isOpen={paneOpen}
        onRequestClose={() => setPaneOpen(false)}
      >
        {cart //Check if the list is not empty
          ? cart.map((item, i) => (
              <div key={i} className="text-center">
                <div className="truncate">{item.title}</div>
                <div>{item.price}</div>
                <img width="50rem" src={item.image} alt={item.title} />
              </div>
            ))
          : null}
      </SlidingPane>
    </>
  );
}
