import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  let { _id } = useParams();
  //console.log(_id);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("https://quiet-retreat-37725.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);
  const desiredProduct = allProducts.find((p) => p._id === _id);
  console.log(desiredProduct);
  return (
    <div>
      <h2 className="my-5 text-center">Checkout</h2>
      <Table striped bordered hover size="sm" className="table-data p-2">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{desiredProduct?.name}</td>
            <td>1</td>
            <td>{desiredProduct?.price}</td>
          </tr>
        </tbody>
      </Table>
      <Button className="btnn px-2 checkout">Checkout</Button>
    </div>
  );
};

export default Checkout;
