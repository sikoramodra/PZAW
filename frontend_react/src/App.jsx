import { useState, useRef } from "react";
import axios from "axios";

function App() {
  const [displayForm, setDisplayForm] = useState(true);
  const nameRef = useRef();
  const urlRef = useRef();
  const textRef = useRef();
  const checkboxRef = useRef();

  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/", {
        name: nameRef.current.value,
        url: urlRef.current.value,
        text: textRef.current.value,
        sponsored: checkboxRef.current.checked,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchData = () => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/${id}`)
      .then((res) => {
        console.log(res.data);
        fetchData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div>
        <input
          type="button"
          value="Form"
          disabled={displayForm}
          onClick={() => setDisplayForm(true)}
        />

        <input
          type="button"
          value="Table"
          disabled={!displayForm}
          onClick={() => {
            setDisplayForm(false);
            fetchData();
          }}
        />
      </div>

      <div>
        {displayForm ? (
          <form onSubmit={handleSubmit} className="container row">
            <label>
              Name:
              <input type="text" ref={nameRef} />
            </label>
            <label>
              URL:
              <input type="url" ref={urlRef} />
            </label>
            <label>
              text:
              <input type="text" ref={textRef} />
            </label>
            <label>
              <input type="checkbox" ref={checkboxRef} />
              Sponsored
            </label>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "200px" }}
            >
              Submit
            </button>
          </form>
        ) : (
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
                <tr>
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
                    <input
                      type="button"
                      className="btn btn-danger"
                      value="Delete"
                      onClick={() => handleDelete(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default App;
