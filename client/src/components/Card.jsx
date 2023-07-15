import React from "react";
import edit from "../icons/editing.png";
import deleteIcon from "../icons/delete.png";
import { Link } from "react-router-dom";

function Card({ id, value }) {
  const editHandler = () => {
    console.log("Edited");
  };
  const deleteHandler = () => {
    console.log("Deleted");
  };
  return (
    <>
      <div className="h-8 bg-slate-200 border-2 border-y-white">
        <p className="w-max inline pl-2">{value}</p>
        <div className="flex float-right space-x-2">
          <Link to={`/edit/${id}`}>
            <img
              src={edit}
              alt="edit"
              className="h-6 hover:bg-green-300"
              onClick={editHandler}
            ></img>
          </Link>
          <img
            src={deleteIcon}
            alt="delete"
            className="h-6 hover:bg-red-300"
            onClick={deleteHandler}
          ></img>
        </div>
      </div>
    </>
  );
}

export default Card;
