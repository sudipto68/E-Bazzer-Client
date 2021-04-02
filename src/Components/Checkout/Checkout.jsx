import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  let { productId } = useParams();
  console.log(productId);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5055/products")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);
  const desiredProduct = allProducts.find((p) => p._id === productId);
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
            <td>name</td>
            <td>1</td>
            <td>price</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Checkout;
