import React from "react";
import today from "./Date";
import AllUsers from "./AllUsers";
import EvenUsers from "./EvenUsers";

function App() {
  return (
    <div>
      <h3 className="text-center">Today: {today}</h3>
      <AllUsers />
      <EvenUsers />
    </div>
  );
}

export default App;
