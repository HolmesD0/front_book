import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core/";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

export default function Admin() {
  const [posts, setPosts] = useState([]);

  const Delete = async (e) => {
    if (window.confirm("Are you sure?"))
      await axios.delete("https://lxf3d.sse.codesandbox.io/books/" + e.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://lxf3d.sse.codesandbox.io/books/");

      await setPosts(result.data);
    };

    fetchData();
  }, [posts]);

  let columns = [];
  columns = [
    { field: "id", hide: true },
    { field: "col1", headerName: "Title", width: 225 },
    { field: "col2", headerName: "Language", width: 150 },
    { field: "col3", headerName: "City", width: 125 },
    { field: "col4", headerName: "Price", width: 125 },
    { field: "col5", headerName: "Email", width: 200 },
    { field: "col6", headerName: "Category", width: 140 },
    {
      field: "col7",
      headerName: "Show",
      width: 120,
      renderCell: (params) => (
        <Button
          component={Link}
          variant="contained"
          color="primary"
          size="small"
          to={params.value}
        >
          Show
        </Button>
      )
    },
    {
      field: "col8",
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
      field: "col9",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={() => Delete(params)}
        >
          Delete
        </Button>
      )
    }
  ];

  let rows = [];
  rows = posts.map((post, index) => {
    return (rows = {
      id: index,
      col1: post.title,
      col2: post.language,
      col3: post.city,
      col4: post.price,
      col5: post.info,
      col6: post.categoryId,
      col7: "/articles/" + post._id,
      col8: "/update/" + post._id,
      col9: post._id
    });
  });

  return (
    <div style={{ height: 550, width: "100%", backgroundColor: "white" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
