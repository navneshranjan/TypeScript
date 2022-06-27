import React from "react";

type PersonList = {
  names: {
    first: string;
    last: string;
  }[];
};
export const Namelist = (props: PersonList) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h1>
            {name.first} {name.last}
          </h1>
        );
      })}
    </div>
  );
};
