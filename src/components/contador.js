import { useState } from "react";
import Card from "./Card";
import "./contador.css";
function Contador() {
  const [num, setNum] = useState(0);
  const sumar = () => {
    if (num < 20) {
      setNum(num + 1);
    }
  };
  const restar = () => {
    if ((num > 0) & (num <= 20)) {
      setNum(num - 1);
    }
  };
  const reiniciar = () => {
    setNum(0);
  };
  return (
    <>
      <div className="contador-div">
        <Card producto="Hamburguesa doble" stock="Stock:20" />
        <p>{num}</p>
        <button onClick={sumar}>Suma!</button>
        <button onClick={restar}>Restar!</button>
        <button onClick={reiniciar}>Reinicia!</button>
      </div>
    </>
  );
}

export default Contador;
