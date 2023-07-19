import React from "react";
import edit from "../icons/editing.png";
import deleteIcon from "../icons/delete.png";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../constants";
import axios from "axios";
import { toast } from "react-toastify";
import { useStoreActions } from "easy-peasy";

function Card({ id, name, completed }) {
  const { increment } = useStoreActions((actions) => actions.counter);
  const deleteHandler = () => {
    axios
      .delete(`${SERVER_URL}/${id}`)
      .then((res) => {
        toast.success("Deleted successfully");
        increment();
      })
      .catch((err) => {
        toast.error("Failed to delete");
        console.error({ msg: err });
      });
  };
  return (
    <>
      <div className="h-8 bg-slate-200 border-2 border-y-white">
        <p className={`w-max inline pl-2 ${completed ? "line-through" : ""}`}>
          {name}
        </p>
        <div className="flex float-right space-x-2">
          <Link to={`/edit/${id}`}>
            <img src={edit} alt="edit" className="h-6 hover:bg-green-300"></img>
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
