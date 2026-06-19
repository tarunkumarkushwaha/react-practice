import React, { useState } from "react";

const topics = [
  {
    id: "closures",
    title: "1. Closures",
    definition:
      "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). In short, an inner function always has access to the vars of its outer function, even after the outer function has returned.",
    reactConnection:
      "It’s the backbone of Hooks (like useState). If you don’t manage them well, you get 'stale closures' where an event handler captures an old state value.",
    code: `function createCounter() {
  let count = 0; // Lexical scope
  return function() {
    count++; // Closure captures 'count'
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2`,
  },
  {
    id: "prototypes",
    title: "2. Prototypes",
    definition:
      "JavaScript is a prototype-based language. Every JavaScript object has a built-in property (called [[Prototype]], accessed via Object.getPrototypeOf() or __proto__) that links to another object. Objects inherit methods and properties from this prototype.",
    code: `const animal = { eats: true };
const dog = Object.create(animal); // dog's prototype is animal

console.log(dog.eats); // true (inherited)
console.log(dog.hasOwnProperty('eats')); // false`,
  },
  {
    id: "event-loop",
    title: "3. Event Loop",
    definition:
      "JavaScript is single-threaded, meaning it executes one thing at a time. The Event Loop is the mechanism that allows JS to perform non-blocking I/O operations by offloading tasks to the browser/Node.js Web APIs, and then coordinating the execution of chunks of your code via the Call Stack, Microtask Queue (Promises), and Callback Queue (setTimeout).",
    code: `console.log('1'); // Call Stack

setTimeout(() => console.log('2'), 0); // Callback Queue (Macro)

Promise.resolve().then(() => console.log('3')); // Microtask Queue

console.log('4'); // Call Stack

// Output order: 1, 4, 3, 2  (Microtasks beat Macrotasks)`,
  },
  {
    id: "callbacks",
    title: "4. Callbacks",
    definition:
      "A callback is simply a function passed as an argument to another function, intended to be executed after a certain event or task completion.",
    code: `function fetchData(callback) {
  setTimeout(() => {
    callback("Data received!");
  }, 1000);
}

fetchData((result) => {
  console.log(result); // "Data received!"
});`,
  },
  {
    id: "promises",
    title: "5. Promises",
    definition:
      "A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It avoids 'Callback Hell' by allowing you to chain asynchronous actions linearly using .then() and .catch(). States: pending, fulfilled, rejected.",
    code: `const fetchUser = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve({ id: 1, name: "Alex" });
  else reject("Error fetching user");
});

fetchUser
  .then(user => console.log(user.name))
  .catch(err => console.error(err));`,
  },
  {
    id: "async-await",
    title: "6. Async/Await",
    definition:
      "Syntactic sugar built on top of Promises. It makes asynchronous code look and behave more like synchronous code, greatly improving readability.",
    code: `async function getUserData() {
  try {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch:", error);
  }
}`,
  },
  {
    id: "generators",
    title: "7. Generators",
    definition:
      "Special functions that can be paused and resumed midway through execution. They use the function* syntax and the yield keyword, returning an iterator object.",
    reactConnection:
      "Heavily used in asynchronous state management middleware like redux-saga.",
    code: `function* numberGenerator() {
  yield 1;
  yield 2;
  return 3;
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }`,
  },
  {
    id: "debouncing",
    title: "8. Debouncing",
    definition:
      "A technique used to limit the rate at which a function gets triggered. It delays the execution of a function until a certain amount of time has passed since the last time it was called.",
    reactConnection:
      "Preventing an API search call on every single keystroke in a search input field.",
    code: `function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer); // Reset the timer if called again
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

const handleSearch = debounce((query) => console.log(query), 300);`,
  },
  {
    id: "throttling",
    title: "9. Throttling",
    definition:
      "Enforces a maximum number of times a function can be called over a given period (e.g., 'execute this function at most once every 200ms').",
    reactConnection:
      "Handling scroll, window resize, or drag-and-drop events without melting the user's CPU.",
    code: `function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

const handleScroll = throttle(() => console.log('Scrolled!'), 200);`,
  },
  {
    id: "memoization",
    title: "10. Memoization",
    definition:
      "An optimization technique where you speed up programs by caching the results of expensive function calls and returning the cached result when the same inputs occur again.",
    reactConnection:
      "useMemo caches values, and useCallback caches function definitions between renders to prevent unnecessary re-renders.",
    code: `function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const expensiveSquare = memoize((num) => num * num);`,
  },
  {
    id: "currying",
    title: "11. Currying",
    definition:
      "A functional programming transformation where a function that takes multiple arguments is evaluated into a sequence of nested functions, each taking a single argument.",
    code: `// Regular: multiply(a, b) -> Curried version:
const multiply = (a) => (b) => a * b;

const double = multiply(2); 
console.log(double(5)); // 10
console.log(multiply(3)(5)); // 15`,
  },
  {
    id: "hoisting",
    title: "12. Hoisting",
    definition:
      "JavaScript's behavior of moving declarations to the top of their current scope during the compilation phase. var variables are hoisted as undefined, let and const are hoisted into the Temporal Dead Zone (TDZ), and functions are fully hoisted.",
    code: `console.log(x); // undefined (var hoisted)
// console.log(y); // ReferenceError (let in TDZ)

var x = 5;
let y = 10;

sayHello(); // Works perfectly!
function sayHello() { console.log("Hello"); }`,
  },
  {
    id: "scope-chain",
    title: "13. Scope Chain",
    definition:
      "Inside JavaScript, variables are resolved looking at the current scope. If not found, JS looks at the outer (parent) scope, all the way up to the global scope. This physical chain of nested environments is the Scope Chain.",
    code: `const globalVar = "global";

function outer() {
  const outerVar = "outer";
  function inner() {
    const innerVar = "inner";
    console.log(\`\${innerVar} -> \${outerVar} -> \${globalVar}\`);
  }
  inner();
}
outer();`,
  },
  {
    id: "execution-context",
    title: "14. Execution Context",
    definition:
      "The environment in which JavaScript code is evaluated and executed. It consists of two phases: the Creation phase (allocates memory for vars/functions, sets up 'this') and the Execution phase (runs the code line-by-line).",
    code: `// 1. Global Execution Context created initially
var name = "Alex"; 

function greet() {
  // 2. New Function Execution Context created when invoked
  console.log("Hi " + name); 
}
greet();`,
  },
  {
    id: "this-keyword",
    title: "15. This Keyword",
    definition:
      "A reference to the object that is currently executing the piece of JavaScript code. In standard functions, 'this' refers to the object that called it. Arrow functions do not bind their own 'this'; they inherit it lexically.",
    code: `const user = {
  name: "Sarah",
  greetRegular() { console.log(this.name); },
  greetArrow: () => { console.log(this.name); } 
};

user.greetRegular(); // "Sarah"
user.greetArrow();   // undefined (inherits global scope context)`,
  },
  {
    id: "event-delegation",
    title: "16. Event Delegation",
    definition:
      "Instead of attaching individual event listeners to multiple child elements, you attach a single event listener to a common parent element. This relies heavily on Event Bubbling.",
    code: `// Attaching one listener to a parent list container
document.getElementById('parent-ul').addEventListener('click', function(event) {
  if (event.target && event.target.nodeName === 'LI') {
    console.log(\`Clicked item ID: \${event.target.id}\`);
  }
});`,
  },
];

