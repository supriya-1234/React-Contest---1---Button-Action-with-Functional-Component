import React from "react";
import "./../styles/App.css";

function App() {
  const paragraph =
    "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
  return (
    <div id="main">
      <button id="click">
        <p id="para">{paragraph}</p>
      </button>
    </div>
  );
}

export default App;
