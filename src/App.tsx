import React from "react";
import "./App.css";
import { Heading } from "./components/childrenProps/Heading";
import { Oscar } from "./components/childrenProps/Oscar";
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
      <Heading>hello</Heading>
      <Oscar>
        <Heading>Oscar goes to GOOGLE....!!!</Heading>
      </Oscar>
      <Greet name="navnesh" isLoggedIn={true} />
    </div>
  );
}

export default App;
