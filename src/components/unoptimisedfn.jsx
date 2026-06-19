import React, { useState } from 'react';

// We use these Sets to track unique memory addresses across renders
const functionRegistry = new Set();
const dataRegistry = new Set();

export default function UnoptimizedApp() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // WITHOUT USEMEMO: Created from scratch every render
  const expensiveList = ["Tool A", "Tool B"].filter(item => item.includes(text));
  dataRegistry.add(expensiveList);

  // WITHOUT USECALLBACK: Created from scratch every render
  const handleAction = () => {
    console.log("Action triggered");
  };
  functionRegistry.add(handleAction);

  return (
    <div className="p-4 border">
      <button onClick={() => setCount(c => c + 1)}>Re-render ({count})</button>
      <input onChange={(e) => setText(e.target.value)} placeholder="Type..." />
      
      <div className="mt-4 bg-gray-100 p-2">
        <p>Unique Function Addresses: **{functionRegistry.size}**</p>
        <p>Unique List Addresses: **{dataRegistry.size}**</p>
      </div>
    </div>
  );
}