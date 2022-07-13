import "./ItemDetail.css";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";

function ItemDetail(props) {
  const [cantCart, setCantCart] = useState(0);
  const [counter, setCounter] = useState(true);
  const [compra, setCompra] = useState(false);

  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setCantCart(cantidad);
    setCounter(false);
    setCompra(true);
    addToCart(props.cards, cantidad);
  };
  console.log(cantCart);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Container>
              <Row>
                <Col>
                  <h1>{props.cards.name}</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{props.cards.categoria}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>${props.cards.precio}</div>
                </Col>
              </Row>
              <Row>
                {counter === true && <ItemCount onAdd={onAdd} />}
                {compra === true && (
                  <Col>
                    <Link to={`/cart`}> Finalizar compra</Link>
                  </Col>
                )}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ItemDetail;
