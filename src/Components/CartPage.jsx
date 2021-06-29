import { useState, useEffect } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

export default function CartPage({ openDrawer, cart }) {
  const [paneOpen, setPaneOpen] = useState(false);

  useEffect(() => {
    if (openDrawer) {
      setPaneOpen(openDrawer);
    }
  }, [openDrawer]);

  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <section>
        <h1>cartPage</h1>
      </section>
      <SlidingPane
        width="20rem"
        isOpen={paneOpen}
        onRequestClose={() => setPaneOpen(false)}
      >
        {cart //Check if the list is not empty
          ? cart.map((item, i) => (
              <div key={i} className=" text-center mb-8">
                <div className="truncate">{item.title}</div>
                <div>{item.price}</div>
                <img width="50rem" src={item.image} alt={item.title} />

                <button
                  onClick={
                    () => setQuantity((pre) => (pre >= 1 ? (pre -= 1) : 0)) //Avoid -ve quantity
                  }
                  className="ring-2 w-8 "
                >
                  -
                </button>
                <div className="inline m-5">{quantity}</div>
                <button
                  onClick={() => setQuantity((pre) => (pre += 1))}
                  className="ring-2 w-8"
                >
                  +
                </button>
              </div>
            ))
          : null}
      </SlidingPane>
    </>
  );
}
