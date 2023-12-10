import { useEffect, useState } from "react";
import "./2Dshapes.css";

interface ICircleProps {
  x: number;
  y: number;
  size: number;
  color: string;
  side: number;
  transition: boolean;
}

export default function Circle({
  x,
  y,
  size,
  color,
  side,
  transition,
}: ICircleProps) {
  const startStyle = {
    left: x,
    top: y,
    height: size * 100 + "px",
    width: size * 100 + "px",
    borderRadius: (size * 100) / 2 + "px",
    backgroundColor: color,
    transform: `translateX(${-1000 * side}px)`,
  };
  const style = {
    left: x,
    top: y,
    height: size * 100 + "px",
    width: size * 100 + "px",
    borderRadius: (size * 100) / 2 + "px",
    backgroundColor: color,
  };
  const hoverStyle = {
    left: x,
    top: y,
    height: size * 100 + "px",
    width: size * 100 + "px",
    borderRadius: (size * 100) / 2 + "px",
    transform: `scale(1.2)`,
    backgroundColor: color,
    opacity: 1,
    zIndex: 5,
  };

  const [currentStyle, setCurrentStyle] = useState<any>(startStyle);

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
      className="circle"
      style={currentStyle}
    ></div>
  );
}
