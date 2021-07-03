import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../Profil/Profil.css";

class Profil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      lastName: "",
      firstName: "",
      login: "",
      city: "",
      email: "",
      password: "",
      re: ""
    };
    this.changelastName = this.changelastName.bind(this);
    this.changefirstName = this.changefirstName.bind(this);
    this.changecity = this.changecity.bind(this);
    this.changelogin = this.changelogin.bind(this);
    this.changeemail = this.changeemail.bind(this);
    this.changepassword = this.changepassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changelastName(event) {
    this.setState({
      lastName: event.target.value
    });
  }
  changefirstName(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  changecity(event) {
    this.setState({
      city: event.target.value
    });
  }
  changelogin(event) {
    this.setState({
      login: event.target.value
    });
  }
  changeemail(event) {
    this.setState({
      email: event.target.value
    });
  }
  changepassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  componentDidMount() {
    const link = "https://lxf3d.sse.codesandbox.io/user/" + this.state.id;

    const fetchData = async () => {
      const result = await axios.get(link);

      await this.setState({
        lastName: result.data.lastName,
        firstName: result.data.firstName,
        login: result.data.login,
        city: result.data.city,
        email: result.data.email,
        re: result.data.password
      });
    };

    fetchData();
  }

  onSubmit(event) {
    event.preventDefault();

    const registered = {
      lastName: this.state.lastName,
      firstName: this.state.firstName,
      city: this.state.city,
      login: this.state.login,
      email: this.state.email,
      password: this.state.password || this.state.re
    };

    axios
      .post("https://lxf3d.sse.codesandbox.io/user/setting", registered)
      .then((response) => console.log(response.data));

    this.props.history.push("/");
  }
  render() {
    return (
      <div className="signup">
        <form
          className="navbar rouded"
          method="post"
          onSubmit={this.onSubmit}
          action="/"
        >
          <fieldset id="field1" className="container">
            <center>
              <legend>Nouvelle inscription</legend>

              <table>
                <tr>
                  <td>
                    <label htmlFor="nom">Nom</label>
                  </td>
                  <td>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="nom"
                      value={this.state.lastName}
                      onChange={this.changelastName}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="nom">Prénom</label>
                  </td>
                  <td>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="prenom"
                      value={this.state.firstName}
                      onChange={this.changefirstName}
                    />{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="nom">login</label>
                  </td>
                  <td>
                    <input
                      id="login"
                      name="login"
                      type="text"
                      placeholder="login"
                      value={this.state.login}
                      onChange={this.changelogin}
                    />{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="nom">La ville</label>
                  </td>
                  <td>
                    <input
                      id="city"
                      name="city"
                      type="ville"
                      placeholder="ville"
                      value={this.state.city}
                      onChange={this.changecity}
                    />{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="nom">Email</label>
                  </td>
                  <td>
                    <input
                      disabled
                      id="email"
                      name="email"
                      type="email"
                      placeholder="***@email.com"
                      value={this.state.email}
                      onChange={this.changeemail}
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
                      placeholder="mot de passe"
                      value={this.state.password}
                      onChange={this.changepassword}
                    />
                  </td>
                </tr>
              </table>
            </center>
          </fieldset>
          <fieldset id="connexion" className="container">
            <button
              id="confirmer"
              name="confirmer"
              type="submit"
              onSubmit={this.onSubmit}
            >
              Modifier
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default withRouter(Profil);
