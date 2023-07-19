import React, { useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../constants";
import { toast } from "react-toastify";
import { useStoreActions } from "easy-peasy";

function Header() {
  const { increment } = useStoreActions((actions) => actions.counter);
  const [name, setName] = useState("");
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const submitHandler = () => {
    axios
      .post(SERVER_URL, { name })
      .then(() => {
        toast.success("Task created successfully");
        increment();
      })
      .catch((error) => {
        toast.error("Failed to add data");
        console.error({ msg: error });
      })
      .finally(() => {
        setName("");
      });
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      submitHandler();
    }
  };
  return (
    <div className="h-max shadow-lg hover:shadow-xl w-2/3 p-6 space-y-2">
      <div className=" w-full p-2 text-center">Task Manager</div>
      <div className="flex-col">
        <input
          type="text"
          placeholder="e.g. wash dishes"
          className="border-2 border-slate-600 w-full h-8 p-2 md:w-2/3 md:mx-auto md:block mb-2"
          value={name}
          onChange={nameChangeHandler}
          onKeyDown={handleKeyDown}
        ></input>
        <button
          type="submit"
          className="border-2 border-slate-600 bg-slate-400  hover:bg-stone-500 m-auto h-8 w-full md:w-1/2 md:mx-auto block"
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Header;
