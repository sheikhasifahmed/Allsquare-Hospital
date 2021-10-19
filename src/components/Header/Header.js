import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useFirebase from "../../Firebase/useFirebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useFirebase();
  const navstyle = { textDecoration: "none", color: "white" };
  return (
    <div className="header">
      <nav className="row">
        <div className="col-lg-6 d-flex justify-content-between">
          <NavLink to="/home" style={navstyle}>
            Home
          </NavLink>
          <HashLink to="/home#services" style={navstyle}>
            Services
          </HashLink>
          <NavLink to="/aboutUs" style={navstyle}>
            About Us
          </NavLink>
          <NavLink to="/appoinment" style={navstyle}>
            Appoinment
          </NavLink>
        </div>

        <div className="col-lg-6 d-flex justify-content-end">
          {user.email ? (
            <div>
              {user.email}
              <Button
                className="ms-auto"
                variant="outline-light"
                onClick={logOut}
              >
                Logout
              </Button>
            </div>
          ) : (
            <NavLink style={navstyle} to="/login">
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
