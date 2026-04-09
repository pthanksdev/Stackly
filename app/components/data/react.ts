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
    color: "#61dafb"
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
