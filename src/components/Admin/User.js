import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core/";
import { Link } from "react-router-dom";
import axios from "axios";

export default function User() {
  const [posts, setPosts] = useState([]);

  const Update = async (e) => {
    if (window.confirm("Are you sure?"))
      await axios.post("https://lxf3d.sse.codesandbox.io/user/enable", {
        email: e.value.email,
        isEnable: !e.value.isEnable
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://lxf3d.sse.codesandbox.io/user/");

      await setPosts(result.data);
    };

    fetchData();
  }, [posts]);

  let columns = [];
  columns = [
    { field: "id", hide: true },
    { field: "col1", headerName: "Login", width: 125 },
    { field: "col2", headerName: "First Name", width: 150 },
    { field: "col3", headerName: "Last Name", width: 150 },
    { field: "col4", headerName: "City", width: 125 },
    { field: "col5", headerName: "Email", width: 200 },
    { field: "col6", headerName: "Type", width: 125 },
    {
      field: "col7",
      headerName: "Update",
      width: 125,
      renderCell: (params) => (
        <Button
          component={Link}
          variant="contained"
          color="primary"
          size="small"
          to={params.value}
        >
          Update
        </Button>
      )
    },
    {
      field: "col8",
      headerName: "Enable",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => Update(params)}
        >
          {params.value.isEnable ? "enable" : "disable"}
        </Button>
      )
    }
  ];

  let rows = [];
  rows = posts.map((post, index) => {
    return (rows = {
      id: index,
      col1: post.login,
      col2: post.firstName,
      col3: post.lastName,
      col4: post.city,
      col5: post.email,
      col6: post.isAdmin ? "Admin" : post.isClient ? "Client" : "None",
      col7: "/user/" + post._id,
      col8: { email: post.email, isEnable: post.isEnable }
    });
  });

  return (
    <div style={{ height: 550, width: "100%", backgroundColor: "white" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
