import React, { useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";

const Cart = ({ products, setProducts, setQuantity, quantity }) => {
  const [total, setTotal] = useState(0);

  function Increase(id) {
    products.map((product) => {
      if (product.id === id) {
        product.quantity += 1;
        setTotal(total + product.price);
        setQuantity(quantity + 1);
      }
      return product;
    });

    setProducts(products);
  }

  function Decrease(id) {
    let tempProducts = [...products];

    tempProducts.map((product) => {
      if (product.id === id && product.quantity >= 1) {
        product.quantity -= 1;
        setTotal(total - product.price);
        setQuantity(quantity - 1);
      }
      return product;
    });

    setProducts(tempProducts);
  }

  function removeProduct(id) {
    let tempProducts = [...products];
    let arr = tempProducts.filter((product) => {
      if (product.id === id) {
        setTotal(total - product.quantity * product.price);
        setQuantity(quantity - product.quantity);
      }
      return product.id !== id;
    });
    setProducts(arr);
  }

  return (
    <div className="pro_container">
      {products.length <= 0 && <p>is currently empty</p>}
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img
              alt="product-img"
              src={product.src}
              style={{ width: "400px", height: "300px" }}
            ></img>
            <h4>{product.name}</h4>
            <p>price: {product.price}</p>
            <button
              onClick={() => {
                removeProduct(product.id);
              }}
            >
              remove
            </button>
            <div>
              <button
                className="i-d"
                onClick={() => {
                  Increase(product.id);
                }}
              >
                +
              </button>
              <p>{product.quantity}</p>
              <button
                className="i-d"
                onClick={() => {
                  Decrease(product.id);
                }}
              >
                -
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <div>
          <p className="total">
            Total : <BsCurrencyRupee /> {total}
          </p>
        </div>
        <button
          className="clear"
          onClick={() => {
            setProducts([]);
            setTotal(0);
            setQuantity(0);
          }}
        >
          clear cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
