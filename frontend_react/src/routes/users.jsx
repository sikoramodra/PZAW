import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/users")({
  component: RouteComponent,
});

function RouteComponent() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Fetching error:", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/${id}`)
      .then((res) => {
        console.log("Deleted:", res.data);
        fetchData();
      })
      .catch((error) => {
        console.error("Delete error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Lp</th>
          <th>Name</th>
          <th>Icon</th>
          <th>Text</th>
          <th>Sponsored</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>
              <img
                src={item.url}
                alt={item.name}
                style={{ width: "128px", height: "128px" }}
              />
            </td>
            <td>{item.text}</td>
            <td>{item.sponsored ? "Yes" : "No"}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