export default function JSCheatSheet() {
  const [activeTab, setActiveTab] = useState(topics[0].id);

  const activeTopic = topics.find((topic) => topic.id === activeTab);

  // Simple clean styles embedded as inline objects to eliminate external CSS dependencies
  const styles = {
    container: {
      display: "flex",
      minHeight: "100vh",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: "#f9fafb",
      color: "#1f2937",
      borderRadius: "1%",
    },
    sidebar: {
      width: "280px",
      borderRadius: "1%",
      backgroundColor: "#ffffff",
      borderRight: "1px solid #e5e7eb",
      padding: "20px",
      overflowY: "auto",
      position: "sticky",
      top: 0,
      height: "100vh",
    },
    sidebarTitle: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#111827",
    },
    navButton: (isActive) => ({
      display: "block",
      width: "100%",
      textAlign: "left",
      padding: "10px 14px",
      marginBottom: "6px",
      borderRadius: "6px",
      border: "none",
      backgroundColor: isActive ? "#eff6ff" : "transparent",
      color: isActive ? "#2563eb" : "#4b5563",
      fontWeight: isActive ? "6xl" : "normal",
      cursor: "pointer",
      fontSize: "0.95rem",
      transition: "all 0.2s",
    }),
    contentArea: { flex: 1, padding: "40px max(5vw, 20px)", overflowY: "auto" },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "16px",
      color: "#111827",
      borderBottom: "2px solid #e5e7eb",
      paddingBottom: "12px",
    },
    sectionTitle: {
      fontSize: "1.1rem",
      fontWeight: "600",
      marginTop: "20px",
      marginBottom: "8px",
      color: "#374151",
    },
    text: {
      fontSize: "1.05rem",
      lineHeight: "1.6",
      color: "#4b5563",
      margin: "0 0 16px 0",
    },
    reactBox: {
      backgroundColor: "#f0fdf4",
      borderLeft: "4px solid #22c55e",
      padding: "16px",
      borderRadius: "4px",
      margin: "20px 0",
    },
    reactBoxTitle: {
      color: "#166534",
      fontWeight: "bold",
      margin: "0 0 4px 0",
      fontSize: "0.95rem",
    },
    codeBlock: {
      backgroundColor: "#1e1e2e",
      color: "#cdd6f4",
      padding: "20px",
      borderRadius: "8px",
      overflowX: "auto",
      fontFamily: '"Fira Code", Monaco, Consolas, Courier New, monospace',
      fontSize: "0.9rem",
      lineHeight: "1.5",
      boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar Navigation */}
      <aside style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>JS Interview Prep</h2>
        <nav>
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setActiveTab(topic.id)}
              style={styles.navButton(activeTab === topic.id)}
            >
              {topic.title.split(". ")[1]}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Viewer */}
      <main style={styles.contentArea}>
        {activeTopic && (
          <div>
            <h1 style={styles.title}>{activeTopic.title}</h1>

            <h3 style={styles.sectionTitle}>Interview Definition</h3>
            <p style={styles.text}>{activeTopic.definition}</p>

            {activeTopic.reactConnection && (
              <div style={styles.reactBox}>
                <p style={styles.reactBoxTitle}>
                  💡 Real-World React Connection
                </p>
                <p
                  style={{
                    ...styles.text,
                    margin: 0,
                    color: "#166534",
                    fontSize: "0.95rem",
                  }}
                >
                  {activeTopic.reactConnection}
                </p>
              </div>
            )}

            <h3 style={styles.sectionTitle}>Code Blueprint / Example</h3>
            <pre style={styles.codeBlock}>
              <code>{activeTopic.code}</code>
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}
