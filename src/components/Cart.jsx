import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "./../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { items, addItem, removeItem } = useContext(CartContext);
  const { hideModal, showCheckout, progress } = useContext(UserProgressContext);

  const cartTotal = items.reduce((totalPrice, item) => {
    return totalPrice + +item.price * item.quantity;
  }, 0);

  return (
    <Modal className="cart" open={progress === "cart"} onClose={hideModal}>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            item={item}
            key={item.id}
            onIncrease={() => addItem(item)}
            onDecrease={() => removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={hideModal}>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={showCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
