import React, { Component } from "react";

function Developer(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Developer;
