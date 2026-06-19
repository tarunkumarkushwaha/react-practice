import React, { useEffect, useState } from "react";

export default function TodoList() {
    const [todoArray, settodoArray] = useState(() => {
        const saved = localStorage.getItem("todo");
        return saved ? JSON.parse(saved) : [];
    });
    const [todoItem, settodoItem] = useState({ data: "", check: false });
    const [allCheck, setallCheck] = useState(false);
    const removeItem = (k) => { settodoArray(todoArray.filter((_, i) => i !== k)) }

    console.log(todoArray)

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todoArray));
    }, [todoArray]);

    return (<>
        <ul>
            <input type="checkbox" onChange={(e) => {
                // console.log(e.target.checked);
                setallCheck(e.target.checked)
                settodoArray(prev => prev.map(item => ({ ...item, check: e.target.checked })))
            }} />
            <form onSubmit={(e) => { e.preventDefault(); settodoArray(prev => [...prev, todoItem]); settodoItem({ data: "", check: false }); }}>
                <input value={todoItem.data} onChange={e => settodoItem({ ...todoItem, data: e.target.value })} type="text" />
                <button type="submit">add</button>
            </form>
            {todoArray?.map((t, i) => (
                <li style={{ listStyle: "none" }} key={i}>
                    <input type="checkbox" checked={t.check} onChange={(e) => {
                        let newtodoarray = [...todoArray]
                        newtodoarray.splice(i, 1, { ...t, check: e.target.checked });
                        settodoArray(newtodoarray)
                    }} />
                    {t.data} <button onClick={() => removeItem(i)}>X</button>
                </li>
            ))}
        </ul>
    </>)
}