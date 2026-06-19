import { useState, useEffect, useRef } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timeoutRef = useRef(null);

  const toggleRunning = () => {
    if (!running) {
      setTime(t => t + 1);
    }
    setRunning(r => !r);
  };

  useEffect(() => {
    if (!running) return;
    timeoutRef.current = setTimeout(() => {
      setTime(t => t + 1);
    }, 1000);

    return () => clearTimeout(timeoutRef.current);
  }, [time, running]);

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={toggleRunning}>
        {running ? "Stop" : "Start"}
      </button>
    </div>
  );
}
// import { useState, useEffect } from "react";

// export default function Timer() {
//     const [time, setTime] = useState(0);
//     const [running, setRunning] = useState(false);

//     useEffect(() => {
//         if (!running) return;

//         const id = setTimeout(() => {
//             setTime(t => t + 1);
//         }, 1000);

//         return () => clearTimeout(id);
//     }, [running,time]);

//     return (
//         <div>
//             <h1>{time}</h1>
//             <button onClick={() => setRunning(!running)}>{!running ? "Start" : "Stop"}</button>
//         </div>
//     );
// }

// import { useState, useEffect, useRef } from "react";

// export default function Timer() {
//   const [time, setTime] = useState(0);
//   const [running, setRunning] = useState(false);
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     if (!running) return;

//     timeoutRef.current = setTimeout(() => {
//       setTime(t => t + 1);
//     }, 1000);

//     return () => clearTimeout(timeoutRef.current);
//   }, [time, running]);

//   return (
//     <div>
//       <h1>{time}</h1>
//       <button onClick={() => setRunning(r => !r)}>
//         {running ? "Stop" : "Start"}
//       </button>
//     </div>
//   );
// }

