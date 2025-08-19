import React, { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [inp, setInp] = useState(0);

  function handleChange(e) {
    setInp(Number(e.target.value)); // converting to number to avoid string input
  }

  // useMemo memoizes the expensive calculation — runs only when `inp` changes
  const finaLans = useMemo(() => {
    let ans = 0;
    for (let i = 1; i <= inp; i++) {
      console.log("Loop ran");
      ans += i;
    }
    return ans;
  }, [inp]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>

      <h1>Sum: {finaLans}</h1>

      <input
        onChange={handleChange}
        type="number"
        value={inp}
        placeholder="Enter a number"
      />

      {/* Comment: sum from 1 to input number */}
    </div>
  );
}

export default UseMemo;
