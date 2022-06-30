import { useState } from "react";
import "./contador.css";

function Contador({ stock }) {
  const [num, setNum] = useState(0);
  const sumar = () => {
    if (num < stock) {
      setNum(num + 1);
    }
  };
  const restar = () => {
    if ((num > 0) & (num <= stock)) {
      setNum(num - 1);
    }
  };
  const reiniciar = () => {
    setNum(0);
  };
  return (
    <>
      <div className="contador-div">
        <p>{num}</p>
        <button onClick={sumar}>Suma!</button>
        <button onClick={restar}>Restar!</button>
        <button onClick={reiniciar}>Reinicia!</button>
      </div>
    </>
  );
}

export default Contador;
