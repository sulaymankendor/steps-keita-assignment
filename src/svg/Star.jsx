import React from "react";

function Star({ width, color }) {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 53.867 53.867"
      className={`${width} ${color} mr-1`}
    >
      <polygon
        points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798
          10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
      />
    </svg>
  );
}

export default Star;
