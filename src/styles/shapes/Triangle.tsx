import React, { useEffect, useState } from "react";
import "./2Dshapes.css";

interface ITriangleProps {
  x: number;
  y: number;
  size: number;
  color: string;
  degree: number;
  side: number;
  transition: boolean;
}

export default function Triangle({
  x,
  y,
  size,
  color,
  degree,
  side,
  transition,
}: ITriangleProps) {
  const startStyle = {
    left: x,
    top: y,
    borderBottomColor: color,
    borderRightWidth: `${size * 50}px`,
    borderLeftWidth: `${size * 50}px`,
    borderBottomWidth: `${size * 86.60254}px`,
    transform: `rotate(${degree}deg) translateX(${
      -500 * side * Math.cos(degree)
    }px) translateY(${500 * side * Math.sin(degree)}px)`,
  };
  const style = {
    left: x,
    top: y,
    borderBottomColor: color,
    borderRightWidth: `${size * 50}px`,
    borderLeftWidth: `${size * 50}px`,
    borderBottomWidth: `${size * 86.60254}px`,
    transform: `rotate(${degree}deg)`,
  };

  const [currentStyle, setCurrentStyle] =
    useState<React.CSSProperties>(startStyle);

  useEffect(() => {
    setCurrentStyle(startStyle);
  }, [transition]);

  useEffect(() => {
    setTimeout(() => {
      setCurrentStyle(style);
    }, 100);
  }, []);

  return (
    <div
      //onMouseEnter={() => setCurrentStyle(hoverStyle)}
      //onMouseLeave={() => setCurrentStyle(style)}
      className="equilateralTriangle"
      style={currentStyle}
    ></div>
  );
}
