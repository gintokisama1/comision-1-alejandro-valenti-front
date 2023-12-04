/* import React, { useEffect, useState } from "react";
import Post from "./Post"; // Componente para mostrar una publicación de viaje
import Comment from "./Comment"; // Componente para mostrar un comentario
import { API_URL } from "../utils/consts"; */

import { useCallback, useContext, useEffect, useState } from "react";
import { API_URL } from "../utils/consts";
import { AuthContext } from "../providers/AuthProvider";

function HomePage() {
  const [posts, setPosts] = useState([]); // Estado para almacenar las publicaciones de viajes
  const [comments, setComments] = useState([]); // Estado para almacenar los comentarios

  // Función para cargar las publicaciones y comentarios desde la API
  /*   const fetchData = async () => {
    try {
      // Lógica para obtener las publicaciones desde la API
      const postsResponse = await fetch(`${API_URL}/posts`);
      const postsData = await postsResponse.json();
      setPosts(postsData);

      // Lógica para obtener los comentarios desde la API
      const commentsResponse = await fetch(`${API_URL}/comments`);
      const commentsData = await commentsResponse.json();
      setComments(commentsData);
    } catch (error) {
      console.error("Error al cargar datos:", error);
    }
  };
 */
  const [foro, setPlaylists] = useState([]);

  const { auth } = useContext(AuthContext);

  const getPlaylist = useCallback(() => {
    fetch(`${API_URL}/playlist`, {
      headers: {
        Authorization: auth.token,
      },
    })
      .then((res) => res.json())
      .then((data) => setPlaylists(data))
      .catch((err) => console.log(err));
  }, [auth.token]);

  useEffect(() => {
    getPlaylist();
  }, [auth, getPlaylist]);

  return (
    <div className="container mt-5">
      <h1 className="display-4 mb-4 text-center">Publicaciones de Viajes</h1>

      {/* Sección de Publicaciones de Viajes */}
      <section className="mb-4">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>

      {/* Sección de Comentarios */}
      <h2 className="h4 mb-3 text-center">Comentarios</h2>
      <section className="mb-4">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </section>
    </div>
  );
}

export default HomePage;
