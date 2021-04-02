import React, { useEffect, useState } from "react";
import "./Home.css";
import { Button, Container, Form, FormControl, Spinner } from "react-bootstrap";
import Product from "../Product/Product";

const Home = () => {
  const [showSpiner, setShowSpiner] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setShowSpiner(true);
    fetch("http://localhost:5055/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setShowSpiner(false);
      });
  }, []);
  return (
    <div className="py-4 my-4">
      <Container>
        <Form inline className="form">
          <FormControl
            type="text"
            style={{ backgroundColor: "#F1F1F1" }}
            placeholder="Search Food"
            className="m-sm-1 search-box"
          />
          <Button className="btnn search" style={{ height: "39px" }}>
            Search
          </Button>
        </Form>
        {showSpiner === true ? (
          <div className="spin">
            <Spinner animation="border" role="status"></Spinner>
          </div>
        ) : (
          <div className="product my-5 mx-2">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Home;
