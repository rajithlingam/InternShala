import React, { memo, useState } from "react";

function Memo() {
  const [naam, setNaam] = useState("KASH");

  function handleNaam() {
    const names = ["VAV", "KASH", "AMUL"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    setNaam(randomName);
  }

  return (
    <div>
      <Chotu name={naam} />
      <button onClick={handleNaam}>Change name</button>

      <Chotu name="VAV" />
      <Chotu name="KASH" />
      <Chotu name="AMUL" />
    </div>
  );
}

const Chotu = memo(function ({ name }) {
  console.log("Rendering:", name);
  return (
    <div>
      <h1>I am Chotu: {name}</h1>
    </div>
  );
});

export default Memo;
