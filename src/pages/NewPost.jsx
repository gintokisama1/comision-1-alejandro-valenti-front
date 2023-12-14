import { useContext, useState } from "react";
import { API_URL } from "../utils/consts";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo.trim() || !contenido.trim()) return;

    fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.token,
      },
      body: JSON.stringify({
        titulo: titulo.trim(),
        contenido: contenido.trim(),
      }),
    }).then((res) => {
      if (res.status !== 201) return alert("Error creating post");

      navigate("/posts");
    });
  };

  return (
    <div className="container mt-5">
      <h2>Create a new Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="postTitle"
            placeholder="Enter post title"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postContent" className="form-label">
            Content:
          </label>
          <textarea
            className="form-control"
            id="postContent"
            placeholder="Enter post content"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewPost;
