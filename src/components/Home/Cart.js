import { React, useState, useEffect } from "react";
import Product from "../Product/Product";
import image1 from "../images/photo.jpg";
import axios from "axios";
import "./Home.css";

function Cart() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      let total = 0;
      const result = await axios.post(
        "https://lxf3d.sse.codesandbox.io/books/cart",
        {
          email: user.result.email
        }
      );

      await setData(result.data);
      await result.data.forEach((element) => {
        total += parseInt(element.price);
      });
      await setPrice(total);
    };

    fetchData();
  }, [data]);

  return (
    <div className="home">
      <img className="home-image" src={image1} alt="" />
      <h1 className="catalogue">Cart {price} DH</h1>
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
export default Cart;
