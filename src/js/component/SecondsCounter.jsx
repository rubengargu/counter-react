import React, { useState, useEffect } from "react";

const Counter = () => {
  const [valor, setValor] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValor((valor) => valor + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const six = Math.floor(valor / 100000);
  const five = Math.floor(valor / 10000) % 10;
  const four = Math.floor(valor / 1000) % 10;
  const three = Math.floor(valor / 100) % 10;
  const two = Math.floor(valor / 10) % 10;
  const one = valor % 10;

  return (
    <div className="container d-flex bg-black text-white" id="caja">
      <div className="seven bg-dark fs-1 text m-3 p-2 rounded"><i class="fa-regular fa-clock"></i></div>
      <div className="six bg-dark fs-1 text m-3 p-2 rounded">{six}</div>
      <div className="five bg-dark fs-1 text m-3 p-2 rounded">{five}</div>
      <div className="four bg-dark fs-1 text m-3 p-2 rounded">{four}</div>
      <div className="three bg-dark fs-1 text m-3 p-2 rounded">{three}</div>
      <div className="two bg-dark fs-1 text m-3 p-2 rounded">{two}</div>
      <div className="one bg-dark fs-1 text m-3 p-2 rounded">{one}</div>
    </div>
  );
};

export default Counter;