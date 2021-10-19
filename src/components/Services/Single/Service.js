import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import useData from "../../../Hooks/useData";

const Service = () => {
  const { serviceName } = useParams();

  const [selected, setSelected] = useState({});

  const servs = useData();

  useEffect(() => {
    if (servs.length) {
      const found = servs.find((d) => d.service === serviceName);

      setSelected(found);
    }
  }, [servs]);

  const { service, days, hours, doctors, description, image } = selected;

  return (
    <div className="row px-5" style={{ paddingTop: "100px" }}>
      <div className="col-lg-6">
        <img width="500" src={image} alt="" />
      </div>
      <div className="col-lg-6">
        <h1 className="mb-5">{service}</h1>
        <h3 className="mb-5">
          {days}: {hours}
        </h3>
        <h3>{doctors} doctors are waiting for you</h3>
        <h5>{description}</h5>
      </div>
    </div>
  );
};

export default Service;
