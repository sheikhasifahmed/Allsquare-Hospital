import React from "react";
import hospital from "../../images/hospital.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Abt = () => {
  return (
    <div className="px-5" style={{ marginTop: "100px" }}>
      <h1 className="mb-3">About Us</h1>
      <div className="row">
        <div className="col-lg-5">
          <img className="img-fluid" src={hospital} alt="" />
        </div>
        <div className="col-lg-7 px-5">
          <h5 className="mb-3">
            <span className="h3" style={{ color: "goldenrod" }}>
              Allsquare Hospital
            </span>{" "}
            is the best hospital in the city with 100 plusbest doctors and best
            services. The hospital establishe in 2001.
          </h5>
          <h5 className="mb-3">
            The hospital is situated at the heart of the city beside the city
            center. Any type of vehicle is suitable to reach here. For the
            outsider patient we have transport system. We have also an active
            halipad where patient from far location can come by helicopter
            ambulance. <br />
            You can find the location on{" "}
            <a href="https://www.google.com/maps">google map</a>
          </h5>
          <h5 className="mb-3">
            Click to know more information <Link to="/aboutUs">About Us</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Abt;
