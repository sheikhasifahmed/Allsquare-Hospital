import React from "react";
import Services from "../Services/Services";
import Abt from "./Abt";
import Appoint from "./Appoint";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Abt></Abt>
      <Appoint></Appoint>
    </div>
  );
};

export default Home;
