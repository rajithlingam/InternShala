import React, { useState, createContext, useContext } from 'react';

const CounterContext = createContext();

function PropDrilling() {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <div>
        <Count />
      </div>
    </CounterContext.Provider>
  );
}

function Count() {
  return (
    <div>
      <CountRendered />
      <Button />
    </div>
  );
}

function CountRendered() {
  const { count } = useContext(CounterContext);
  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

function Button() {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>--</button>
      <button onClick={() => setCount(count + 1)}>++</button>
    </div>
  );
}

export default PropDrilling;
