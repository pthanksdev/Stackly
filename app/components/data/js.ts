// app/components/data/javascript-course.ts

/**
 * JavaScript Course Data - Transformed from PDF
 * Follows Devdah Project Patterns
 * Minimal, clear examples ready for innerHTML display
 */

export interface JavaScriptConcept {
  id: number;
  title: string;
  description: string;
  example: string;
  preview: {
    type: "js" | "html" | "mixed";
    content: string[];
    props?: {
      hasOutput?: boolean;
      interactive?: boolean;
    };
  };
  category: "basics" | "dom" | "variables" | "functions" | "arrays" | "dates" | "control";
  level: "beginner" | "intermediate" | "advanced";
  color: string; // From Devdah palette
}

export const javascriptCourseData: JavaScriptConcept[] = [
  // ============ BASICS & INTEGRATION ============
  {
    id: 1,
    title: "Internal JavaScript",
    description: "Internal JavaScript involves embedding literal script logic directly inside an HTML document using the `<script>` container. While primarily utilized for localized page logic or rapid prototyping, modern standards strictly recommend placing these blocks immediately before the closing `</body>` tag. This ensures the entire DOM structure renders fully before the script attempts to manipulate elements, preventing 'null' reference errors and significantly improving initial page load perception.",
    example: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Internal JS</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n  \n  <script>\n    // Simple alert example\n    alert("Bonjour depuis JavaScript !");\n    \n    // DOM manipulation\n    document.body.style.backgroundColor = "#c5e6ff";\n  </script>\n</body>\n</html>',
    preview: {
      type: "html",
      content: [
        "<script>",
        '  alert("Bonjour !");',
        "  // Changes background blue",
        "  document.body.style.background = '#c5e6ff';",
        "</script>"
      ],
      props: {
        interactive: true
      }
    },
    category: "basics",
    level: "beginner",
    color: "#c5e6ff" 
  },
  {
    id: 2,
    title: "External JavaScript",
    description: "External JavaScript is the professional gold standard for production web development, relying on linking dedicated `.js` source files via the `src` attribute of the `<script>` tag. This architecture enforces a strict 'Separation of Concerns,' isolating logic from structure (HTML) and style (CSS). By utilizing external files, developers gain massive benefits including cached performance across multiple pages, cleaner code maintainability, and the ability to collaborate on large-scale modular codebases without polluting HTML markup.",
    example: '<!-- Fichier HTML -->\n<!DOCTYPE html>\n<html>\n<head>\n  <title>External JS</title>\n  <script src="script.js"></script>\n</head>\n<body>\n  <h1>External JavaScript Example</h1>\n</body>\n</html>\n\n// Fichier script.js\nalert("Bonjour depuis un fichier externe !");\nconsole.log("JavaScript chargé avec succès");',
    preview: {
      type: "mixed",
      content: [
        "<!-- HTML -->",
        '<script src="app.js"></script>',
        "",
        "// app.js",
        'console.log("External JS loaded");'
      ]
    },
    category: "basics",
    level: "beginner",
    color: "#c5e6ff"
  },
  {
    id: 3,
    title: "Inline Events",
    description: "Inline events represent an archaic method of triggering JavaScript directly inside HTML attributes like `onclick`, `onmouseover`, or `onchange`. While useful for extremely tiny demos or rapid testing, this approach is strongly discouraged in modern software engineering. It creates 'spaghetti code' where logic and markup are inextricably tangled, violates Content Security Policies (CSP), and makes debugging complex applications nearly impossible compared to modern event listener patterns.",
    example: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>Inline Event Example</h1>\n  \n  <!-- Simple inline click handler -->\n  <button onclick="alert(\'Bonjour !\')">\n    Cliquez-moi\n  </button>\n  \n  <!-- Inline with this reference -->\n  <button onclick="this.style.backgroundColor=\'#ffb7c5\'">\n    Change my color\n  </button>\n</body>\n</html>',
    preview: {
      type: "html",
      content: [
        '<button onclick="alert(\'Hello!\')">',
        "  Click Me",
        "</button>",
        "",
        '<button onclick="this.style.color=\'red\'">',
        "  Turn Red",
        "</button>"
      ],
      props: {
        interactive: true
      }
    },
    category: "basics",
    level: "beginner",
    color: "#94a3b8" 
  },

  // ============ OUTPUT METHODS ============
  {
    id: 4,
    title: "alert() - Popup Messages",
    description: "The `alert()` method triggers a browser-level modal dialog that forcefully interrupts the user flow, displaying a message and a single 'OK' button. It is 'blocking,' meaning all other JavaScript execution and user interaction pauses until the dialog is dismissed. Consequently, it should be reserved strictly for critical system warnings or debugging milestones where immediate user attention is the absolute priority above all else.",
    example: '// Simple welcome message\nalert("Bienvenue sur mon site !");\n\n// Alert with variable\nlet userName = "Marie";\nalert("Bonjour " + userName + " !");\n\n// Alert for validation\nlet age = 17;\nif(age < 18) {\n  alert("Accès réservé aux adultes");\n}',
    preview: {
      type: "js",
      content: [
        '// Welcome popup',
        'alert("Welcome to my site!");',
        '',
        '// Variable in alert',
        'let name = "Alex";',
        'alert("Hello " + name + "!");'
      ],
      props: {
        interactive: true
      }
    },
    category: "basics",
    level: "beginner",
    color: "#64748b" 
  },
  {
    id: 5,
    title: "document.write()",
    description: "The `document.write()` function writes a string of text or HTML directly into the document stream. Historically powerful, it is now considered dangerous and largely obsolete. If executed after the page has finished loading (for instance, inside an event handler), it will recursively wipe the entire document and overwrite everything with the new content. Its use is primarily restricted to legacy tracking scripts or specific niche initial load scenarios.",
    example: '// During page load - writes at script position\ndocument.write("<h2>Bonjour, monde !</h2>");\ndocument.write("<p>Ceci est écrit par JavaScript</p>");\n\n// ⚠️ Après chargement - remplace toute la page!\n// setTimeout(() => {\n//   document.write("PAGE REMPLACÉE"); // DANGER!\n// }, 3000);',
    preview: {
      type: "js",
      content: [
        "// Safe: during initial load",
        'document.write("<p>Hello World</p>");',
        "",
        "// ⚠️ After load: overwrites page!",
        "// document.write('REPLACED');"
      ]
    },
    category: "basics",
    level: "beginner",
    color: "#94a3b8" 
  },
  {
    id: 6,
    title: "console.log()",
    description: "The `console.log()` command is the cornerstone of browser-based debugging, allowing developers to output data, object states, and error markers directly to the browser's developer console (F12). Unlike `alert()`, it is non-intrusive and does not block code execution. Mastering the console involves going beyond simple text to logging complex JSON objects, formatted tables, grouped logs, and performance timers to diagnose deep architectural issues.",
    example: '// Basic logging\nconsole.log("JavaScript chargé!");\n\n// Log variables\nlet score = 42;\nconsole.log("Score:", score);\n\n// Log objects\nlet user = {name: "Alice", age: 30};\nconsole.log("Utilisateur:", user);\n\n// Group logs\nconsole.group("Détails du panier");\nconsole.log("Articles: 3");\nconsole.log("Total: 45.99€");\nconsole.groupEnd();',
    preview: {
      type: "js",
      content: [
        'console.log("Debug message");',
        "",
        "let count = 5;",
        "console.log('Count:', count);",
        "",
        "// F12 to view console"
      ]
    },
    category: "basics",
    level: "beginner",
    color: "#b7ffca" 
  },

  // ============ VARIABLES ============
  {
    id: 7,
    title: "let - Mutable Variables",
    description: "Introduced in ES6, `let` allows for the declaration of block-scoped variables. This means the variable exists only within the specific pair of curly braces `{}` where it was defined, solving many confusing 'hoisting' bugs associated with the older `var` keyword. Variables declared with `let` are mutable, meaning their values can be reassigned freely throughout their lifecycle, making them ideal for counters, state flags, and temporary calculations.",
    example: '// Déclaration et affectation\nlet age = 25;\nalert(age); // 25\n\n// Réassignation possible\nage = 30;\nalert(age); // 30\n\n// Block scope\nif (true) {\n  let message = "Dans le bloc";\n  console.log(message); // OK\n}\n// console.log(message); // ERREUR! Hors scope\n\n// undefined - variable non initialisée\nlet city;\nconsole.log(city); // undefined\ncity = "Paris";\nconsole.log(city); // Paris',
    preview: {
      type: "js",
      content: [
        "let age = 25;",
        "age = 30; // ✅ Reassignable",
        "console.log(age); // 30",
        "",
        "let score; // undefined",
        "score = 100; // Now defined"
      ]
    },
    category: "variables",
    level: "beginner",
    color: "#d2b7ff" 
  },
  {
    id: 8,
    title: "const - Constants",
    description: "The `const` keyword declares a read-only, block-scoped reference to a value. Once initialized, the reference itself cannot be reassigned to a different value. Importantly, while the reference is 'frozen,' the internal properties of objects or arrays assigned to `const` can still be modified. This creates 'immutable references' rather than total 'immutable data,' encouraging developers to write safer, more predictable code by default.",
    example: '// Déclaration avec initialisation obligatoire\nconst PI = 3.14;\nalert(PI); // 3.14\n\n// ❌ Erreur: Réassignation interdite\n// PI = 3.14159; // TypeError\n\n// ✅ Objets const: propriétés modifiables!\nconst user = {name: "Jean"};\nuser.name = "Pierre"; // OK\nconsole.log(user.name); // "Pierre"\n\n// ❌ Mais pas réassignation de l\'objet\n// user = {name: "Paul"}; // Erreur!\n\n// ✅ Tableaux: modifiables aussi\nconst colors = ["rouge", "bleu"];\ncolors.push("vert"); // OK\nconsole.log(colors); // ["rouge", "bleu", "vert"]',
    preview: {
      type: "js",
      content: [
        "const PI = 3.14;",
        "// PI = 3.15; ❌ Cannot reassign",
        "",
        "const user = {name: 'Alex'};",
        "user.name = 'Sam'; // ✅ Modifies property"
      ]
    },
    category: "variables",
    level: "beginner",
    color: "#d2b7ff"
  },
  {
    id: 9,
    title: "prompt() - User Input",
    description: "The `prompt()` function provides a quick and native way to capture text input from a user. It displays a modal dialog containing a text field, an 'OK' button, and a 'Cancel' button. It returns a string if the user submits input, or `null` if the user cancels the interaction. While perfect for rapid prototyping or simple logic drills, modern production web apps typically replace native prompts with custom-styled HTML/CSS modals for superior user experience.",
    example: '// Simple prompt\nlet name = prompt("Quel est votre nom?");\nalert("Bonjour " + name + "!");\n\n// Avec valeur par défaut\nlet age = prompt("Quel âge avez-vous?", "18");\nconsole.log("Âge:", age);\n\n// Vérification si annulé\nlet color = prompt("Couleur préférée?");\nif (color !== null) {\n  document.body.style.backgroundColor = color;\n} else {\n  alert("Annulé!");\n}\n\n// Conversion du résultat\nlet quantity = prompt("Quantité:", "1");\nlet total = Number(quantity) * 10;\nconsole.log("Total:", total, "€");',
    preview: {
      type: "js",
      content: [
        'let name = prompt("Your name?", "Guest");',
        'alert("Hello " + name + "!");',
        "",
        "// Returns null if cancelled",
        "if (name !== null) {",
        "  console.log(name);",
        "}"
      ],
      props: {
        interactive: true
      }
    },
    category: "variables",
    level: "beginner",
    color: "#d2b7ff"
  },

  // ============ DATA TYPES ============
  {
    id: 10,
    title: "Number - Integers & Floats",
    description: "JavaScript uses a singular `Number` type to represent both whole integers and decimal floating-point values, following the IEEE 754 64-bit standard. This unified system simplifies basic calculations but requires developers to be mindful of precision limits in extremely large or small decimals. The language also includes special numeric constants like `NaN` (Not a Number) for invalid operations and `Infinity` for mathematical overflows.",
    example: '// Entiers et décimaux\nlet entier = 42;\nlet decimal = 3.14;\nlet negatif = -10;\n\n// Opérations de base\nlet sum = 5 + 3;      // 8\nlet product = 5 * 3;  // 15\nlet division = 15 / 3; // 5\nlet modulo = 5 % 2;   // 1 (reste)\n\n// Incrémentation/décrémentation\nlet x = 5;\nx++; // x = 6\nx--; // x = 5\n\n// NaN (Not a Number)\nlet invalid = "abc" * 2; // NaN\nconsole.log(isNaN(invalid)); // true\n\n// Infinity\nlet huge = 1 / 0; // Infinity',
    preview: {
      type: "js",
      content: [
        "let int = 42;",
        "let float = 3.14;",
        "",
        "5 + 3; // 8",
        "15 / 3; // 5",
        "5 % 2; // 1 (remainder)",
        "",
        "let x = 5;",
        "x++; // 6"
      ]
    },
    category: "basics",
    level: "beginner",
    color: "#ffb7c5" 
  },
  {
    id: 11,
    title: "Math Object - Utilities",
    description: "The built-in `Math` object acts as a powerful library of mathematical constants (like `PI`) and complex functions for numerical manipulation. Since it is a static object, you do not instantiate it; instead, you call its methods directly. Key utilities include `Math.random()` for generating seeded floats, `Math.floor()` and `Math.ceil()` for precise rounding, and `Math.abs()` for calculating absolute distance, forming the backbone of all logic involving geometry or physics engines.",
    example: '// Constantes\nconsole.log(Math.PI); // 3.141592653589793\n\n// Arrondis\nMath.round(4.6);    // 5\nMath.round(4.4);    // 4\nMath.floor(4.9);    // 4 (arrondi inférieur)\nMath.ceil(4.1);     // 5 (arrondi supérieur)\nMath.trunc(4.9);    // 4 (supprime décimales)\n\n// Puissance et racine\nMath.pow(2, 3);     // 8 (2³)\nMath.sqrt(16);      // 4\nMath.abs(-5);       // 5\n\n// Aléatoire\nMath.random();      // 0.0 à 0.999...\n// Entier entre 1 et 10\nlet dice = Math.floor(Math.random() * 10) + 1;\n\n// Min/Max\nMath.max(10, 5, 20); // 20\nMath.min(10, 5, 20); // 5',
    preview: {
      type: "js",
      content: [
        "Math.PI; // 3.14159...",
        "Math.round(4.6); // 5",
        "Math.floor(4.9); // 4",
        "Math.ceil(4.1); // 5",
        "",
        "Math.random(); // 0.0 to 0.999",
        "Math.max(1, 5, 3); // 5"
      ]
    },
    category: "basics",
    level: "beginner",
    color: "#ffb7c5"
  },
  {
    id: 12,
    title: "Number Conversion",
    description: "When dealing with external data like user inputs or API strings, converting those values into valid numbers is a fundamental skill. Global functions like `parseInt()` extract integers from mixed strings, while `parseFloat()` preserves decimal precision. The global `Number()` constructor provides a stricter total conversion, while the 'unary plus' operator (`+`) offers a hyper-concise shortcut favored by veteran developers for lightning-fast casting.",
    example: '// Number() - Général\nNumber("42");        // 42\nNumber("42.5");      // 42.5\nNumber("abc");       // NaN\nNumber(true);        // 1\nNumber(false);       // 0\n\n// parseInt() - Entier\nparseInt("42");      // 42\nparseInt("42.9");    // 42 (tronque)\nparseInt("1010", 2); // 10 (binaire)\nparseInt("FF", 16);  // 255 (hex)\n\n// parseFloat() - Décimal\nparseFloat("42.5");  // 42.5\nparseFloat("3.14");  // 3.14\n\n// Unary + operator\nlet num = +"99";      // 99\n\n// toString() - Vers string\nlet n = 255;\nn.toString(16);      // "ff" (hexadécimal)',
    preview: {
      type: "js",
      content: [
        'Number("42"); // 42',
        'Number("42.5"); // 42.5',
        'Number("abc"); // NaN',
        '',
        'parseInt("42.9"); // 42',
        'parseFloat("42.9"); // 42.9'
      ]
    },
    category: "basics",
    level: "beginner",
    color: "#ffb7c5"
  },
  {
    id: 13,
    title: "String - Text Sequences",
    description: "Strings in JavaScript are immutable sequences of Unicode characters used to represent textual data. You can define them using single quotes, double quotes, or modern ES6 'backticks' (template literals). Template literals are particularly powerful because they allow multi-line strings and direct variable interpolation using `${}`. Since strings are immutable, methods like `toUpperCase()` or `replace()` do not change the original string; they return an entirely new one.",
    example: '// Déclaration\nlet simple = \'Hello\';     // Guillemets simples\nlet double = "World";     // Guillemets doubles\nlet template = `Bonjour`; // Backticks (ES6)\n\n// Concaténation\nlet message = "Hello" + " " + "World"; // "Hello World"\n\n// Template literals (interpolation)\nlet name = "Marie";\nlet greeting = `Bonjour ${name}!`; // "Bonjour Marie!"\n\n// Propriétés et méthodes\n"JavaScript".length;        // 10\n"Hello".indexOf("l");      // 2\n"Hello".lastIndexOf("l");  // 3\n"Hello".charAt(1);        // "e"\n"JS".repeat(3);           // "JSJSJS"\n\n// Immutabilité\nlet str = "Hi";\nstr[0] = "h";            // ❌ Ne change pas!\nconsole.log(str);        // "Hi"',
    preview: {
      type: "js",
      content: [
        'let str = "Hello World";',
        'str.length; // 11',
        '',
        'let name = "Alex";',
        '`Hello ${name}!`; // "Hello Alex!"',
        '',
        '"JS" + " " + "Rocks"; // "JS Rocks"'
      ]
    },
    category: "basics",
    level: "beginner",
    color: "#b7ffca"
  },
  {
    id: 14,
    title: "Boolean - True/False",
    description: "The Boolean type represents a logical entity and can have only two possible values: `true` and `false`. Booleans are the vital fuel for the entire engine of control flow, including `if` statements and loops. In addition to literal boolean values, JavaScript treats all other values as either 'truthy' (evaluating to true) or 'falsy' (evaluations to false, including 0, empty strings, null, undefined, and NaN).",
    example: '// Valeurs directes\nlet isActive = true;\nlet isDeleted = false;\n\n// Opérateurs de comparaison\nlet age = 18;\nlet isAdult = age >= 18;    // true\nlet isTeen = age > 12 && age < 20; // true\nlet isChild = age < 13;     // false\n\n// Valeurs "truthy" et "falsy"\nBoolean("hello");   // true\nBoolean("");        // false\nBoolean(42);        // true\nBoolean(0);         // false\nBoolean(null);      // false\nBoolean(undefined); // false\nBoolean(NaN);       // false\n\n// Négation\nlet isLoggedIn = false;\nif (!isLoggedIn) {\n  console.log("Please log in");\n}',
    preview: {
      type: "js",
      content: [
        "let isReady = true;",
        "",
        "5 > 3; // true",
        "5 === '5'; // false",
        "",
        "Boolean(1); // true",
        "Boolean(0); // false",
        'Boolean(""); // false'
      ]
    },
    category: "basics",
    level: "beginner",
    color: "#475569" 
  },

  // ============ DATES ============
  {
    id: 15,
    title: "Date Object - Current Date",
    description: "The `Date` object allows you to work with dates and times programmatically. Initializing it via `new Date()` captures the exact millisecond precision timestamp of the current moment from the user's local operating system clock. It provides a massive suite of methods to extract localized components like the current year, month (0-indexed!), day of the month, and time, making it essential for clocks, calendars, and activity logs.",
    example: '// Date et heure actuelles\nlet now = new Date();\nconsole.log(now); // "Mon Feb 12 2024 14:30:45..."\n\n// Composants individuels\nlet d = new Date();\nd.getDate();      // Jour du mois (1-31)\nd.getMonth();     // Mois (0-11, 0=janvier)\nd.getFullYear();  // Année (4 chiffres)\nd.getDay();       // Jour semaine (0-6, 0=dimanche)\n\n// Heures\nd.getHours();     // Heures (0-23)\nd.getMinutes();   // Minutes (0-59)\nd.getSeconds();   // Secondes (0-59)\n\n// Formatage\nnow.toString();      // "Mon Feb 12 2024 14:30:45..."\nnow.toLocaleDateString(); // "12/02/2024" (local)\nnow.toLocaleTimeString(); // "14:30:45" (local)\n\n// Timestamp (ms depuis 1970)\nnow.getTime();      // 1707754245123',
    preview: {
      type: "js",
      content: [
        "let now = new Date();",
        "now.getDate(); // Day of month",
        "now.getMonth(); // 0-11 (0=Jan)",
        "now.getFullYear(); // 2025",
        "",
        "now.toLocaleDateString(); // Local format"
      ]
    },
    category: "dates",
    level: "intermediate",
    color: "#64748b"
  },
  {
    id: 16,
    title: "Date - Parse String",
    description: "Beyond just the current time, JavaScript can construct `Date` objects from historical or future strings. Using standard ISO format (`YYYY-MM-DD`) is the most reliable way to ensure cross-browser consistency. Crucially, when constructing dates using numeric arguments like `new Date(2025, 7, 19)`, the month parameter is 'zero-based,' meaning 0 represents January and 11 represents December—a frequent source of logic errors for beginners.",
    example: '// ISO format (recommandé)\nlet d1 = new Date("2025-08-19");\nconsole.log(d1); // "Tue Aug 19 2025 ..."\n\n// Avec heure\nlet d2 = new Date("2025-08-19T10:30:00");\n\n// Format US\nlet d3 = new Date("August 19, 2025");\n\n// ⚠️ Mois: 0 = janvier, 11 = décembre\nlet d4 = new Date(2025, 7, 19); // 7 = août!\nconsole.log(d4.getMonth()); // 7\n\n// Attention: composants vs string!\nnew Date("2025-08-19"); // UTC\nnew Date(2025, 7, 19);  // Heure locale\n\n// Timestamp\nlet d5 = new Date(1707754245123); // ms depuis 1970',
    preview: {
      type: "js",
      content: [
        'let d = new Date("2025-08-19");',
        'd.getFullYear(); // 2025',
        'd.getMonth(); // 7 (August!)',
        'd.getDate(); // 19',
        '',
        '// Month is 0-based!',
        '// 7 = August, not September'
      ]
    },
    category: "dates",
    level: "intermediate",
    color: "#64748b"
  },

  // ============ ARRAYS ============
  {
    id: 17,
    title: "Array - Collections",
    description: "Arrays are high-level, list-like objects whose prototype has methods to perform traversal and mutation operations. They are ordered collections where each item is assigned a numeric index starting at exactly 0. Arrays are dynamic, meaning their length can change automatically as you add or remove elements. Their ability to hold mixed data types (numbers, strings, and even other arrays) makes them the fundamental structure for handling datasets in web applications.",
    example: '// Création\nlet vide = [];\nlet fruits = ["pomme", "banane", "cerise"];\nlet mixte = [42, "texte", true, null, [1,2]];\n\n// Accès par index (0-based)\nfruits[0];      // "pomme"\nfruits[2];      // "cerise"\nfruits[3];      // undefined (hors limites)\n\n// Modification\nfruits[1] = "orange";\nconsole.log(fruits); // ["pomme", "orange", "cerise"]\n\n// Propriété length\nfruits.length;      // 3\n\n// Ajout/retrait\nfruits.push("kiwi");   // Ajoute à la fin\nlet last = fruits.pop(); // Retire le dernier\nfruits.unshift("mangue"); // Ajoute au début\nlet first = fruits.shift(); // Retire le premier\n\n// Parcours\nfor(let fruit of fruits) {\n  console.log(fruit);\n}',
    preview: {
      type: "js",
      content: [
        "let fruits = ['apple', 'banana', 'cherry'];",
        "fruits[0]; // 'apple'",
        "fruits[2] = 'orange';",
        "",
        "fruits.length; // 3",
        "fruits.push('grape'); // Add to end"
      ]
    },
    category: "arrays",
    level: "beginner",
    color: "#b7ffca"
  },

  // ============ CONDITIONALS ============
  {
    id: 18,
    title: "if / else if / else",
    description: "Conditional statements are the primary logic gatekeepers of your code, allowing you to branch logic based on specific boolean truths. The `if` statement evaluates an expression; if true, it triggers the block. You can chain multiple `else if` conditions to check sequential possibilities, finally concluding with a 'catch-all' `else` block for scenarios where none of the previous conditions were met. This structure is the essential DNA for building complex decision-making algorithms.",
    example: 'let note = 75;\n\n// Simple if\nif (note >= 50) {\n  console.log("Réussite!");\n}\n\n// if...else\nif (note >= 50) {\n  console.log("Admis");\n} else {\n  console.log("Échec");\n}\n\n// if...else if...else\nlet score = 85;\n\nif (score >= 90) {\n  console.log("A");\n} else if (score >= 80) {\n  console.log("B"); // ✅ Ce bloc s\'exécute\n} else if (score >= 70) {\n  console.log("C");\n} else {\n  console.log("D");\n}\n\n// Conditions multiples\nlet age = 25;\nlet hasLicense = true;\n\nif (age >= 18 && hasLicense) {\n  console.log("Peut conduire");\n}',
    preview: {
      type: "js",
      content: [
        "let x = 10;",
        "",
        "if (x > 0) {",
        '  console.log("Positive");',
        "} else if (x < 0) {",
        '  console.log("Negative");',
        "} else {",
        '  console.log("Zero");',
        "}"
      ]
    },
    category: "control",
    level: "beginner",
    color: "#c5e6ff"
  },
  {
    id: 19,
    title: "switch Statement",
    description: "A `switch` statement evaluates an expression once and compares it against a series of possible `case` values via strict equality (`===`). It is often much cleaner and more efficient than long chains of `if...else if`. Crucially, you must use the `break` keyword at the end of every case to prevent 'fall-through,' where the engine continues executing subsequent cases regardless of their value. The `default` case acts as a safety net if no matches are found.",
    example: 'let day = 3;\nlet dayName;\n\nswitch (day) {\n  case 1:\n    dayName = "Lundi";\n    break;\n  case 2:\n    dayName = "Mardi";\n    break;\n  case 3:\n    dayName = "Mercredi"; // ✅ Ce cas\n    break;\n  case 4:\n    dayName = "Jeudi";\n    break;\n  case 5:\n    dayName = "Vendredi";\n    break;\n  default:\n    dayName = "Week-end";\n}\nconsole.log(dayName); // "Mercredi"\n\n// Fall-through volontaire (grouper cas)\nlet month = 2;\nlet season;\n\nswitch (month) {\n  case 12:\n  case 1:\n  case 2:\n    season = "Hiver"; // ✅ Décembre-Mars\n    break;\n  case 3:\n  case 4:\n  case 5:\n    season = "Printemps";\n    break;\n  // ...\n}',
    preview: {
      type: "js",
      content: [
        "let fruit = 'apple';",
        "",
        "switch(fruit) {",
        "  case 'apple':",
        "    console.log('Apple');",
        "    break;",
        "  case 'banana':",
        "    console.log('Banana');",
        "    break;",
        "  default:",
        "    console.log('Other');",
        "}"
      ]
    },
    category: "control",
    level: "intermediate",
    color: "#c5e6ff"
  },

  // ============ DOM MANIPULATION ============
  {
    id: 20,
    title: "getElementById()",
    description: "Finding elements is the first step in DOM manipulation. `getElementById()` is the most direct and optimized selector in the browser's arsenal. It returns the singular reference to an element whose `id` attribute matches the provided string. Since IDs are meant to be unique across a page, this method is significantly faster than querying classes or tag names. Once captured, that reference becomes your master key to modifying any property of that specific HTML node.",
    example: '<!-- HTML -->\n<h1 id="titre">Bienvenue</h1>\n<h1 id="titre2">Contact</h1>\n<p id="paragraphe">Texte original</p>\n\n<script>\n  // Cibler un élément par ID\n  let titre = document.getElementById("titre");\n  \n  // Lire contenu\n  alert(titre.innerHTML); // "Bienvenue"\n  \n  // Modifier contenu\n  titre.innerHTML = "Nouveau titre!";\n  \n  // Modifier style\n  titre.style.color = "#c5e6ff";\n  \n  // Le second h1 n\'est pas affecté\n  let contact = document.getElementById("titre2");\n  contact.style.fontSize = "24px";\n</script>',
    preview: {
      type: "html",
      content: [
        '<h1 id="title">Hello</h1>',
        "",
        "<script>",
        '  let el = document.getElementById("title");',
        '  el.innerHTML = "Changed!";',
        '  el.style.color = "blue";',
        "</script>"
      ],
      props: {
        interactive: true
      }
    },
    category: "dom",
    level: "beginner",
    color: "#ffb7c5"
  },
  {
    id: 21,
    title: "innerHTML - Get/Set Content",
    description: "The `innerHTML` property is a powerful way to get or set the entire HTML content residing inside an element. When setting this property, you can pass raw strings containing nested tags like `<strong>` or `<div>`, and the browser will automatically parse and render them instantly. However, extreme caution is required when using `innerHTML` with data from external sources or user inputs, as it can inadvertently trigger Cross-Site Scripting (XSS) attacks if not properly sanitized.",
    example: '<!-- HTML -->\n<p id="paragraphe">Texte original</p>\n<button onclick="changer()">Changer le texte</button>\n\n<script>\nfunction changer() {\n  // Cibler l\'élément\n  let p = document.getElementById("paragraphe");\n  \n  // Lire contenu (optionnel)\n  console.log("Avant:", p.innerHTML); // "Texte original"\n  \n  // Modifier contenu\n  p.innerHTML = "Texte <strong>modifié</strong> avec JavaScript";\n  \n  // Ajouter HTML\n  p.innerHTML += \' <span style="color:red">Nouveau!</span>\';\n}\n</script>',
    preview: {
      type: "html",
      content: [
        '<p id="demo">Original</p>',
        "",
        "<script>",
        '  document.getElementById("demo").innerHTML =',
        '    "New <em>content</em>!";',
        "</script>"
      ],
      props: {
        interactive: true
      }
    },
    category: "dom",
    level: "beginner",
    color: "#ffb7c5"
  },
  {
    id: 22,
    title: "Modify Attributes",
    description: "Beyond internal content, JavaScript can programmatically reach out and rewrite the specific attributes of any HTML tag. By accessing the DOM reference, you can dynamically swap the `src` of an `<img>` to create sliders, redirect a `<a>` tag's `href` based on user results, or toggle the `disabled` state of a form `<button>` until validation requirements are met. This allows the page interface to adapt seamlessly and intelligently to the user's specific state in real-time.",
    example: '<!-- HTML -->\n<img id="photo" src="placeholder.jpg" alt="Image pas encore chargée">\n<button onclick="changerImage()">Changer l\'image</button>\n\n<script>\nfunction changerImage() {\n  let img = document.getElementById("photo");\n  \n  // Modifier attribut src\n  img.src = "https://picsum.photos/200/300";\n  \n  // Modifier attribut alt\n  img.alt = "Image aléatoire depuis Lorem Picsum";\n  \n  // Modifier attribut width/height\n  img.width = 300;\n  img.height = 200;\n  \n  // Autres exemples\n  let link = document.getElementById("myLink");\n  link.href = "https://example.com";\n  link.target = "_blank";\n  \n  let input = document.getElementById("myInput");\n  input.disabled = true;\n  input.placeholder = "Désactivé";\n}\n</script>',
    preview: {
      type: "html",
      content: [
        '<img id="pic" src="old.jpg">',
        '<button onclick="changeSrc()">Change</button>',
        "",
        "<script>",
        "function changeSrc() {",
        '  let img = document.getElementById("pic");',
        '  img.src = "new.jpg";',
        "}",
        "</script>"
      ],
      props: {
        interactive: true
      }
    },
    category: "dom",
    level: "beginner",
    color: "#ffb7c5"
  },
  {
    id: 23,
    title: "Modify CSS Style",
    description: "The `.style` property provides direct, surgical access to an element's inline CSS rules purely through JavaScript logic. Because JavaScript variable names cannot contain hyphens, standard CSS properties like `background-color` or `font-size` are automatically translated into 'camelCase' (e.g., `backgroundColor` and `fontSize`). While modifying individual styles is excellent for dynamic effects, many developers prefer using `.classList.add()` or `.remove()` to toggle predefined CSS classes for cleaner code and easier debugging.",
    example: '<!-- HTML -->\n<p id="texte">Bonjour tout le monde !</p>\n<button onclick="changerStyle()">Changer style</button>\n\n<script>\nfunction changerStyle() {\n  let p = document.getElementById("texte");\n  \n  // Propriétés CSS individuelles\n  p.style.color = "red";              // couleur du texte\n  p.style.fontSize = "20px";         // taille police\n  p.style.backgroundColor = "yellow"; // fond jaune\n  \n  // CSS avec tirets -> camelCase\n  // background-color -> backgroundColor\n  // font-size -> fontSize\n  // border-radius -> borderRadius\n  \n  // Ajouter plusieurs styles\n  p.style.cssText = "font-weight: bold; padding: 10px; border: 1px solid black;";\n  \n  // Classes CSS\n  // p.classList.add("highlight");\n  // p.classList.remove("old-style");\n}\n</script>',
    preview: {
      type: "html",
      content: [
        '<p id="text">Hello World!</p>',
        '<button onclick="changeColor()">Color</button>',
        "",
        "<script>",
        "function changeColor() {",
        '  let p = document.getElementById("text");',
        '  p.style.color = "blue";',
        '  p.style.fontSize = "24px";',
        "}",
        "</script>"
      ],
      props: {
        interactive: true
      }
    },
    category: "dom",
    level: "beginner",
    color: "#ffb7c5"
  },
  {
    id: 24,
    title: "Video/Audio Control",
    description: "Modern browsers treat media tags like `<video>` and `<audio>` as complex interactive objects with their own specialized API in JavaScript. Beyond simple play and pause, you can programmatically monitor and manipulate playback speed, adjust volume levels on a 0-1 scale, jump to specific timestamps using `currentTime`, and even listen for specific events like `ended` or `waiting` (buffering). This programmatic control is the core engine behind custom media player skins and immersive multimedia experiences.",
    example: '<!-- HTML -->\n<video id="maVideo" width="320" height="240" controls>\n  <source src="exemple.mp4" type="video/mp4">\n  Votre navigateur ne supporte pas la vidéo.\n</video>\n<br>\n<button onclick="lire()">▶️ Lire</button>\n<button onclick="pauseVideo()">⏸️ Pause</button>\n<button onclick="stopVideo()">⏹️ Stop</button>\n\n<script>\nlet video = document.getElementById("maVideo");\n\nfunction lire() {\n  video.play();\n}\n\nfunction pauseVideo() {\n  video.pause();\n}\n\nfunction stopVideo() {\n  video.pause();\n  video.currentTime = 0; // Retour au début\n}\n\n// Propriétés utiles\n// video.volume = 0.5;  // Volume 0-1\n// video.muted = true;   // Muet\n// video.loop = true;    // Boucle\n</script>',
    preview: {
      type: "html",
      content: [
        '<video id="vid" width="200">',
        '  <source src="video.mp4">',
        "</video>",
        '<button onclick="playVideo()">Play</button>',
        "",
        "<script>",
        "function playVideo() {",
        '  document.getElementById("vid").play();',
        "}",
        "</script>"
      ],
      props: {
        interactive: true
      }
    },
    category: "dom",
    level: "intermediate",
    color: "#ffb7c5"
  },

  // ============ FUNCTIONS ============
  {
    id: 25,
    title: "Function Declaration",
    description: "A function declaration is a way to create a reusable block of logic that can be executed many times with different inputs. Declaring a function typically involves naming it and defining 'parameters'—the placeholders for variables that you will pass in when you 'call' the function. Functions in JavaScript 'return' a value back to the code that called them; if no return is specified, they return `undefined`. Masterfully structuring functions allows you to build modular, readable, and highly maintainable software architectures.",
    example: '// Déclaration de fonction\nfunction saluer(nom) {\n  return "Bonjour " + nom + "!";\n}\n\n// Appel\nconsole.log(saluer("Marie")); // "Bonjour Marie!"\n\n// Sans paramètres\nfunction direBonjour() {\n  console.log("Bonjour!");\n}\ndireBonjour(); // "Bonjour!"\n\n// Avec plusieurs paramètres\nfunction addition(a, b) {\n  return a + b;\n}\nlet resultat = addition(5, 3);\nconsole.log(resultat); // 8\n\n// Paramètres par défaut (ES6)\nfunction puissance(base, exposant = 2) {\n  return base ** exposant;\n}\nconsole.log(puissance(4));   // 16 (4²)\nconsole.log(puissance(2, 3)); // 8 (2³)\n\n// Return optionnel\nfunction logger(message) {\n  console.log(message);\n  // return undefined (implicite)\n}',
    preview: {
      type: "js",
      content: [
        "function greet(name) {",
        '  return "Hello " + name + "!";',
        "}",
        '',
        'greet("Alex"); // "Hello Alex!"',
        "",
        "function add(a, b) {",
        "  return a + b;",
        "}",
        "add(5, 3); // 8"
      ]
    },
    category: "functions",
    level: "beginner",
    color: "#d2b7ff"
  },
  {
    id: 26,
    title: "Arrow Functions",
    description: "Arrow functions, introduced in ES6, provide an incredibly concise syntax for writing function expressions. Using the 'fat arrow' (`=>`) operator, they often eliminate the need for the `function` keyword and even curly braces or `return` if the logic is a single expression. Perhaps most critically, arrow functions do not have their own `this` context—instead, they 'inherit' the `this` value from their surrounding code block, effectively terminating the historic confusion of context binding in callbacks.",
    example: "const add = (a, b) => a + b;\n\n// Avec accolades\nconst saluer = nom => {\n  console.log(`Hello ${nom}`);\n};\n\n// Idéal pour les callbacks\n[1, 2, 3].map(n => n * 2);",
    preview: { type: "js", content: ["const func = () => {}"] },
    category: "functions",
    level: "intermediate",
    color: "#d2b7ff"
  },
  {
    id: 27,
    title: "Array Methods (Map/Filter)",
    description: "Modern JavaScript champions a 'declarative' style of programming, particularly when handling datasets through powerful array methods like `.map()` and `.filter()`. These methods iterate over each element of an array, applying a transformation or check without needing manual `for` loops. While `.map()` returns a new array of the same length containing transformed values, `.filter()` returns a potentially smaller subset of values that passed a specific logic test, making data processing remarkably elegant and readable.",
    example: "const numbers = [1, 2, 3, 4, 5];\n\n// map: Transforme\nconst doubles = numbers.map(n => n * 2);\n\n// filter: Filtre\nconst evens = numbers.filter(n => n % 2 === 0);\n\n// reduce: Accumule\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0);",
    preview: { type: "js", content: [".map()", ".filter()", ".reduce()"] },
    category: "arrays",
    level: "intermediate",
    color: "#b7ffca"
  },
  {
    id: 28,
    title: "Promises",
    description: "A `Promise` acts as a placeholder for a value that is currently unknown but will eventually be available (resolved) or fail (rejected). This is the absolute cornerstone of asynchronous programming in JavaScript—essential for tasks like fetching server data or waiting for a timer without freezing the entire browser UI. A Promise starts in a 'pending' state and eventually transitions to either 'fulfilled' (giving you the data) or 'rejected' (giving you the error), allowing you to chain logic via `.then()` and `.catch()`.",
    example: "const fetchData = new Promise((resolve, reject) => {\n  setTimeout(() => resolve(\"Data loaded!\"), 1000);\n});\n\nfetchData\n  .then(data => console.log(data))\n  .catch(err => console.error(err));",
    preview: { type: "js", content: ["resolve()", "reject()", ".then().catch()"] },
    category: "control",
    level: "advanced",
    color: "#c5e6ff"
  },
  {
    id: 29,
    title: "Async / Await",
    description: "The `async` and `await` keywords are a form of 'syntactic sugar' built on top of Promises, designed to make asynchronous network requests look and feel exactly like simple synchronous code. By marking a function as `async`, you gain the power to use `await`, which effectively tells the engine to pause execution of that specific function until a Promise resolves, then beautifully continue on with the result. This dramatically reduces the complexity of 'callback hell' and makes error handling via `try...catch` completely intuitive.",
    example: "async function getUser() {\n  try {\n    const response = await fetch('/api/user');\n    const data = await response.json();\n    console.log(data);\n  } catch (err) {\n    console.error(\"Erreur:\", err);\n  }\n}",
    preview: { type: "js", content: ["async function", "await", "try...catch"] },
    category: "control",
    level: "advanced",
    color: "#c5e6ff"
  },
  {
    id: 30,
    title: "Fetch API",
    description: "The `fetch()` API is the modern browser's interface for executing network requests to external servers. It replaces the old, clunky `XMLHttpRequest` with a clean, Promise-based system. When you 'fetch' a URL, you receive a Response object; you then typically call `response.json()` to parse that raw packet stream into a usable JavaScript object. It is the primary tool used by frontend developers to integrate third-party APIs like weather data, payment processors, or database backends.",
    example: "fetch('https://jsonplaceholder.typicode.com/posts/1')\n  .then(response => {\n    if (!response.ok) throw new Error('Network response was not ok');\n    return response.json();\n  })\n  .then(data => console.log(data))\n  .catch(error => console.error('Fetch error:', error));",
    preview: { type: "js", content: ["fetch(url)", "response.json()"] },
    category: "dom",
    level: "advanced",
    color: "#ffb7c5"
  },
  {
    id: 31,
    title: "Destructuring",
    description: "Destructuring is a concise ES6 specialized syntax that allows you to 'unpack' values from arrays or properties from objects directly into distinct, standalone variables. Instead of writing separate repetitive lines of code to extract user profile data, you can capture multiple fields in a single line using curly braces `{}` for objects or square brackets `[]` for arrays. This leads to significantly cleaner, more expressive code, and is used extensively in modern frameworks like React for managing component props and state.",
    example: "const user = { nom: 'Alice', age: 25, ville: 'Paris' };\nconst { nom, age } = user;\n\nconst couleurs = ['Rouge', 'Bleu', 'Vert'];\nconst [primaire, secondaire] = couleurs;",
    preview: { type: "js", content: ["{ a, b } = obj", "[x, y] = arr"] },
    category: "variables",
    level: "intermediate",
    color: "#d2b7ff"
  },
  {
    id: 32,
    title: "Classes & OOP",
    description: "The `class` keyword serves as a blueprint for creating objects that share similar properties and behaviors, bringing the structured world of Object-Oriented Programming (OOP) to JavaScript. Using `constructor()` functions and the `new` keyword, you can instantiate unique objects while maintaining central logic for methods. Perhaps most powerfully, classes support 'inheritance' via `extends`, allowing you to create specialized sub-classes (like a Dog inheriting from Animal) that share foundational code while adding unique traits.",
    example: "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  parler() {\n    return `${this.name} fait du bruit.`;\n  }\n}\n\nclass Chien extends Animal {\n  parler() {\n    return `${this.name} aboie.`;\n  }\n}\n\nconst rex = new Chien('Rex');\nconsole.log(rex.parler());",
    preview: { type: "js", content: ["class", "constructor()", "extends"] },
    category: "functions",
    level: "advanced",
    color: "#d2b7ff"
  }
];

