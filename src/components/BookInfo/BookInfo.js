import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BookInfo.css";

function BookInfo() {
  const { id } = useParams();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [data, setData] = useState({ entryDate: "" });

  useEffect(() => {
    const link = "https://lxf3d.sse.codesandbox.io/books/" + id;

    const fetchData = async () => {
      const result = await axios.get(link);

      await setData(result.data);
    };

    fetchData();
  }, [id]);

  const Add = async () => {
    await axios.post("https://lxf3d.sse.codesandbox.io/books/addcart", {
      email: user.result.email,
      id: data._id
    });
  };

  const Del = async () => {
    await axios.post("https://lxf3d.sse.codesandbox.io/books/delcart", {
      email: user.result.email,
      id: data._id
    });
  };

  return (
    <div className="info">
      <ul className="bookInfo">
        <li id="div1">
          <img className="cov" src={data?.bookImage} alt="cov" />
        </li>
        <li id="div2">
          <h2>Title : {data?.title}</h2>
          <h5>Prix : {data?.price} DH</h5>
          <h5>Auteur : {data?.author}</h5>
          <h5>Status : {data?.status}</h5>
          <h5>Langage : {data?.language}</h5>
          <h5>Ville : {data?.city}</h5>
          <h5>Categories : {data?.categoryId}</h5>
          <h5>Date d'entrée : {data?.entryDate.substring(0, 10)}</h5>
          <h5>Contact : {data?.info}</h5>
        </li>

        <li id="div3">
          <p>Résumé : {data?.summary}</p>
        </li>
      </ul>

      {user && (
        <div className="panier">
          <button id="add" onClick={Add}>
            Ajouter au panier
          </button>
          <button id="remove" onClick={Del}>
            {" "}
            Supprimer du panier
          </button>
        </div>
      )}
    </div>
  );
}
export default BookInfo;
