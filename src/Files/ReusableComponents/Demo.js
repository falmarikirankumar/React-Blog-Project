import React from "react";

const Demo = (props) => {
  return (
    <>
      <div
        style={{
          display: "inline-block",
          border: "1px solid black",
          width: "30%",
          height: "20%",
          margin: "10px",
        }}
      >
        <img src={props.img} width={"50%"} height={"150px"} alt="" />
        <h1>{props.heading} </h1>
        <p>{props.para} </p>
      </div>
    </>
  );
};

export default Demo;
