import "./ItemDetail.css";
import ItemCount from "./ItemCount";

import { Col, Container, Row } from "react-bootstrap";
import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";

function ItemDetail(props) {
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;
  console.log(addToCart);
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
                <ItemCount stock={props.cards.stock} initial={1} />
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ItemDetail;
