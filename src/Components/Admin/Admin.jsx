import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="mt-5">
      <h3 className="text-center my-4">Admin Dashboard</h3>
      <Container className="d-flex justify-content-center">
        <ListGroup horizontal>
          <ListGroup.Item>
            <Link to="/manageproduct">Manage Products</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="/addproducts">Add Products</Link>
          </ListGroup.Item>
          <ListGroup.Item>Edit Products</ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
};

export default Admin;
