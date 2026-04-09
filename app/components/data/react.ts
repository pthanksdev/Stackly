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
    description: "The building blocks of React applications. A component is a JavaScript function that returns React elements.",
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
    description: "Inputs to a React component. Data passed from a parent component to a child component.",
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
    description: "Allows functional components to manage local state. Returns a stateful value and a function to update it.",
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
    description: "Lets you perform side effects in functional components, like data fetching, subscriptions, or manually changing the DOM.",
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
    description: "Provides a way to pass data through the component tree without having to pass props down manually at every level.",
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
    description: "Performance optimization hooks. useMemo memoizes a computed value, useCallback memoizes a function.",
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
    description: "Persists values between renders without causing a re-render. Often used to directly access DOM elements.",
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
    description: "An alternative to useState for complex state logic that involves multiple sub-values. Similar to Redux.",
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
    description: "Extract component logic into reusable functions. Custom hooks must start with 'use'.",
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
    description: "A higher order component for performance optimization. Skips re-rendering if props have not changed.",
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
    description: "Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.",
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
    description: "React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.",
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
    description: "Lets you display a fallback until its children have finished loading. Often used with lazy loading components.",
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
    description: "React Router enables client-side routing. Use BrowserRouter to wrap the app and Routes/Route to declare routes.",
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
    description: "Navigate between pages without refreshing the browser using Link for elements, or useNavigate for programmatic navigation.",
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
    description: "A small, fast and scalable bearbones state-management solution using simplified flux principles.",
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
    description: "JSX is a syntax extension for JavaScript. You can embed any JavaScript expression in JSX by wrapping it in curly braces.",
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
    description: "Render different components or elements depending on the state of the application using IF operators or ternary expressions.",
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
    description: "Render multiple components from collections of data. Keys help React identify which items have changed, are added, or are removed.",
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
    description: "Handling events in React is very similar to handling events on DOM elements, but with camelCase syntax.",
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
    description: "Effects that require cleanup (like subscriptions or timers) should return a cleanup function to prevent memory leaks.",
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
    description: "Fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render.",
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
    description: "A technique for sharing code between React components using a prop whose value is a function.",
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
    description: "An advanced technique for reusing component logic. A function that takes a component and returns a new component.",
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
