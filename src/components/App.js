import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [para,setPara] =React.useState(false);
  function renderPara(){
    return(<p id="para">"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"</p>);
  }
  return (
    <div id="main">
      <button id="click" onClick={()=>{setPara(true)}>
       Click 
      </button>
      {para?renderPara():""}
    </div>
  );
}

export default App;
