import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const Enable = () => {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      await axios.post("https://lxf3d.sse.codesandbox.io/user/disable", {
        login: id
      });
    };

    fetchData();
    history.push("/");
  });

  return <></>;
};

export default Enable;
