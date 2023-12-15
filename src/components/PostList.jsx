import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { Link, useNavigate } from "react-router-dom";

const PostList = ({ posts, getPosts }) => {
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (Array.isArray(posts)) {
      const filtered = posts.filter((post) => {
        return post.titulo.toLowerCase().includes(search.toLowerCase());
      });

      setFilteredPosts(filtered);
    }
  }, [search, posts]);

  return (
    <div style={{ minWidth: "420px" }}>
      <Link to="/posts/new" className="btn btn-success">
        Create
      </Link>
      <input
        type="search"
        className="form-control"
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <>
        {filteredPosts.map((post) => (
          <PostItem
            getPosts={getPosts}
            key={post._id}
            post={post}
            onClick={() => {
              navigate(`/posts/${post._id}`);
            }}
          />
        ))}
      </>
    </div>
  );
};

export default PostList;
