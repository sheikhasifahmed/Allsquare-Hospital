import React from "react";
import appointPic from "../../images/appoinment.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Appoint = () => {
  return (
    <div className="px-5" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-lg-5">
          <img className="img-fluid" src={appointPic} alt="" />
        </div>
        <div className="col-lg-6 px-5 pt-5">
          <h1 className="mb-3">Online Appointment</h1>
          <h5 className="mb-4">
            You can always get an appoinment online. You'll not have to wait for
            a long time in a queue. All you have to do to fill up a online form.
            Click to get the <Link to="/appoinment">Appointment form</Link>
          </h5>
          <h5>
            To get the appoinment form you have to login first. To login your
            account got to <Link to="/login">Login</Link> <br />
            If you don't have an account, first register for an account. Click
            to <Link to="/register">Create your account</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Appoint;
