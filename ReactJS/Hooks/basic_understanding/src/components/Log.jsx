import { useState } from "react";

function Log({ naam }) {
  const [username, setUsername] = useState(naam);

  function handleClick() {
    setUsername("Anonymous");
  }

  return (
    <div>
      <h1>name: {username}</h1>
      <button onClick={handleClick}>logout</button>
    </div>
  );
}

export default Log;
