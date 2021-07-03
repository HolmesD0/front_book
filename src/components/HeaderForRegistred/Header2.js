import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actionType from "../../constants/actionTypes";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useHistory } from "react-router-dom";
import logo from "../images/logo.png";
import "./Header2.css";

const openMenu = () => {
  document.querySelector(".aside").classList.add("open");
};
const closeMenu = () => {
  document.querySelector(".aside").classList.remove("open");
};

function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [data, setData] = useState({ Search: "" });
  const admin = user ? user.result.isAdmin : false;
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    setUser(null);
    localStorage.clear();
    window.location.reload();
  };

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
          <Link to="/cart" className="header-link">
            <div className="header-option">
              <span>Panier</span>
            </div>
          </Link>{" "}
          |
          <Link to="/profil" className="header-link">
            <div className="header-option">
              <span>Profil</span>
            </div>
          </Link>{" "}
          |
          <div className="header-link" onClick={logout}>
            <div className="header-option">
              <span>Se deconnecter</span>
            </div>
          </div>
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
        <h3>livres</h3>
        <button className="button-close" onClick={closeMenu}>
          x
        </button>
        <ul>
          <li>
            <Link to="/addBook">ajouter</Link>
          </li>
          <li>
            <Link to="/dash">modifier</Link>
          </li>
        </ul>
        {admin && (
          <>
            <h3>Admin</h3>
            <button className="button-close" onClick={closeMenu}>
              x
            </button>
            <ul>
              <li>
                <Link to="/admin/book">Books</Link>
              </li>
              <li>
                <Link to="/admin/user">Users</Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
}
export default Header;
