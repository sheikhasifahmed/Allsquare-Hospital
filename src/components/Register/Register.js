import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import useFirebase from "../../Firebase/useFirebase";
import icon from "../../images/google.ico";

const Register = () => {
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signWithGoogle } = useFirebase();

  const googleLogin = () => {
    signWithGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const { registerWithEmail } = useFirebase();

  const register = (e) => {
    e.preventDefault();
    registerWithEmail(email, password).then((userCredential) => {
      history.push("/home");
    });
  };

  return (
    <div className="row" style={{ paddingTop: "100px" }}>
      <div className="col-lg-6 mx-auto ">
        <div>
          <h5 className="text-start">
            Create an account with Email & password
          </h5>
          <Form onSubmit={register} className="form-style   mx-auto">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onBlur={handleEmail}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onBlur={handlePassword}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                required
                label="I accept all terms & conditions"
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <p>
                Already registered? <Link to="/login">click here to login</Link>
              </p>
            </div>
          </Form>
        </div>

        <div className="mt-5">
          <h3 className="mb-2 mt-5">
            --------OR------- <br />
          </h3>
          <Button onClick={googleLogin} variant="outline-success">
            <img width="20" src={icon} alt="" />
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
