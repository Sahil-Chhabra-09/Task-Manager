import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useStoreActions } from "easy-peasy";

function Edit() {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;

  const { increment } = useStoreActions((actions) => actions.counter);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/${id}`)
      .then((res) => {
        setName(res.data.task.name);
        setComplete(res.data.task.completed);
      })
      .catch((error) => {
        toast.error("Error occured while updating");
        console.error(error);
      });
  }, [id]);

  const [name, setName] = useState(id);
  const [complete, setComplete] = useState(false);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const statusChangeHandler = () => {
    setComplete(!complete);
  };

  const submitHandler = () => {
    const payload = {
      name: name,
      completed: complete,
    };
    axios
      .patch(`${SERVER_URL}/${id}`, payload)
      .then(() => {
        toast.success("Updated successfully");
        increment();
      })
      .catch((error) => {
        toast.error("Error occured while updating");
        console.error(error);
      });
    navigate("/");
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center text-center">
        <div className="shadow-2xl w-2/3 space-y-2 border-y-2 border-t-2 border-slate-400 p-2">
          <p>Edit Task</p>
          {/* edit options */}
          <div className="border-2 border-slate-400 space-y-2 p-2">
            <div className="flex">
              <p className="w-1/3 inline">Task Id</p>
              <input
                type="text"
                placeholder="blabla"
                className="border-2 w-2/3 inline float-right pl-2"
                defaultValue={id}
              ></input>
            </div>
            <div className="flex">
              <p className="w-1/3 inline">Name</p>
              <input
                type="text"
                placeholder="blabla"
                className="border-2 w-2/3 inline float-right pl-2"
                value={name}
                onChange={nameChangeHandler}
              ></input>
            </div>
            <div className="flex">
              <p className="w-1/3">Completed</p>
              <div className="w-2/3">
                <input
                  type="checkbox"
                  className="float-left mt-1"
                  checked={complete}
                  onChange={statusChangeHandler}
                ></input>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="border-2 border-slate-400 px-2 hover:bg-slate-400 hover:text-white"
            onClick={submitHandler}
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}

export default Edit;
