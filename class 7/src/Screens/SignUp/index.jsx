import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth, db } from "../../firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = localStorage.getItem("uid");

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/todo");
    }
  }, []);
  const signupHandler = (e) => {
    e.preventDefault();
    console.log("submit form");
    const dbCollection = collection(db, "users");

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (resolve) => {
        console.log("resolve", resolve);
        const obj = {
          fullName,
          email,
          uid: resolve.user.uid,
        };
        // await addDoc(dbCollection, obj);
        await setDoc(doc(db, "users", resolve.user.uid), obj);
        navigate("/");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  return (
    <section className="container mt-5">
      <h1 className="mb-5">SIGNUP</h1>
      <Form onSubmit={signupHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>FULL NAME</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            placeholder="Enter FullName"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default SignUp;
