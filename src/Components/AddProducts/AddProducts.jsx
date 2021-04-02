import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";
import "./AddProducts.css";

const AddProducts = () => {
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);
  const handleImageUpload = (e) => {
    const imageData = new FormData();
    imageData.set("key", "5a3c6730ecfd9da364b7454a96cb701e");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImage(response.data.data.display_url);
      })
      .catch(function (err) {
        alert(err);
      });
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const productData = {
      name: data.Name,
      price: data.Price,
      weight: data.Weight,
      image: image,
    };
    const url = `http://localhost:5055/addproducts`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => alert(err));
    setShow(true);
  };
  return (
    <>
      <Container>
        {show && <Redirect to="/admin"></Redirect>}
        <h3 className="text-center mt-5">Admin Dashboard</h3>
        <div className="d-flex justify-content-center py-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="login-form mx-2 add-product"
          >
            <h3 className="text-center my-2 mb-4">Add Products</h3>
            <lebel style={{ fontWeight: "bold" }}>Product Name</lebel>
            <br />
            <input name="Name" defaultValue="Product Name" ref={register} />
            <br />
            <br />
            <lebel style={{ fontWeight: "bold" }}>Product Price</lebel>
            <br />
            <input name="Price" defaultValue="Price" ref={register} />
            <br />
            <br />
            <lebel style={{ fontWeight: "bold" }}>Product Weight</lebel>
            <br />
            <input name="Weight" defaultValue="Weight" ref={register} />
            <br />
            <br />
            <lebel style={{ fontWeight: "bold" }}>Product Image</lebel>
            <br />
            <input type="file" onChange={handleImageUpload} />
            <br />
            <input
              className="btnn my-3 text-white p-1"
              type="submit"
              value="Save"
            />
          </form>
        </div>
      </Container>
    </>
  );
};

export default AddProducts;
