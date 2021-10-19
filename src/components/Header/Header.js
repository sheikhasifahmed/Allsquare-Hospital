import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useFirebase from "../../Firebase/useFirebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useFirebase();

  const navact = { textDecoration: "none", color: "red", fontWeight: "700" };
  return (
    <div className="header">
      <nav className="row">
        <div className="col-lg-6 d-flex justify-content-between">
          <NavLink to="/home" className="navstyle" activeStyle={navact}>
            Home
          </NavLink>
          <HashLink
            to="/home#services"
            className="navstyle"
            activeStyle={navact}
          >
            Services
          </HashLink>
          <NavLink to="/aboutUs" className="navstyle" activeStyle={navact}>
            About Us
          </NavLink>
          <NavLink to="/appoinment" className="navstyle" activeStyle={navact}>
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
            <NavLink className="navstyle" activeStyle={navact} to="/login">
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
