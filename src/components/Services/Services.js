import React from "react";
import useData from "../../Hooks/useData";
import Single from "./Single/Single";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
  const servs = useData();

  return (
    <div className="px-3" id="services">
      <h1 className="service-head">--- Our services ---</h1>
      <div className="grid">
        {servs.map((s) => (
          <Single serv={s} key={s.id}></Single>
        ))}
      </div>
    </div>
  );
};

export default Services;
