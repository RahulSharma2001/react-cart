import "./App.css";
import Navbar from "./component/Navbar";
import Cart from "./component/Cart";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      src: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSl19pFPe0jpB9edTR2LxCeUVeF7nerWsiVnLCx-DsgBu5thLqjCl4F2F3Db1xSvM6S5gJLJOtmGcsQfvTEO6aPOoXmWC_Q",
      name: "Samsung M21",
      quantity: 0,
      price: 18000,
    },
    {
      id: 2,
      src: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRKj8NxFZGTq2Duw3kub7bAM6b-7zsd_1oF5GkGsknP4ex-A8Dk",
      name: "Iphone 15",
      quantity: 0,
      price: 150000,
    },
    {
      id: 3,
      src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSTMb6eHR0E47rO2HDG0IxkzHE_e4i-0pEGiUtXOGhtSjnfQpyvR2zJu0rY7HDgd7sL1aqsBVN4Gu69zqCSy06ldk3mo6sT",
      name: "Motorola 40",
      quantity: 0,
      price: 26000,
    },
  ]);

  const [quantity, setQuantity] = useState(0);

  return (
    <div className="App">
      <Navbar quantity={quantity} />
      <Cart
        products={products}
        setProducts={setProducts}
        setQuantity={setQuantity}
        quantity={quantity}
      />
    </div>
  );
}

export default App;
