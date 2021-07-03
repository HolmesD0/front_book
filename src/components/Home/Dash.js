import { React, useState, useEffect } from "react";
import Product from "../Product/Product";
import image1 from "../images/photo.jpg";
import axios from "axios";
import "./Home.css";

function Dash() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://lxf3d.sse.codesandbox.io/books/");

      await setData(result.data);
    };

    fetchData();
  }, [data]);

  return (
    <div className="home">
      <img className="home-image" src={image1} alt="" />
      <h1 className="catalogue">Catalogue</h1>
      <ul className="home-row">
        {data.map((all) => {
          return (
            all.info === user.result.email && (
              <li>
                <Product
                  info={{
                    id: "/update/" + all._id,
                    img: all.bookImage,
                    title: all.title,
                    price: all.price,
                    type: "Modifier"
                  }}
                />
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}
export default Dash;
