import { useEffect, useState } from "react";
import "./2Dshapes.css";

interface ICrossProps {
  x: number;
  y: number;
  size: number;
  color: string;
  side: number;
  transition: boolean;
}

export default function Cross({ x, y, size, color, transition }: ICrossProps) {
  const startStyle = {
    left: x,
    top: y,
    height: size * 100 + "px",
    width: size * 100 + "px",
    borderRadius: (size * 100) / 2 + "px",
    backgroundColor: color,
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
  };

  const [currentStyle, setCurrentStyle] = useState(startStyle);

  useEffect(() => {
    setTimeout(() => {
      setCurrentStyle(style);
    }, 500);
  }, []);

  useEffect(() => {
    console.log(123123);
    setCurrentStyle(startStyle);
  }, [transition]);

  return (
    <div
      onMouseEnter={() => setCurrentStyle(hoverStyle)}
      onMouseLeave={() => setCurrentStyle(style)}
      className="circle"
      style={currentStyle}
    ></div>
  );
}
