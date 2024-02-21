import { useContext } from "react";
import Modal from "./UI/Modal";
import UserProgressContext from "../store/UserProgressContext";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "./../util/formatting";
import Input from "./UI/input";
import Button from "./UI/Button";

export default function Checkout() {
  const { items } = useContext(CartContext);
  const { hideModal, progress } = useContext(UserProgressContext);

  const totalAmountToPay = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <Modal open={progress === "checkout"} onClose={hideModal}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalAmountToPay)}</p>
        <Input label="Full Name" type="text" id="full-name" />
        <Input label="Email Address" type="text" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="model-actions">
          <Button type="button" textOnly onClick={hideModal}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
