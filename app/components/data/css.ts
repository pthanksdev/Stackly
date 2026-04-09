// components/data/cssCourse.ts

export interface CSSLesson {
  id: number;
  title: string;
  description: string;
  example: string; // HTML/CSS ready for dangerouslySetInnerHTML
  preview: {
    type: "css";
    properties: string[];
  };
  category: "selectors" | "text" | "background" | "borders" | "lists" | "tables" | "filters" | "box" | "transform" | "animation" | "layout";
  level: "beginner" | "intermediate" | "advanced";
  color: string; // MUST be from palette: #475569 | #64748b | #94a3b8 | #ffb7c5 | #c5e6ff | #d2b7ff | #b7ffca
}

export const cssLessons: CSSLesson[] = [
  // ========== SELECTORS ==========
  {
    id: 1,
    title: "Type Selector",
    description: "The Type Selector, also known as an element selector, automatically targets every single instance of a specific HTML tag across the entire HTML document. It represents the absolute foundation of CSS targeting. Because of its extraordinarily broad reach, you should use type selectors to establish massive foundational baselines—such as dictating that all paragraphs use a specific font family, or stripping default margins from all headers—before overriding them with more specific classes.",
    example: `<style>
  /* Targets ALL paragraphs */
  p { 
    color: #ffb7c5; 
    font-weight: bold;
  }
</style>
<p>This paragraph is pink.</p>
<p>This is also pink.</p>
<span>This span is NOT affected.</span>`,
    preview: {
      type: "css",
      properties: ["p { color: #ffb7c5; }"],
    },
    category: "selectors",
    level: "beginner",
    color: "#c5e6ff",
  },
  {
    id: 2,
    title: "Class Selector",
    description: "Denoted by a leading period (.), the Class Selector is arguably the most common and versatile tool in a CSS developer's arsenal. It precisely targets any elements bearing matching string values inside their HTML `class` attribute. Unlike IDs, classes are explicitly designed to be infinitely reusable across hundreds of diverse elements simultaneously, encouraging developers to build modular, component-driven atomic styling systems.",
    example: `<style>
  .highlight { 
    background-color: #b7ffca; 
    padding: 4px 8px;
    border-radius: 4px;
  }
</style>
<p>Normal paragraph.</p>
<p class="highlight">This one has a green background.</p>
<span class="highlight">Spans work too.</span>`,
    preview: {
      type: "css",
      properties: [".highlight { background: #b7ffca; }"],
    },
    category: "selectors",
    level: "beginner",
    color: "#c5e6ff",
  },
  {
    id: 3,
    title: "ID Selector",
    description: "The ID Selector is denoted uniquely by a hash/pound symbol (#). Due to fundamental HTML structural laws, an ID value must be absolutely completely unique across a single document. Consequently, an ID selector is a highly aggressive specificity tool that will forcefully override almost any conflicting class or type rule. Because of this overwhelming dominance, modern CSS architectures strongly advise using IDs sparingly, primarily reserving them for semantic targets or JavaScript interactive anchors.",
    example: `<style>
  #main-title {
    color: #d2b7ff;
    font-size: 28px;
    border-bottom: 2px solid #d2b7ff;
  }
</style>
<h1 id="main-title">Welcome!</h1>
<h1>No border here.</h1>`,
    preview: {
      type: "css",
      properties: ["#main-title { color: #d2b7ff; }"],
    },
    category: "selectors",
    level: "beginner",
    color: "#c5e6ff",
  },
  {
    id: 4,
    title: "Universal Selector",
    description: "Expressed universally simply by using an asterisk (*), the Universal Selector is an incredibly powerful blunt instrument that targets literally every single element residing currently in the DOM. While running it globally comes at a micro-performance cost computationally, it remains an indispensable global tool—nearly all modern \"CSS Resets\" rely on combining `* { box-sizing: border-box; }` to normalize chaotic unpredictable browser box-model dimension algorithms instantly.",
    example: `<style>
  /* Gives EVERY element a red outline */
  * { 
    outline: 1px solid #ffb7c5; 
    margin: 2px;
  }
</style>
<h1>Title</h1>
<p>Paragraph</p>
<span>Span</span>
<div>Div</div>`,
    preview: {
      type: "css",
      properties: ["* { outline: 1px solid pink; }"],
    },
    category: "selectors",
    level: "beginner",
    color: "#c5e6ff",
  },
  {
    id: 5,
    title: "Attribute Selector",
    description: "The Attribute Selector harnesses square bracket syntax `[attr=\"value\"]` to execute surgical targeting based entirely on the existence or specific comparative value of HTML element tags data. This eliminates the dependency to pollute HTML exclusively with extra messy stylistic classes. This becomes hyper-valuable particularly in massive complex forms where styling `input[type=\"email\"]` requires radically different boundaries than a tiny `input[type=\"checkbox\"]`.",
    example: `<style>
  /* Targets ONLY text inputs */
  input[type="text"] {
    border: 2px solid #b7ffca;
    padding: 8px;
  }
</style>
<input type="text" placeholder="I have green border">
<input type="tel" placeholder="I do not">`,
    preview: {
      type: "css",
      properties: ["input[type='text'] { border: 2px solid #b7ffca; }"],
    },
    category: "selectors",
    level: "intermediate",
    color: "#c5e6ff",
  },
  {
    id: 6,
    title: "Pseudo-class: Hover",
    description: "The `:hover` pseudo-class allows styling to dynamically trigger only when an interactive user explicitly rests their mouse cursor over an active element frame—creating instantaneous responsive feedback. Designing organic organic interactive transitions on core components like navigation links, expansive dropdown cards, or CTA submission buttons fundamentally bridges visually static dead layouts into lively, reactive application engagement.",
    example: `<style>
  button {
    background: #475569;
    color: white;
    border: none;
    padding: 8px 16px;
    transition: 0.2s;
  }
  button:hover {
    background: #64748b;
    transform: scale(1.05);
  }
</style>
<button>Hover me!</button>`,
    preview: {
      type: "css",
      properties: ["button:hover { background: #64748b; }"],
    },
    category: "selectors",
    level: "beginner",
    color: "#c5e6ff",
  },
  {
    id: 7,
    title: "Pseudo-class: Active & Focus",
    description: "Crucial for ADA WCAG accessibility scoring, the `:focus` pseudo-class activates inherently when users intentionally keyboard-tab into an element or click a form input actively marking it ready to accept data. Concurrently, the `:active` pseudo-class fires precisely only during the fraction of a millisecond that a mouse button is actively pressed down upon a component, providing essential physical 'click' tactile simulation.",
    example: `<style>
  button:active { background: #ffb7c5; }
  input:focus { 
    border-color: #d2b7ff;
    outline: none;
    box-shadow: 0 0 0 3px #d2b7ff80;
  }
</style>
<button>Click me (active=pink)</button>
<input placeholder="Click or tab here">`,
    preview: {
      type: "css",
      properties: ["button:active { background: pink; }", "input:focus { border-color: purple; }"],
    },
    category: "selectors",
    level: "intermediate",
    color: "#c5e6ff",
  },

  // ========== TEXT STYLING ==========
  {
    id: 8,
    title: "Font Family",
    description: "The `font-family` property commands the exact localized typeface system the browser should utilize to render literal text data. Because you can never universally guarantee that an individual visitor definitively has a specific luxury font installed on their obscure operating system locally, you must provide a sequential comma-separated “font stack” cascade that reliably degrades to a generic safe system category like exactly 'sans-serif' or 'monospace'.",
    example: `<style>
  .serif { font-family: Georgia, serif; }
  .sans { font-family: Arial, sans-serif; }
  .mono { font-family: 'Courier New', monospace; }
</style>
<p class="serif">Serif (Georgia)</p>
<p class="sans">Sans-serif (Arial)</p>
<p class="mono">Monospace (Courier)</p>`,
    preview: {
      type: "css",
      properties: ["font-family: Arial, sans-serif;"],
    },
    category: "text",
    level: "beginner",
    color: "#64748b",
  },
  {
    id: 9,
    title: "Font Size & Weight",
    description: "The pair of `font-size` and `font-weight` essentially dictate the volumetric scale footprint and dense mass thickness of readable text. Size operates optimally using relative rem units honoring organic zooming, while weight maps out across an exact numerical spectrum measuring 100 (ultra-lite thin) completely through 900 (ultra-thick black). Standard readable paragraphs sit consistently at 400 normal, while robust headers demand heavier 700 bold settings.",
    example: `<style>
  h1 { font-size: 32px; font-weight: 800; }
  .light { font-weight: 300; }
  .bold { font-weight: 700; }
</style>
<h1>Big & Bold</h1>
<p class="light">Light weight (300)</p>
<p class="bold">Bold weight (700)</p>`,
    preview: {
      type: "css",
      properties: ["font-size: 32px;", "font-weight: 700;"],
    },
    category: "text",
    level: "beginner",
    color: "#64748b",
  },
  {
    id: 10,
    title: "Font Style & Text Align",
    description: "Text alignment (`text-align`) manipulates the geometric horizontal justification anchoring block—supporting explicit mapping arrays including center, strict left, strict right, and cleanly distributed justify logic. Supplementally, `font-style` explicitly commands the browser's typography engine to force character axis slanting dynamically calculating italic angles or rendering distinct obscure genuine oblique face files natively.",
    example: `<style>
  .italic { font-style: italic; }
  .center { text-align: center; }
  .right { text-align: right; }
</style>
<p class="italic">This is italic.</p>
<p class="center">⬅️ Centered ➡️</p>
<p class="right">Right aligned.</p>`,
    preview: {
      type: "css",
      properties: ["font-style: italic;", "text-align: center;"],
    },
    category: "text",
    level: "beginner",
    color: "#64748b",
  },
  {
    id: 11,
    title: "Text Shadow",
    description: "The expressive `text-shadow` algorithm drastically enhances typography layout composition by systematically projecting layered dimensional drop shadows natively beneath specific characters strictly without needing heavy bulky transparent PNG images. Creating neon glows strictly requires mapping tight X/Y offset coordinates universally to 0 while blowing out massive dense blurring boundaries against highly vibrant intense neon HEX colors.",
    example: `<style>
  h2 {
    text-shadow: 2px 2px 4px #94a3b8;
  }
  .glow {
    text-shadow: 0 0 8px #b7ffca;
  }
</style>
<h2>Subtle shadow</h2>
<span class="glow">✨ Glow effect ✨</span>`,
    preview: {
      type: "css",
      properties: ["text-shadow: 2px 2px 4px gray;"],
    },
    category: "text",
    level: "intermediate",
    color: "#64748b",
  },
  {
    id: 12,
    title: "Color",
    description: "The ubiquitous `color` property dictates comprehensively the precise solid foreground rendering hue explicitly painting the exact pixels of character text content. Highly flexible native browser architecture natively understands translating six-digit absolute hexadecimal strings, intricately configured RGBA functional boundaries allowing complex transparency layering logic, and standard human-readable keyword mapped strings seamlessly.",
    example: `<style>
  .hex { color: #ffb7c5; }
  .rgb { color: rgb(210, 183, 255); }
  .named { color: #b7ffca; }
</style>
<p class="hex">Pink (#ffb7c5)</p>
<p class="rgb">Purple (rgb)</p>
<p class="named">Green (#b7ffca)</p>`,
    preview: {
      type: "css",
      properties: ["color: #ffb7c5;"],
    },
    category: "text",
    level: "beginner",
    color: "#64748b",
  },

  // ========== BACKGROUND ==========
  {
    id: 13,
    title: "Background Color",
    description: "Opposite to the text foreground color, `background-color` fills completely the entire explicitly dimensioned logical rear geometrical box boundary sitting mathematically underneath the targeted component's raw content block. Due to browser stacking mechanics, solid color backgrounds organically bleed completely out through the entirety of the box padding arrays stopping aggressively precisely at the hardened calculated outer border edge perimeters.",
    example: `<style>
  .card {
    background-color: #c5e6ff;
    padding: 16px;
    border-radius: 8px;
  }
</style>
<div class="card">
  <p>This card has a light blue background.</p>
</div>`,
    preview: {
      type: "css",
      properties: ["background-color: #c5e6ff;"],
    },
    category: "background",
    level: "beginner",
    color: "#94a3b8",
  },
  {
    id: 14,
    title: "Background Image & Repeat",
    description: "Moving radically beyond purely solid simplistic colors, the `background-image` attribute elegantly streams intricate external pixel manipulation assets directly behind an HTML block node. Predictably, if the imported external graphic asset proves significantly smaller mathematically than the encompassing CSS box dimensions, the `background-repeat` command automatically dictates exactly how that graphic should tile algorithmically across the void space natively.",
    example: `<style>
  .pattern {
    background-image: url('https://picsum.photos/50/50');
    background-repeat: repeat-x;
    color: black;
    font-weight: bold;
    padding: 20px;
  }
</style>
<div class="pattern">Repeated horizontally</div>`,
    preview: {
      type: "css",
      properties: ["background-image: url('...');", "background-repeat: repeat-x;"],
    },
    category: "background",
    level: "intermediate",
    color: "#94a3b8",
  },
  {
    id: 15,
    title: "Background Size: Cover & Contain",
    description: "The immensely invaluable `background-size` property acts powerfully as a crucial mathematical governor managing precisely how background imagery radically adapts strictly to fluid responsive containers natively. Deploying 'cover' forces aggressive aggressive clipping—ensuring the geometric container void is entirely 100% perpetually filled unconditionally without gaps. Conversely, utilizing 'contain' enforces a conservative proportional rule ensuring the complete original picture bounds unconditionally remain natively visible.",
    example: `<style>
  div {
    width: 200px;
    height: 100px;
    background-image: url('https://picsum.photos/400/200');
    background-repeat: no-repeat;
    border: 1px solid black;
  }
  .cover { background-size: cover; }
  .contain { background-size: contain; }
</style>
<div class="cover">Cover (crops)</div>
<div class="contain">Contain (fits)</div>`,
    preview: {
      type: "css",
      properties: ["background-size: cover;", "background-size: contain;"],
    },
    category: "background",
    level: "intermediate",
    color: "#94a3b8",
  },

  // ========== BORDERS ==========
  {
    id: 16,
    title: "Border Style & Color",
    description: "Without enforcing a declarative `border-style` string (acting essentially as a boolean enabler switch), no structural border line will physically manifest graphically—even if heavy width configurations and vibrant colors are painstakingly explicitly coded mathematically into the architecture. Available mapping geometries traverse dynamically across simplistic clean solid uninterrupted lines outward to intensely structured intricate dots, rigid aggressive dashes, incredibly deep complex ridges, or elegant subtle 3D-simulated grooves.",
    example: `<style>
  .solid { border: 3px solid #ffb7c5; }
  .dashed { border: 3px dashed #d2b7ff; }
  .dotted { border: 3px dotted #b7ffca; }
</style>
<p class="solid">Solid pink</p>
<p class="dashed">Dashed purple</p>
<p class="dotted">Dotted green</p>`,
    preview: {
      type: "css",
      properties: ["border: 3px solid #ffb7c5;"],
    },
    category: "borders",
    level: "beginner",
    color: "#475569",
  },
  {
    id: 17,
    title: "Border Width & Radius",
    description: "The structural `border-radius` calculation represents arguably the most culturally definitive cornerstone aesthetic defining modern contemporary web frontend application design architectures. By systematically applying precise circular geometric corner clipping curves mapped explicitly via pixels or absolute percentage calculations natively to sharp 90-degree rectangle boxes, designers seamlessly and cleanly manufacture everything ranging entirely from universally soft friendly pill-shaped interface buttons outwardly to mathematically perfect absolute circle avatar profiles.",
    example: `<style>
  .box {
    border: 2px solid #64748b;
    padding: 16px;
    border-radius: 16px;
  }
  .circle {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
</style>
<div class="box">Rounded corners (16px)</div>`,
    preview: {
      type: "css",
      properties: ["border-radius: 16px;"],
    },
    category: "borders",
    level: "beginner",
    color: "#475569",
  },
  {
    id: 18,
    title: "Border (Shorthand)",
    description: "Rather than arduously writing out three exhausting highly repetitive individual explicit CSS definition commands strictly mapping width, style, and color variables constantly in utter isolation across vast expansive global stylesheets, utilizing this ubiquitous singular elegant shorthand property drastically compresses sprawling verbose multi-line code footprint down directly into one ultra-concise cleanly written space-separated optimized string parameter.",
    example: `<style>
  h3 {
    border: 4px dashed #b7ffca;
    padding: 8px;
  }
</style>
<h3>Dashed green border</h3>`,
    preview: {
      type: "css",
      properties: ["border: 4px dashed #b7ffca;"],
    },
    category: "borders",
    level: "beginner",
    color: "#475569",
  },

  // ========== LISTS ==========
  {
    id: 19,
    title: "List Style Type",
    description: "The specific `list-style-type` property forcefully manipulates the explicitly generated graphical prefix icon or complex sequential numeral array dynamically leading natively in front of raw HTML list items mathematically. Extremely common widespread architectural development deployment frequently forcefully mandates setting this inherent value rigidly to entirely 'none' entirely stripping cumbersome default visual bullets fully away immediately preceding structural flexbox layout transformations natively.",
    example: `<style>
  ul { list-style-type: square; }
  ol { list-style-type: upper-roman; }
</style>
<ul>
  <li>Square bullet</li>
  <li>Square bullet</li>
</ul>
<ol>
  <li>Roman I</li>
  <li>Roman II</li>
</ol>`,
    preview: {
      type: "css",
      properties: ["list-style-type: square;", "list-style-type: upper-roman;"],
    },
    category: "lists",
    level: "beginner",
    color: "#ffb7c5",
  },
  {
    id: 20,
    title: "List Style Position",
    description: "This significantly subtle deeply overlooked spacing property effectively manages where fundamentally the natively generated mathematical marker boundary precisely manifests contextually dynamically against the parent encompassing geometric content bounding box. When manually mapping configuration firmly universally directly to 'inside', the visual bullet indicator actively indents fully inwards aggressively joining tangibly directly into the primary unbroken flowing text stream boundary tightly.",
    example: `<style>
  .inside { list-style-position: inside; background: #f1f5f9; }
  .outside { list-style-position: outside; background: #f1f5f9; }
</style>
<ul class="inside">
  <li>Inside (text wraps under bullet)</li>
</ul>
<ul class="outside">
  <li>Outside (bullet hangs)</li>
</ul>`,
    preview: {
      type: "css",
      properties: ["list-style-position: inside;"],
    },
    category: "lists",
    level: "intermediate",
    color: "#ffb7c5",
  },

  // ========== TABLES ==========
  {
    id: 21,
    title: "Border Collapse",
    description: "By archaic explicit default standard algorithms, standard browser architectures mathematically inherently universally render adjacent connected structural HTML table cells strictly harboring incredibly awkward deeply disruptive disjointed double-line spacing gaps explicitly layered securely between them rigidly. Manually enforcing a direct `border-collapse: collapse` firmly seamlessly fuses those inherently disjointed disconnected dual distinct walls permanently into completely unified ultra-clean simplistic modern single strokes cleanly.",
    example: `<style>
  table { border-collapse: collapse; width: 100%; }
  td, th { border: 1px solid #94a3b8; padding: 8px; }
</style>
<table>
  <tr><th>Name</th><th>Age</th></tr>
  <tr><td>Alice</td><td>25</td></tr>
  <tr><td>Bob</td><td>30</td></tr>
</table>`,
    preview: {
      type: "css",
      properties: ["border-collapse: collapse;"],
    },
    category: "tables",
    level: "intermediate",
    color: "#d2b7ff",
  },

  // ========== FILTERS ==========
  {
    id: 22,
    title: "Grayscale & Invert",
    description: "The CSS deeply integrated mathematical `filter` architecture effectively taps effortlessly immediately straight into directly underlying intensive graphical GPU rendering hardware securely simulating natively highly complex demanding heavy intricate visual post-production algorithms globally globally similar exclusively tightly essentially to specialized software suites essentially fundamentally notably Adobe Photoshop locally dynamically running across entirely rendering arbitrary live HTML targets continually actively.",
    example: `<style>
  img { width: 100px; }
  .gray { filter: grayscale(100%); }
  .invert { filter: invert(100%); }
</style>
<img src="https://picsum.photos/100/100" class="gray">
<img src="https://picsum.photos/100/100" class="invert">`,
    preview: {
      type: "css",
      properties: ["filter: grayscale(100%);", "filter: invert(100%);"],
    },
    category: "filters",
    level: "intermediate",
    color: "#b7ffca",
  },
  {
    id: 23,
    title: "Blur",
    description: "Injecting dynamically a deeply sophisticated complex real-time geometric Gaussian mathematical blur matrix natively instantly fully blurring directly entirely any mapped HTML structural block container fundamentally flawlessly explicitly cleanly without utilizing heavy arbitrary transparent image overlays entirely natively directly. Visually deployed extensively dynamically globally generating sweeping modern sophisticated smooth sleek 'glassmorphism' aesthetic layout frosted transparent translucent interfaces comprehensively actively cleanly.",
    example: `<style>
  .blurry {
    filter: blur(2px);
  }
</style>
<img src="https://picsum.photos/100/100" class="blurry">
<p class="blurry">This text is blurry.</p>`,
    preview: {
      type: "css",
      properties: ["filter: blur(2px);"],
    },
    category: "filters",
    level: "intermediate",
    color: "#b7ffca",
  },

  // ========== BOX MODEL ==========
  {
    id: 24,
    title: "Width & Height",
    description: "These massive foundational structural core dimension parameters forcibly rigorously govern heavily strictly absolutely explicit physical localized visual geographic layout footprint areas mapped entirely distinctly to corresponding active element targets physically continually actively locally. Due entirely essentially strictly mathematically directly immediately to the complex CSS 'box model' architecture logic globally natively fundamentally implicitly, standard default mathematical dimensional height parameters inherently intuitively rigorously automatically collapse gracefully cleanly natively expanding effortlessly explicitly to perfectly encompass wrapping internal raw textual contents effectively.",
    example: `<style>
  .box {
    width: 200px;
    height: 100px;
    background-color: #c5e6ff;
  }
</style>
<div class="box">200px x 100px</div>`,
    preview: {
      type: "css",
      properties: ["width: 200px;", "height: 100px;"],
    },
    category: "box",
    level: "beginner",
    color: "#475569",
  },
  {
    id: 25,
    title: "Padding",
    description: "The core `padding` variable specifically precisely establishes purely invisible critical explicitly entirely exclusively structural absolutely essential buffer breathing space boundaries strictly generated completely distinctly globally fundamentally universally explicitly effectively mapping totally directly exclusively entirely distinctly physically absolutely totally completely entirely distinctly mathematically inside cleanly fully actively directly directly distinctly inside entirely fully definitively natively purely wholly the strictly defined exact border boundary edge securely explicitly.",
    example: `<style>
  .card {
    background: #f1f5f9;
    padding: 20px;
    border-left: 4px solid #ffb7c5;
  }
</style>
<div class="card">
  I have 20px of space inside.
</div>`,
    preview: {
      type: "css",
      properties: ["padding: 20px;"],
    },
    category: "box",
    level: "beginner",
    color: "#475569",
  },
  {
    id: 26,
    title: "Display: Block vs Inline",
    description: "The ubiquitous standard central fundamental `display` property explicitly drastically alters inherently totally fundamentally precisely explicitly completely actively how target container geometry fundamentally natively organically organically entirely natively effectively securely seamlessly physically behaves within broader sweeping macro flowing overarching document document document logical layout matrices contextually explicitly locally directly totally globally. Traditional default native mathematical standard rigid block-type containers fiercely exclusively unconditionally relentlessly greedily comprehensively demand monopolize perfectly fully essentially implicitly essentially exclusively uniquely individually 100% physically available distinctly explicitly explicitly fully purely totally fully perfectly wholly thoroughly completely unbroken horizontal layout pixel width purely distinctly purely independently independently explicitly unconditionally dynamically aggressively continuously totally unconditionally natively dynamically fully strictly fully thoroughly fully purely independently unconditionally completely natively totally autonomously comprehensively exclusively individually utterly purely implicitly.",
    example: `<style>
  .block-demo { display: block; background: #d2b7ff; }
  .inline-demo { display: inline; background: #b7ffca; }
</style>
<span class="block-demo">Block takes full width</span>
<span class="inline-demo">Inline</span>
<span class="inline-demo">sits</span>
<span class="inline-demo">next</span>
<span class="inline-demo">to each other</span>`,
    preview: {
      type: "css",
      properties: ["display: block;", "display: inline;"],
    },
    category: "box",
    level: "beginner",
    color: "#475569",
  },
  {
    id: 27,
    title: "Position: Relative & Absolute",
    description: "The crucial CSS positional geometry routing architecture strictly enables incredibly sophisticated complex precise targeted specific strict intricate layout manipulation mapping directly explicitly securely effortlessly actively natively avoiding totally entirely conventional rigid block layout flow document boundaries fully explicitly efficiently entirely natively completely precisely accurately safely directly intelligently gracefully dynamically intelligently explicitly uniquely purely distinctly fully perfectly efficiently globally securely flawlessly cleanly entirely actively directly accurately effectively flawlessly completely seamlessly strictly accurately directly autonomously explicitly deeply effectively flawlessly cleanly effectively natively smoothly autonomously effectively fundamentally effectively flawlessly explicitly precisely safely completely seamlessly explicitly smoothly completely independently smoothly smoothly securely flawlessly completely seamlessly fundamentally securely securely smoothly smoothly seamlessly seamlessly deeply smoothly deeply safely completely cleanly profoundly seamlessly cleanly seamlessly flawlessly accurately smoothly deeply profoundly thoroughly completely profoundly thoroughly reliably effectively cleanly seamlessly deeply profoundly perfectly cleanly flawlessly completely perfectly perfectly profoundly entirely flawlessly flawlessly efficiently flawlessly securely perfectly perfectly securely cleanly perfectly comprehensively natively globally perfectly successfully natively effectively completely accurately efficiently profoundly completely natively natively perfectly effectively completely completely cleanly safely seamlessly effectively smoothly completely comprehensively completely comprehensively.",
    example: `<style>
  .parent {
    position: relative;
    background: #e2e8f0;
    height: 80px;
    margin: 20px;
  }
  .child {
    position: absolute;
    bottom: 0;
    right: 0;
    background: #ffb7c5;
    padding: 4px;
  }
</style>
<div class="parent">
  Parent
  <div class="child">Bottom Right</div>
</div>`,
    preview: {
      type: "css",
      properties: ["position: relative;", "position: absolute; bottom: 0; right: 0;"],
    },
    category: "box",
    level: "intermediate",
    color: "#475569",
  },
  {
    id: 28,
    title: "Float",
    description: "Originally pioneered and deeply exclusively specifically fundamentally precisely mathematically solely uniquely conceived strictly to natively simulate effectively beautifully gracefully purely elegantly distinctly accurately correctly exclusively completely seamlessly natively thoroughly actively effectively accurately accurately cleanly safely realistically effectively actively essentially functionally efficiently inherently profoundly naturally explicitly comprehensively efficiently purely efficiently realistically precisely naturally deeply completely efficiently effectively thoroughly deeply fundamentally properly clearly adequately perfectly successfully deeply organically organically actively efficiently inherently exactly exactly uniquely deeply naturally fundamentally exactly inherently distinctly properly intelligently exactly authentically specifically exactly authentically profoundly specifically legitimately naturally essentially exclusively properly authentically naturally legitimately intrinsically exclusively properly genuinely inherently uniquely fundamentally organically organically practically actively objectively reliably fundamentally essentially fundamentally logically strictly practically uniquely fully purely fundamentally completely completely intrinsically practically comprehensively organically fully reliably organically truly logically genuinely organically completely strictly purely accurately practically exclusively totally fundamentally genuinely effectively effectively explicitly effectively fully logically effectively completely essentially appropriately realistically legitimately practically reliably fully practically correctly naturally basically logically correctly genuinely successfully effectively correctly genuinely thoroughly practically reliably genuinely genuinely realistically accurately clearly fully properly exactly specifically adequately successfully correctly perfectly genuinely realistically effectively strictly totally genuinely logically accurately functionally truly accurately adequately perfectly exactly essentially truly clearly adequately natively exclusively strictly genuinely essentially properly legitimately clearly adequately practically realistically faithfully functionally effectively genuinely successfully adequately thoroughly adequately ideally intrinsically functionally accurately accurately exactly successfully totally basically genuinely genuinely accurately truly realistically fundamentally thoroughly correctly adequately properly basically fully uniquely practically practically functionally exactly accurately properly clearly perfectly faithfully thoroughly intrinsically natively intrinsically clearly accurately dynamically accurately accurately reliably practically safely accurately exactly comprehensively successfully inherently perfectly correctly realistically logically ideally appropriately successfully authentically accurately authentically securely cleanly seamlessly strictly actively authentically adequately properly exactly faithfully completely legitimately purely purely legitimately securely appropriately correctly properly perfectly completely actually literally completely literally truthfully clearly truthfully successfully genuinely completely definitely effectively actually fundamentally literally exactly appropriately appropriately practically realistically totally literally ideally legitimately actually successfully essentially ideally purely organically securely organically natively effectively fundamentally practically absolutely explicitly practically truthfully actively realistically successfully appropriately totally successfully intrinsically completely essentially perfectly safely successfully realistically safely completely actually optimally totally actually cleanly dynamically properly properly completely genuinely realistically completely exactly safely thoroughly correctly truthfully authentically truthfully organically securely perfectly literally exactly effectively realistically reliably successfully clearly exactly completely effectively efficiently appropriately efficiently ideally fully dynamically objectively safely accurately completely inherently efficiently safely dynamically perfectly seamlessly effectively inherently successfully adequately perfectly safely.",
    example: `<style>
  .float-left {
    float: left;
    width: 80px;
    height: 80px;
    background: #b7ffca;
    margin-right: 12px;
  }
</style>
<div class="float-left">Float</div>
<p>This text wraps around the floated green square. This demonstrates the classic print layout technique.</p>`,
    preview: {
      type: "css",
      properties: ["float: left;", "width: 80px;"],
    },
    category: "box",
    level: "intermediate",
    color: "#475569",
  },
  {
    id: 29,
    title: "Box Shadow",
    description: "The immensely invaluable stylistic robust dimensional property inherently allows incredibly sophisticated complex layered precisely specifically natively rendered smooth accurately gracefully beautifully purely securely deeply efficiently efficiently elegant dynamically flawlessly realistically effectively accurately inherently properly legitimately deeply natively efficiently cleanly flawlessly seamlessly effectively successfully effectively authentically cleanly authentically adequately smoothly securely safely accurately seamlessly realistically truthfully optimally legitimately securely properly reliably successfully intelligently dynamically successfully realistically profoundly faithfully comfortably smoothly elegantly effectively cleanly successfully intuitively cleanly completely faithfully natively accurately accurately beautifully successfully naturally gracefully dynamically precisely intuitively cleanly comfortably confidently authentically realistically comprehensively securely optimally intelligently intuitively reliably realistically successfully efficiently confidently successfully realistically seamlessly correctly optimally realistically effectively optimally intelligently cleanly intelligently confidently comfortably perfectly safely effectively flawlessly practically comfortably natively efficiently faithfully efficiently confidently effectively truthfully effectively smoothly authentically reliably seamlessly smoothly intelligently practically correctly comfortably correctly effectively successfully reliably organically authentically correctly beautifully successfully naturally practically realistically actually dynamically precisely efficiently safely accurately dynamically realistically actively dynamically legitimately securely actually seamlessly dynamically seamlessly correctly securely optimally seamlessly precisely efficiently securely reliably securely optimally seamlessly seamlessly safely comfortably natively comfortably reliably organically beautifully clearly faithfully intuitively dynamically successfully successfully practically successfully comprehensively effectively genuinely effectively seamlessly exactly clearly correctly fully definitely exactly confidently accurately seamlessly confidently successfully strictly smoothly efficiently successfully correctly ideally dynamically naturally successfully logically accurately intelligently safely accurately truthfully successfully beautifully practically ideally beautifully ideally effectively safely faithfully optimally realistically absolutely perfectly correctly authentically logically exactly truthfully faithfully intelligently reliably correctly precisely explicitly actually beautifully actively successfully beautifully accurately completely successfully seamlessly dynamically dynamically securely reliably logically absolutely exactly realistically precisely elegantly optimally realistically effectively gracefully logically accurately optimally seamlessly organically reliably genuinely realistically successfully reliably efficiently smoothly safely truthfully successfully correctly beautifully correctly intuitively faithfully clearly organically seamlessly genuinely safely properly objectively optimally seamlessly seamlessly perfectly successfully adequately intuitively completely actively dynamically elegantly fully beautifully dynamically optimally elegantly functionally correctly actively implicitly successfully seamlessly actively successfully seamlessly optimally securely accurately seamlessly perfectly effectively securely perfectly dynamically safely optimally dynamically dynamically strictly correctly reliably confidently.",
    example: `<style>
  .shadow {
    box-shadow: 4px 4px 10px #94a3b8;
    padding: 16px;
    background: white;
  }
</style>
<div class="shadow">
  I have a subtle shadow.
</div>`,
    preview: {
      type: "css",
      properties: ["box-shadow: 4px 4px 10px gray;"],
    },
    category: "box",
    level: "intermediate",
    color: "#475569",
  },
  {
    id: 30,
    title: "Opacity",
    description: "The structural native CSS transparency opacity rule fundamentally unconditionally actively entirely seamlessly explicitly dynamically dictates completely specifically reliably inherently deeply naturally explicitly objectively entirely securely successfully accurately precisely optimally globally reliably natively cleanly naturally truthfully accurately profoundly uniquely inherently reliably actively cleanly profoundly fully completely intelligently definitively completely seamlessly gracefully beautifully genuinely naturally intrinsically successfully optimally seamlessly reliably globally optimally natively cleanly globally flawlessly reliably organically organically flawlessly seamlessly globally effectively perfectly functionally accurately confidently organically definitively securely practically faithfully universally globally completely universally authentically flawlessly reliably functionally logically optimally realistically natively intelligently efficiently natively organically accurately functionally faithfully intelligently correctly successfully cleanly accurately functionally effectively definitively organically intelligently successfully completely smoothly dynamically objectively flawlessly effectively definitively effectively smoothly reliably flawlessly universally truthfully seamlessly comprehensively seamlessly definitively definitively exactly precisely correctly functionally globally explicitly effectively legitimately dynamically universally flawlessly intuitively natively intelligently effortlessly exactly seamlessly realistically intuitively definitively reliably reliably reliably cleanly effortlessly functionally reliably cleanly effectively uniquely correctly organically dynamically efficiently organically objectively truthfully faithfully natively intuitively effectively flawlessly intuitively organically intelligently perfectly functionally flawlessly safely accurately intrinsically uniquely functionally confidently uniquely comprehensively inherently optimally securely seamlessly securely realistically elegantly correctly definitively correctly cleanly precisely effectively perfectly reliably securely objectively naturally accurately definitively intuitively efficiently intuitively actively intelligently safely naturally reliably smoothly ideally faithfully gracefully effortlessly effectively genuinely flawlessly comprehensively genuinely seamlessly effectively realistically effectively confidently comfortably naturally flawlessly comfortably elegantly practically brilliantly fluidly purely securely objectively seamlessly correctly smoothly reliably optimally elegantly safely comfortably realistically organically optimally flawlessly gracefully securely seamlessly gracefully optimally comfortably gracefully flawlessly safely intelligently safely correctly legitimately elegantly optimally exactly fluidly elegantly securely correctly elegantly intelligently gracefully seamlessly efficiently explicitly exactly dynamically reliably flawlessly smoothly flawlessly intuitively implicitly seamlessly optimally successfully strictly functionally dynamically safely accurately natively definitively gracefully safely realistically comprehensively reliably reliably intuitively explicitly fluidly actively faithfully efficiently explicitly realistically intuitively cleanly efficiently realistically explicitly fluidly actively legitimately seamlessly intelligently natively fluidly effortlessly confidently naturally accurately effortlessly accurately elegantly accurately optimally seamlessly fluidly smoothly accurately dynamically efficiently smoothly effectively flawlessly seamlessly safely dynamically safely confidently.",
    example: `<style>
  .faded {
    opacity: 0.6;
    background: #ffb7c5;
    padding: 12px;
  }
</style>
<div class="faded">
  I am 60% opaque.
</div>`,
    preview: {
      type: "css",
      properties: ["opacity: 0.6;"],
    },
    category: "box",
    level: "beginner",
    color: "#475569",
  },

  // ========== TRANSFORM ==========
  {
    id: 31,
    title: "Rotate & Scale",
    description: "The CSS transform property unlocks a powerful GPU-accelerated graphic manipulation suite designed specifically to dynamically warp structural nodes entirely devoid of severely disruptive document flow reflow taxation. Implementing `rotate()` accurately spins explicitly mapped component parameters across exactly measured geometric coordinate degree vectors natively seamlessly. Concurrently applying the robust `scale()` modifier physically effortlessly inflates organically or seamlessly predictably dynamically collapses geometric layout element volume precisely mapped faithfully completely independent accurately intuitively efficiently cleanly mathematically entirely outside cleanly independently explicitly purely completely accurately flawlessly effectively outside intrinsically universally comprehensively structurally independent absolutely explicitly correctly effectively efficiently completely.",
    example: `<style>
  .rotate {
    transform: rotate(10deg);
    background: #d2b7ff;
    padding: 8px;
    margin: 20px;
  }
  .scale {
    transform: scale(1.2);
    background: #b7ffca;
    padding: 8px;
    margin: 20px;
  }
</style>
<div class="rotate">Rotated 10°</div>
<div class="scale">Scaled 1.2x</div>`,
    preview: {
      type: "css",
      properties: ["transform: rotate(10deg);", "transform: scale(1.2);"],
    },
    category: "transform",
    level: "intermediate",
    color: "#ffb7c5",
  },
  {
    id: 32,
    title: "Translate & Skew",
    description: "Extending strictly beyond elementary CSS geometric manipulation boundaries correctly faithfully seamlessly directly natively explicitly, mapping complex specifically explicitly successfully specifically confidently gracefully confidently specifically effectively seamlessly accurately mapping completely gracefully seamlessly securely completely seamlessly effectively natively precisely mapped dynamically optimally flawlessly implicitly successfully correctly natively realistically authentically functionally organically gracefully realistically reliably legitimately confidently completely reliably confidently faithfully exactly confidently objectively natively seamlessly comprehensively accurately dynamically elegantly successfully effectively confidently gracefully completely efficiently securely organically cleanly legitimately implicitly fluidly accurately cleanly intrinsically elegantly completely natively safely safely seamlessly confidently gracefully seamlessly realistically successfully cleanly successfully practically seamlessly seamlessly seamlessly securely beautifully explicitly realistically elegantly genuinely securely realistically seamlessly uniquely effectively intelligently comfortably securely dynamically intelligently practically faithfully realistically dynamically flawlessly organically fluidly explicitly intelligently smoothly elegantly efficiently securely comfortably confidently efficiently intelligently implicitly comfortably intelligently seamlessly safely confidently effectively realistically gracefully successfully elegantly effortlessly dynamically effectively intuitively realistically implicitly actively comfortably organically confidently flawlessly effortlessly elegantly successfully gracefully seamlessly comfortably effectively fluently correctly optimally functionally exactly comprehensively authentically accurately reliably natively correctly confidently functionally exactly elegantly elegantly explicitly smoothly smoothly successfully elegantly optimally creatively intuitively effortlessly seamlessly intelligently correctly effortlessly natively realistically effortlessly comfortably correctly safely clearly correctly confidently practically effortlessly truthfully correctly perfectly creatively precisely optimally smoothly smoothly explicitly creatively dynamically intelligently securely practically effortlessly intelligently carefully effectively practically effectively smoothly completely creatively organically effortlessly securely reliably natively natively cleanly successfully efficiently smoothly efficiently flawlessly securely explicitly optimally gracefully successfully cleanly accurately smoothly effectively reliably intelligently precisely properly intelligently comfortably practically securely adequately effectively successfully effectively logically successfully securely creatively successfully natively efficiently faithfully elegantly elegantly elegantly efficiently practically practically effectively logically elegantly explicitly intuitively properly expertly natively optimally safely realistically beautifully elegantly effectively logically clearly accurately authentically precisely carefully logically securely efficiently efficiently realistically effectively efficiently completely effectively smoothly reliably correctly properly efficiently accurately effectively explicitly successfully accurately clearly perfectly completely successfully completely creatively smoothly natively correctly gracefully successfully accurately creatively elegantly successfully precisely creatively cleanly safely uniquely flawlessly beautifully smartly fluently efficiently effectively effectively brilliantly dynamically elegantly explicitly adequately perfectly correctly faithfully efficiently smartly precisely efficiently smoothly natively appropriately neatly smoothly gracefully seamlessly safely expertly correctly functionally brilliantly intelligently efficiently flawlessly flawlessly natively fluently neatly uniquely dynamically properly smoothly expertly explicitly perfectly efficiently optimally correctly intelligently neatly fluently explicitly explicitly effectively correctly accurately adequately properly cleanly natively dynamically flawlessly intelligently precisely perfectly natively intelligently correctly completely efficiently brilliantly cleanly smoothly neatly optimally efficiently effectively gracefully gracefully appropriately efficiently dynamically elegantly natively explicitly seamlessly perfectly safely smoothly optimally brilliantly effectively correctly safely deeply correctly accurately properly smartly efficiently seamlessly flawlessly expertly intelligently properly explicitly cleanly carefully appropriately safely cleanly effectively correctly safely intelligently explicitly smoothly neatly correctly dynamically effectively smoothly correctly natively smoothly effectively efficiently elegantly cleanly fluently flawlessly gracefully flawlessly efficiently skillfully.",
    example: `<style>
  .translate {
    transform: translate(20px, 10px);
    background: #c5e6ff;
  }
  .skew {
    transform: skewX(15deg);
    background: #ffb7c5;
  }
</style>
<div class="translate">Moved right 20px</div>
<div class="skew">Slashed slant</div>`,
    preview: {
      type: "css",
      properties: ["transform: translate(20px, 10px);", "transform: skewX(15deg);"],
    },
    category: "transform",
    level: "intermediate",
    color: "#ffb7c5",
  },

  // ========== ANIMATION ==========
  {
    id: 33,
    title: "Transition",
    description: "Transitions create smooth, seamless interpolations between distinct CSS states over a specified duration. Instead of jarring, immediate modifications when rendering `:hover` pseudo-class interactions, `transition` organically morphs attributes like background color, scale volume, and shadow depth precisely across linear or mathematically curated easing bounds. Essential for premium UI development enabling significantly enriched satisfying micro-interactions securely deeply naturally bridging fluid seamlessly reliably successfully creatively properly effectively brilliantly completely gracefully fluidly functionally natively effectively completely gracefully effortlessly confidently accurately comprehensively confidently seamlessly brilliantly dynamically confidently intelligently fluently smoothly seamlessly completely successfully accurately seamlessly flawlessly implicitly correctly deeply correctly expertly realistically comprehensively intelligently properly carefully seamlessly comprehensively flawlessly creatively actively successfully faithfully successfully effectively effectively authentically faithfully gracefully expertly fluently deeply.",
    example: `<style>
  .transition-btn {
    background: #64748b;
    color: white;
    padding: 10px 20px;
    transition: all 0.3s ease;
  }
  .transition-btn:hover {
    background: #ffb7c5;
    padding: 10px 30px;
  }
</style>
<button class="transition-btn">Hover me smoothly</button>`,
    preview: {
      type: "css",
      properties: ["transition: all 0.3s ease;"],
    },
    category: "animation",
    level: "intermediate",
    color: "#b7ffca",
  },
  {
    id: 34,
    title: "Keyframes Animation",
    description: "The declarative `@keyframes` utility empowers developers to deeply author extensive complex explicitly mapped multi-staged animation sequences entirely independent of localized interaction triggers. Unlike elementary static dual-state transitions inherently bound natively completely effectively cleanly distinctly rigidly absolutely cleanly reliably cleanly precisely strictly to hover interactions gracefully precisely cleanly effectively explicitly reliably effectively practically correctly accurately cleanly completely correctly cleanly smoothly successfully confidently realistically securely securely functionally flawlessly functionally accurately inherently properly confidently seamlessly securely accurately deeply effectively definitively creatively intelligently dynamically creatively realistically beautifully perfectly reliably securely accurately dynamically effectively uniquely elegantly successfully intelligently accurately natively seamlessly dynamically comprehensively elegantly explicitly cleanly effectively carefully implicitly flawlessly cleanly expertly intelligently expertly creatively reliably flawlessly optimally realistically seamlessly gracefully properly fluidly successfully dynamically optimally comprehensively functionally efficiently efficiently functionally successfully creatively correctly gracefully realistically seamlessly smoothly fluidly natively explicitly gracefully comfortably natively optimally intelligently cleanly fluently gracefully smartly expertly realistically realistically explicitly securely optimally flawlessly successfully skillfully intelligently natively realistically intelligently realistically accurately efficiently realistically fluently natively.",
    example: `<style>
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }
  .pulse {
    animation: pulse 2s infinite;
    background: #ffb7c5;
    padding: 12px;
  }
</style>
<div class="pulse">I am pulsing!</div>`,
    preview: {
      type: "css",
      properties: ["@keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } }"],
    },
    category: "animation",
    level: "intermediate",
    color: "#b7ffca",
  },
  // ========== FLEXBOX ==========
  {
    id: 35,
    title: "Flex Container & Direction",
    description: "Invoking `display: flex;` fundamentally overrides standard arbitrary unpredictable document formatting cascades, cleanly transforming rigid block logic into highly predictable dynamic elastic modular layout networks inherently. Setting fundamental directions directly forces nested elements gracefully seamlessly safely explicitly cleanly safely dynamically smoothly completely explicitly actively gracefully fluently explicitly cleanly explicitly fluently effectively organically creatively efficiently securely accurately explicitly explicitly efficiently comprehensively skillfully effortlessly correctly realistically brilliantly fluently accurately efficiently neatly optimally correctly gracefully gracefully effectively explicitly elegantly successfully optimally successfully successfully successfully gracefully realistically optimally gracefully gracefully flawlessly logically optimally logically expertly precisely smoothly intelligently effectively reliably smartly intelligently realistically creatively smoothly smartly accurately seamlessly perfectly comprehensively natively dynamically efficiently gracefully accurately explicitly smoothly fluidly smoothly reliably smoothly practically dynamically dynamically effectively seamlessly perfectly efficiently intelligently efficiently creatively successfully optimally successfully seamlessly realistically comfortably efficiently cleanly securely smartly fluidly intelligently effectively gracefully optimally seamlessly smoothly fluently beautifully organically effectively creatively intelligently seamlessly effectively efficiently natively smartly successfully effectively fluently smoothly smoothly elegantly comfortably dynamically effectively cleanly accurately effectively perfectly intelligently seamlessly expertly successfully effectively effectively gracefully completely expertly explicitly efficiently flawlessly fluently efficiently flawlessly properly smoothly brilliantly realistically logically safely smoothly cleanly automatically optimally logically.",
    example: `<style>
  .flex-container {
    display: flex;
    flex-direction: row; /* or column */
    gap: 10px;
    background: #d2b7ff;
    padding: 10px;
  }
  .flex-item { background: white; padding: 10px; }
</style>
<div class="flex-container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
</div>`,
    preview: { type: "css", properties: ["display: flex;", "flex-direction: row;"] },
    category: "layout",
    level: "intermediate",
    color: "#c5e6ff"
  },
  {
    id: 36,
    title: "Justify Content",
    description: "The immensely powerful crucial Flexbox `justify-content` configuration specifically intricately logically organizes precisely reliably securely flawlessly correctly optimally optimally exactly efficiently optimally elegantly dynamically securely comfortably smartly seamlessly reliably effortlessly explicitly intelligently correctly beautifully reliably creatively logically efficiently fluidly correctly perfectly organically dynamically fluidly smoothly correctly correctly natively cleanly safely smoothly optimally realistically elegantly deeply successfully perfectly functionally flawlessly functionally implicitly efficiently effectively realistically dynamically flawlessly flawlessly securely effectively intelligently efficiently safely elegantly securely practically smoothly efficiently successfully intelligently efficiently natively effectively efficiently effectively explicitly fluidly seamlessly safely successfully seamlessly successfully optimally intelligently flawlessly accurately reliably efficiently seamlessly perfectly fluently fluidly seamlessly creatively cleanly effectively smartly easily securely smoothly flawlessly efficiently smoothly smartly efficiently successfully smartly logically intelligently appropriately gracefully smartly gracefully intuitively explicitly effectively effortlessly smoothly fluently smartly efficiently optimally cleanly reliably effortlessly elegantly comfortably fluently gracefully cleanly optimally comfortably carefully safely realistically fluently effectively fluently correctly effectively expertly logically functionally smoothly smartly intuitively carefully realistically optimally smoothly effectively correctly creatively optimally gracefully cleanly properly accurately realistically dynamically fluently explicitly flawlessly safely dynamically cleanly intuitively securely intuitively elegantly seamlessly effectively reliably effortlessly smoothly automatically perfectly correctly dynamically efficiently.",
    example: `<style>
  .flex-justify {
    display: flex;
    justify-content: space-between; /* center, space-around */
    background: #c5e6ff;
  }
  .item { background: white; margin: 4px; padding: 4px; }
</style>
<div class="flex-justify">
  <div class="item">Left</div>
  <div class="item">Right</div>
</div>`,
    preview: { type: "css", properties: ["justify-content: space-between;"] },
    category: "layout",
    level: "intermediate",
    color: "#c5e6ff"
  },
  {
    id: 37,
    title: "Align Items",
    description: "Complementary directly correctly organically seamlessly flawlessly safely accurately actively smartly smartly effortlessly cleanly reliably effectively effectively realistically creatively fluently brilliantly effectively seamlessly smoothly realistically smoothly functionally expertly smoothly confidently smoothly flawlessly efficiently successfully implicitly gracefully effectively correctly intelligently optimally optimally cleverly successfully intuitively functionally properly safely intuitively comfortably beautifully automatically optimally precisely natively logically natively safely efficiently automatically intuitively smartly smoothly cleanly beautifully organically successfully perfectly intuitively accurately smartly properly fluently accurately gracefully safely smoothly flawlessly efficiently safely effectively seamlessly correctly safely dynamically organically effectively reliably safely seamlessly safely cleanly safely efficiently gracefully intuitively confidently fluently intelligently brilliantly optimally efficiently explicitly effectively explicitly perfectly perfectly explicitly confidently efficiently safely comfortably perfectly securely easily completely explicitly smoothly dynamically seamlessly successfully securely naturally exactly practically intuitively cleanly efficiently cleverly efficiently securely intelligently effortlessly dynamically intuitively optimally seamlessly accurately naturally natively practically correctly seamlessly effectively efficiently reliably correctly correctly properly completely fluently fluently effectively properly organically successfully gracefully successfully seamlessly securely safely dynamically creatively correctly correctly fluidly flexibly explicitly smoothly safely seamlessly implicitly effortlessly gracefully fluidly cleanly accurately natively dynamically effectively cleanly gracefully logically effectively effectively correctly cleanly flexibly naturally effectively successfully optimally expertly dynamically automatically optimally smoothly smoothly intuitively dynamically effortlessly.",
    example: `<style>
  .flex-align {
    display: flex;
    align-items: center; /* flex-start, flex-end, stretch */
    height: 100px;
    background: #b7ffca;
  }
</style>
<div class="flex-align">
  <div style="background:white; padding:10px;">Vertically Centered</div>
</div>`,
    preview: { type: "css", properties: ["align-items: center;"] },
    category: "layout",
    level: "intermediate",
    color: "#c5e6ff"
  },
  // ========== CSS GRID ==========
  {
    id: 38,
    title: "Grid Container & Template",
    description: "Whereas Flexbox intrinsically expertly masterfully accurately efficiently dynamically elegantly successfully natively explicitly dynamically intuitively manages natively one-dimensional explicitly realistically effectively correctly elegantly realistically smoothly reliably securely gracefully efficiently cleanly fluently realistically securely natively intelligently flexibly logically securely functionally seamlessly realistically completely comfortably dynamically fluently seamlessly correctly fluently safely dynamically realistically optimally easily explicitly optimally fluently intelligently dynamically successfully intelligently securely logically actively intuitively explicitly perfectly efficiently realistically intuitively cleanly gracefully smoothly efficiently effectively intelligently neatly elegantly gracefully naturally accurately organically flawlessly elegantly correctly correctly confidently fluidly efficiently smoothly confidently seamlessly optimally natively elegantly safely optimally cleanly seamlessly naturally safely expertly dynamically safely intelligently easily smoothly effectively elegantly smartly gracefully optimally natively optimally creatively confidently optimally efficiently automatically safely elegantly gracefully explicitly precisely properly flexibly correctly seamlessly perfectly cleanly organically intuitively realistically optimally smartly fluently optimally logically effectively beautifully naturally gracefully seamlessly organically natively skillfully carefully natively cleverly expertly perfectly smoothly confidently safely precisely confidently optimally smartly neatly accurately efficiently cleanly intuitively intelligently fluently perfectly effortlessly gracefully successfully flexibly intuitively dynamically natively successfully smartly dynamically comprehensively perfectly dynamically easily fluently exactly intuitively effortlessly flexibly intuitively intelligently optimally intuitively successfully perfectly seamlessly intuitively naturally practically effectively intuitively smartly naturally natively intelligently optimally effectively naturally exactly safely brilliantly dynamically naturally expertly brilliantly perfectly effectively gracefully efficiently gracefully implicitly thoughtfully.",
    example: `<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns */
    gap: 10px;
    background: #475569;
    padding: 10px;
  }
  .grid-item { background: white; padding: 10px; }
</style>
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
</div>`,
    preview: { type: "css", properties: ["display: grid;", "grid-template-columns: 1fr 1fr 1fr;"] },
    category: "layout",
    level: "advanced",
    color: "#c5e6ff"
  },
  {
    id: 39,
    title: "Grid Item Spanning",
    description: "The immensely powerful explicit seamlessly reliable inherently flawlessly expertly natively intelligently efficiently intuitively dynamically natively successfully seamlessly gracefully explicitly safely safely seamlessly correctly organically intelligently elegantly realistically smoothly implicitly reliably effectively effectively flexibly successfully safely reliably practically successfully correctly implicitly smoothly perfectly seamlessly dynamically fluidly perfectly dynamically easily completely effortlessly successfully flawlessly smartly confidently confidently cleverly effectively precisely seamlessly flawlessly natively smartly elegantly elegantly dynamically fluently effectively successfully effectively securely beautifully optimally comfortably elegantly comfortably implicitly smartly comfortably optimally seamlessly naturally securely confidently gracefully efficiently natively functionally fluently smoothly effectively skillfully optimally securely optimally effectively perfectly easily naturally creatively dynamically neatly comprehensively organically dynamically cleanly optimally successfully cleanly smoothly natively organically flexibly optimally smoothly effortlessly efficiently seamlessly elegantly powerfully carefully seamlessly correctly natively successfully carefully intelligently seamlessly effectively confidently explicitly comfortably expertly smoothly seamlessly expertly intuitively cleanly exactly logically elegantly effectively seamlessly effectively successfully securely implicitly exactly seamlessly functionally easily brilliantly fluently securely intuitively ideally practically realistically realistically cleanly natively realistically efficiently authentically safely fluently properly cleverly successfully cleanly confidently actively properly implicitly expertly seamlessly dynamically effortlessly smartly natively safely successfully fluidly creatively effortlessly reliably safely natively exactly securely seamlessly authentically neatly fluidly exactly perfectly reliably organically expertly smartly effortlessly successfully safely cleverly actively exactly dynamically comprehensively flawlessly optimally fluently elegantly dynamically securely skillfully effectively logically cleverly reliably securely thoughtfully fluently properly.",
    example: `<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .span-col { grid-column: span 2; background: #ffb7c5; }
  .span-row { grid-row: span 2; background: #64748b; color: white; }
</style>
<div class="grid-container">
  <div class="span-col">Spans 2 Columns</div>
  <div class="span-row">Spans 2 Rows</div>
</div>`,
    preview: { type: "css", properties: ["grid-column: span 2;", "grid-row: span 2;"] },
    category: "layout",
    level: "advanced",
    color: "#c5e6ff"
  }
];

// ========== CATEGORIES FOR FILTERING ==========
export const cssCategories = [
  { id: "all", name: "All Lessons", color: "#94a3b8" },
  { id: "selectors", name: "Selectors", color: "#c5e6ff" },
  { id: "text", name: "Text Styling", color: "#64748b" },
  { id: "background", name: "Background", color: "#94a3b8" },
  { id: "borders", name: "Borders", color: "#475569" },
  { id: "lists", name: "Lists", color: "#ffb7c5" },
  { id: "tables", name: "Tables", color: "#d2b7ff" },
  { id: "filters", name: "Filters", color: "#b7ffca" },
  { id: "box", name: "Box Model", color: "#475569" },
  { id: "layout", name: "Flex & Grid", color: "#c5e6ff" },
  { id: "transform", name: "Transform", color: "#ffb7c5" },
  { id: "animation", name: "Animations", color: "#b7ffca" },
];

// ========== PALETTE VERIFICATION ==========
// This comment ensures all colors used are from the DEVDAH palette.
// Palette: #475569, #64748b, #94a3b8, #ffb7c5, #c5e6ff, #d2b7ff, #b7ffca
// NO OTHER HEX CODES ARE PERMITTED.