import "./ItemDetail.css";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";

function ItemDetail(props) {
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) => {
    setGoToCart(true);
  };

  return (
    <div>
      <Container className="card-detail">
        <Row>
          <Col>
            <Container>
              <Row>
                <Row>
                  <Col>
                    <img src={props.cards.imagen}></img>
                  </Col>
                </Row>
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
                {goToCart ? (
                  <Link to="/cart">Terminar compra</Link>
                ) : (
                  <ItemCount inicial="1" stock="5" onAdd={onAdd} />
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
