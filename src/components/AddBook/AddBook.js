import React, { Component } from "react";
import FileBase from "react-file-base64";
import axios from "axios";
import "./AddBook.css";

class AddBook extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      status: "",
      city: "",
      language: "",
      summary: "",
      price: "",
      entryDate: "",
      bookImage: "",
      category: "",
      info: ""
    };
    this.changetitle = this.changetitle.bind(this);
    this.changeauthor = this.changeauthor.bind(this);
    this.changestatus = this.changestatus.bind(this);
    this.changecity = this.changecity.bind(this);
    this.changelanguage = this.changelanguage.bind(this);
    this.changeprice = this.changeprice.bind(this);
    this.changesummary = this.changesummary.bind(this);
    this.changeentryDate = this.changeentryDate.bind(this);
    this.changebookImage = this.changebookImage.bind(this);
    this.changecategory = this.changecategory.bind(this);
    this.changeinfo = this.changeinfo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changetitle(event) {
    this.setState({
      title: event.target.value
    });
  }
  changeauthor(event) {
    this.setState({
      author: event.target.value
    });
  }
  changecity(event) {
    this.setState({
      city: event.target.value
    });
  }
  changestatus(event) {
    this.setState({
      status: event.target.value
    });
  }
  changelanguage(event) {
    this.setState({
      language: event.target.value
    });
  }
  changeprice(event) {
    this.setState({
      price: event.target.value
    });
  }
  changesummary(event) {
    this.setState({
      summary: event.target.value
    });
  }
  changeentryDate(event) {
    this.setState({
      entryDate: event.target.value
    });
  }
  changebookImage({ base64 }) {
    this.setState({
      bookImage: base64
    });
  }
  changecategory(event) {
    this.setState({
      category: event.target.value
    });
  }
  changeinfo(event) {
    this.setState({
      info: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const registered = {
      title: this.state.title,
      author: this.state.author,
      city: this.state.city,
      status: this.state.status,
      language: this.state.language,
      summary: this.state.summary,
      price: this.state.price,
      entryDate: this.state.entryDate,
      bookImage: this.state.bookImage,
      category: this.state.category,
      info: this.state.info
    };
    axios
      .post("https://lxf3d.sse.codesandbox.io/books", registered)
      .then((response) => console.log(response.data));

    this.setState({
      title: "",
      author: "",
      city: "",
      status: "",
      language: "",
      price: "",
      summary: "",
      entryDate: "",
      bookImage: "",
      category: "",
      info: ""
    });
  }
  render() {
    return (
      <div className="book">
        <form
          id="formbook"
          className="navbar rouded"
          method="post"
          onSubmit={this.onSubmit}
          action="/"
        >
          <fieldset id="field1" className="container">
            <center>
              <legend>Nouveau livre</legend>

              <table>
                <tr>
                  <td>
                    <label htmlFor="nom">Couverture du livre</label>
                  </td>
                  <td>
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={this.changebookImage}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="nom">Titre de livre</label>
                  </td>
                  <td>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      placeholder="Titre de livre"
                      required
                      value={this.state.title}
                      onChange={this.changetitle}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="nom">Nom d'auteur</label>
                  </td>
                  <td>
                    <input
                      id="author"
                      name="author"
                      type="text"
                      placeholder="Nom d'autheur"
                      required
                      value={this.state.author}
                      onChange={this.changeauthor}
                    />{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="nom">L'état du livre</label>
                  </td>
                  <td>
                    <input
                      id="status"
                      name="status"
                      type="text"
                      placeholder="L'état du livre"
                      required
                      value={this.state.status}
                      onChange={this.changestatus}
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
                      type="text"
                      placeholder="Ville"
                      value={this.state.city}
                      onChange={this.changecity}
                    />{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="nom">langage</label>
                  </td>
                  <td>
                    <input
                      id="language"
                      name="language"
                      type="text"
                      placeholder="La langue"
                      required
                      value={this.state.language}
                      onChange={this.changelanguage}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="nom">Le prix</label>
                  </td>
                  <td>
                    <input
                      id="price"
                      name="price"
                      type="text"
                      placeholder="Prix"
                      required
                      value={this.state.price}
                      onChange={this.changeprice}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="nom">Date d'entée du livre</label>
                  </td>
                  <td>
                    <input
                      id="dateE"
                      name="dateE"
                      type="date"
                      placeholder="jj/mm/aaaa"
                      required
                      value={this.state.entryDate}
                      onChange={this.changeentryDate}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="nom">Catégorie</label>
                  </td>
                  <td>
                    <input
                      id="category"
                      name="category"
                      type="text"
                      placeholder="Catégorie"
                      value={this.state.category}
                      onChange={this.changecategory}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="nom">Résume</label>
                  </td>
                  <td>
                    <input
                      id="summary"
                      name="summary"
                      type="text"
                      placeholder="Résumé"
                      required
                      value={this.state.summary}
                      onChange={this.changesummary}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="nom">Contact</label>
                  </td>
                  <td>
                    <input
                      id="summary"
                      name="summary"
                      type="text"
                      placeholder="Contact"
                      required
                      value={this.state.info}
                      onChange={this.changeinfo}
                    />
                  </td>
                </tr>
              </table>
            </center>
          </fieldset>
          <fieldset id="connexion" className="container">
            <input
              id="confirmer"
              name="confirmer"
              type="submit"
              value="Enregister"
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AddBook;
