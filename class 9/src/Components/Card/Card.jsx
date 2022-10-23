import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import {
  AddtoCartAction,
  RemovetoCartAction,
} from "../../store/Actions/product";

function CardCmp({ product, removeBtn }) {
  const dispatch = useDispatch();
  console.log("product", product);
  const addToCart = () => {
    dispatch(AddtoCartAction(product));
  };
  const removeToCart = () => {
    dispatch(RemovetoCartAction(product));
  };
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img
        variant="top"
        className="w-100"
        height={200}
        src={product.image}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        {removeBtn ? (
          <Button variant="primary" onClick={removeToCart}>
            Remove to cart
          </Button>
        ) : (
          <Button variant="primary" onClick={addToCart}>
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CardCmp;
