{
  /* <div class="loadingio-spinner-rolling-4y43jn98h09"><div class="ldio-405r5a26xhf">
<div></div>
</div></div>
<style type="text/css">

</style> */
}

import React from "react";

const Loading = (props) => {
  return (
    <img
      src="/loading.svg"
      alt="loading"
      width={props.width}
      style={{ marginLeft: "5px", display: props.isOn ? "inline" : "none" }}
    />
  );
};

export default Loading;
