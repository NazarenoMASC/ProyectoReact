import "./ItemDetail.css";
import ItemCount from "./ItemCount";

import { Col, Container, Row } from "react-bootstrap";
import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";

function ItemDetail(props) {
<<<<<<< HEAD
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) => {
    setGoToCart(true);
  };

=======
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;
  console.log(addToCart);
>>>>>>> 502131c6b8ecce101dc53499d81dec507b3c9702
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
<<<<<<< HEAD
                {goToCart ? (
                  <Link to="/cart">Terminar compra</Link>
                ) : (
                  <ItemCount inicial="1" stock="5" onAdd={onAdd} />
                )}
=======
                <ItemCount stock={props.cards.stock} initial={1} />
>>>>>>> 502131c6b8ecce101dc53499d81dec507b3c9702
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ItemDetail;
