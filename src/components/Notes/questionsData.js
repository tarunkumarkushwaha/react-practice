// questionsData.js
export const AppCategories = [
  {
    id: "javascript-core",
    title: "JavaScript Core (Foundation)",
    description: "Core JS engine concepts, execution contexts, prototypical behavior, and memory management.",
    questions: [
      {
        id: "js-1",
        text: "Explain 'this', call, apply, and bind with specific syntax use cases.",
        answer: "'this' refers to the execution context of a function, determined dynamically at runtime by how the function is invoked. To explicitly set 'this', use: 1) call(): invokes the function immediately with comma-separated arguments (e.g., fn.call(context, arg1, arg2)). 2) apply(): invokes the function immediately with arguments passed as an array (e.g., fn.apply(context, [arg1, arg2])). 3) bind(): returns a new function with a permanently bound execution context for deferred invocation later (e.g., const bound = fn.bind(context))."
      },
      {
        id: "js-2",
        text: "What is the difference between var, let, and const regarding scope, hoisting, and the temporal dead zone?",
        answer: "1) Scope: var is function-scoped; let and const are block-scoped. 2) Hoisting: var variables are hoisted to the top of their scope and initialized as undefined. let and const variables are hoisted but remain uninitialized. 3) Temporal Dead Zone (TDZ): The region from the start of the block until the line of declaration. Accessing let or const within the TDZ throws a ReferenceError. Additionally, const requires an immediate value assignment and prevents reference reassignment."
      },
      {
        id: "js-3",
        text: "Explain the JavaScript Event Loop mechanics, specifically detailing microtasks vs macrotasks prioritization.",
        answer: "The JavaScript Event Loop orchestrates non-blocking asynchronous I/O execution. It monitors the Call Stack; once the stack is completely empty, it processes all outstanding entries in the Microtask Queue (Promises, queueMicrotask, MutationObserver). The loop executes the entire microtask queue to completion before moving on to fetch a single item from the Macrotask Queue (setTimeout, setInterval, setImmediate, I/O, UI rendering). Microtasks always take absolute priority over new macrotasks."
      },
      {
        id: "js-4",
        text: "What is the difference between Debouncing and Throttling? Write clean implementations/syntax for both.",
        answer: "Debouncing delays a function invocation until a specific duration of inactivity has elapsed, resetting the timer on every event (ideal for search autocomplete inputs). Throttling limits function execution to at most once per specified time interval, ignoring repeated fires during that window (ideal for window resize/scroll event tracking).\n\nSyntax:\nexport const debounce = (fn, delay) => {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n};\nexport const throttle = (fn, limit) => {\n  let inThrottle = false;\n  return (...args) => {\n    if (!inThrottle) {\n      fn(...args);\n      inThrottle = true;\n      setTimeout(() => inThrottle = false, limit);\n    }\n  };\n};"
      },
      {
        id: "js-5",
        text: "What are Closures? Provide a proper real-time, real-world example of how you use them.",
        answer: "A closure is the combination of a function bundled together with references to its surrounding lexical environment. It allows an inner function to retain access to variables declared in its outer parent scope even after the parent function has completed execution. Real-world production example (Encapsulated Global Auth State / Token Manager Component):\n\nconst createTokenManager = () => {\n  let _accessToken = null; // Completely private variable\n  return {\n    setToken: (token) => { _accessToken = token; },\n    getToken: () => _accessToken,\n    clear: () => { _accessToken = null; }\n  };\n};\nconst auth = createTokenManager();"
      },
      {
        id: "js-6",
        text: "Explain Shallow Copy vs Deep Copy and write a safe programmatic approach to achieve them.",
        answer: "A shallow copy duplicates top-level object values, but nested sub-objects or arrays maintain their original memory references (e.g., {...obj}, Object.assign()). Modifying a nested value inside the copy mutates the original. A deep copy recursively duplicates every nested node, ensuring absolute architectural isolation. Programmatic approach:\n// Native Modern approach:\nconst deepCopyNative = structuredClone(targetObj);\n// Custom recursive fallback routine:\nfunction deepClone(obj) {\n  if (obj === null || typeof obj !== 'object') return obj;\n  if (Array.isArray(obj)) return obj.map(item => deepClone(item));\n  const clone = {};\n  for (let key in obj) if (obj.hasOwnProperty(key)) clone[key] = deepClone(obj[key]);\n  return clone;\n}"
      },
      {
        id: "js-7",
        text: "Compare Promise.all vs Promise.allSettled vs Promise.race vs Promise.any.",
        answer: "1) Promise.all(): Resolves when all input promises fulfill successfully; short-circuits and rejects immediately if any single promise fails. 2) Promise.allSettled(): Waits for all input promises to settle (either fulfill or reject) and returns an array of status outcome descriptors. 3) Promise.race(): Settles (resolves or rejects) as soon as the very first promise in the input array completes. 4) Promise.any(): Resolves as soon as the first promise resolves successfully; rejects with an AggregateError only if all input promises fail completely."
      },
      {
        id: "js-8",
        text: "How does async/await work internally under the hood?",
        answer: "async/await is declarative syntactic sugar layered directly on top of native JavaScript Promises and Generator Functions. When a function is marked with the 'async' modifier, it automatically wraps its return value in a resolved Promise. Internally, the JavaScript engine converts the 'await' expressions into a series of generator 'yield' operations combined with automated step-by-step resolution tracking via the microtask loop, pausing execution locally without blocking the primary thread."
      },
      {
        id: "js-9",
        text: "What causes Memory Leaks in JavaScript (event listeners, closures, detached DOM nodes), and how do you trace them?",
        answer: "Memory leaks occur when the engine fails to reclaim memory references because objects are unintentionally retained by the application root. Major causes: 1) Active global event listeners on unmounted components. 2) Closures capturing large context variables that persist indefinitely. 3) Detached DOM nodes held inside active global JavaScript arrays or objects. Trace them using Chrome DevTools: open the 'Memory' tab, record multiple 'Heap Snapshots' across operations, and use the comparison view to look for objects or 'Detached' DOM variables failing to garbage collect."
      },
      {
        id: "js-10",
        text: "Explain Hoisting behavior for functions, variables, and classes in JavaScript.",
        answer: "Hoisting is the engine mechanic where declarations are allocated memory space during the initial compilation phase before code execution. 1) Function declarations are fully hoisted, allowing invocation before definition in the code. 2) var variables are hoisted but initialized to undefined. 3) let, const, and class definitions are hoisted into the Temporal Dead Zone (TDZ); they remain completely uninitialized in memory, throwing a ReferenceError if accessed prior to their explicit declaration line."
      },
      {
        id: "js-11",
        text: "What is Currying in JavaScript, and what functional paradigms does it solve?",
        answer: "Currying is a functional programming paradigm that breaks down a function accepting multiple arguments into a sequence of nested functions that each take exactly one argument (e.g., f(a, b, c) into f(a)(b)(c)). It facilitates partial function application, enables reusability by configuring preset configurations (e.g., logging or API configurations), and simplifies functional pipeline compositions."
      },
      {
        id: "js-12",
        text: "Explain JavaScript Prototypes and how the prototype chain mechanism facilitates inheritance.",
        answer: "Every JavaScript object features an internal reference link to another object, known as its prototype (`[[Prototype]]` or `__proto__`). When attempting to access a property or method on an object, the runtime engine searches the object properties first. If not found, it traverses up the prototype chain link by link until it locates the target identifier, or reaches `null`. This shared structure enables memory-efficient prototypal inheritance."
      },
      {
        id: "js-13",
        text: "What is Event Delegation, and how does it optimize memory footprint on highly interactive document trees?",
        answer: "Event delegation binds a single event listener to a mutual parent container instead of attaching independent listener nodes to every child element. It relies on event bubbling: when a child element triggers an event, that event bubbles up through the DOM tree. The parent captures the bubble, evaluates `event.target` to verify the origin child, and executes contextual actions. This eliminates thousands of listener allocations, optimizing memory on dynamic lists."
      },
      {
        id: "js-14",
        text: "What is the key difference between Map and WeakMap, particularly concerning garbage collection lifecycle?",
        answer: "A Map holds a strong memory reference to its keys, meaning that as long as the Map exists in scope, its keys and values cannot be garbage collected, potentially causing memory leaks. A WeakMap holds weak references to its keys, which must be objects or unregistered symbols. If there are no other strong references to a key object remaining elsewhere in the application, the garbage collector can reclaim it, automatically cleaning up the key-value pair from the WeakMap."
      },
      {
        id: "js-15",
        text: "What is a Generator Function (function*), and in what concrete production scenarios would you choose it?",
        answer: "A Generator Function (`function*`) returns an iterator object and can pause its execution midway using the `yield` keyword, resuming later when `.next()` is explicitly called. Concrete production scenarios include: 1) Managing large-scale data stream loading patterns lazily to limit client-side memory bloat. 2) Developing custom state machines or custom reactive streams. 3) Running polling loops or infinite sequences without tying up call stack execution loops."
      },
      {
        id: "js-16",
        text: "Is JavaScript tightly coupled or loosely coupled? Detail your theoretical reasoning.",
        answer: "JavaScript is an inherently loosely coupled language. It features dynamic typing, runtime object mutations, and duck-typing mechanics. It does not enforce compile-time type signatures or rigid class-interface contracts. Code components interact via fluid runtime configurations rather than strict static compilation dependencies, making modules easier to compose dynamically but requiring robust automated runtime testing to catch configuration type drift."
      },
      {
        id: "js-17",
        text: "What is the execution and operational difference between CommonJS require() and ES6 import/export statement syntaxes?",
        answer: "CommonJS `require()` is synchronous, resolved dynamically at runtime, can be written inside conditional blocks or functions, and returns a shallow copy of an exported module object. ES6 `import` is static, resolved at compile-time before execution begins, supports tree-shaking, enforces read-only live bindings to the exported references, and must be declared at the absolute top-level file boundaries."
      },
      {
        id: "js-18",
        text: "What are the core programmatic differences when utilizing basic comparisons double equals (==) vs strict triple equals (===)?",
        answer: "Double equals (`==`) compares values for equality after performing implicit type coercion if the operand types differ (e.g., `'5' == 5` yields true). Strict triple equals (`===`) checks for strict equality across both value and type without performing implicit type coercion; if the data types do not match, it returns false immediately (e.g., `'5' === 5` yields false)."
      },
      {
        id: "js-19",
        text: "How do you handle, identify, and debug unexpected output-based tricky evaluation scenarios in JS runtime environments?",
        answer: "Handle these by strictly enforcing `===`, applying explicit data type conversions, and utilizing strict mode (`'use strict'`). Identify anomalies by using detailed logging tools (`console.dir()`, `console.table()`) to verify hidden properties. Debug them by inserting explicit `debugger;` hooks or breakpoint steps inside Chrome DevTools to trace values through execution phases, and isolate complex evaluation blocks inside unit tests."
      }
    ]
  },
  {
    id: "react-internals",
    title: "React & React Native Internals",
    description: "Component rendering workflows, tree reconciliation algorithms, state models, and hook operations.",
    questions: [
      {
        id: "react-1",
        text: "Explain Virtual DOM Reconciliation and how the diffing engine determines minimal node mutations.",
        answer: "React maintains a Virtual DOM tree representation of the user interface. When state updates, a new Virtual DOM tree is generated. React compares the new tree with the previous one using a heuristic O(n) diffing algorithm based on two key assumptions: 1) Two elements of different component types will produce completely different subtrees, causing React to tear down and rebuild the tree. 2) Elements across render loops are mapped using unique, stable 'key' props, allowing the reconciliation engine to identify node insertions, moves, or deletions efficiently."
      },
      {
        id: "react-2",
        text: "What is the structural difference between Controlled vs Uncontrolled components?",
        answer: "Controlled components rely entirely on React state to serve as the single source of truth for their form value data, updating via sequential event handlers (`onChange`). Uncontrolled components maintain state internally within the DOM itself; developers query form node input strings on-demand using a direct DOM reference instance via the `useRef` hook."
      },
      {
        id: "react-3",
        text: "What are the common useEffect lifecycle traps, and why exactly do we need a strict dependency array?",
        answer: "Common traps include: 1) Creating stale closures when variables are omitted from the dependency array. 2) Forgetting cleanup functions, leading to memory leaks or runaway background subscriptions. 3) Creating infinite loops by updating state that triggers the same effect. A strict dependency array is required because React performs shallow comparisons on the dependencies to determine if it should skip or re-run the effect block."
      },
      {
        id: "react-4",
        text: "Compare Component State Lifting vs establishing centralized Global State architectures.",
        answer: "State lifting moves local state up to the nearest common ancestor of components that share the data, passing state and modifiers down via props. This is simple for small trees but can lead to excessive prop drilling in larger applications. Centralized global state architecture (e.g., Redux, Zustand) decouples state from the component tree into an external store, allowing any component to subscribe to specific updates directly and bypassing intermediate layout wrappers."
      },
      {
        id: "react-5",
        text: "Architectural evaluation: Context API vs Redux Toolkit vs Zustand state stores.",
        answer: "Context API is built into React and is ideal for low-frequency updates (e.g., theme, localization, user session auth), but it lacks fine-grained selectors, meaning any change forces all consuming components to re-render. Redux Toolkit provides an architecture with unidirectional data flow and middleware capabilities, but introduces boilerplate. Zustand is a lightweight, hook-based state manager that supports fine-grained selector optimizations out of the box, avoiding context provider wrappers."
      },
      {
        id: "react-6",
        text: "Why do 'keys' matter in lists, and how can bad configurations (like utilizing array index) break state tracking?",
        answer: "Keys provide a stable identity for items in a dynamic list, helping React's diffing engine map items across renders. Using an array index as a key can break state tracking if the list is reordered, sorted, or filtered. Because React tracks internal component state based on index position, updating the underlying item order can cause local state (like input values or checkboxes) to remain attached to the wrong UI element."
      },
      {
        id: "react-7",
        text: "How do you handle and render large collections efficiently? Explain table row virtualization mechanics.",
        answer: "Handle large collections efficiently using list/table virtualization (e.g., `react-window` or `react-virtualized`). Instead of mounting thousands of DOM elements simultaneously, a virtualized container tracks the viewport's scroll position and only renders the exact subset of row elements visible on screen. It uses an absolute-positioned container to mimic total scroll heights, updating visible rows dynamically to maintain a smooth 60 FPS render cycle."
      },
      {
        id: "react-8",
        text: "What are Error Boundaries, and how do you write custom crash recovery boundaries?",
        answer: "Error Boundaries are React class components that catch JavaScript runtime errors anywhere in their child component tree, log telemetry, and display a fallback UI instead of crashing the entire application. They must implement either `static getDerivedStateFromError()` (to update state and render a fallback view) or `componentDidCatch()` (to capture error details for monitoring).\n\nSyntax Example:\nimport React from 'react';\nexport class ErrorBoundary extends React.Component {\n  state = { hasError: false };\n  static getDerivedStateFromError(error) { return { hasError: true }; }\n  componentDidCatch(error, errorInfo) { console.error(error, errorInfo); }\n  render() {\n    if (this.state.hasError) return this.props.fallback || <h1>An error occurred.</h1>;\n    return this.props.children;\n  }\n}"
      },
      {
        id: "react-9",
        text: "Compare the layout rendering differences and timing sequences between useEffect vs useLayoutEffect.",
        answer: "useEffect runs asynchronously *after* the render is committed to the DOM and *after* the browser completes paint operations, ensuring it won't block the main thread. useLayoutEffect runs synchronously *after* DOM mutations but *before* the browser paints the screen. It blocks visual rendering, making it ideal for reading DOM layout geometry and applying adjustments to prevent visual flickering."
      },
      {
        id: "react-10",
        text: "Deep dive: React.memo vs useMemo vs useCallback. When do they prevent re-renders, and when do they add overhead?",
        answer: "React.memo is a higher-order component that skips re-rendering a component if its props haven't changed. useMemo memoizes the computed *result* of an expensive function. useCallback memoizes a *function reference* to prevent unnecessary updates to child components that rely on referential equality. They prevent re-renders only when passing properties to optimized child components. They add overhead when used for lightweight operations due to the cost of dependency array comparisons and reference allocation."
      },
      {
        id: "react-11",
        text: "What is React Fiber, and how does it transition rendering from synchronous blocks to incremental/interruptible schedules?",
        answer: "React Fiber is a rewrite of React's core reconciliation engine. The old reconciler processed updates using an interruptible synchronous stack traversal. Fiber structures the component tree as a linked list of individual units of work ('fibers'). This architecture allows React to break rendering work into incremental chunks, pause execution to yield control back to the browser main thread for high-priority user inputs or animations, and resume or discard work later based on internal priority lanes."
      },
      {
        id: "react-12",
        text: "Explain Portals and Refs. What is the explicit real-world use case of the useRef hook?",
        answer: "Portals let you render child components into a detached DOM node outside the parent component's DOM hierarchy (ideal for modals, z-index overlays, and tooltips) while preserving React event bubbling. Refs provide direct access to underlying DOM element instances. Real-world use cases for the `useRef` hook include accessing DOM nodes directly (e.g., triggering `.focus()` or `.scrollIntoView()`) and storing mutable values (like interval IDs or request states) that persist across renders without triggering a component re-render when changed."
      },
      {
        id: "react-13",
        text: "How does Redux work internally? Trace the data lifecycle from store installation, slice declarations, to selector queries.",
        answer: "Redux maintains an application's state in a single, centralized immutable store object. Data updates flow unidirectionally: 1) Slices define the initial state and synchronous/asynchronous reducer functions. 2) A component dispatches an explicit action object containing a type and payload. 3) The store passes the current state and action through the slice reducers, which compute and return a brand-new immutable state tree object. 4) Components query the state using selectors (`useSelector`); the hook subscribes to store updates, runs shallow or reference equality checks on the selected output, and triggers a re-render if the returned value has changed."
      },
      {
        id: "react-14",
        text: "How do you handle advanced server-state caching, synchronization, and queries using TanStack Query (React Query) vs local fetch/axios wrappers?",
        answer: "Local fetch/axios wrappers require manual state management (e.g., tracking loading, error, and data states) and lack cross-component cache sharing. TanStack Query acts as an asynchronous server-state orchestrator. It manages caching out of the box, de-duplicates identical requests, handles automatic background data revalidation (e.g., refetch on window focus), handles exponential backoff retries on failure, and manages paginated and mutated states, removing manual caching boilerplate."
      },
      {
        id: "react-15",
        text: "Compare Class Components vs modern Functional Components with Hooks across lifecycles.",
        answer: "Class components are stateful instances that rely on explicit lifecycle methods (e.g., `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`) to manage side effects, grouping logic by execution milestone. Functional components are stateless execution functions that leverage Hooks (like `useEffect`) to organize side effects declaratively by concern, consolidating mounting, updating, and unmounting logic into a single code block."
      },
      {
        id: "react-16",
        text: "What are the foundational strict Rules of React Hooks that developers must never violate?",
        answer: "1) Only call Hooks at the absolute top level of your functional components or custom hooks. Never call Hooks inside conditional blocks, loops, or nested functions to ensure they execute in the exact same order on every render cycle. 2) Only call Hooks from React function components or from custom hooks; never invoke them inside plain JavaScript utility functions."
      },
      {
        id: "react-17",
        text: "Explain the architectural difference between Props (immutable parameters) and State (mutable configurations).",
        answer: "Props function as configuration parameters passed down from a parent component to a child; they are immutable within the receiving child component. State is a local mutable data structure encapsulated entirely within the component itself. Mutating state via its explicit modifier function schedules a component re-render to update the user interface."
      },
      {
        id: "react-18",
        text: "How do you declare and manage client-side Protected Routes to secure authorization patterns?",
        answer: "Declare a higher-order container layout wrapper that intercepts navigation actions. The wrapper reads authentication state from a context provider or global store. If authenticated, it renders the child routes via an `<Outlet />` component. If unauthenticated, it utilizes a client-side redirect hook to bounce the user to a login path, saving the current location URL in state to enable a redirect back after successful login."
      },
      {
        id: "react-19",
        text: "How do you perform and configure asynchronous API data orchestration seamlessly within Redux Toolkit middleware slices?",
        answer: "Orchestrate async actions using `createAsyncThunk` within Redux Toolkit slices. You provide an action type string and an asynchronous payload creator function. `createAsyncThunk` automatically dispatches lifecycle actions (`pending`, `fulfilled`, `rejected`). You capture these actions within the slice's `extraReducers` block to update loading states, handle data payloads, or capture error telemetry cleanly."
      },
      {
        id: "react-20",
        text: "What is JSX, how does the browser read it, and how does state management operate via standard useState and useReducer hooks?",
        answer: "JSX is an XML-like syntax extension for JavaScript. Browsers cannot parse it directly; a compiler (e.g., Babel, SWC) converts it into standard JavaScript function calls (`React.createElement` or modern `jsx()` runtimes). `useState` handles primitive or independent state variables, while `useReducer` manages complex state logic or multi-step mutations via a centralized action reducer function, matching Redux patterns locally."
      }
    ]
  },
  {
    id: "performance-optimization",
    title: "Core Performance & Web Vitals",
    description: "Browser render mechanics, frame production pipelines, dynamic bundling targets, and core performance audits.",
    questions: [
      {
        id: "perf-1",
        text: "How does the browser render a single frame, and at what specific milestones can JavaScript execution interrupt that thread?",
        answer: "The browser frame rendering pipeline operates sequentially: JavaScript -> Style (CSSOM) -> Layout -> Paint -> Composite. Long-running JavaScript execution can block the main thread and interrupt the rendering pipeline at any milestone before the composite stage occurs. To avoid jank and dropped frames, long tasks should be split or deferred to `requestAnimationFrame` for animation-related updates, or to `requestIdleCallback` for lower-priority background tasks."
      },
      {
        id: "perf-2",
        text: "What is Layout Thrashing? How do you prevent it systematically by batching your DOM read and write operations?",
        answer: "Layout thrashing occurs when JavaScript code reads a layout property (e.g., `offsetHeight`, `getBoundingClientRect`) immediately after writing a DOM mutation. This forces the browser to perform a synchronous layout recalculation to provide accurate layout statistics. Prevent this systematically by using read/write separation: batch all DOM read operations first, then execute all DOM writes together, or use scheduling utilities like FastDOM or `requestAnimationFrame` loops."
      },
      {
        id: "perf-3",
        text: "Explain CSS 'will-change' and compositing layers. When do they accelerate layers, and when do they cause memory regressions?",
        answer: "The `will-change` property signals to the browser's layout engine that an element will animate, prompting it to promote the element to its own GPU compositing layer. This accelerates performance by offloading transform and opacity animations to the GPU, bypassing paint and layout cycles. However, overusing it causes memory regressions because each layer consumes graphic memory buffers, which can degrade scroll performance and lead to out-of-memory crashes on low-end devices."
      },
      {
        id: "perf-4",
        text: "How do you explicitly reduce heavy repaint zones across the viewport layout using layout containment ('contain') and isolation?",
        answer: "Reduce repaint zones by applying the CSS `contain` property (e.g., `contain: content;` or `contain: paint;`). This indicates to the browser that the element's subtree is isolated from the rest of the page layout. Changes or animations inside this element will not trigger layout recalculations or repaints across the surrounding document tree, isolating rendering overhead."
      },
      {
        id: "perf-5",
        text: "Compare requestAnimationFrame vs standard setTimeout calls for executing fluid, jitter-free visual UI animations.",
        answer: "`setTimeout` inserts callbacks into the macrotask queue, which executes without regard to the monitor's physical refresh rate, often leading to frame drops and visual tearing. `requestAnimationFrame` schedules animations to fire synchronously right before the browser's next frame paint cycle, aligning with the display refresh rate (e.g., 60Hz/120Hz) to ensure smooth, stutter-free animations."
      },
      {
        id: "perf-6",
        text: "What constitutes a 'Long Task'? Why does anything exceeding 50ms lock user responsiveness, and how does scheduler.yield mitigate it?",
        answer: "Any continuous JavaScript execution task that takes longer than 50ms is classified as a Long Task. Because JavaScript runs on a single main thread, a long task blocks user input events from being processed, causing unresponsive UI states and higher Interaction to Next Paint (INP) metrics. The `scheduler.yield()` API allows long-running loops to pause execution periodically, yielding control back to the browser to handle pending interactions before resuming."
      },
      {
        id: "perf-7",
        text: "What is the structural performance cost of forced synchronous layouts, and how do you profile them inside Chrome DevTools Performance tabs?",
        answer: "A forced synchronous layout forces the browser to calculate layout geometry early during JavaScript execution, stalling the main thread. To profile this, open the Chrome DevTools Performance tab, record a timeline during page interaction, and locate tasks marked with a red corner flag. Expand the task details to find warnings for 'Forced Synchronous Layout' and follow the call stack link to isolate the reading code line."
      },
      {
        id: "perf-8",
        text: "Compare script execution flags: standard async vs defer vs module type definitions.",
        answer: "Standard scripts block HTML parsing while they are downloaded and executed. `async` downloads the script in the background and executes it as soon as it arrives, pausing HTML parsing (execution order is non-deterministic). `defer` downloads the script asynchronously and waits to execute it until HTML parsing is fully complete, preserving script placement order. Scripts configured with `type='module'` default to a deferred execution strategy."
      },
      {
        id: "perf-9",
        text: "Explain code splitting strategies applied aggressively at both the application Route level and isolated Component boundaries.",
        answer: "Route-level splitting dynamically splits application code bases based on URL navigation points, ensuring users only load the JavaScript bundle required for their active view. Component-level splitting targets heavy UI elements located below the fold or behind interactive elements (e.g., complex chart dashboards, modals). Both are implemented via dynamic imports (`lazy()` or `dynamic()`), which split large monolithic source files into independent, on-demand network chunks."
      },
      {
        id: "perf-10",
        text: "What is Tree Shaking? What structural export models get pruned, and what dead patterns silently survive inside production build artifacts?",
        answer: "Tree shaking is a dead-code elimination technique that relies on static ES6 import/export analysis to remove unused code modules during bundling. Named exports that are never imported are cleanly pruned from the build. However, modules that introduce side effects (e.g., modifying global prototypes, executing immediately via self-invoking IIFEs, or declaring unreferenced object mutations) often survive because bundlers cannot safely guarantee that dropping them won't alter runtime behavior."
      },
      {
        id: "perf-11",
        text: "What is the real engineering cost of large third-party dependency bundles on runtime loading and CPU execution?",
        answer: "Large third-party bundles introduce a dual performance penalty: network latency and main-thread CPU overhead. Beyond download delays, the browser's JavaScript engine must parse, compile, and execute the incoming code on the single main thread. This process can block interactivity, increase Total Blocking Time (TBT), and degrade input responsiveness during application initialization."
      },
      {
        id: "perf-12",
        text: "When and why should you safely spin up Web Workers to execute heavy CPU-bound computation routines off the primary thread?",
        answer: "Spin up Web Workers for expensive, non-DOM computations such as complex data filtering, image manipulation, cryptographic operations, or parsing large JSON feeds. Web Workers execute code on an independent background thread, communicating with the main thread via message passing (`postMessage`). This keeps the primary thread free to handle user interactions and rendering updates."
      },
      {
        id: "perf-13",
        text: "What is the Critical Rendering Path (CRP)? What explicit tactical choices can you implement to shorten it?",
        answer: "The Critical Rendering Path represents the sequence of steps the browser takes to convert HTML, CSS, and JavaScript into visible screen pixels. Shorten it by: 1) Minifying, compressing, and caching critical resources. 2) Inlining critical above-the-fold CSS directly into the HTML head document. 3) Appending `defer` or `async` tags to non-essential scripts. 4) Using resource hints to initiate early connections."
      },
      {
        id: "perf-14",
        text: "Detail resource optimization hints: explain preload, prefetch, preconnect, and dns-prefetch configurations.",
        answer: "`preload` instructs the browser to download high-priority assets needed for the current page immediately. `prefetch` downloads low-priority resources expected to be needed during subsequent user navigations. `preconnect` establishes early connection handshakes (DNS lookup, TCP handshake, TLS negotiation) with an external third-party domain, while `dns-prefetch` performs just the early domain name resolution to minimize connection latency."
      },
      {
        id: "perf-15",
        text: "How does HTTP/2 multiplexing work, and how does it redefine traditional application chunking and bundling methods?",
        answer: "HTTP/2 multiplexing allows hundreds of requests and responses to stream concurrently over a single TCP connection, eliminating head-of-line blocking. In HTTP/1.1, applications concatenated assets to minimize separate connections. HTTP/2 removes this penalty, allowing for more granular code splitting and individual micro-chunk bundling, which optimizes cache invalidation across independent files."
      },
      {
        id: "perf-16",
        text: "Compare asset compression algorithms: Gzip vs Brotli. Where is each applied most effectively across public file distributions?",
        answer: "Gzip is a universal standard with low CPU compression overhead, making it ideal for dynamic, real-time compression on application servers. Brotli provides significantly better text-based compression ratios (HTML, CSS, JS) but demands more CPU cycles to encode. Apply Brotli to pre-compressed static assets during build time, and fall back to Gzip for runtime responses where compression speed is paramount."
      },
      {
        id: "perf-17",
        text: "How do you configure Cache-Control headers to implement strict long-term static versioning and invalidation schemes?",
        answer: "For static assets generated with unique build hashes (e.g., `main.a8f9c2.js`), configure the response header: `Cache-Control: public, max-age=31536000, immutable`. This instructs browsers and CDNs to cache the asset locally for one year without revalidating. When code changes, the build tool generates a new file hash, updating the URL reference and forcing clients to fetch the fresh resource immediately."
      },
      {
        id: "perf-18",
        text: "How do you implement Service Workers to construct an offline-first app strategy and custom network request fallbacks?",
        answer: "Implement a Service Worker by registering a background script that intercepts application fetch requests. During the worker's `install` lifecycle milestone, open a local Cache Storage instance and cache essential shell assets. In the `fetch` interceptor event handler, check the local cache first; if missing, route the request to the network, and provide a custom fallback asset or page if the network request fails."
      },
      {
        id: "perf-19",
        text: "How do you handle asset lazy loading for images and functional code fragments positioning below the fold?",
        answer: "For images, apply the native browser attribute `loading='lazy'`, or use an Intersection Observer to swap a placeholder data-attribute into the image's explicit `src` field when it approaches the viewport. For functional code elements below the fold, wrap them in dynamic dynamic-import wrappers, deferring bundle download and mounting until the user scrolls near the element container."
      },
      {
        id: "perf-20",
        text: "What is the hidden performance tax of synchronous third-party scripts, and how do you load them safely without blocking content delivery?",
        answer: "Synchronous third-party scripts block HTML parsing, stall DOM construction, and delay page initialization, which can increase Total Blocking Time (TBT). Load them safely by applying `async` or `defer` attributes, injecting them through a tag manager system scheduled to execute after the primary page loads, or proxying and hosting the script resources closer to the user via edge workers."
      },
      {
        id: "perf-21",
        text: "Break down Core Web Vitals: Explain Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP).",
        answer: "1) Largest Contentful Paint (LCP) tracks perceived loading performance, measuring when the main content block renders on screen (target: < 2.5s). 2) Cumulative Layout Shift (CLS) tracks visual stability, quantifying unexpected layout shifts during the page lifecycle (target: < 0.1). 3) Interaction to Next Paint (INP) tracks interface responsiveness, measuring the latency of user interactions (clicks, key presses) across the session (target: < 200ms)."
      },
      {
        id: "perf-22",
        text: "Compare Time to First Byte (TTFB) vs First Contentful Paint (FCP) vs Largest Contentful Paint (LCP).",
        answer: "TTFB measures the network latency of the server, tracking the time elapsed between the client request and the initial byte of data response. FCP tracks initial render milestones, measuring when the browser renders the first element of visual content (e.g., a background or loader). LCP tracks core page loading completeness, measuring when the largest primary content element finishes rendering."
      },
      {
        id: "perf-23",
        text: "How do you use Chrome DevTools and Lighthouse auditing to locate, isolate, and systematically fix runtime performance blocks?",
        answer: "Run a Lighthouse audit to capture an automated performance score baseline and identify optimization opportunities (e.g., unused JavaScript, excessive shifts). Open the DevTools Performance panel, record a timeline trace during user interaction, and analyze the main thread flame chart to locate long tasks. Isolate execution blocks by inspecting the 'Bottom-Up' and 'Call Tree' summaries to pinpoint performance bottlenecks."
      },
      {
        id: "perf-24",
        text: "Asset Optimization: When should you opt for WebP vs AVIF image profiles, and how do you declare responsive images with srcset and sizes correctly?",
        answer: "Opt for AVIF for higher compression ratios and quality retention at small file sizes; fall back to WebP for wide browser support. Declare responsive images using the HTML `<picture>` element with structured `<source>` nodes specifying types, or use `srcset` with width descriptors coupled with a `sizes` media string to allow the browser to download the optimal image asset size based on layout context."
      },
      {
        id: "perf-25",
        text: "Compare modern Intersection Observer APIs vs the native HTML loading='lazy' attribute for offscreen content extraction.",
        answer: "Native `loading='lazy'` is handled directly by the browser engine with minimal overhead, but it offers no callback hooks or customized visibility thresholds. The Intersection Observer API provides precise control over layout boundaries and visibility thresholds. Use native lazy loading for standard images, and choose the Intersection Observer API for infinite scroll feeds, analytical tracking loops, and complex visual lazy rendering."
      },
      {
        id: "perf-26",
        text: "Evaluate the scalability of Sprite sheets vs Icon Fonts vs inline raw SVG vector definitions across massive enterprise application architectures.",
        answer: "Sprite sheets minimize network connections but scale poorly on high-DPI displays and can be difficult to maintain. Icon fonts provide small footprints but can cause visual layout shifts (FOIT) and scale limitations. Inline raw SVGs eliminate network requests, scale cleanly across resolutions, and support CSS styling. However, they can bloat HTML document sizes if overused across large-scale enterprise architectures."
      },
      {
        id: "perf-27",
        text: "Explain font-display strategies (e.g., swap) used to eliminate Flash of Invisible Text (FOIT) layout shifts.",
        answer: "Applying `font-display: swap;` instructs the browser to render text immediately using a fallback system font while the custom web font downloads, eliminating Flash of Invisible Text (FOIT). To prevent Cumulative Layout Shift (CLS) when the web font loads and replaces the fallback, use font metric overrides in CSS to match the baseline layout dimensions of the system font to the web font."
      },
      {
        id: "perf-28",
        text: "Compare Self-hosting font packages vs loading external weights from Google Fonts Content Delivery Networks regarding latency and compliance.",
        answer: "External CDNs introduce additional connection latencies due to third-party domain DNS resolutions, TCP connections, and TLS negotiations, and can raise compliance concerns (e.g., GDPR). Self-hosting fonts directly on your primary origin eliminates these external connection steps, enables HTTP/2 multiplexing, simplifies domain tracking, and grants you full control over caching headers."
      },
      {
        id: "perf-29",
        text: "How do you analyze bundles utilizing tools like source-map-explorer and webpack-bundle-analyzer?",
        answer: "These analysis utilities compile build output data to generate interactive asset sizing treemaps. Run `webpack-bundle-analyzer` to render a zoomable visual model of compiled output bundles, showing bundle size composition. Use `source-map-explorer` to inspect output sourcemaps, pinpointing which source files or third-party dependencies are inflating your production build sizes."
      },
      {
        id: "perf-30",
        text: "How do you manage dynamic imports cleanly to prevent a build system from generating thousands of unmaintainable, micro-sized network chunks?",
        answer: "Manage dynamic imports cleanly by grouping related modules using bundler optimization settings. In Webpack, use comment pragmas like `/* webpackChunkName: 'shared-group' */` to bundle separate dynamic paths into combined files. In Vite/Rollup, configure `manualChunks` configurations inside output options to group small dynamic components into stable, reusable asset packages."
      }
    ]
  },
  {
    id: "frontend-system-design",
    title: "Frontend System Design & Architecture",
    description: "High-level architectural scaling, micro-frontends, server rendering mechanics, and authorization flows.",
    questions: [
      {
        id: "sd-1",
        text: "Design a highly scalable, real-time metrics and analytics dashboard supporting custom component configurations.",
        answer: "Implement a configuration-driven widget registry that maps unique widget identifiers to dynamic dashboard components. Track grid placements using a central configuration store. Manage data ingestion through a single, multiplexed WebSocket connection or Server-Sent Events stream connected to a Web Worker. The background worker processes incoming metrics telemetry, batches updates into time-based arrays, and updates a global store (e.g., Zustand) at 100ms intervals to prevent layout thrashing."
      },
      {
        id: "sd-2",
        text: "Design an infinite scroll feeds architecture capable of displaying millions of feed items smoothly at 60 FPS.",
        answer: "Combine DOM virtualization with an asynchronous data pre-fetching pipeline. Maintain a small subset of visible row components mounted inside the viewport window, flanked by buffer rows above and below. Monitor scrolling landmarks using an Intersection Observer attached to an anchor loading element. When triggered, fetch the next paginated data chunk, append it to an immutable data array, and reuse unmounted DOM element wrappers to minimize layout recalculations."
      },
      {
        id: "sd-3",
        text: "Architect a system handling high-frequency real-time state synchronizations seamlessly over a single data pipeline.",
        answer: "Establish an asynchronous communication layer using WebSockets or a shared Worker thread. To handle rapid state commits without overwhelming the main thread, implement a sliding-window throttling mechanism or a concurrent queue buffer on incoming data packets. Batch updates into arrays and apply state changes using a selective state manager (like Zustand or atomic signals), bypassing global container re-renders."
      },
      {
        id: "sd-4",
        text: "Design an Offline-First hybrid mobile/web application with structured persistence layers and automatic background sync workers.",
        answer: "Deploy a client-side database layer using IndexedDB paired with a repository abstraction (e.g., Dexie.js). Intercept network requests with a Service Worker running a stale-while-revalidate strategy. Store local data mutations in an internal transactional synchronization log table. When the network connection returns, trigger a background sync worker to push logged mutations to the server, resolving conflicts using timestamps or vector clocks."
      },
      {
        id: "sd-5",
        text: "Design an enterprise runtime Feature Flag evaluation framework across distributed client instances.",
        answer: "Build an evaluation framework that fetches a static feature flag manifest during application bootstrap. Execute flag evaluations synchronously in memory using a custom hook (`useFeatureFlag('flag_name')`). To scale across distributed instances, process rules (e.g., user cohorts, rollout percentages) locally on the client to eliminate latency, and queue telemetry events to report flag activation back to the server asynchronously."
      },
      {
        id: "sd-6",
        text: "Design a client-side Role-Based Access Control (RBAC) component wrapper to protect views based on security token scopes.",
        answer: "Implement an authorization wrapper component that intercepts rendering logic by evaluating the active user's access scopes extracted from a decoded JWT payload.\n\nSyntax Implementation:\nexport const AccessControl = ({ allowedRoles, children, fallback = null }) => {\n  const { user } = useAuth();\n  const hasPermission = allowedRoles.some(role => user?.scopes?.includes(role));\n  return hasPermission ? children : fallback;\n};"
      },
      {
        id: "sd-7",
        text: "What is Microfrontend Architecture? Detail a production use case and explain code sharing via Webpack/Vite Module Federation.",
        answer: "Microfrontend architecture splits a large frontend codebase into independent, loosely coupled applications developed and deployed by separate teams. Module Federation enables these separate builds to share code and load compiled modules dynamically at runtime. A host shell application references remote entry endpoints configuration files, enabling it to import shared layout components or utility states over the network without requiring npm install build-time dependencies."
      },
      {
        id: "sd-8",
        text: "Compare modern rendering schemas: Client-Side Rendering (CSR), Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR).",
        answer: "CSR downloads a minimal HTML shell and builds the UI dynamically in the browser via JavaScript. SSR generates full HTML documents on the server for every incoming request, improving SEO and reducing initial load time. SSG pre-builds the entire site into static HTML files at build time, offering high performance. ISR extends SSG by revalidating and updating specific static pages in the background as requests hit the server, without a full site rebuild."
      },
      {
        id: "sd-9",
        text: "What is DOM Hydration? What causes severe hydration mismatch runtime errors in frameworks like Next.js, and how do you remediate them?",
        answer: "DOM Hydration is the process where React traverses server-rendered HTML in the browser and attaches event listeners to match internal state logic. Hydration mismatches occur when the initial client render tree differs from the server-generated HTML structure (e.g., due to dynamic dates, random numbers, or direct localStorage reads). Remediate by moving browser-only code inside a `useEffect` hook, or disabling SSR on the component via dynamic imports with `{ ssr: false }`."
      },
      {
        id: "sd-10",
        text: "How do you extend TypeScript safely within React apps? Explain interface extension syntax vs Type aliases and discrimination rules.",
        answer: "Interfaces define object shapes and support automatic declaration merging (re-declaring an interface appends fields). Type aliases can represent primitives, unions, and intersections, making them highly versatile. Extend interfaces using `interface B extends A {}`, and combine type aliases via intersections (`type B = A & {}`). Use discriminated unions with a shared literal field (e.g., `type: 'success' | 'error'`) to enable safe, type-guarded conditional checking."
      },
      {
        id: "sd-11",
        text: "Explain component-driven design patterns and how to achieve modular, clean separation of concerns across enterprise codebases.",
        answer: "Component-driven design builds user interfaces from the bottom up using atomic, self-contained components. Achieve clean separation of concerns using presentation patterns: separate raw styling logic from business processes. Presentational components focus entirely on rendering layouts via incoming props, while custom hooks encapsulate state logic, API interactions, and side effects, making codebases easier to maintain and test."
      },
      {
        id: "sd-12",
        text: "How do you bootstrap a production-grade React build system from absolute scratch using raw bundlers without relying on Create-React-App toolsets?",
        answer: "1) Initialize the project with `npm init`. 2) Install core tools: `pnpm add -D webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin`. 3) Create a configuration file (`webpack.config.js`) defining your entry boundary (`src/index.js`), output path (`dist/[name].[contenthash].js`), and module processing rules matching `babel-loader`. 4) Configure the HTML plugin to inject bundles, and set up a dev server with hot module replacement."
      },
      {
        id: "sd-13",
        text: "What are Web Accessibility Standards (WCAG)? How do you systematically enforce aria attributes, focus management, and markup parameters?",
        answer: "WCAG outlines principles to make web content accessible to users with disabilities. Enforce standards systematically by: 1) Using semantic HTML layout tags (`<main>`, `<nav>`, `<button>`). 2) Ensuring full keyboard navigation support using custom focus indicators and focus traps within modal layers. 3) Applying explicit `aria-*` parameters (e.g., `aria-expanded`, `aria-describedby`). 4) Integrating automated linting and accessibility testing tools (e.g., `axe-core`) into your CI/CD pipelines."
      },
      {
        id: "sd-14",
        text: "How do you write highly predictable unit tests using Jest and React Testing Library, and E2E visual flows with Cypress/Playwright?",
        answer: "Write predictable unit tests by focusing on user behavior over implementation details, using React Testing Library to query elements by accessible roles (e.g., `screen.getByRole`) and firing user-like interactions. For E2E tests, use Cypress or Playwright to boot the full application stack inside real browsers, executing comprehensive user flows like completing a checkout process from end to end."
      },
      {
        id: "sd-15",
        text: "Compare package manager spaces: npm vs yarn vs pnpm regarding disk space optimizations and deterministic lockfile resolutions.",
        answer: "Traditional npm and yarn duplicate dependency packages across projects, creating large `node_modules` folders on disk. pnpm optimizes disk space using a global content-addressable store, linking dependency modules via hard links. This improves installation speeds, prevents phantom dependency imports by enforcing strict hoisting limits, and ensures deterministic builds using a unified lockfile mapping mechanism."
      },
      {
        id: "sd-16",
        text: "How do you explicitly fetch dynamic data streams in Next.js using getStaticProps vs getServerSideProps methods?",
        answer: "`getStaticProps` executes exclusively at build time on the compilation server to fetch data and generate static HTML files, making it ideal for content that changes infrequently (e.g., blogs, product catalogs). `getServerSideProps` executes on the server for every incoming request, fetching live data on-demand before rendering the page, making it ideal for real-time, user-specific data dashboards."
      },
      {
        id: "sd-17",
        text: "Compare RESTful architectural communication boundaries vs GraphQL schema query executions.",
        answer: "RESTful architectures interact via multiple endpoints structured around specific resource routes (e.g., `/api/users`), which can result in over-fetching or under-fetching data. GraphQL operates through a single endpoint, executing queries against a strongly typed schema. Clients specify the exact fields they need within a single request payload, minimizing network data transfer."
      },
      {
        id: "sd-18",
        text: "How do you handle Cross-Site Scripting (XSS) injection attacks within frontend layouts?",
        answer: "Prevent XSS attacks by ensuring data variables are properly escaped before being rendered into the DOM. Avoid using direct script injections like `dangerouslySetInnerHTML` unless the content has been thoroughly sanitized using a trusted utility library like DOMPurify. Additionally, configure a strict Content Security Policy (CSP) header to restrict script execution to trusted source domains."
      },
      {
        id: "sd-19",
        text: "Explain CSS Grid configurations vs Flexbox layout alignments and provide instances of when to apply each.",
        answer: "Flexbox is designed for one-dimensional layouts (arranging elements along a single row or column), making it ideal for content alignment in components like navbars, item lists, or button groups. CSS Grid is designed for two-dimensional layouts (simultaneously managing rows and columns), making it ideal for full-page scaffolding structures, complex card layouts, or dashboard configurations."
      },
      {
        id: "sd-20",
        text: "What are Progressive Web Apps (PWAs), and what explicit structural parameters turn a web layout into an installable mobile application?",
        answer: "Progressive Web Apps enhance standard web layouts to provide app-like mobile interfaces. A web application becomes installable by meeting three structural requirements: 1) A valid Web App Manifest file (`manifest.json`) defining the app's branding parameters, icons, and display orientation. 2) An active Service Worker to support background asset caching and offline functionality. 3) Delivery over a secure HTTPS connection."
      }
    ]
  },
  {
    id: "backend-db-fundamentals",
    title: "Backend & Database Fundamentals",
    description: "Message brokers, database indices, server runtimes, key-value stores, and API gateway logic.",
    questions: [
      {
        id: "be-1",
        text: "What happens if a RabbitMQ consumer crashes unexpectedly before acknowledging or completing a message queue transaction?",
        answer: "If a consumer crashes or its connection drops without sending an explicit acknowledgment (`ack`), RabbitMQ detects the channel closure, treats the message as unacknowledged, and automatically returns it to the queue for re-delivery. To prevent infinite processing loops caused by a malformed message, configure a Dead Letter Exchange (DLX) paired with a retry count limit to isolate failing messages after multiple attempts."
      },
      {
        id: "be-2",
        text: "How do you handle cache invalidation routines inside Redis databases when primary data persistence layers undergo mutation updates?",
        answer: "Implement the Cache-Aside pattern: whenever a data mutation occurs, update the primary SQL or NoSQL database first, and then delete the corresponding cache key from Redis. The subsequent read operation will encounter a cache miss, fetch the updated data from the primary database, and write it back into Redis. Always set an explicit fallback Time-To-Live (TTL) on cache keys to prevent stale data retention."
      },
      {
        id: "be-3",
        text: "How do microservices communicate reliably with each other across distributed boundaries?",
        answer: "Microservices communicate reliably using synchronous patterns like gRPC over HTTP/2 for low-latency internal communication or REST APIs managed by timeout configurations. For decoupled asynchronous communication, deploy message brokers like RabbitMQ or Apache Kafka to broadcast events over durable queues, ensuring message delivery even if the consuming services are temporarily offline."
      },
      {
        id: "be-4",
        text: "What specific operational challenges does an API Gateway solve within a distributed microservices framework?",
        answer: "An API Gateway serves as a single entry point for incoming client traffic, handling cross-cutting operational concerns such as: centralized user authentication/authorization, global rate limiting to protect against DDoS attacks, request routing and load balancing, SSL/TLS termination, and response compression or payload aggregation across internal microservices."
      },
      {
        id: "be-5",
        text: "What mitigation actions do you take if Service A hits an HTTP route on Service B, but Service B is completely unresponsive? Explain fallback/circuit-breakers.",
        answer: "Implement the Circuit Breaker pattern (e.g., via `opossum`). When Service B's failure rate crosses a set threshold, the circuit trips 'Open', immediately failing subsequent calls from Service A with a graceful fallback response (like reading stale cached data) instead of exhausting thread resources. The circuit periodically transitions to a 'Half-Open' state to test if Service B has recovered."
      },
      {
        id: "be-6",
        text: "How do you configure container orchestration engines to guarantee pods automatically reboot upon unexpected health crash loops?",
        answer: "Configure continuous liveness and readiness probes directly inside your deployment manifests. The liveness probe monitors an internal health endpoint (e.g., `/healthz`) or executes a diagnostic script at regular intervals. If the endpoint returns an error code or fails to respond within set timeouts, the orchestration engine marks the container as unhealthy and triggers an automatic pod reboot sequence."
      },
      {
        id: "be-7",
        text: "How do you design secure APIs (handling authentication, strict rate-limiting policies, and automated request input validations)?",
        answer: "Enforce authentication using asymmetric JWT signatures or secure sessions over encrypted HTTPS channels. Implement rate limiting using a token bucket algorithm backed by Redis to mitigate brute-force traffic. Enforce automated input validation on all incoming query parameters and body payloads using schema validation libraries (e.g., Zod, Joi) before the request payload hits core database logic."
      },
      {
        id: "be-8",
        text: "How do you scale active, stateful WebSocket connections horizontally across multiple parallel node servers?",
        answer: "Scale stateful WebSockets horizontally by connecting your server nodes with a shared Pub/Sub message broker backend, such as a Redis Pub/Sub adapter. When a specific server instance needs to broadcast a real-time message, it publishes the event to the shared Redis channel. Redis distributes the event across all other active server nodes, ensuring every connected client receives the broadcast regardless of their server connection."
      },
      {
        id: "be-9",
        text: "How do you instantly invalidate JSON Web Tokens (JWT) immediately upon a client trigger logout action?",
        answer: "Since stateless JWT tokens cannot be revoked natively before their built-in expiration time, store the token's unique signature inside a Redis blacklist upon logout, setting its TTL to match the token's remaining validity duration. Have your authentication middleware check incoming signatures against this Redis blacklist on every request, rejecting any matches."
      },
      {
        id: "be-10",
        text: "What are rooms and namespaces inside Socket.io pools, and when would you declare them?",
        answer: "Namespaces partition a single WebSocket connection into separate logical channels (e.g., `/admin` vs `/chat`), each with its own authentication middleware and event handlers. Rooms are arbitrary sub-channels that sockets can join or leave dynamically on the server side (e.g., a specific chatroom ID), used to multiplex target broadcasts to a specific group of connected clients."
      },
      {
        id: "be-11",
        text: "How do you evaluate and declare an optimal database indexing strategy based on heavily contrasting application read/write query patterns?",
        answer: "For read-heavy workloads, build targeted single-field or compound indexes matching your most frequent query filter patterns to minimize full collection scans. For write-heavy workloads, use indexes sparingly because every insert, update, or delete operation requires updating the underlying B-Tree or index structure, which slows down write performance."
      },
      {
        id: "be-12",
        text: "If multiple TTL database indexes or absolute data expirations occur concurrently, how does the thread engine prioritize user queries?",
        answer: "Database engines (like MongoDB or Redis) handle TTL expirations asynchronously via low-priority background threads that periodically poll and purge expired documents. If an incoming user query requests a document that has crossed its TTL threshold but has not yet been deleted by the background thread, the database engine filters it out during query evaluation, ensuring data consistency."
      },
      {
        id: "be-13",
        text: "Explain the Node.js Event Loop execution phases (timers, I/O polling, check, close hooks) and how they process asynchronous routines.",
        answer: "The Node.js event loop allocates async callbacks across explicit execution phases: 1) Timers: executes callbacks from `setTimeout`/`setInterval`. 2) Pending Callbacks: runs deferred I/O errors. 3) Poll: retrieves new I/O events and executes script blocks. 4) Check: executes `setImmediate` hooks. 5) Close Callbacks: runs cleanup hooks (e.g., `socket.on('close')`). Note: `process.nextTick()` and Promise microtasks execute immediately after the current phase finishes, before moving to the next phase."
      },
      {
        id: "be-14",
        text: "Compare a resilient transactional message streaming broker (RabbitMQ/Kafka) vs lightweight Redis Pub/Sub channels.",
        answer: "RabbitMQ and Kafka are durable, transactional message stores that guarantee delivery by saving messages to disk, tracking acknowledgments, and supporting consumer replays. Redis Pub/Sub is a lightweight, 'fire-and-forget' messaging channel with no persistence layer; if a client is disconnected when a message is published, that message is permanently lost."
      },
      {
        id: "be-15",
        text: "Explain JWT architecture: what is the operational difference between an Access Token and a Refresh Token, and where must they reside in the browser?",
        answer: "Access Tokens are short-lived credentials (e.g., 15 minutes) used to authenticate API requests; they should be stored in memory to prevent XSS theft. Refresh Tokens are long-lived tokens (e.g., 7 days) used to securely request new Access Tokens; they should be stored in an httpOnly, Secure, SameSite=Strict cookie to protect them from JavaScript-based access."
      },
      {
        id: "be-16",
        text: "Categorize HTTP Status Code families: group and identify codes for successes, redirections, client input bugs, and backend server crashes.",
        answer: "1xx: Informational requests. 2xx: Success outcomes (e.g., 200 OK, 201 Created). 3xx: Redirections (e.g., 301 Moved Permanently, 304 Not Modified). 4xx: Client Input Errors (e.g., 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found). 5xx: Server Errors (e.g., 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout)."
      },
      {
        id: "be-17",
        text: "What is Express.js middleware, and how do you write an automated global error handling runtime interceptor?",
        answer: "Express middleware are pipeline execution functions that process incoming requests, accepting `req`, `res`, and `next` arguments. To write a global error handling interceptor, declare a middleware with four explicit arguments at the absolute end of your routing chain:\n\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(err.status || 500).json({ success: false, error: err.message || 'Internal Server Error' });\n});"
      },
      {
        id: "be-18",
        text: "Explain Model-View-Controller (MVC) server-side system layout designs.",
        answer: "MVC separates an application into three logical components: The Model handles data definitions, database schemas, and business logic validation rules. The View manages the user interface presentation layer or data formatting layer (like JSON payload responses). The Controller acts as an intermediary, receiving incoming HTTP requests, orchestrating Model operations, and passing results back to the View."
      },
      {
        id: "be-19",
        text: "What is Idempotency in API route design, and why is it mandatory for payment gateways and request retry mechanics?",
        answer: "An API route is idempotent if making multiple identical requests produces the exact same server state as making a single request (e.g., GET, PUT, DELETE). It is critical for payment gateways and retries to prevent duplicate charges or double mutations. It is typically implemented by having clients send a unique Idempotency-Key header, which the server checks against a Redis store before processing."
      },
      {
        id: "be-20",
        text: "What is NGINX, and what architectural performance benefits does it secure when serving as a reverse proxy or load balancer?",
        answer: "NGINX uses an asynchronous, event-driven, non-blocking architecture that allows it to manage thousands of concurrent connections with low memory usage. When acting as a reverse proxy, it improves system performance by handling SSL/TLS termination, load balancing traffic across upstream servers, caching static assets, and applying rate-limiting to prevent server exhaustion."
      },
      {
        id: "be-21",
        text: "What is MongoDB? Detail the structural difference between Schemas and Models in Mongoose, and define Population, Indexing, and Aggregation pipelines.",
        answer: "A Mongoose Schema defines the structural shape, field types, and validation rules for documents in a collection. A Model is a compiled constructor built from the schema that provides the data interface methods (e.g., find, create). Population dynamically replaces references with actual documents from other collections. Indexing speeds up queries using B-Trees. Aggregation pipelines process documents through multi-stage modification frameworks (match, group, project)."
      },
      {
        id: "be-22",
        text: "How and where do you store log streams in a resilient, high-volume production application environment?",
        answer: "Write logs directly to stdout/stderr streams instead of managing local files, adhering to 12-factor app principles. Deploy background log forwarders (like Fluentd, Logstash, or Vector) to collect these streams asynchronously and forward them to a centralized log management platform (like Elasticsearch, Grafana Loki, or Datadog) for long-term retention, indexing, and analysis."
      },
      {
        id: "be-23",
        text: "Compare SQL relational database schemas vs unstructured NoSQL collection layouts.",
        answer: "SQL databases use rigid, predefined relational tabular schemas that enforce ACID compliance, making them ideal for highly transactional applications with structured relational profiles. NoSQL databases use flexible, schema-less document collections (e.g., JSON documents) that scale horizontally across distributed clusters, suited for rapid iteration and unstructured data workloads."
      },
      {
        id: "be-24",
        text: "What is the structural operational difference between running insertOne() vs insertMany() commands in a MongoDB cluster?",
        answer: "insertOne() sends a single document payload to the MongoDB cluster, generating an independent database network round-trip. insertMany() takes an array of multiple documents and sends them to the database cluster in a single, batched network command. This minimizes network overhead, decreases write latencies, and drastically increases bulk ingestion speeds."
      }
    ]
  },
  {
    id: "lld-coding-challenges",
    title: "Low-Level Design (LLD) & Code Challenges",
    description: "Hands-on UI primitives, complex algorithm implementations, array mutations, and custom programmatic polyfills.",
    questions: [
      {
        id: "code-1",
        text: "Build an interactive Counter component from scratch ensuring edge-case handling for boundary constraints.",
        answer: "An interactive counter component maintains local state and applies boundary checks or disables control buttons when reaching specific threshold limits.\n\nCode Implementation:\nimport React, { useState } from 'react';\nexport const Counter = ({ min = 0, max = 10 }) => {\n  const [count, setCount] = useState(0);\n  return (\n    <div className='flex gap-4 items-center'>\n      <button onClick={() => setCount(c => Math.max(min, c - 1))} disabled={count === min} className='px-3 py-1 bg-slate-800 rounded'>-</button>\n      <span className='font-mono text-lg'>{count}</span>\n      <button onClick={() => setCount(c => Math.min(max, c + 1))} disabled={count === max} className='px-3 py-1 bg-slate-800 rounded'>+</button>\n    </div>\n  );\n};"
      },
      {
        id: "code-2",
        text: "Build a highly accurate UI Stopwatch / Timer primitive tracking exact ticking intervals and clean component teardowns.",
        answer: "A stopwatch tracks elapsed intervals using a mutable ref to hold the running interval ID, clearing the active interval on unmount to prevent leaks.\n\nCode Implementation:\nimport React, { useState, useRef, useEffect } from 'react';\nexport const Stopwatch = () => {\n  const [time, setTime] = useState(0);\n  const timerRef = useRef(null);\n  const start = () => { if (!timerRef.current) timerRef.current = setInterval(() => setTime(t => t + 10), 10); };\n  const stop = () => { clearInterval(timerRef.current); timerRef.current = null; };\n  const reset = () => { stop(); setTime(0); };\n  useEffect(() => () => clearInterval(timerRef.current), []);\n  return (\n    <div>\n      <div className='font-mono text-xl'>{(time / 1000).toFixed(2)}s</div>\n      <div className='flex gap-2 mt-2'>\n        <button onClick={start} className='px-2 py-1 bg-teal-600 rounded text-xs'>Start</button>\n        <button onClick={stop} className='px-2 py-1 bg-amber-600 rounded text-xs'>Stop</button>\n        <button onClick={reset} className='px-2 py-1 bg-slate-700 rounded text-xs'>Reset</button>\n      </div>\n    </div>\n  );\n};"
      },
      {
        id: "code-3",
        text: "Build a Todo application leveraging an optimized state structure that separates active vs mutations lists cleanly.",
        answer: "Optimize a todo list application structure by deriving the completion statuses inline during rendering, which reduces state synchronizations.\n\nCode Implementation:\nimport React, { useState } from 'react';\nexport const TodoApp = () => {\n  const [todos, setTodos] = useState([]);\n  const [input, setInput] = useState('');\n  const activeTodos = todos.filter(t => !t.completed);\n  const completedTodos = todos.filter(t => t.completed);\n  const handleAdd = () => { if (input.trim()) { setTodos([...todos, { id: Date.now(), text: input, completed: false }]); setInput(''); } };\n  return (\n    <div className='p-4 bg-slate-900 rounded-xl'>\n      <div className='flex gap-2'><input value={input} onChange={e => setInput(e.target.value)} className='bg-slate-800 px-2 py-1 rounded text-sm'/><button onClick={handleAdd} className='px-3 py-1 bg-teal-500 text-slate-900 rounded font-bold text-xs'>ADD</button></div>\n      <div className='mt-4 text-xs font-bold text-teal-400'>Active ({activeTodos.length})</div>\n      {activeTodos.map(t => <div key={t.id} onClick={() => setTodos(todos.map(todo => todo.id === t.id ? {...todo, completed: true} : todo))} className='cursor-pointer text-sm p-1'>{t.text}</div>)}\n      <div className='mt-4 text-xs font-bold text-slate-500'>Completed ({completedTodos.length})</div>\n      {completedTodos.map(t => <div key={t.id} className='line-through text-slate-500 text-sm p-1'>{t.text}</div>)}\n    </div>\n  );\n};"
      },
      {
        id: "code-4",
        text: "Build an omnibox Search widget combining real-time Debouncing thresholds, Throttling overrides, and infinite-scroll pagination hooks.",
        answer: "A dynamic input search widget utilizing an internal debounced hook delay coupled with scroll boundary checks to trigger next page fetches.\n\nCode Implementation:\nimport React, { useState, useEffect } from 'react';\nexport const SearchWidget = ({ onLoadNextPage }) => {\n  const [query, setQuery] = useState('');\n  useEffect(() => {\n    const handler = setTimeout(() => { if (query) console.log('API Fetch for query:', query); }, 300);\n    return () => clearTimeout(handler);\n  }, [query]);\n  useEffect(() => {\n    const handleScroll = () => { if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) onLoadNextPage?.(); };\n    window.addEventListener('scroll', handleScroll);\n    return () => window.removeEventListener('scroll', handleScroll);\n  }, [onLoadNextPage]);\n  return <input type='text' value={query} onChange={e => setQuery(e.target.value)} placeholder='Search and scroll to load...' className='w-full bg-slate-900 p-2 text-sm border border-slate-800 rounded-lg'/>;\n};"
      },
      {
        id: "code-5",
        text: "Build modular UI primitives from raw HTML/CSS/JS: a keyboard-accessible Accordion, an accessible Modal, responsive Tabs, and an Autocomplete menu.",
        answer: "Accessible components require appropriate WAI-ARIA tracking keys (`aria-expanded`, `aria-hidden`) and keyboard management loops (e.g., locking focus within modal containers, supporting Escape key closures, and enabling D-pad index updates across menu layouts)."
      },
      {
        id: "code-6",
        text: "Build a complex HTML form validator from scratch without importing external utility frameworks like Formik or React Hook Form.",
        answer: "Manage complex form fields entirely using state variables, running validation functions against the inputs and tracking error messages locally.\n\nCode Implementation:\nimport React, { useState } from 'react';\nexport const FormValidator = () => {\n  const [values, setValues] = useState({ email: '', password: '' });\n  const [errors, setErrors] = useState({});\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    let errs = {};\n    if (!values.email.includes('@')) errs.email = 'Invalid email syntax.';\n    if (values.password.length < 6) errs.password = 'Password must be >= 6 chars.';\n    setErrors(errs);\n    if (Object.keys(errs).length === 0) console.log('Payload Submitted:', values);\n  };\n  return (\n    <form onSubmit={handleSubmit} className='flex flex-col gap-3 p-4 bg-slate-900 rounded-lg'>\n      <input name='email' value={values.email} onChange={e => setValues({...values, email: e.target.value})} className='bg-slate-800 p-1 text-sm rounded'/>\n      {errors.email && <span className='text-xs text-red-400'>{errors.email}</span>}\n      <input type='password' name='password' value={values.password} onChange={e => setValues({...values, password: e.target.value})} className='bg-slate-800 p-1 text-sm rounded'/>\n      {errors.password && <span className='text-xs text-red-400'>{errors.password}</span>}\n      <button type='submit' className='bg-teal-500 p-1 rounded text-slate-900 font-bold text-xs'>VALIDATE</button>\n    </form>\n  );\n};"
      },
      {
        id: "code-7",
        text: "Design a Virtualized List container capable of managing 10,000+ rows efficiently at a locked 60 FPS render cycle.",
        answer: "A virtualized list calculates container heights dynamically and renders only the exact subset of elements visible within the viewport window.\n\nCode Implementation:\nimport React, { useState } from 'react';\nexport const VirtualList = ({ items = Array.from({length: 10000}, (_, i) => `Row ${i}`), rowHeight = 35, height = 300 }) => {\n  const [scrollTop, setScrollTop] = useState(0);\n  const startIndex = Math.floor(scrollTop / rowHeight);\n  const endIndex = Math.min(items.length - 1, startIndex + Math.ceil(height / rowHeight));\n  const visibleItems = items.slice(startIndex, endIndex + 1);\n  return (\n    <div onScroll={e => setScrollTop(e.target.scrollTop)} style={{ height, overflowY: 'auto', position: 'relative' }} className='border border-slate-800 bg-slate-950'>\n      <div style={{ height: items.length * rowHeight, width: '100%' }}>\n        <div style={{ transform: `translateY(${startIndex * rowHeight}px)`, position: 'absolute', top: 0, left: 0, right: 0 }}>\n          {visibleItems.map((item, idx) => <div key={startIndex + idx} style={{ height: rowHeight }} className='p-2 text-sm text-slate-300 border-b border-slate-900'>{item}</div>)}\n        </div>\n      </div>\n    </div>\n  );\n};"
      },
      {
        id: "code-8",
        text: "Write the low-level DOM event listeners and calculations necessary to engineer an organic Drag & Drop canvas interface.",
        answer: "Implement canvas drag-and-drop mechanics by binding mouse movement events to the document tree to calculate coordinates and update element styles dynamically.\n\nCode Implementation:\nexport const initDraggable = (element) => {\n  if (!element) return;\n  element.addEventListener('mousedown', (e) => {\n    let shiftX = e.clientX - element.getBoundingClientRect().left;\n    let shiftY = e.clientY - element.getBoundingClientRect().top;\n    const moveAt = (pageX, pageY) => {\n      element.style.left = pageX - shiftX + 'px';\n      element.style.top = pageY - shiftY + 'px';\n    };\n    const onMouseMove = (ev) => moveAt(ev.pageX, ev.pageY);\n    document.addEventListener('mousemove', onMouseMove);\n    document.addEventListener('mouseup', () => {\n      document.removeEventListener('mousemove', onMouseMove);\n    }, { once: true });\n  });\n};"
      },
      {
        id: "code-9",
        text: "Write an optimized script to parse and calculate the frequency of occurrences for items in an array. Input: ['a', 'b', 'a', 'c', 'c', 'd'].",
        answer: "Calculate item frequencies inside an array using `Array.prototype.reduce` to compile counts into an object literal map.\n\nCode Implementation:\nexport const getFrequency = (arr) => {\n  return arr.reduce((acc, item) => {\n    acc[item] = (acc[item] || 0) + 1;\n    return acc;\n  }, {});\n};\n// Execution: getFrequency(['a', 'b', 'a', 'c', 'c', 'd']) -> { a: 2, b: 1, c: 2, d: 1 }"
      },
      {
        id: "code-10",
        text: "Write a compression script to parse repeating sequences into single numeric metrics. Input: 'AABBCCCDDD' -> Output: '2A2B3C3D'.",
        answer: "A string compression script that loops through the target string to count contiguous matching characters and output an alphanumeric summary.\n\nCode Implementation:\nexport const compressSequence = (str) => {\n  if (!str) return '';\n  let output = '', count = 1;\n  for (let i = 0; i < str.length; i++) {\n    if (str[i] === str[i + 1]) { count++; }\n    else { output += count + str[i]; count = 1; }\n  }\n  return output;\n};\n// Execution: compressSequence('AABBCCCDDD') -> '2A2B3C3D'"
      },
      {
        id: "code-11",
        text: "Write clean, fully compliant polyfill implementations for Array.prototype.reduce(), Array.prototype.filter(), and an iterative array flattening utility.",
        answer: "Custom underlying prototype helpers managing iterative evaluation loops over variable array configurations.\n\nCode Implementation:\nArray.prototype.myReduce = function(callback, initialValue) {\n  let accumulator = initialValue !== undefined ? initialValue : this[0];\n  let startIdx = initialValue !== undefined ? 0 : 1;\n  for (let i = startIdx; i < this.length; i++) { if (i in this) accumulator = callback(accumulator, this[i], i, this); }\n  return accumulator;\n};\nArray.prototype.myFilter = function(callback) {\n  const result = [];\n  for (let i = 0; i < this.length; i++) { if (i in this && callback(this[i], i, this)) result.push(this[i]); }\n  return result;\n};\nexport const flattenArrayIterative = (arr) => {\n  const stack = [...arr], res = [];\n  while (stack.length) {\n    const next = stack.pop();\n    if (Array.isArray(next)) { stack.push(...next); } else { res.push(next); }\n  }\n  return res.reverse();\n};"
      },
      {
        id: "code-12",
        text: "Given an array like ['R', 'B', 'C'], write an algorithmic routine to print each matching item 100 times with maximum execution speed.",
        answer: "Optimize performance by using native string repetition methods to create bulk text payloads, reducing console output operations.\n\nCode Implementation:\nexport const fastBulkPrint = (arr) => {\n  let aggregatedBuffer = '';\n  for (let i = 0; i < arr.length; i++) {\n    aggregatedBuffer += (arr[i] + '\\n').repeat(100);\n  }\n  console.log(aggregatedBuffer);\n};"
      },
      {
        id: "code-13",
        text: "Write a React custom hook to compute string character frequencies and map those live UI rendering analytics directly to the screen view.",
        answer: "A custom hook that wraps character frequency logic in a `useMemo` boundary to prevent redundant re-evaluations during unrelated layout updates.\n\nCode Implementation:\nimport { useMemo } from 'react';\nexport const useStringAnalytics = (inputString) => {\n  return useMemo(() => {\n    if (!inputString) return {};\n    const frequencyMap = {};\n    for (let char of inputString) { frequencyMap[char] = (frequencyMap[char] || 0) + 1; }\n    return frequencyMap;\n  }, [inputString]);\n};"
      }
    ]
  }
];