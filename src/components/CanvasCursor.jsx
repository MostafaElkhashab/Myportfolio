import React, { use } from "react";
import useCanvasCursor from "./hooks/useCanvasCursor";

const CanvasCursor = () => {
  useCanvasCursor({});
  return (
    <>
      <canvas id="canvas" className="pointer-events-none fixed inset-0 z-50" />
      {/* <h1>ana hena</h1> */}
    </>
  );
};

export default CanvasCursor;
