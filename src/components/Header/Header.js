import React from "react";
import "./Header.css";
import CTA from './Resume/CTA'
import image from '../../assets/image.png'
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I,m</h5>
        <h1>Rishabh Khare</h1>
        <h5 className="'text-light">Frontend Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={image} alt="me"/>
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
