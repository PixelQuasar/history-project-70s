import { useEffect, useState } from "react";

interface IStripesProps {
  x: number;
  y: number;
  size: number;
  color: string;
  degree: number;
  side: number;
  transition: boolean;
}

export default function Stripes({
  x,
  y,
  size,
  color,
  degree,
  side,
  transition,
}: IStripesProps) {
  const startStyle = {
    transform: `rotate(${degree}deg) translateX(${
      1000 * side * Math.cos(degree)
    }px) translateY(${-500 * side * Math.sin(degree)}px)`,
    left: x + "px",
    top: y + "px",
  };
  const style = {
    transform: `rotate(${degree}deg)`,
    left: x + "px",
    top: y + "px",
  };
  const hoverStyle = {
    transform: `rotate(${degree + 10}deg) scale(1.2)`,
    left: x + "px",
    top: y + "px",
    opacity: 1,
    zIndex: 5,
  };

  const [currentStyle, setCurrentStyle] = useState(startStyle);

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
      onMouseEnter={() => setCurrentStyle(hoverStyle)}
      onMouseLeave={() => setCurrentStyle(style)}
      className="square"
      style={currentStyle}
    >
      {Array.apply(null, new Array(10)).map((_: any, index: number) => (
        <div
          key={index}
          className="stripe"
          style={{
            margin: 5 * size + "px",
            height: 5 * size + "px",
            width: 100 * size + "px",
            backgroundColor: color,
          }}
        ></div>
      ))}
    </div>
  );
}
