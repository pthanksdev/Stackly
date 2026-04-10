import { 
  FiFileText, FiBox, FiAlertCircle, FiTrendingUp, 
  FiDatabase, FiCloud, FiImage, FiUsers, 
  FiShield, FiBookOpen, FiZap, FiTarget, FiMessageSquare 
} from "react-icons/fi";
import React from 'react';

export interface PromptTemplate {
  icon: React.ReactNode;
  title: string;
  desc: string;
  id: string;
  content: string;
}

export interface AdvancedTechnique {
  icon: React.ReactNode;
  title: string;
  desc: string;
  usage: string;
  benefit: string;
}

export interface PracticeExercise {
  id: number;
  title: string;
  vague: string;
  optimized: string;
  explanation: string;
}

export const promptTemplates: PromptTemplate[] = [
  {
    icon: React.createElement(FiFileText, { className: "text-2xl" }),
    title: "Full Feature Request",
    desc: "Complete template for requesting complex features or entire applications.",
    id: "template-full",
    content: `I'm building [PROJECT TYPE] for [TARGET AUDIENCE].

TECH STACK:
- Frontend: [Framework + version]
- Styling: [CSS framework]
- Backend: [API/Server solution]
- Database: [Database + ORM]
- Authentication: [Auth solution]

REQUIREMENTS:
1. [Feature 1 with acceptance criteria]
2. [Feature 2 with acceptance criteria]
3. [Feature 3 with acceptance criteria]

CONSTRAINTS:
- [What to avoid]
- [Performance requirements]
- [Security requirements]

DELIVERABLES:
- [File 1.tsx]
- [File 2.ts]
- [File 3.test.ts]
- [README.md with setup instructions]

PREFERRED PATTERNS:
- [Specific architectural pattern]
- [Folder structure]
- [Naming conventions]`,
  },
  {
    icon: React.createElement(FiBox, { className: "text-2xl" }),
    title: "Component Generation",
    desc: "Template for creating specific UI components with all requirements.",
    id: "template-component",
    content: `COMPONENT: [Component Name]
PURPOSE: [What it does in the app hierarchy]

PROPS INTERFACE:
{
  variant: 'primary' | 'secondary' | 'danger'
  size: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  onClick: () => void
  children: React.ReactNode
}

FEATURES NEEDED:
- [ ] Accessibility compliant
- [ ] Dark mode support
- [ ] RTL language support
- [ ] Unit tests
- [ ] Storybook documentation

STYLING REQUIREMENTS:
- Use Tailwind with @apply directives
- Hover/focus states
- Transition animations
- Responsive breakpoints

EXAMPLE USAGE:
<Button variant="primary" size="lg" onClick={handleClick}>
  Submit Form
</Button>`,
  },
  {
    icon: React.createElement(FiAlertCircle, { className: "text-2xl" }),
    title: "Bug Fix / Refactor",
    desc: "Template for fixing issues or refactoring existing code.",
    id: "template-bugfix",
    content: `FILE: /components/UserProfile.tsx
PROBLEM: Component re-renders 5x on every keystroke

CURRENT ISSUES:
1. useEffect dependency array causing infinite loops
2. Props drilling causing unnecessary re-renders
3. No React.memo or useMemo optimization

REQUIREMENTS:
- Reduce re-renders to only when user data changes
- Implement proper memoization
- Split into smaller components
- Add performance monitoring comments

DO NOT:
- Change the API interface
- Remove any existing features
- Break TypeScript types`,
  },
  {
    icon: React.createElement(FiTrendingUp, { className: "text-2xl" }),
    title: "Marketing Copywriter",
    desc: "High-conversion copy for landing pages and email campaigns.",
    id: "template-marketing",
    content: `ROLE: Senior Direct Response Copywriter
PRODUCT: [Product Name] - [Short Description]
AUDIENCE: [Specific Target Audience]

GOAL: Write a [Landing Page / Email / Ad] that drives [Specific Action]

TONE: [Professional / Playful / Provocative / Empathetic]

STRUCTURE:
1. Hook: [Problem/Benefit driven]
2. Problem: [Agitate the pain points]
3. Solution: [How product solves it]
4. Proof: [Testimonials/Data style]
5. Offer: [Clear value proposition]
6. CTA: [High urgency command]

CONSTRAINTS:
- Use short, punchy sentences
- Avoid corporate jargon
- Focus on benefits, not features`,
  },
  {
    icon: React.createElement(FiDatabase, { className: "text-2xl" }),
    title: "Data Scientist / Analyst",
    desc: "Complex data transformation and analysis prompts.",
    id: "template-data",
    content: `DATASET DESCRIPTION: [Table structure/Schema]
OBJECTIVE: [What you need to find out]

TASKS:
1. Write a SQL query to [Specific transformation]
2. Explain the logic behind the joins used
3. Suggest 3 visualizations that would best represent this data
4. Write a Python script using pandas to handle [Edge case/Outlier]

OUTPUT FORMAT:
- SQL block
- Bulleted explanation
- Python block
- Markdown table of expected results`,
  },
  {
    icon: React.createElement(FiCloud, { className: "text-2xl" }),
    title: "DevOps / Infrastructure",
    desc: "Docker, Kubernetes, and Cloud Deployment templates.",
    id: "template-devops",
    content: `ENVIRONMENT: [AWS/GCP/Azure/Local]
TECH: [Next.js, Node.js, Postgres, Redis]

REQUIREMENT: Create a Docker-compose setup for local development and a Dockerfile for production.

CONSTRAINTS:
- Multistage build for production Dockerfile
- Non-root user for security
- Proper caching of node_modules
- Healthcheck included
- Environment variables passed from .env file

ADDITIONALLY: Provide a GitHub Actions workflow for CI/CD to [Platform Name].`,
  },
  {
    icon: React.createElement(FiImage, { className: "text-2xl" }),
    title: "AI Image Generation",
    desc: "Master prompts for Midjourney, DALL-E, and Stable Diffusion.",
    id: "template-image",
    content: `SUBJECT: [Description of the main focus]
STYLE: [Oil painting / 3D render / Cinematic photo / Minimalist vector]
LIGHTING: [Golden hour / Volumetric / Cyberpunk neon / Soft studio]
COMPOSITION: [Wide angle / Close-up / Rule of thirds / Bird's eye view]

TECHNICAL PARAMS:
- Resolution: [High quality / 8k / Photorealistic]
- Artist Inspiration: [Optional: e.g., Wes Anderson, Syd Mead]
- Color Palette: [Vibrant / Monochromatic / Earthy tones]

NEGATIVE PROMPT:
- Avoid: [Low resolution, blurry, distorted hands, text, watermarks]`,
  },
  {
    icon: React.createElement(FiUsers, { className: "text-2xl" }),
    title: "Product Manager (PRD)",
    desc: "Generate comprehensive Product Requirement Documents & User Stories.",
    id: "template-pm",
    content: `FEATURE NAME: [Name]
CONTEXT: [Why are we building this? What problem does it solve?]

USER STORIES:
- As a [User Role], I want to [Action], so that [Value/Goal]

FUNCTIONAL REQUIREMENTS:
1. [Requirement A]
2. [Requirement B]
3. [Requirement C]

NON-FUNCTIONAL REQUIREMENTS:
- Performance: [e.g., Load in < 200ms]
- Security: [e.g., GDPR compliant]

SUCCESS METRICS:
- [Metric 1: e.g., Conversion rate]
- [Metric 2: e.g., User retention]`,
  },
  {
    icon: React.createElement(FiShield, { className: "text-2xl" }),
    title: "Security Audit",
    desc: "Analyze code for vulnerabilities and security best practices.",
    id: "template-security",
    content: `CODE SNIPPET:
[Paste Code Here]

OBJECTIVE: Perform a comprehensive security audit of this code.

CHECKLIST:
1. Identify any potential Injection vulnerabilities (SQL, NoSQL, XSS)
2. Check for broken authentication or session management
3. Identify exposure of sensitive data (PII, secrets, keys)
4. Check for insecure direct object references (IDOR)
5. Evaluate error handling and logging (leaking info?)

OUTPUT:
- List of vulnerabilities with severity (High/Med/Low)
- Remediation steps for each issue
- Secure version of the code snippet`,
  },
  {
    icon: React.createElement(FiBookOpen, { className: "text-2xl" }),
    title: "Socratic Tutor",
    desc: "Learn complex topics through guided discovery and questioning.",
    id: "template-tutor",
    content: `TOPIC: [e.g., Quantum Entanglement / Recursion / Macroeconomics]
CURRENT KNOWLEDGE LEVEL: [Beginner / Intermediate / Advanced]

INSTRUCTIONS:
- Do not give me the answer immediately.
- Act as a Socratic tutor.
- Ask me probing questions to help me arrive at the solution myself.
- Provide hints if I get stuck.
- Use analogies relevant to my interests: [Optional: e.g., Gaming, Cooking, Sports].

GOAL: Deep conceptual understanding of [Specific Sub-topic].`,
  },
];

