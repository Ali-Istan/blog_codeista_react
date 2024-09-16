import React from "react";
import { Audio, TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <TailSpin
        height="100"
        width="100"
        radius="9"
        color="green"
        ariaLabel="loading"
      />
    </div>
  );
}

export default Loader;
