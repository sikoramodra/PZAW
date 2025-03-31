import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import axios from "axios";

export const Route = createFileRoute("/register")({
  component: RouteComponent,
});

function RouteComponent() {
  const nameRef = useRef();
  const urlRef = useRef();
  const textRef = useRef();
  const checkboxRef = useRef();

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
        console.log("Submitted:", res.data);
      })
      .catch((error) => {
        console.error("Submission error:", error);
      });
  };

  return (
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
        Text:
        <input type="text" ref={textRef} />
      </label>
      <label>
        <input type="checkbox" ref={checkboxRef} />
        Sponsored
      </label>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: "200px", marginTop: "1rem" }}
      >
        Submit
      </button>
    </form>
  );
}
