import React from "react";
import "./Single.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Single = (props) => {
  const serv = props.serv;
  const { service, days, hours, doctors, image } = serv;
  const history = useHistory();

  const handleDetails = () => {
    history.push(`/service/${service}`);
  };

  return (
    <div className="single">
      <div>
        <img className="pic" src={image} alt="" />
      </div>
      <div className="details">
        <div>
          <h2 className="mb-5">{service}</h2>
          <h4>Everyday: {hours}</h4>

          <Button onClick={handleDetails} variant="secondary">
            See Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Single;
