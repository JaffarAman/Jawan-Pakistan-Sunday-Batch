import React, { useEffect } from "react";
import StoreNavbar from "../../Components/StoreNavbar/StoreNavbar";
import axios from "axios";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardCmp from "../../Components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProductAtion } from "../../store/Actions/product";

const Store = () => {
  //   const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { data, dataLoading } = useSelector((state) => state.GetProductReducer);
  useEffect(() => {
    dispatch(getProductAtion());
  }, []);

  //   const fetchData = async () => {};
  return (
    <div>
      <StoreNavbar />
      {dataLoading ? (
        <h1>LOADING....</h1>
      ) : (
        <Container className="mt-5">
          <Row>
            {data.map((product) => {
              return (
                <Col lg="3" key={product.id}>
                  <CardCmp product={product} />
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Store;
