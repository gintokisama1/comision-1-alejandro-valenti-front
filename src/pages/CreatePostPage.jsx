import { useState, useContext, useEffect } from "react";
import { API_URL } from "../utils/consts";
import { AuthContext } from "../providers/AuthProvider";

function CreatePostPage() {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [posts, setPosts] = useState([]);
  const { auth } = useContext(AuthContext);

  const fetchPosts = () => {
    fetch(`${API_URL}/posts`, {
      headers: {
        Authorization: auth.token,
      },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPosts();
  }, [auth.token]);

  const handlePostSubmit = (e) => {
    e.preventDefault();

    // Enviar la nueva publicación al servidor
    fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.token,
      },
      body: JSON.stringify({
        titulo: newPostTitle,
        contenido: newPostContent,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        // Actualizar la lista de publicaciones después de la creación exitosa
        fetchPosts();
        // Limpiar el contenido del nuevo post en el estado local
        setNewPostTitle("");
        setNewPostContent("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h1 className="display-4 mb-4 text-center">Crear Publicación</h1>

      {/* Formulario para crear una nueva publicación */}
      <form onSubmit={handlePostSubmit} className="mb-4">
        <div className="mb-3">
          <input
            type="text"
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
            placeholder="Título de la publicación"
            className="form-control"
          />
        </div>
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          rows="4"
          placeholder="Escribe tu nueva publicación..."
          className="form-control mb-3"
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Publicar
        </button>
      </form>

      {/* Lista de publicaciones existentes */}
      <h2 className="h4 mb-3 text-center">Publicaciones Actuales</h2>
      <section className="mb-4">
        {posts.map((post) => (
          <div key={post.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CreatePostPage;
