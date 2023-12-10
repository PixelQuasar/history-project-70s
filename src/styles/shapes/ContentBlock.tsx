import { useEffect, useState } from "react";
import "./Content.scss";

export default function ContentBlock({ transition, children }: any) {
  const startStyle = {
    transform: "scale(0)",
  };

  const defaultStyle = {
    transform: "scale(1)",
  };

  const [style, setStyle] = useState(startStyle);

  useEffect(() => {
    setTimeout(() => {
      setStyle(defaultStyle);
    }, 200);
  }, []);

  useEffect(() => {
    setStyle(startStyle);
  }, [transition]);

  return (
    <div className="content-block" style={style}>
      {children}
    </div>
  );
}
