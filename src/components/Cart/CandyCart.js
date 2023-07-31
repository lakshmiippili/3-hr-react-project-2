import candyCxt from "../Store/candy-context";
import Modal from "../UI/Modal";
import { useContext } from "react";
const CandyCart = (props) => {
  const context = useContext(candyCxt);
  let totalAmount = 0;
  const cartItems = (
    <ul>
      {context.cartItems.map((item) => {
        totalAmount = totalAmount + item.price * item.quantity;
        return (
          <li key={item.name}>
            {item.name} -{item.price}x{item.quantity}
          </li>
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div>
        <span>Total Amount :{totalAmount}</span>
      </div>
      <div>
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default CandyCart;
