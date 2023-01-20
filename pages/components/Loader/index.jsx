import React from "react";

// use svg aniamtion for loading
const Loading = (props) => {
  return (
    <img
      // icon link
      src="/loading.svg"
      alt="loading"
      width={props.width}
      style={{ marginLeft: "5px", display: props.isOn ? "inline" : "none" }}
    />
  );
};

export default Loading;
