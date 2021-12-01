import React from "react";
import "./style(Nahu).css";

const Destination = () => {
  return (
    <section className="destination">
      <div>
        <h2>01</h2>
        <h2> Pick your destination</h2>
      </div>
      <div className="destContainer">
        <section className="destLeft">
          <div id="planetImg"></div>
        </section>
        <section className="destRight">
          <ul>
            <a href="#">Moon</a>
            <a className="planetActive" href="#">
              Mars
            </a>
            <a href="#">Europa</a>
            <a href="#">Titan</a>
          </ul>
          <h1>Mars</h1>
          <p>
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>
          <div id="distanceContainer">
            <div>
              <h4>Avg. distance</h4>
              <h2>225 mil. km</h2>
            </div>
            <div>
              <h4>Est. travel time</h4>
              <h2>9 months</h2>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Destination;
