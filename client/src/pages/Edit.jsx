import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [name, setName] = useState(id);
  const [complete, setComplete] = useState(false);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const statusChangeHandler = () => {
    setComplete(!complete);
  };

  return (
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
              value={id}
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
                value={complete}
                onChange={statusChangeHandler}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
