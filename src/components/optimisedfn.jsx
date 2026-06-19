import React, { useState, useMemo, useCallback } from 'react';

const functionRegistry = new Set();
const dataRegistry = new Set();

export default function OptimizedApp() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    // WITH USEMEMO: Only creates a new array if 'text' changes
    const expensiveList = useMemo(() => {
        return ["Tool A", "Tool B"].filter(item => item.includes(text));
    }, [text]);
    dataRegistry.add(expensiveList);

    // WITH USECALLBACK: The function pointer stays identical across renders
    const handleAction = useCallback(() => {
        console.log("Action triggered");
    }, []); // No dependencies = stays the same forever
    functionRegistry.add(handleAction);
    console.log(dataRegistry)

    return (
        <div className="p-4 border border-green-500">
            <button onClick={() => setCount(c => c + 1)}>Re-render ({count})</button>
            <input onChange={(e) => setText(e.target.value)} placeholder="Type..." />

            <div className="mt-4 bg-green-50 p-2">
                <p>Unique Function Addresses: **{functionRegistry.size}**</p>
                <p>Unique List Addresses: **{dataRegistry.size}**</p>
            </div>
        </div>
    );
}