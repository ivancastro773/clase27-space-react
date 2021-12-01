import React from "react";
import './style(Ema).css';

const Tech = () => {
  return (
    <section class="spaceLaunchContainer">
      <h3 class="titular">
        <b>03</b>SPACE LAUNCH 101
      </h3>

      <div class="spaceLaunch">
        <div class="containerLaunch">
          <ul class="launchNumbers">
            <li class="launchActive">
              <a class="launchBtn" href="">
                1
              </a>
            </li>
            <li>
              <a class="launchBtn" href="">
                2
              </a>
            </li>
            <li>
              <a class="launchBtn" href="">
                3
              </a>
            </li>
          </ul>

          <div class="launchText">
            <p>THE TERMINOLOGY...</p>
            <h2>LAUNCH VEHICLE</h2>
            <p>
              {" "}
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>

        <div class="launchImage"></div>
      </div>
    </section>
  );
};

export default Tech;
