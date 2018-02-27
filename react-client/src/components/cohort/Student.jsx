import React from "react";

const Student = (props) => (
  <div style={{color: "#FEFEFE"}}>
    <span>{props.student.first_name}</span>
    <span>{props.student.last_name}</span>
    <span>{props.student.github_link}</span>
  </div>
);

export default Student;
