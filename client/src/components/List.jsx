import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { toast } from "react-toastify";
import { useStoreState } from "easy-peasy";

function List() {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;

  const counter = useStoreState((state) => state.counter.value);
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(SERVER_URL)
      .then((res) => {
        setAllData(res.data.tasks);
      })
      .catch((error) => {
        toast.error("Error occured while fetching data");
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [counter]);
  return (
    <div className="h-3/4 pt-2 w-1/2 border-2 border-slate-700 mx-auto overflow-y-scroll">
      <div>
        <p className="h-max p-2 text-center">Your List</p>
        <hr className="border-1 border-slate-700"></hr>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <div className="mt-2 space-y-2">
            {allData?.map((data) => {
              return (
                <Card
                  key={data._id}
                  name={data.name}
                  id={data._id}
                  completed={data.completed}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
