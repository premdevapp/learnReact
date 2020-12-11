import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    //<p>I'm a person and my age is {Math.floor(Math.random() * 30)} years</p>
    <div className="person-card">
      <p onClick={props.click}>
        I'm a {props.name} and my age is {props.age} years
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name} />
    </div>
  );
};

export default person;
