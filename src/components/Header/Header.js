import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useHistory } from "react-router-dom";
import logo from "../images/logo.png";
import "./Header.css";

const openMenu = () => {
  document.querySelector(".aside").classList.add("open");
};
const closeMenu = () => {
  document.querySelector(".aside").classList.remove("open");
};

function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [data, setData] = useState({ Search: "" });
  const history = useHistory();

  return (
    <nav className="Header">
      <div className="header">
        <button onClick={openMenu}> &#9776;</button>

        <img className="header-logo" src={logo} alt="logo" />
        <div className="header-search">
          <input
            type="text"
            className="header-searchinput"
            onChange={(event) => {
              setData({ ...data, Search: event.target.value });
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                history.push("/Search/" + data.Search.replaceAll(" ", "+"));
              }
            }}
          />
          <SearchIcon
            className="header-searchicon"
            onClick={() => {
              history.push("/Search/" + data.Search.replaceAll(" ", "+"));
            }}
          />
        </div>
        <div className="header-nav">
          <Link to="/" className="header-link">
            <div className="header-option">
              <span>L'accueil</span>
            </div>
          </Link>{" "}
          |
          <Link to="/login" className="header-link">
            <div className="header-option">
              <span>Se connecter</span>
            </div>
          </Link>{" "}
          |
          <Link to="/Signup" className="header-link">
            <div className="header-option">
              <span>S'inscrire</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="aside">
        <h3>Les catégories des livres</h3>
        <button className="button-close" onClick={closeMenu}>
          x
        </button>
        <ul>
          <li>
            <Link to="/Search/Romans">Romans</Link>
          </li>
          <li>
            <Link to="/Search/Sciences">Sciences</Link>
          </li>
          <li>
            <Link to="/Search/Religion">Religion</Link>
          </li>
          <li>
            <Link to="/Search/Poésie">Poésie</Link>
          </li>
          <li>
            <Link to="/Search/Autobiographie">Autobiographie</Link>
          </li>
          <li>
            <Link to="/Search/Informatique">Informatique</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
