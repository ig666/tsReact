import React from "react";
import usePosition from "../hooks/useMousePositon";

const Position = () => {
  const position = usePosition();
  return (
    <p>
      x:{position.x},y:{position.y}
    </p>
  );
};

export default Position;
