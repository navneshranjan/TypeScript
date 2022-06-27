import React from "react";

interface StatusProps {
  status: "success" | "loading" | "error";
}
export const Status = (props: StatusProps) => {
  let message;
  if (props.status == "success") {
    message = "welcome";
  }
  if (props.status == "loading") {
    message = "please wait.....!!";
  }
  if (props.status == "error") {
    message = "something went wrong";
  }

  return (
    <div>
      <h1>status- {message}</h1>
    </div>
  );
};
