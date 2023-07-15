import React from "react";
import Card from "./Card";

const allData = [
  {
    id: 1,
    value: "greens",
  },
  {
    id: 2,
    value: "peas",
  },
  {
    id: 3,
    value: "onions",
  },
];

function List() {
  return (
    <div className="h-3/4 pt-2 w-1/2 border-2 border-slate-700 mx-auto overflow-y-scroll">
      <div>
        <p className="h-max p-2 text-center">Your List</p>
        <hr className="border-1 border-slate-700"></hr>
        <div className="mt-2 space-y-2">
          {allData.map((data) => (
            <Card key={data.id} value={data.value} id={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default List;
