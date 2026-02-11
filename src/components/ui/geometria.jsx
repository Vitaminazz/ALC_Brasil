import React from "react";
import { Square, Circle } from "lucide-react";

const GeometryIcon = ({ type }) => {
  if (type === "Quadrado") {
    return <Square size={20} title="Quadrado" />;
  }
  if (type === "Circular") {
    return <Circle size={20} title="Circular" />;
  }
  return null;
};

export default GeometryIcon;