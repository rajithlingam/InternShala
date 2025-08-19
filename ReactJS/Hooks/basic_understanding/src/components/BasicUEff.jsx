import { useEffect, useState } from "react";

function BasicUEff() {
  const [val, setVal] = useState(100);
  const [clock, setClock] = useState(0);

  console.log("hello 1"); // logs on every render (before effects)

  // ✅ Case 1 - useEffect runs only once (like componentDidMount)
  // useEffect(() => {
  //   console.log("hello from useEffect - once only");
  // }, []);

  // ✅ Case 2 - useEffect runs when val or clock changes
  useEffect(() => {
    console.log("hello from useEffect - val or clock changed");
  }, [val, clock]);

  // ✅ Case 3 - useEffect runs on every render (not recommended usually)
  // useEffect(() => {
  //   console.log("hello from useEffect - every render");
  // });

  console.log("hello 2"); // logs on every render (after effect scheduled)

  return (
    <div>
      <h1 onClick={() => setClock(clock + 1)}>Clock: {clock}</h1>
      <button onClick={() => setVal(val + 1)}>Update val ({val})</button>
    </div>
  );
}

export default BasicUEff;
