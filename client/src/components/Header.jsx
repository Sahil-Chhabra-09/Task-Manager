import React from "react";

function Header() {
  const submitHandler = () => {
    console.log("Handle submit");
  };
  return (
    <div className="h-max shadow-lg hover:shadow-xl w-2/3 p-6 space-y-2">
      <div className=" w-full p-2 text-center">Task Manager</div>
      <div className="flex-col">
        <input
          type="text"
          placeholder="e.g. wash dishes"
          className="border-2 border-slate-600 w-full h-8 p-2 md:w-2/3 md:mx-auto md:block mb-2"
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