export const advancedTechniques: AdvancedTechnique[] = [
  {
    icon: React.createElement(FiZap, { className: "text-blue-500" }),
    title: "Chain-of-Thought (CoT)",
    desc: "Force the AI to think step-by-step before providing a final answer.",
    usage: 'Add "Let\'s think step by step" or "Explain your reasoning at each stage" to your prompt.',
    benefit: "Critical for complex logic, math, or architectural decisions.",
  },
  {
    icon: React.createElement(FiTarget, { className: "text-red-500" }),
    title: "Few-Shot Prompting",
    desc: "Provide 2-3 examples of the desired input/output mapping.",
    usage: "Input: 'Hello' -> Output: 'Greeting'\nInput: 'How are you?' -> Output: 'Inquiry'\nInput: [New Input] -> Output:",
    benefit: "Perfect for ensuring strict adherence to style and format.",
  },
  {
    icon: React.createElement(FiMessageSquare, { className: "text-green-500" }),
    title: "Persona Adoption",
    desc: "Tell the AI exactly who they should be.",
    usage: '"Act as a Senior Research Engineer at a FAANG company with 15 years experience in..."',
    benefit: "Changes the tone and technical depth of the response significantly.",
  },
  {
    icon: React.createElement(FiTrendingUp, { className: "text-purple-500" }),
    title: "Iterative Refinement",
    desc: "Use the previous output as context for the next prompt.",
    usage: '"That was good, but now refactor it to use hooks instead of classes and add..."',
    benefit: "Allows you to build complex systems one layer at a time.",
  },
];

