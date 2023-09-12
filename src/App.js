import React, { useState } from "react";
import "./App.css";
import PayPalButton from "./components/PayPalButton";

function App() {
  const [checkout, setCheckOut] = useState(false);

  return (
    <div className="App">
      <h1>Welcome to this charity kitty</h1>
      <h3>Donate $2 today and save a soul</h3>
      {checkout ? (
        <PayPalButton />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Donate
        </button>
      )}
    </div>
  );
}

export default App;