// ============ CATEGORIES FOR FILTERING ============
export const javascriptCategories = [
  { id: "all", name: "All Concepts", color: "#94a3b8" },
  { id: "basics", name: "Basics & Output", color: "#c5e6ff" },
  { id: "variables", name: "Variables & Data", color: "#d2b7ff" },
  { id: "dom", name: "DOM Manipulation", color: "#ffb7c5" },
  { id: "functions", name: "Functions", color: "#d2b7ff" },
  { id: "arrays", name: "Arrays", color: "#b7ffca" },
  { id: "dates", name: "Dates", color: "#64748b" },
  { id: "control", name: "Control Flow", color: "#c5e6ff" }
];

// ============ LEVELS FOR FILTERING ============
export const javascriptLevels = [
  { id: "all", name: "All Levels", color: "#94a3b8" },
  { id: "beginner", name: "Beginner", color: "#b7ffca" },
  { id: "intermediate", name: "Intermediate", color: "#ffb7c5" },
  { id: "advanced", name: "Advanced", color: "#c5e6ff" }
];

// ============ KEY CONCEPTS SUMMARY ============
export const javascriptQuickReference = [
  {
    title: "Output Methods",
    items: [
      'alert("message") - Popup',
      'console.log("debug") - Console',
      'document.write() - Write to page',
      'prompt("Question") - Get input'
    ],
    color: "#c5e6ff"
  },
  {
    title: "Variables",
    items: [
      "let - Reassignable, block scope",
      "const - Cannot reassign, block scope",
      "var - Old, function scope (avoid)"
    ],
    color: "#d2b7ff"
  },
  {
    title: "Data Types",
    items: [
      "Number - 42, 3.14, NaN",
      "String - 'text', `template`",
      "Boolean - true, false",
      "Array - [1, 2, 3]",
      "Object - {key: 'value'}"
    ],
    color: "#ffb7c5"
  },
  {
    title: "DOM Selection",
    items: [
      'getElementById("id") - Single',
      'getElementsByName("name") - Collection',
      'querySelector(".class") - First match',
      'querySelectorAll("div") - All matches'
    ],
    color: "#b7ffca"
  },
  {
    title: "DOM Manipulation",
    items: [
      "element.innerHTML - HTML content",
      "element.textContent - Text only",
      "element.style.property = 'value'",
      "element.src / href / alt - Attributes",
      "element.play() / pause() - Media"
    ],
    color: "#ffb7c5"
  }
];