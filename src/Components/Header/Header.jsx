import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleLogout = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    firebase
      .auth()
      .signOut()
      .then(() => {
        const loggedOutUser = {};
        setLoggedInUser(loggedOutUser);
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand style={{ fontWeight: "700", color: "#71BA58" }}>
            E-BAZZAR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} className="mr-3 link" to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="mr-3 link" to="/order">
                Orders
              </Nav.Link>
              <Nav.Link as={Link} className="mr-3 link" to="/admin">
                Admin
              </Nav.Link>
              <Nav.Link as={Link} className="mr-3 link" to="/deal">
                Deals
              </Nav.Link>
              {loggedInUser.email ? (
                <div className="d-flex">
                  <img
                    className="m-2 mx-2"
                    src={loggedInUser?.photoURL}
                    alt="userImage"
                    style={{
                      height: "25px",
                      width: "25px",
                      borderRadius: "50%",
                    }}
                  />
                  <p className="m-2 mx-2">{loggedInUser?.displayName}</p>
                  <Button className="btnn mt-1" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <Link to="/login">
                  <Button className="btnn mt-1">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
