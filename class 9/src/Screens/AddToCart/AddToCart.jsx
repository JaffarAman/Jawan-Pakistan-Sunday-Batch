import React from "react";
import StoreNavbar from "../../Components/StoreNavbar/StoreNavbar";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardCmp from "../../Components/Card/Card";

const AddToCart = () => {
  const { cartItem } = useSelector((state) => state.AddToCartReducer);

  console.log(cartItem, "cartItem");
  return (
    <div>
      <StoreNavbar />

      <Container className="mt-5">
        <Row>
          {cartItem.map((product) => {
            return (
              <Col lg="3" key={product.id}>
                <CardCmp product={product} removeBtn={true} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default AddToCart;
