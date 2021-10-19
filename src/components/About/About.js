import React from "react";
import hospital from "../../images/hospital.jpg";
import map from "../../images/map.jpg";
import doctors from "../../images/doctors.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="d-flex">
      <div className="mx-auto w-75">
        <div>
          <img className="w-100" src={hospital} alt="" />
        </div>
        <div>
          <h1 className="mt-5">Location</h1>

          <div className="d-flex">
            <img width="300px" src={map} alt="" />
            <h5 className="ms-5">
              The hospital is situated at the heart of the city beside the city
              center. Any type of vehicle is suitable to reach here. For the
              outsider patient we have transport system. We have also an active
              halipad where patient from far location can come by helicopter
              ambulance. <br />
              You can find the location on google map. <br />
              <a href="https://www.google.com/maps">click here</a> to get the
              google map location.
            </h5>
          </div>

          <h1 className="mt-5">Doctor & Staffs</h1>

          <div className="d-flex">
            <img width="300px" src={doctors} alt="" />
            <h5 className="ms-5">
              We have the best doctors, nurse & staffs. More than 100 of
              doctors, 400+ nurse works in the hospital for your best treatment.
              <br />
              The Hospital is open 24 hours in purpose of emmergency. The
              doctors, nurse and stuffs work on regular shift to provide you the
              consistent service.
              <br />
              Click to see our <Link to="/home#services">Services</Link> to see
              our services.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
