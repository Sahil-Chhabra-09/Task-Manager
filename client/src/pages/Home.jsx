import React from "react";
import Header from "../components/Header";
import List from "../components/List";

function Home() {
  return (
    <div className="flex-col h-screen">
      <div className="h-1/3 flex justify-center items-center">
        <Header />
      </div>
      <div className="h-2/3">
        <List />
      </div>
    </div>
  );
}

export default Home;
