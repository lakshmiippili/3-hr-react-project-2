import React, { useContext } from "react";
import candyCxt from "../Store/candy-context";
const Item = () => {
  const context = useContext(candyCxt);
  return (
    <React.Fragment>
      {context.items.map((item) => {
        return (
          <ul key={item.name}>
            <li key={item.name}>
              {item.name}-{item.description} -Rs.{item.price}
              <br />
              <button
                onClick={() => {
                  context.addToCart({ ...item, quantity: 1 });
                }}
              >
                1
              </button>
              <button
                onClick={() => {
                  context.addToCart({ ...item, quantity: 2 });
                }}
              >
                2
              </button>
              <button
                onClick={() => {
                  context.addToCart({ ...item, quantity: 3 });
                }}
              >
                3
              </button>
            </li>
          </ul>
        );
      })}
    </React.Fragment>
  );
};

export default Item;