export const practiceExercises: PracticeExercise[] = [
  {
    id: 1,
    title: "The Simple Request",
    vague: '"Build a blog"',
    optimized: `Create a Next.js 14 blog with:
- App Router structure
- MDX for blog posts with code syntax highlighting
- Dark/light mode toggle
- SEO-optimized meta tags
- Prisma with SQLite for comments
- Vercel deployment config
- TypeScript interfaces for all data

Folder structure:
/app/(blog)/[slug]/page.tsx
/components/BlogCard.tsx
/lib/mdx.ts
/prisma/schema.prisma

Constraints:
- No external CMS, filesystem-based
- Use server components where possible
- Implement OG image generation`,
    explanation: "The optimized version provides clear direction, specific requirements, and constraints that guide the AI to produce exactly what you need.",
  },
  {
    id: 2,
    title: "Feature Request",
    vague: '"Add search to my app"',
    optimized: `Implement a search feature for a React application using:
- Fuse.js for client-side fuzzy searching
- A search input component with debounce (300ms)
- Highlighted matching text in results
- Keyboard shortcuts (Cmd+K to focus)
- Results grouped by category (Users, Posts, Settings)

Context:
- We have an array of 500+ items in local state
- Tailwind CSS for styling

Constraints:
- Do NOT make API calls for searching (local only)
- Must be accessible (ARIA labels, keyboard nav)
- Mobile-friendly overlay on small screens`,
    explanation: "Including the specific library (Fuse.js) and UX details like debouncing and keyboard shortcuts saves time and ensures a premium feel.",
  },
  {
    id: 3,
    title: "Bug Fix",
    vague: '"Fix this error: undefined is not an object"',
    optimized: `Debug and fix a 'TypeError: undefined is not an object' in a React component's useEffect.

Current Code:
useEffect(() => {
  const fetchData = async () => {
    const res = await fetch('/api/user');
    const data = await res.json();
    setUserData(data.profile.name); // Error happens here
  };
  fetchData();
}, []);

Requirements:
1. Add proper null checks/optional chaining
2. Implement an AbortController for cleaning up the fetch
3. Handle loading and error states properly
4. Add TypeScript types for the API response

Context:
- Next.js 14 environment
- The API might return 404 if the user isn't logged in`,
    explanation: "Providing the code snippet and the likely cause (Next.js environment, async fetch) helps the AI narrow down the fix and provide best practices like AbortController.",
  },
];
