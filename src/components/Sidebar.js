import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
function Sidebar() {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle("slide");
  };

  return (
    <>
      <a
        href="/"
        onClick={openMenu}
        className={`js-oliven-nav-toggle oliven-nav-toggle${
          show ? " active" : ""
        }`}
      >
        <i></i>
      </a>
      <aside id="oliven-aside">
        <div className="oliven-logo">
          <a href="#home">
            <img src={Logo} alt="" />
            <span>
              Shweta <small>&</small> Gopal
            </span>
            <h6>21.11.2021</h6>
          </a>
        </div>
        <nav className="oliven-main-menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#couple">Couple</a>
            </li>

            <li>
              <a href="#organization">Organization</a>
            </li>

            <li>
              <a href="#whenwhere">When & Where</a>
            </li>
          </ul>
        </nav>
        <div className="footer1">
          {" "}
          <span className="separator"></span>
          <p>
            Shweta & Gopal wedding
            <br />
            21st November 2021, Meerut UP
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
