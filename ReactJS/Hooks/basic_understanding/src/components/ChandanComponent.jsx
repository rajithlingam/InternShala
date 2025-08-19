import { useState } from "react";

function ChandanComponent() {
  const [name, setName] = useState("chandan");
  const [num, setNum] = useState(10);

  const handleMultiply = () => {
    setNum(num * 5);
  };

  const handleNameChange = () => {
    setName("anonymous");
  };

  return (
    <div className="text-center mt-10 space-y-4">
      <h2 className="text-xl font-semibold">Name: {name}</h2>
      <h3 className="text-lg">Number: {num}</h3>

      <div className="space-x-4">
        <button onClick={handleMultiply}>Multiply by 5</button>
        <button onClick={handleNameChange}>Change Name</button>
      </div>
    </div>
  );
}

export default ChandanComponent;
