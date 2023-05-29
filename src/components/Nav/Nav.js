import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";

const Nav = () => {
  const [activaNav, setActiveNav] = useState("a");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("a")}
        className={activaNav === "a" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activaNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a href="#portfolio"
      onClick={() => setActiveNav("#portfolio")}
      className={activaNav === "#portfolio" ? "active" : ""}
      >
        <GiSkills />
      </a>
      <a href="#experience"
      onClick={() => setActiveNav("#experience")}
      className={activaNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a href="#contact"
      onClick={() => setActiveNav("#contact")}
      className={activaNav === "#contact" ? "active" : ""}
      >
        <BiMessageRoundedDetail />
      </a>
    </nav>
  );
};

export default Nav;
