"use client";

import { motion } from "framer-motion";
import { FiFileText, FiBox, FiAlertCircle, FiCheck, FiCopy, FiTrendingUp, FiDatabase, FiCloud, FiImage, FiUsers, FiShield, FiBookOpen } from "react-icons/fi";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const copyButtonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const templates = [
  {
    icon: <FiFileText className="text-2xl" />,
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
    icon: <FiBox className="text-2xl" />,
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
    icon: <FiAlertCircle className="text-2xl" />,
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
    icon: <FiTrendingUp className="text-2xl" />,
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
    icon: <FiDatabase className="text-2xl" />,
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
    icon: <FiCloud className="text-2xl" />,
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
    icon: <FiImage className="text-2xl" />,
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
    icon: <FiUsers className="text-2xl" />,
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
    icon: <FiShield className="text-2xl" />,
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
    icon: <FiBookOpen className="text-2xl" />,
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

interface TemplatesSectionProps {
  copiedId: string | null;
  copyToClipboard: (text: string, id: string) => void;
}

export default function TemplatesSection({ copiedId, copyToClipboard }: TemplatesSectionProps) {
  return (
    <section id="templates">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-16"
      >
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            variants={fadeInUp}
            className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-gray-100 rounded-full text-gray-700"
          >
            Ready to Use
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black mt-6 mb-6"
          >
            Prompt
            <br />
            <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              Templates
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600">
            Copy-paste these templates and customize for your specific
            needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={template.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-lg hover:border-gray-300 transition-all"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                  {template.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {template.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  {template.desc}
                </p>
                <motion.button
                  variants={copyButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() =>
                    copyToClipboard(template.content, template.id)
                  }
                  className="w-full bg-black text-white hover:bg-gray-800 font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  {copiedId === template.id ? (
                    <>
                      <FiCheck /> Copied!
                    </>
                  ) : (
                    <>
                      <FiCopy /> Copy Template
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
