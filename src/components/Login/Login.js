import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../../actions/auth";
import "./Login.css";

function Login() {
  const [data, setData] = useState({
    login: "",
    password: ""
  });
  const dispatch = useDispatch();

  const changelogin = (event) => {
    setData({
      ...data,
      login: event.target.value
    });
  };

  const changepassword = (event) => {
    setData({
      ...data,
      password: event.target.value
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(data));
    setData({ ...data, login: "", password: "" });
  };

  return (
    <div className="login">
      <form
        id="form"
        className="navbar rouded"
        method="post"
        onSubmit={onSubmit}
      >
        <fieldset id="field1" className="container">
          <legend>Connectez vous sur Books-Swap </legend>

          <table>
            <tr>
              <td>
                <label htmlFor="nom">Login</label>
              </td>
              <td>
                <input
                  id="login"
                  name="login"
                  type="login"
                  placeholder="login"
                  required
                  value={data.login}
                  onChange={changelogin}
                />{" "}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="nom">Mot de passe</label>
              </td>
              <td>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="mot de passe "
                  required
                  value={data.password}
                  onChange={changepassword}
                />
              </td>
            </tr>
          </table>
        </fieldset>
        <fieldset id="connexion" className="container">
          <input id="con" name="conexion" type="submit" value="connexion" />
          <button id="inscrire">
            <Link to="/Signup">Inscription </Link>
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
