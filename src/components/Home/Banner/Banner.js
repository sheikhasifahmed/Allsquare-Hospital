import React from "react";
import bannerPic from "../../../images/bannerPic.png";
import "./Banner.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Banner = () => {
  const history = useHistory();

  const handleAbout = () => {
    history.push("/aboutUs");
  };

  return (
    <div className="banner">
      <div>
        <img src={bannerPic} alt="" />
      </div>
      <div className="banner-text">
        <h1>Allsqure Hospital</h1>
        <h3>
          We are here for you <br />
          With the best Doctosr and best services
        </h3>
        <div className="d-flex justify-content-start">
          <Button className="m-3" variant="outline-light" onClick={handleAbout}>
            About Us
          </Button>
          <a href="/home#services">
            <Button className="m-3" variant="outline-light">
              Services
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
