export interface TailwindLesson {
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
  category: "basics" | "layout" | "typography" | "spacing" | "advanced" | "components";
  level: "beginner" | "intermediate" | "advanced";
  color: string;
}

export const tailwindLessons: TailwindLesson[] = [
  {
    id: 1,
    tag: "Utility-First",
    title: "Utility-First Fundamentals",
    description: "Build complex components from a constrained set of primitive utilities.",
    example: "<div class=\"p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4\">\n  <div class=\"shrink-0\">\n    <img class=\"h-12 w-12\" src=\"/img/logo.svg\" alt=\"Logo\">\n  </div>\n  <div>\n    <div class=\"text-xl font-medium text-black\">ChitChat</div>\n    <p class=\"text-slate-500\">You have a new message!</p>\n  </div>\n</div>",
    preview: { type: "code", content: ["Utility classes", "No custom CSS"] },
    category: "basics",
    level: "beginner",
    color: "#b7ffca"
  },
  {
    id: 2,
    tag: "Colors",
    title: "Color Palette & Backgrounds",
    description: "Using Tailwind's default color palette for text, backgrounds, and borders.",
    example: "<button class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\">\n  Submit\n</button>\n\n<p class=\"text-emerald-500 bg-emerald-50 border border-emerald-200\">\n  Success message\n</p>",
    preview: { type: "code", content: ["bg-{color}", "text-{color}"] },
    category: "basics",
    level: "beginner",
    color: "#b7ffca"
  },
  {
    id: 3,
    tag: "Spacing",
    title: "Margin & Padding",
    description: "Control the spacing of elements using p, pl, pr, pt, pb, px, py and equivalent m classes for margin.",
    example: "<div class=\"mt-4 mb-8\">\n  <div class=\"px-4 py-2 bg-gray-100\">Padding X/Y</div>\n  <div class=\"pt-4 pb-2 bg-gray-200\">Padding Top/Bottom</div>\n  <div class=\"ml-auto bg-gray-300 w-1/2\">Margin Left Auto</div>\n</div>",
    preview: { type: "code", content: ["p/m utilities", "Responsive spacing"] },
    category: "spacing",
    level: "beginner",
    color: "#b7ffca"
  },
  {
    id: 4,
    tag: "Typography",
    title: "Typography Utilities",
    description: "Control font family, size, weight, alignment, and tracking.",
    example: "<h1 class=\"text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl\">\n  Hello World\n</h1>\n<p class=\"text-base text-gray-500 text-center leading-relaxed font-serif\">\n  This is a paragraph with serif font, centered text, and relaxed line height.\n</p>",
    preview: { type: "code", content: ["text-{size}", "font-{weight}"] },
    category: "typography",
    level: "beginner",
    color: "#b7ffca"
  },
  {
    id: 5,
    tag: "Flexbox",
    title: "Flexbox Layouts",
    description: "Use flexbox utilities to create 1D layouts easily.",
    example: "<div class=\"flex flex-row md:flex-col justify-between items-center gap-4\">\n  <div class=\"flex-1 bg-red-100 p-4\">Item 1 (grows)</div>\n  <div class=\"shrink-0 bg-blue-100 p-4\">Item 2 (fixed)</div>\n  <div class=\"flex-none bg-green-100 p-4\">Item 3</div>\n</div>",
    preview: { type: "code", content: ["flex", "justify-*", "items-*"] },
    category: "layout",
    level: "intermediate",
    color: "#b7ffca"
  },
  {
    id: 6,
    tag: "Grid",
    title: "CSS Grid",
    description: "Create complex 2D layouts using CSS Grid utilities directly in your markup.",
    example: "<div class=\"grid grid-cols-1 md:grid-cols-3 gap-4\">\n  <div class=\"col-span-2 bg-purple-100 p-4\">Spans 2 columns</div>\n  <div class=\"bg-purple-200 p-4\">1 column</div>\n  <div class=\"row-span-2 bg-purple-300 p-4\">Spans 2 rows</div>\n  <div class=\"col-span-2 bg-purple-400 p-4\">Footer</div>\n</div>",
    preview: { type: "code", content: ["grid-cols-{n}", "gap-{size}"] },
    category: "layout",
    level: "intermediate",
    color: "#b7ffca"
  },
  {
    id: 7,
    tag: "Responsive",
    title: "Responsive Design",
    description: "Mobile-first approach using sm:, md:, lg:, xl:, and 2xl: modifiers.",
    example: "<div class=\"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-indigo-500 rounded p-4\">\n  <h3 class=\"text-white text-sm md:text-lg lg:text-xl\">\n    Responsive Box\n  </h3>\n</div>",
    preview: { type: "code", content: ["md:", "lg:", "Mobile First"] },
    category: "layout",
    level: "intermediate",
    color: "#b7ffca"
  },
  {
    id: 8,
    tag: "States",
    title: "Hover, Focus, & Other States",
    description: "Apply styles on hover, focus, active, group-hover, and disabled states.",
    example: "<button class=\"group relative inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50\">\n  Submit\n  <svg class=\"group-hover:translate-x-1 transition-transform ml-2 h-5 w-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n    <!-- Arrow -->\n  </svg>\n</button>",
    preview: { type: "code", content: ["hover:", "focus:", "group-hover:"] },
    category: "basics",
    level: "intermediate",
    color: "#b7ffca"
  },
  {
    id: 9,
    tag: "Transitions",
    title: "Transitions & Animation",
    description: "Add smooth transitions and simple animations (spin, pulse, ping, bounce).",
    example: "<div class=\"flex space-x-6\">\n  <button class=\"transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500 text-white p-3 rounded\">\n    Hover me\n  </button>\n  <div class=\"animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900\"></div>\n  <div class=\"animate-pulse bg-gray-200 h-12 w-24 rounded\"></div>\n</div>",
    preview: { type: "code", content: ["transition", "animate-spin"] },
    category: "advanced",
    level: "intermediate",
    color: "#b7ffca"
  },
  {
    id: 10,
    tag: "Dark Mode",
    title: "Dark Mode Setup",
    description: "Styling your site for Dark Mode using the dark: modifier.",
    example: "<div class=\"bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl\">\n  <div>\n    <h3 class=\"text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight\">Writes Upside-Down</h3>\n    <p class=\"text-slate-500 dark:text-slate-400 mt-2 text-sm\">\n      The Zero Gravity Pen can be used to write in any orientation, including upside-down.\n    </p>\n  </div>\n</div>",
    preview: { type: "code", content: ["dark:", "Theme toggling"] },
    category: "advanced",
    level: "advanced",
    color: "#b7ffca"
  },
  {
    id: 11,
    tag: "Config",
    title: "Tailwind Configuration",
    description: "Extending the default theme, adding colors,, and creating custom utilities in tailwind.config.js.",
    example: "module.exports = {\n  theme: {\n    extend: {\n      colors: {\n        'brand-blue': '#1da1f2',\n      },\n      spacing: {\n        '128': '32rem',\n      }\n    }\n  }\n}\n\n// Usage in HTML:\n// <div class=\"bg-brand-blue w-128\">Custom configured</div>",
    preview: { type: "code", content: ["tailwind.config.js", "extend theme"] },
    category: "advanced",
    level: "advanced",
    color: "#b7ffca"
  },
  {
    id: 12,
    tag: "@apply",
    title: "Reusing Styles with @apply",
    description: "Extracting complex repetitive utility patterns into custom CSS classes.",
    example: "/* In your globals.css */\n@layer components {\n  .btn-primary {\n    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;\n  }\n}\n\n<!-- In HTML -->\n<button class=\"btn-primary\">Click Me</button>",
    preview: { type: "code", content: ["@apply", "@layer components"] },
    category: "components",
    level: "intermediate",
    color: "#b7ffca"
  },
  {
    id: 13,
    tag: "Arbitrary",
    title: "Arbitrary Values (JIT)",
    description: "Using square brackets to generate utilities on the fly without touching your config file.",
    example: "<div class=\"bg-[#1da1f2] text-[14px] p-[2.5rem] mt-[17px] top-[117px] lg:top-[344px]\">\n  Arbitrary values using the JIT compiler!\n</div>\n\n<div class=\"grid grid-cols-[1fr_500px_2fr]\">\n  <!-- Columns: dynamic, 500px fixed, dynamic double -->\n</div>",
    preview: { type: "code", content: ["bg-[#hex]", "w-[500px]"] },
    category: "advanced",
    level: "advanced",
    color: "#b7ffca"
  },
  {
    id: 14,
    tag: "Pseudo",
    title: "Advanced Pseudo-Classes",
    description: "Using modifiers like first:, last:, odd:, even:, required:, invalid:, etc.",
    example: "<ul class=\"bg-white rounded-lg shadow divide-y divide-gray-200\">\n  <li class=\"p-4 first:rounded-t-lg last:rounded-b-lg odd:bg-gray-50 even:bg-white\">\n    Item 1\n  </li>\n  <li class=\"p-4 first:rounded-t-lg last:rounded-b-lg odd:bg-gray-50 even:bg-white\">\n    Item 2\n  </li>\n</ul>\n\n<input type=\"email\" class=\"border outline-none focus:border-blue-500 invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500\" />",
    preview: { type: "code", content: ["first/last", "odd/even", "invalid"] },
    category: "advanced",
    level: "intermediate",
    color: "#b7ffca"
  },
  {
    id: 15,
    tag: "Container",
    title: "Container Queries (@container)",
    description: "Apply styles to elements based on the size of their parent container rather than the viewport.",
    example: "<div class=\"@container\">\n  <div class=\"flex flex-col @md:flex-row gap-4 p-4\">\n    <div class=\"bg-sky-200 p-4 rounded\">Item goes reflowed based on @container width, not screen.</div>\n    <div class=\"bg-sky-300 p-4 rounded\">Super useful for reusable components!</div>\n  </div>\n</div>",
    preview: { type: "code", content: ["@container", "@md:", "@lg:"] },
    category: "layout",
    level: "advanced",
    color: "#b7ffca"
  },
  {
    id: 16,
    tag: "Plugins",
    title: "Tailwind Plugins",
    description: "Using official plugins like Typography, Forms, Aspect Ratio, and Container Queries.",
    example: "<!-- Requires @tailwindcss/typography plugin -->\n<article class=\"prose prose-slate lg:prose-xl dark:prose-invert hover:prose-a:text-blue-500\">\n  <h1>Garlic bread with cheese: What the science tells us</h1>\n  <p>For years parents have espoused the health benefits of eating garlic bread with cheese to their children...</p>\n</article>\n\n<!-- Requires @tailwindcss/aspect-ratio -->\n<div class=\"aspect-w-16 aspect-h-9\">\n  <iframe src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" frameborder=\"0\" allowfullscreen></iframe>\n</div>",
    preview: { type: "code", content: ["prose", "aspect-ratio"] },
    category: "advanced",
    level: "advanced",
    color: "#b7ffca"
  }
];

export const tailwindCategories = [
  { id: 'all', name: 'All Lessons', color: '#94a3b8' },
  { id: 'basics', name: 'Fundamentals', color: '#b7ffca' },
  { id: 'spacing', name: 'Spacing & Sizing', color: '#ffb7c5' },
  { id: 'typography', name: 'Typography', color: '#d2b7ff' },
  { id: 'layout', name: 'Layouts (Flex & Grid)', color: '#c5e6ff' },
  { id: 'components', name: 'Component Strategies', color: '#475569' },
  { id: 'advanced', name: 'Advanced CSS', color: '#ffb7c5' }
];
