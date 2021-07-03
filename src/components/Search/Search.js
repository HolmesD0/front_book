import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import image1 from "../images/photo.jpg";
import axios from "axios";
import "./Search.css";

function Search(props) {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(
        "https://lxf3d.sse.codesandbox.io/books/search",
        { city: id.replaceAll("+", " ") }
      );

      await setData(result.data);
    };

    fetchData();
  }, [id]);

  return (
    <div className="home">
      <img className="home-image" src={image1} alt="" />
      <h1 className="catalogue">Catalogue</h1>
      <ul className="home-row">
        {data.map((all) => {
          return (
            <li>
              <Product
                info={{
                  id: "/articles/" + all._id,
                  img: all.bookImage,
                  title: all.title,
                  price: all.price,
                  type: "Afficher"
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Search;
