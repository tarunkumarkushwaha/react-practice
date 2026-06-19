import React, { useEffect, useState } from "react";
export default function Form() {
    const [name, setname] = useState("");
    // const [time, setTime] = useState(0);
    // useEffect(() => {
    //     const int = setInterval(() => setTime(prev => prev + 1), 1000)

    //     return () => {
    //         clearInterval(int)
    //     }
    // }, [])

    return (
        <>
            {/* {time} */}
            <form onSubmit={(e) => {
                alert(name)
                e.preventDefault()
            }}>
                <input type="text" onChange={(e) => {
                    setname(e.target.value)
                }} />
                <button type="submit">submit</button>
            </form>
        </>
    );
}
