export interface ReactLesson {
  id: number;
  tag: string;
  title: string;
  description: string;
  example: string;
  preview: {
    type: "code" | "generic";
    content?: string[];
    props?: any;
  };
  category: "basics" | "hooks" | "advanced" | "routing" | "state";
  level: "beginner" | "intermediate" | "advanced";
  color: string;
}

export const reactLessons: ReactLesson[] = [
  {
    id: 1,
    tag: "<Component />",
    title: "Functional Components",
    description: "Functional Components are the absolute foundational building blocks of modern React development. A component is essentially a standard JavaScript function that accepts 'props' (inputs) and return 'React elements' (JSX structure). They encourage a declarative, component-driven architecture where you break complex user interfaces down into tiny, isolated, and highly reusable pieces that manage their own logic and styling independently.",
    example: "function Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\nexport default function App() {\n  return (\n    <div>\n      <Welcome name=\"Sara\" />\n      <Welcome name=\"Cahal\" />\n      <Welcome name=\"Edite\" />\n    </div>\n  );\n}",
    preview: {
      type: "code",
      content: ["Reusable UI elements", "Returns JSX"]
    },
    category: "basics",
    level: "beginner",
    color: "#c5e6ff"
  },
  {
    id: 2,
    tag: "props",
    title: "Props (Properties)",
    description: "Props, short for 'properties,' are the primary vehicle for passing data from parent components down to child components. Just like arguments in a standard function, props allow you to customize the behavior and content of a component instance. Importantly, props are strictly read-only ('immutable') within the child component, enforcing a predictable uni-directional data flow that makes debugging large-scale applications significantly more manageable.",
    example: "function UserProfile({ name, age, role }) {\n  return (\n    <div className=\"profile\">\n      <h2>{name}</h2>\n      <p>Age: {age}</p>\n      <p>Role: {role}</p>\n    </div>\n  );\n}",
    preview: {
      type: "code",
      content: ["Read-only data", "Top-down data flow"]
    },
    category: "basics",
    level: "beginner",
    color: "#c5e6ff"
  },
  {
    id: 3,
    tag: "useState",
    title: "useState Hook",
    description: "The `useState` Hook is the primary gateway for adding localized 'state' to functional components. State represents data that can change over time based on user interactions, API responses, or system timers. When you update a state variable using its specific setter function, React automatically detects the change and triggers an intelligent 're-render' of the component, ensuring the user interface always reflects the most current underlying data flawlessly.",
    example: "import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}",
    preview: {
      type: "code",
      content: ["State management", "Triggers re-renders"]
    },
    category: "hooks",
    level: "beginner",
    color: "#c5e6ff"
  },
  {
    id: 4,
    tag: "useEffect",
    title: "useEffect Hook",
    description: "The `useEffect` Hook allows you to implement 'side effects'—logic that reaches outside the pure rendering of a component. This includes critical tasks like fetching data from a server, manual DOM manipulation, or setting up persistent subscriptions. By carefully managing the 'dependency array' (the second argument), you can precisely control exactly when your effect runs: only on initial mount, whenever specific variables change, or on every single render cycle.",
    example: "import { useState, useEffect } from 'react';\n\nfunction Timer() {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setSeconds(s => s + 1);\n    }, 1000);\n    \n    // Cleanup function\n    return () => clearInterval(interval);\n  }, []); // Empty array = runs once on mount\n\n  return <div>Timer: {seconds}s</div>;\n}",
    preview: {
      type: "code",
      content: ["Side effects", "Component lifecycle"]
    },
    category: "hooks",
    level: "intermediate",
    color: "#c5e6ff"
  },
  {
    id: 5,
    tag: "useContext",
    title: "Context API",
    description: "The Context API provides a robust solution for passing data through a deep component tree without 'prop drilling'—the tedious process of manually passing props through intermediate layers that don't actually need them. By defining a Context Provider at a high level, any child component within that tree can instantly 'consume' shared global data like theme settings, user authentication states, or language preferences using the `useContext` Hook.",
    example: "import { createContext, useContext, useState } from 'react';\n\nconst ThemeContext = createContext('light');\n\nfunction App() {\n  const [theme, setTheme] = useState('dark');\n  return (\n    <ThemeContext.Provider value={theme}>\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Toolbar() {\n  return <ThemedButton />;\n}\n\nfunction ThemedButton() {\n  const theme = useContext(ThemeContext);\n  return <button className={`btn-${theme}`}>I am styled by theme context!</button>;\n}",
    preview: {
      type: "code",
      content: ["Global state", "Prop drilling fix"]
    },
    category: "state",
    level: "intermediate",
    color: "#61dafb"
  },
  {
    id: 6,
    tag: "useMemo",
    title: "useMemo & useCallback",
    description: "These performance optimization Hooks are used to 'memoize' (cache) expensive results to prevent unnecessary computation during re-renders. `useMemo` specifically caches the result of a complex calculation, while `useCallback` caches a function definition itself. When used correctly in conjunction with `React.memo`, these Hooks can drastically improve the responsiveness and fluidity of high-density applications by intelligently skipping redundant work whenever possible.",
    example: "import { useState, useMemo, useCallback } from 'react';\n\nfunction ExpensiveComponent({ data }) {\n  const [query, setQuery] = useState('');\n  \n  // Only recalculate when data or query changes\n  const filteredData = useMemo(() => {\n    console.log('Filtering...');\n    return data.filter(item => item.includes(query));\n  }, [data, query]);\n  \n  // Memoize the callback so child components don't re-render unnecessarily\n  const handleAction = useCallback(() => {\n    console.log('Action performed with', query);\n  }, [query]);\n\n  return (\n    <div>\n       <input value={query} onChange={e => setQuery(e.target.value)} />\n       <ChildComponent onAction={handleAction} />\n    </div>\n  );\n}",
    preview: {
      type: "code",
      content: ["Performance", "Memoization"]
    },
    category: "hooks",
    level: "advanced",
    color: "#c5e6ff"
  },
  {
    id: 7,
    tag: "useRef",
    title: "useRef Hook",
    description: "The `useRef` Hook serves two distinct, vital purposes in React. First, it can store a 'mutable' value that persists between re-renders without triggering a new render cycle itself when changed. Second, it is the standard way to directly access an underlying real DOM element (like an `<input>` or a `<div>`) to execute imperatives like focusing a field, measuring its geometric dimensions, or integrating with third-party libraries that don't utilize React's virtual DOM.",
    example: "import { useRef } from 'react';\n\nfunction TextInputWithFocusButton() {\n  const inputEl = useRef(null);\n  const onButtonClick = () => {\n    // `current` points to the mounted text input element\n    inputEl.current.focus();\n  };\n  return (\n    <>\n      <input ref={inputEl} type=\"text\" />\n      <button onClick={onButtonClick}>Focus the input</button>\n    </>\n  );\n}",
    preview: { type: "code", content: ["Mutable ref object", "DOM Access"] },
    category: "hooks",
    level: "intermediate",
    color: "#c5e6ff"
  },
  {
    id: 8,
    tag: "useReducer",
    title: "useReducer Hook",
    description: "For complex components where state logic involves multiple sub-values or depends heavily on previous states, `useReducer` offers a more structured alternative to multiple `useState` calls. Based on the Redux pattern, it uses a 'reducer' function to manage state transitions via explicit 'action' objects. This centralizes state logic outside the component body, making deeply complex behavior significantly easier to test, debug, and reason about as your application grows.",
    example: "import { useReducer } from 'react';\n\nconst initialState = {count: 0};\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return {count: state.count + 1};\n    case 'decrement':\n      return {count: state.count - 1};\n    default:\n      throw new Error();\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, initialState);\n  return (\n    <>\n      Count: {state.count}\n      <button onClick={() => dispatch({type: 'decrement'})}>-</button>\n      <button onClick={() => dispatch({type: 'increment'})}>+</button>\n    </>\n  );\n}",
    preview: { type: "code", content: ["Complex State", "Dispatch actions"] },
    category: "state",
    level: "intermediate",
    color: "#c5e6ff"
  },
  {
    id: 9,
    tag: "CustomHooks",
    title: "Custom Hooks",
    description: "Custom Hooks are a powerful mechanism that allows you to extract common component logic into reusable functions. By creating a function whose name starts with 'use', you can utilize other React Hooks inside it, effectively crafting a portable block of stateful logic. This enables developers to share complex behaviors—like handling window resizing, managing form state, or fetching API data—across hundreds of different components without repeating a single line of code.",
    example: "import { useState, useEffect } from 'react';\n\n// Custom Hook\nfunction useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', handleResize);\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n  return width;\n}\n\nfunction App() {\n  const width = useWindowWidth();\n  return <p>Window is {width}px wide</p>;\n}",
    preview: { type: "code", content: ["Logic Reusability", "Starts with 'use'"] },
    category: "hooks",
    level: "advanced",
    color: "#c5e6ff"
  },
  {
    id: 10,
    tag: "React.memo",
    title: "React.memo",
    description: "React.memo is a 'Higher-Order Component' (HOC) specifically engineered to optimize the performance of components that render frequently with the same props. By wrapping a component in `memo`, React will examine incoming props; if the new props are identical to the previous ones, React intelligently skips the entire re-rendering process for that component, effectively saving precious CPU cycles and ensuring your user interface remains buttery smooth even during heavy state updates.",
    example: "import { memo, useState } from 'react';\n\n// Re-renders ONLY when `name` prop changes\nconst Greeting = memo(function Greeting({ name }) {\n  console.log('Greeting rendered');\n  return <h2>Hello, {name}!</h2>;\n});\n\nfunction App() {\n  const [name, setName] = useState('Alice');\n  const [address, setAddress] = useState('');\n  return (\n    <>\n      <input value={name} onChange={e => setName(e.target.value)} />\n      <input value={address} onChange={e => setAddress(e.target.value)} />\n      <Greeting name={name} />\n    </>\n  );\n}",
    preview: { type: "code", content: ["HOC", "Prevents Re-renders"] },
    category: "advanced",
    level: "advanced",
    color: "#c5e6ff"
  },
  {
    id: 11,
    tag: "Portals",
    title: "React Portals",
    description: "React Portals resolve a persistent challenge in UI development: rendering a component visually 'outside' its parent container while still maintaining its place in the React component tree. This is absolutely essential for overlapping elements like global modals, dropdown menus, and tooltips which would otherwise be clipped or obscured by a parent container's `overflow: hidden` styling or specific z-index stacking hierarchies.",
    example: "import { createPortal } from 'react-dom';\n\nfunction Modal({ children, isOpen }) {\n  if (!isOpen) return null;\n  \n  return createPortal(\n    <div className=\"modal-overlay\">\n      <div className=\"modal-content\">\n        {children}\n      </div>\n    </div>,\n    document.body // Target container\n  );\n}",
    preview: { type: "code", content: ["Modals & Tooltips", "DOM escaping"] },
    category: "advanced",
    level: "advanced",
    color: "#c5e6ff"
  },
  {
    id: 12,
    tag: "ErrorBoundary",
    title: "Error Boundaries",
    description: "An Error Boundary is a specialized class component that acts as a safety net for your entire application. By implementing the `componentDidCatch` lifecycle method, it can catch fatal JavaScript errors anywhere in its child component tree, log them for developers, and gracefully display a 'fallback UI' instead of letting the entire page crash and go blank. This ensures a professional and resilient user experience even when unexpected edge-case errors occur.",
    example: "import React from 'react';\n\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    console.error('Error caught:', error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h1>Something went wrong.</h1>;\n    }\n    return this.props.children; \n  }\n}",
    preview: { type: "code", content: ["Class Component", "Graceful failures"] },
    category: "advanced",
    level: "advanced",
    color: "#c5e6ff"
  },
  {
    id: 13,
    tag: "Suspense",
    title: "Suspense & React.lazy",
    description: "React `Suspense` coupled with `React.lazy` enables 'code-splitting'—the ability to break your colossal application bundle into tiny, bite-sized pieces that only load when specifically requested. This results in dramatically faster initial page loads. While a lazy-loaded component is being downloaded over the network, `Suspense` allows you to define a 'fallback' UI (like a loading spinner or skeleton screen) to keep the user informed and engaged during the transit.",
    example: "import { Suspense, lazy } from 'react';\n\n// Component is loaded only when needed\nconst HeavyChart = lazy(() => import('./HeavyChart'));\n\nfunction Dashboard() {\n  return (\n    <div>\n      <h2>Analytics</h2>\n      <Suspense fallback={<div>Loading chart...</div>}>\n        <HeavyChart />\n      </Suspense>\n    </div>\n  );\n}",
    preview: { type: "code", content: ["Code-splitting", "Loading states"] },
    category: "advanced",
    level: "advanced",
    color: "#c5e6ff"
  },
  {
    id: 14,
    tag: "RouterSetup",
    title: "React Router Setup",
    description: "React Router is the standard library for implementing client-side routing in single-page applications (SPAs). It allows you to synchronize the browser URL with your interface state without triggering a full page reload. By wrapping your entire application in a `BrowserRouter` and defining `Routes`, you can easily map specific URL paths to different components, enabling a fluid multi-page navigation experience that feels identical to traditional websites but with superior speed.",
    example: "import { BrowserRouter, Routes, Route } from 'react-router-dom';\nimport Home from './Home';\nimport About from './About';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/about\" element={<About />} />\n        <Route path=\"*\" element={<div>404 Not Found</div>} />\n      </Routes>\n    </BrowserRouter>\n  );\n}",
    preview: { type: "code", content: ["Client-side Routing", "BrowserRouter"] },
    category: "routing",
    level: "intermediate",
    color: "#c5e6ff"
  },
  {
    id: 15,
    tag: "useNavigate",
    title: "useNavigate & Link",
    description: "To move users between different pages in an SPA, React Router provides two primary tools. The `<Link>` component acts like a traditional `<a>` tag but prevents the browser from reloading. For situations where you need to navigate automatically after a piece of logic completes (like redirecting a user to the dashboard after a successful login), the `useNavigate` Hook provides a programmable function to steer the browser URL dynamically through JavaScript.",
    example: "import { Link, useNavigate } from 'react-router-dom';\n\nfunction Navigation() {\n  const navigate = useNavigate();\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    // Do work, then redirect\n    navigate('/dashboard');\n  };\n\n  return (\n    <nav>\n      {/* Declarative Navigation */}\n      <Link to=\"/\">Home</Link>\n      <Link to=\"/about\">About</Link>\n\n      {/* Programmatic Navigation */}\n      <button onClick={handleSubmit}>Login</button>\n    </nav>\n  );\n}",
    preview: { type: "code", content: ["SPA links", "Programmatic nav"] },
    category: "routing",
    level: "intermediate",
    color: "#c5e6ff"
  },
  {
    id: 16,
    tag: "Zustand",
    title: "Zustand (State)",
    description: "Zustand is a lightweight, modern state management library that provides a significantly simpler alternative to Redux. It uses a clean, hook-based API that eliminates nearly all boilerplate code. By creating a 'store' that lives outside your components, you can share state globally across your entire application effortlessly. Its focus on performance and simplicity has made it a favorite for developers who need powerful global state without the complexity of traditional flux architectures.",
    example: "import { create } from 'zustand';\n\nconst useStore = create((set) => ({\n  bears: 0,\n  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),\n  removeAllBears: () => set({ bears: 0 }),\n}));\n\nfunction BearCounter() {\n  const bears = useStore((state) => state.bears);\n  return <h1>{bears} around here ...</h1>;\n}\n\nfunction Controls() {\n  const increasePopulation = useStore((state) => state.increasePopulation);\n  return <button onClick={increasePopulation}>Add Bear</button>;\n}",
    preview: { type: "code", content: ["Global state", "No boilerplate"] },
    category: "state",
    level: "intermediate",
    color: "#c5e6ff"
  },
  {
    id: 17,
    tag: "JSX Deep Dive",
    title: "JSX & Expressions",
    description: "JSX is a sophisticated syntax extension for JavaScript that looks like HTML but possesses the full power of JavaScript logic. Inside JSX, you can embed any valid JavaScript expression—including variables, mathematical calculations, and function calls—by simply wrapping them in curly braces `{}`. This enables you to craft dynamic UIs where the structure itself responds and adapts to underlying data models in real-time, forming the core expressive power behind React.",
    example: "function App() {\n  const name = 'Josh Perez';\n  const element = <h1>Hello, {name}</h1>;\n  \n  return (\n    <div>\n      {element}\n      <p>2 + 2 = {2 + 2}</p>\n      <p>{name.toUpperCase()}</p>\n    </div>\n  );\n}",
    preview: { type: "code", content: ["Syntax Extension", "JS Expressions"] },
    category: "basics",
    level: "beginner",
    color: "#c5e6ff"
  },
  {
    id: 18,
    tag: "Conditional",
    title: "Conditional Rendering",
    description: "Conditional rendering is the ability to show or hide parts of your UI based on whether certain conditions are met. Common patterns include using the 'Logical &&' operator to show something only when a condition is true, or the 'Ternary' operator (`condition ? true : false`) to toggle between two distinct UI states, such as displaying a 'Login' button for visitors and a 'Dashboard' link for authenticated users.",
    example: "function App({ isLoggedIn }) {\n  return (\n    <div>\n      {/* Logical && */}\n      {isLoggedIn && <Dashboard />}\n      \n      {/* Ternary Operator */}\n      {isLoggedIn ? <LogoutButton /> : <LoginButton />}\n    </div>\n  );\n}",
    preview: { type: "code", content: ["Logical &&", "Ternary Operators"] },
    category: "basics",
    level: "beginner",
    color: "#c5e6ff"
  },
  {
    id: 19,
    tag: "Lists",
    title: "Lists & Keys",
    description: "React makes it easy to render collections of data into visible lists using the standard JavaScript `.map()` method. However, when rendering lists, you must provide a unique 'key' prop to each item. Keys act as a stable identity marker that allows React's reconciliation engine to intelligently determine exactly which items in a huge list have been added, removed, or moved, preventing costly and unnecessary full-list re-renders for a performant experience.",
    example: "function NumberList({ numbers }) {\n  const listItems = numbers.map((number) =>\n    <li key={number.toString()}>\n      Item: {number}\n    </li>\n  );\n  return (\n    <ul>{listItems}</ul>\n  );\n}",
    preview: { type: "code", content: [".map() method", "Unique Keys"] },
    category: "basics",
    level: "beginner",
    color: "#c5e6ff"
  },
  {
    id: 20,
    tag: "Events",
    title: "Events & Forms",
    description: "Handling user events in React—like clicks, keystrokes, and form submissions—is very similar to standard DOM events but uses 'camelCase' naming (e.g., `onClick` and `onSubmit`) instead of lowercase. React typically manages form inputs through 'Controlled Components,' where the input's current value is tied directly to a React state variable. This provides a 'Single Source of Truth' for your data, allowing you to validate or modify user input instantaneously as they type.",
    example: "function Form() {\n  const [value, setValue] = useState('');\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    alert('Submitted: ' + value);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input \n        type=\"text\" \n        value={value} \n        onChange={(e) => setValue(e.target.value)} \n      />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}",
    preview: { type: "code", content: ["camelCase events", "Controlled Inputs"] },
    category: "basics",
    level: "beginner",
    color: "#c5e6ff"
  },
  {
    id: 21,
    tag: "useEffect",
    title: "useEffect Cleanup",
    description: "Many side effects—especially those involving global timers, window event listeners, or network subscriptions—require a 'cleanup function' to prevent memory leaks and unpredictable behavior. By returning a function from your `useEffect`, React guarantees it will run that cleanup logic automatically before the component unmounts or before the effect re-runs due to a dependency change, keeping your application's resource usage lean and efficient.",
    example: "import { useState, useEffect } from 'react';\n\nfunction FriendStatus({ friendId }) {\n  const [isOnline, setIsOnline] = useState(null);\n\n  useEffect(() => {\n    function handleStatusChange(status) {\n      setIsOnline(status.isOnline);\n    }\n    \n    ChatAPI.subscribe(friendId, handleStatusChange);\n    \n    // Cleanup function runs on unmount or before re-running\n    return () => {\n      ChatAPI.unsubscribe(friendId, handleStatusChange);\n    };\n  }, [friendId]); // Re-run if friendId changes\n\n  return isOnline ? 'Online' : 'Offline';\n}",
    preview: { type: "code", content: ["Memory Leaks", "Subscriptions"] },
    category: "hooks",
    level: "intermediate",
    color: "#c5e6ff"
  },
  {
    id: 22,
    tag: "useLayoutEffect",
    title: "useLayoutEffect",
    description: "While `useEffect` runs asynchronously after the browser paints the screen, `useLayoutEffect` fires synchronously immediately after all DOM mutations but *before* the browser paints. This makes it the only reliable choice for logic that needs to measure the geometry of a DOM element (like its width or position) and then update state based on those measurements, ensuring the user never sees a flickering jump in the layout.",
    example: "import { useLayoutEffect, useState, useRef } from 'react';\n\nfunction Tooltip({ children, tooltipText }) {\n  const [width, setWidth] = useState(0);\n  const ref = useRef(null);\n\n  useLayoutEffect(() => {\n    // Measure the DOM element immediately after it's attached\n    setWidth(ref.current.getBoundingClientRect().width);\n  }, []);\n\n  return (\n    <div ref={ref}>\n      {children}\n      <i>Tooltip width: {width}px</i>\n    </div>\n  );\n}",
    preview: { type: "code", content: ["Synchronous", "DOM Measurements"] },
    category: "hooks",
    level: "advanced",
    color: "#c5e6ff"
  },
  {
    id: 23,
    tag: "RenderProps",
    title: "Render Props",
    description: "A Render Prop is a sophisticated design pattern where a component receives a function as a prop and calls that function to determine what to render. This allows you to encapsulate complex logic—like tracking the mouse position or handling heavy data fetching—in a single component while delegating the actual UI display to the consumer, fostering extreme flexibility and code reusability across your entire project.",
    example: "class MouseTracker extends React.Component {\n  state = { x: 0, y: 0 };\n  \n  handleMouseMove = (e) => {\n    this.setState({ x: e.clientX, y: e.clientY });\n  }\n  \n  render() {\n    return (\n      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>\n        {/* Call the render function prop */}\n        {this.props.render(this.state)}\n      </div>\n    );\n  }\n}\n\n// Usage:\n<MouseTracker render={(mouse) => (\n  <Cat mouse={mouse} />\n)} />",
    preview: { type: "code", content: ["Pattern", "Function as child"] },
    category: "advanced",
    level: "advanced",
    color: "#c5e6ff"
  },
  {
    id: 24,
    tag: "HOC",
    title: "Higher Order Components",
    description: "A Higher-Order Component (HOC) is a powerful pattern where a function takes a component as an argument and returns a bolstered, enhanced version of that component. Similar to a 'wrapper,' HOCs allow you to inject shared logic—like data fetching, role-based access control, or logging—into any component globally without modifying the component's internal code, serving as a primary tool for large-scale cross-cutting concerns in React architectures.",
    example: "function withSubscription(WrappedComponent, selectData) {\n  return function(props) {\n    const [data, setData] = useState(selectData(DataSource, props));\n    \n    useEffect(() => {\n      const handleChange = () => setData(selectData(DataSource, props));\n      DataSource.addChangeListener(handleChange);\n      return () => DataSource.removeChangeListener(handleChange);\n    }, [props]);\n    \n    return <WrappedComponent data={data} {...props} />;\n  }\n}\n\n// Usage\nconst CommentListWithSubscription = withSubscription(CommentList, (ds) => ds.getComments());",
    preview: { type: "code", content: ["Wrapper logic", "Component factory"] },
    category: "advanced",
    level: "advanced",
    color: "#c5e6ff"
  }
];

export const reactCategories = [
  { id: 'all', name: 'All Lessons', color: '#94a3b8' },
  { id: 'basics', name: 'React Basics', color: '#c5e6ff' },
  { id: 'hooks', name: 'Hooks', color: '#ffb7c5' },
  { id: 'state', name: 'State Management', color: '#d2b7ff' },
  { id: 'routing', name: 'Routing', color: '#b7ffca' },
  { id: 'advanced', name: 'Advanced Patterns', color: '#475569' }
];
