import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { name, price, weight, image, _id } = props.product;
  return (
    <div>
      <Card style={{ width: "15rem" }} className="prd-card">
        <Card.Img
          variant="top"
          style={{ width: "150px", marginLeft: "auto", marginRight: "auto" }}
          src={image}
        />
        <Card.Body>
          <Card.Title>
            {name} - {weight}
          </Card.Title>
          <div className="d-flex">
            <h4 style={{ color: "#71BA58" }}>${price}</h4>
            <Link to={`checkout/${_id}`} className="ml-auto">
              <Button className="prd-btn">Buy Now</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
