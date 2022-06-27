import React from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import { Namelist } from "./components/Namelist";
import { Status } from "./components/Status";

function App() {
  const nameList = [
    { first: "navnesh", last: "ranjan" },
    { first: "sumit", last: "kumar" },
    { first: "roshan", last: "raj" },
  ];
  return (
    <div className="App">
      {/* <Greet name="navnesh" isLoggedIn={true} messages={20} />
      <Namelist names={nameList} /> */}
      <Status status="error" />
    </div>
  );
}

export default App;
