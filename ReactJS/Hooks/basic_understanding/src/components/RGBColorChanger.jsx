import { useState } from "react";

function RGBColorChanger() {
  const [color, setColor] = useState("rgb");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div style={{ backgroundColor: color }}>
      <h1>{color}</h1>

      <div>
        <button onClick={() => changeColor("red")}>red</button>
        <button onClick={() => changeColor("green")}>green</button>
        <button onClick={() => changeColor("blue")}>blue</button>
      </div>
    </div>
  );
}

export default RGBColorChanger;
