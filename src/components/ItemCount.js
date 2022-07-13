import { Card, Col } from "react-bootstrap";
import React, { useState } from "react";

function ItemCount({ onAdd }) {
  const initial = 1;
  const stock = 5;
  const [count, setCant] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCant(count + 1);
    }
  };

  const quitar = () => {
    if (count > initial) {
      setCant(count - 1);
    }
  };
  const guardar = (event) => setCant(event.target.value);

  return (
    <>
      <Col xs={7}>
        <Card>
          <Card.Body>
            <div class="input-group mb-3">
              <button onClick={quitar} className="input-group-text">
                -
              </button>
              <input
                type="text"
                class="form-control"
                value={count}
                onChange={guardar}
              />
              <button onClick={sumar} className="input-group-text">
                +
              </button>
            </div>
            <button
              onClick={() => {
                onAdd(count);
              }}
            >
              Agregar al carrito
            </button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default ItemCount;
