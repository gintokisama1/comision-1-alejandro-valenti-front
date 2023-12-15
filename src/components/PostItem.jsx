import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import { useId } from "react";
import DeletePostModel from "./DeletePostModel";

const PostItem = ({ post, getPosts, onClick }) => {
  const modalId = useId();

  return (
    <div
      key={post._id}
      className="card mb-3"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={post.author.avatar}
            alt={post.author.username}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{post.titulo}</h5>
            <p className="card-text">
              <span>{post.contenido}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <Link to="#" className="btn btn-success me-2">
          <HiOutlinePencilAlt /> Edit
        </Link>
        <Link
          to="#"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target={"#modal" + post._id}
        >
          <HiOutlineTrash /> Delete
        </Link>

        <DeletePostModel
          getPosts={getPosts}
          modalId={modalId}
          postId={post._id}
        />
      </div>
    </div>
  );
};

export default PostItem;
