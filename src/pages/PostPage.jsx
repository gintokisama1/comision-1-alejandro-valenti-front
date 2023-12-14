import React, { useCallback, useContext, useEffect, useState } from "react";
import { API_URL } from "../utils/consts";
import { AuthContext } from "../providers/AuthProvider";
import PostList from "../components/PostList";

function PostPage() {
  const [posts, setPosts] = useState([]);
  const { auth } = useContext(AuthContext);

  const getPosts = useCallback(() => {
    fetch(`${API_URL}/posts`, {
      headers: {
        Authorization: auth.token,
      },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, [auth.token]);

  useEffect(() => {
    getPosts();
  }, [auth, getPosts]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">My posts</h1>
      <PostList getPosts={getPosts} posts={posts} />
    </div>
  );
}

export default PostPage;
