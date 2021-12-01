import React from "react";
import "./styles.css";
import Logo from "./logo.svg";
import {Routes,Route,Link} from 'react-router-dom';
//components
import Explore from "../Explore/Explore";
import Crew from "../Crew/Crew";
import Destination from "../destination/Destination";
import Tech from "../Tech/Tech";

const hambur = document.querySelector(".toogle");
const item = document.querySelectorAll(".item");
const fa = document.querySelector("fa-timers");
const pr = document.querySelector("#pr");

const changeIcon = () => {  
  let i = 0;
  let len = item.length;
  for (; i < len; i++) {
    if (item[i].classList.contains("active")) {
      item[i].classList.remove("active");
    } else {
      item[i].classList.add("active");
    }
  }
  pr.classList.toggle("fa-times");
};

const Nav = () => {
  return (
      <div>
        <nav id="nav">
        <img src={Logo} alt="logo" />
        <hr />
        <ul id="item">
            <li>
                <Link className="navActive" to="/"><b>00</b> HOME</Link>
            </li>
            <li>
                <Link to="/destination-mars"><b>01</b> DESTINATION</Link>
            </li>
            <li>
                <Link to="/crew-engineer"><b>02</b> CREW</Link>
            </li>
            <li>
                <Link to="/technology-spaceport"><b>03</b> TECHNOLOGY</Link>
            </li>
        </ul>
        <ul>
            <li className="toggle">
            <a href="#" onClick={changeIcon}>
                <i id="tg" className="fas fa-bars "></i>
            </a>
            </li>
        </ul>
        </nav>
        <Routes>
            <Route index path="/" element={<Explore/>}/>
            <Route index path="/destination-mars" element={<Destination/>}/>
            <Route index path="/crew-engineer" element={<Crew/>}/>
            <Route index path="/technology-spaceport" element={<Tech/>}/>
        </Routes>
      </div>
  );
};

export default Nav;
