import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import "./ManageProduct.css";
import { AiTwotoneDelete } from "react-icons/ai";

const ManageProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5055/products")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);
  const deleteProduct = (id) => {
    fetch(`http://localhost:5055/deleteProduct/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    alert("Product deleted successfully");
  };
  return (
    <div>
      <Container>
        <h3 className="text-center mt-5">Admin Dashboard</h3>
        <Table striped bordered hover size="sm" className="table-data p-2 my-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product) => {
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.weight}</td>
                  <td>{product.price}</td>
                  <td>
                    <Button
                      onClick={() => deleteProduct(product._id)}
                      style={{
                        backgroundColor: "#FFFF",
                        color: "red",
                        border: "none",
                      }}
                    >
                      <AiTwotoneDelete
                        style={{ fontSize: "18px", marginLeft: "20px" }}
                      />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ManageProduct;
