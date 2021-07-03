import { React } from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <div className="article">
      <img src={props.info.img} className="cover" alt="" />
      <div className="article-info">
        <p className="article-title">{props.info.title}</p>
        <p className="article-price">
          <strong>{props.info.price}</strong>
          <small> DH</small>
        </p>
      </div>
      <button id="view">
        <Link to={props.info.id}>{props.info.type}</Link>{" "}
      </button>
    </div>
  );
}
export default Product;
