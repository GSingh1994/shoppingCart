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

  // make copy of old cart to update quantity
  const [newCart, setNewCart] = useState();
  useEffect(() => {
    setNewCart(cart);
  }, [cart, newCart]);

  const updateQuantity = (id, sign) => {
    setNewCart(
      newCart.map((item) =>
        item.id === id && item.quantity > 0
          ? {
              ...item,
              quantity:
                sign === "plus" ? (item.quantity += 1) : (item.quantity -= 1),
            }
          : item
      )
    );
  };
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
        {newCart //Check if the list is not empty
          ? newCart.map((item, i) => (
              <div key={i} className=" text-center mb-8">
                <div className="truncate">{item.title}</div>
                <div>{item.price}</div>
                <img width="50rem" src={item.image} alt={item.title} />

                <button
                  onClick={() => updateQuantity(item.id, "minus")}
                  className="ring-2 w-8 "
                >
                  -
                </button>
                <div className="inline m-5">{item.quantity}</div>
                <button
                  onClick={() => updateQuantity(item.id, "plus")}
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
