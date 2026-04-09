// 1. EXPORT INTERFACE FIRST
export interface HTMLLesson {
  id: number;
  tag: string;
  title: string;
  description: string;
  example: string;
  preview: {
    type:
      | "headings"
      | "paragraphs"
      | "links"
      | "images"
      | "lists"
      | "generic"
      | "table"
      | "audio"
      | "video"
      | "form"
      | "select"
      | "textarea"
      | "details"
      | "figure"
      | "iframe"
      | "div"
      | "span"
      | "br"
      | "hr";
    content?: string[];
    props?: any;
  };
  category:
    | "basics"
    | "text"
    | "media"
    | "lists"
    | "forms"
    | "semantic"
    | "tables"
    | "interactive"
    | "containers"
    | "metadata";
  level: "beginner" | "intermediate" | "advanced";
  color: string;
}

// 2. EXPORT DATA ARRAY WITH TYPE - PURE HTML, NO CSS!
export const htmlLessons: HTMLLesson[] = [
  // ============================================
  // BASICS & STRUCTURE
  // ============================================
  {
    id: 1,
    tag: "<h1>",
    title: "Headings",
    description:
      "Headings define the titles and hierarchy of your web page content. The <h1> tag represents the most important heading (typically used once for the main page title), while <h6> represents the least important. Using correct heading levels not only improves the visual structure but is also essential for Search Engine Optimization (SEO) and accessibility, as screen readers rely on headers to navigate through a document.",
    example:
      "<h1>Welcome to My Website</h1>\n<h2>About Me</h2>\n<h3>My Hobbies</h3>\n<h4>Favorite Books</h4>\n<h5>Daily Routine</h5>\n<h6>Small Notes</h6>",
    preview: {
      type: "headings",
      content: [
        "Welcome to My Website",
        "About Me",
        "My Hobbies",
        "Favorite Books",
        "Daily Routine",
        "Small Notes",
      ],
    },
    category: "basics",
    level: "beginner",
    color: "#c5e6ff",
  },
  {
    id: 2,
    tag: "<p>",
    title: "Paragraphs",
    description:
      "The <p> element defines a paragraph of text. Browsers automatically wrap this block-level element with empty space (margins) above and below it to visually separate it from surrounding content. It is the fundamental building block for all large bodies of text on the web, ensuring that articles, blog posts, and descriptions remain readable and well-structured.",
    example:
      "<p>HTML is the standard markup language for creating web pages. It describes the structure of a web page using elements like headings, paragraphs, links, and images.</p>\n<p>CSS is used to style HTML elements. It controls colors, fonts, layouts, and responsive design.</p>\n<p>JavaScript makes web pages interactive. It can update content, animate elements, and handle user events.</p>",
    preview: {
      type: "paragraphs",
      content: [
        "HTML is the standard markup language for creating web pages...",
        "CSS is used to style HTML elements...",
        "JavaScript makes web pages interactive...",
      ],
    },
    category: "basics",
    level: "beginner",
    color: "#d2b7ff",
  },
  {
    id: 3,
    tag: "<a>",
    title: "Links",
    description:
      "The anchor element <a> creates a hyperlink to other web pages, files, email addresses, or specific locations within the same page. The most critical attribute is `href` (Hypertext Reference), which dictates the destination URL. You can also use the `target=\"_blank\"` attribute to instruct the browser to open the link in a completely new tab, ensuring users don't lose their place on your current site.",
    example:
      '<a href="https://www.google.com">Search on Google</a>\n<a href="https://github.com" target="_blank">Open GitHub in new tab</a>\n<a href="#contact">Jump to Contact Section</a>\n<a href="document.pdf">Download PDF</a>\n<a href="mailto:hello@example.com">Send Email</a>',
    preview: {
      type: "links",
      content: [
        "Search on Google",
        "Open GitHub in new tab",
        "Jump to Contact Section",
        "Download PDF",
        "Send Email",
      ],
    },
    category: "basics",
    level: "beginner",
    color: "#ffb7c5",
  },
  {
    id: 4,
    tag: "<img>",
    title: "Images",
    description:
      "The <img> tag embeds an image directly into the document. Unlike most HTML elements, it is self-closing and does not contain text. The `src` attribute is strictly required—it provides the path or URL to the image file. It's also incredibly important to always include an `alt` attribute describing the image; this ensures visually impaired users utilizing screen readers understand the image, and it displays text if the image fails to load.",
    example:
      '<img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop" alt="Person coding on laptop">\n<img src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=300&h=200&fit=crop" alt="HTML code on a computer screen">\n<img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300&h=200&fit=crop" alt="Close up of coding syntax">',
    preview: {
      type: "images",
      content: [
        "Person coding on laptop",
        "HTML code on screen",
        "Coding syntax close up",
      ],
      props: {
        alt: "Coding images",
      },
    },
    category: "media",
    level: "beginner",
    color: "#b7ffca",
  },
  {
    id: 5,
    tag: "<ul>",
    title: "Unordered Lists",
    description:
      "The <ul> tag defines an unordered list, which means the items are arranged without a specific numerical sequence. By default, items inside the list are preceded by solid bullets. It works exclusively in tandem with the <li> (List Item) element to wrap individual entries. These are highly versatile and regularly used for navigation menus, features, tags, and essentially any grouped content.",
    example:
      "<h3>Shopping List</h3>\n<ul>\n  <li>Milk</li>\n  <li>Eggs</li>\n  <li>Bread</li>\n  <li>Butter</li>\n  <li>Coffee</li>\n</ul>\n\n<h3>Course Topics</h3>\n<ul>\n  <li>HTML5</li>\n  <li>CSS3</li>\n  <li>JavaScript</li>\n  <li>React</li>\n</ul>",
    preview: {
      type: "lists",
      content: [
        "Milk",
        "Eggs",
        "Bread",
        "Butter",
        "Coffee",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      props: {
        ordered: false,
      },
    },
    category: "lists",
    level: "beginner",
    color: "#ffb7c5",
  },
  {
    id: 6,
    tag: "<ol>",
    title: "Ordered Lists",
    description:
      "The <ol> tag is used for ordered lists where the sequence of items is chronologically or definitively important. The browser automatically generates numbered indicators (1, 2, 3...) for each nested <li>. When the content dictates a procedural steps sequence (e.g., recipes, how-to tutorials, ranking leaderboards), an ordered list fundamentally provides the correct semantic layout.",
    example:
      "<h3>How to Make Tea</h3>\n<ol>\n  <li>Boil water</li>\n  <li>Add tea bag to cup</li>\n  <li>Pour hot water</li>\n  <li>Steep for 3 minutes</li>\n  <li>Remove tea bag</li>\n  <li>Add sugar or honey</li>\n</ol>\n\n<h3>Top 3 Programming Languages</h3>\n<ol>\n  <li>JavaScript</li>\n  <li>Python</li>\n  <li>Java</li>\n</ol>",
    preview: {
      type: "lists",
      content: [
        "Boil water",
        "Add tea bag",
        "Pour water",
        "Steep",
        "Remove bag",
        "Add sugar",
      ],
      props: {
        ordered: true,
      },
    },
    category: "lists",
    level: "beginner",
    color: "#ffb7c5",
  },

  // ============================================
  // TEXT FORMATTING
  // ============================================
  {
    id: 7,
    tag: "<strong> & <em>",
    title: "Text Emphasis",
    description:
      "The <strong> tag indicates that its contents have strong importance, seriousness, or urgency, and browsers typically render it in a bold font face. The <em> element marks text that has stress emphasis, organically altering the meaning of the sentence—rendered typically in italics. It’s crucial to use these tags for their semantic meaning rather than just visual styling (which should be handled by CSS).",
    example:
      "<p><strong>Warning:</strong> This file will be permanently deleted.</p>\n<p>I <em>really</em> need to finish this project by Friday.</p>\n<p>The <strong>most important</strong> rule is to <em>always</em> backup your data.</p>\n<p>HTML stands for <strong>HyperText Markup Language</strong>.</p>",
    preview: {
      type: "generic",
      content: [
        "Warning: This file will be permanently deleted.",
        "I really need to finish this project by Friday.",
      ],
    },
    category: "text",
    level: "beginner",
    color: "#d2b7ff",
  },
  {
    id: 8,
    tag: "<blockquote> & <cite>",
    title: "Quotations & Citations",
    description:
      "The <blockquote> element represents a section that is quoted from another source, usually rendered with standard indentation to distinguish it. To properly credit the author or work, it's often accompanied by the <cite> element, which defines the title of a creative work (such as a book, poem, song, movie, or painting). Use these collectively to build rich, accurate, and properly credited reference components.",
    example:
      "<h3>Famous Quote</h3>\n<blockquote>\n  <p>The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.</p>\n</blockquote>\n<p>— Steve Jobs, <cite>Stanford Commencement Speech</cite></p>\n\n<h3>Book Reference</h3>\n<p>My favorite novel is <cite>The Great Gatsby</cite> by F. Scott Fitzgerald.</p>",
    preview: {
      type: "generic",
      content: [
        "The only way to do great work is to love what you do...",
        "— Steve Jobs",
        "The Great Gatsby",
      ],
    },
    category: "text",
    level: "beginner",
    color: "#d2b7ff",
  },
  {
    id: 9,
    tag: "<mark>",
    title: "Highlighted Text",
    description:
      "The <mark> tag represents text that is marked or highlighted for reference or notation purposes. Imagine it as using a yellow highlighter pen on a printed document. It draws immediate visual attention to segments of text, commonly used to denote text matching a user's search query across active results.",
    example:
      "<p>Here are your search results for <mark>HTML tutorial</mark>:</p>\n<p>The best <mark>HTML tutorial</mark> for beginners covers tags, attributes, and structure.</p>\n<p>Don't forget to practice! The <mark>HTML tutorial</mark> exercises help reinforce learning.</p>\n<p>Our <mark>HTML tutorial</mark> is completely free and updated for HTML5.</p>",
    preview: {
      type: "generic",
      content: [
        "Here are your search results for HTML tutorial:",
        "The best HTML tutorial for beginners...",
      ],
    },
    category: "text",
    level: "beginner",
    color: "#d2b7ff",
  },
  {
    id: 10,
    tag: "<br> & <hr>",
    title: "Line Breaks & Horizontal Rules",
    description:
      "The <br> (Line Break) tag is extremely specific: it inserts a single, hard line break, forcing the ensuing text to drop precisely to the next line (often used for poems or rigid addresses where formatting matters). The <hr> (Horizontal Rule) element signifies a paragraph-level thematic break, frequently displayed as a thin horizontal dividing line separating chapters, distinct concepts, or sections.",
    example:
      '<h3>Business Hours</h3>\n<p>\n  Monday: 9am - 6pm<br>\n  Tuesday: 9am - 6pm<br>\n  Wednesday: 9am - 6pm<br>\n  Thursday: 9am - 8pm<br>\n  Friday: 9am - 5pm<br>\n  Saturday: 10am - 4pm<br>\n  Sunday: Closed\n</p>\n\n<hr>\n\n<h3>Address</h3>\n<address>\n  123 Main Street<br>\n  New York, NY 10001<br>\n  USA<br>\n  <a href="mailto:info@example.com">info@example.com</a>\n</address>',
    preview: {
      type: "br",
      content: [
        "Monday: 9am-6pm",
        "Tuesday: 9am-6pm",
        "Wednesday: 9am-6pm",
        "Thursday: 9am-8pm",
        "Friday: 9am-5pm",
      ],
    },
    category: "text",
    level: "beginner",
    color: "#d2b7ff",
  },

  // ============================================
  // MEDIA
  // ============================================
  {
    id: 11,
    tag: "<video>",
    title: "Video",
    description:
      "The <video> tag is native HTML5 media support, enabling you to embed motion picture files seamlessly without leaning on third-party plugins. Using the `controls` property provides built-in browser UI overlays like play/pause, timestamps, and volume sliders. You generally employ nested <source> tags to offer multiple data formats (like MP4 and WEBM) ensuring playback compatibility across all major web browsers.",
    example:
      '<video controls>\n  <source src="tutorial.mp4" type="video/mp4">\n  <source src="tutorial.webm" type="video/webm">\n  Your browser does not support the video tag. Please <a href="tutorial.mp4">download the video</a>.\n</video>\n\n<h4>Product Demo</h4>\n<video controls>\n  <source src="demo.mp4" type="video/mp4">\n  <track src="subtitles.vtt" kind="subtitles" srclang="en" label="English">\n</video>',
    preview: {
      type: "video",
      content: ["Video player with controls", "Poster image"],
      props: {
        controls: true,
      },
    },
    category: "media",
    level: "intermediate",
    color: "#b7ffca",
  },
  {
    id: 12,
    tag: "<audio>",
    title: "Audio",
    description:
      "Similar to video, the <audio> tag natively embeds sound content, music files, or podcasts across web pages. It replaces archaic implementations by providing an elegant out-of-the-box browser audio interface complete with track scrubbing, volume manipulation, and playback speed features using the boolean `controls` attribute. You should specify file formats utilizing <source> tags for optimal fallbacks.",
    example:
      '<h3>Podcast Episode 1: Introduction to HTML</h3>\n<audio controls>\n  <source src="podcast-ep1.mp3" type="audio/mpeg">\n  <source src="podcast-ep1.ogg" type="audio/ogg">\n  Your browser does not support the audio element. <a href="podcast-ep1.mp3">Download podcast</a>\n</audio>\n\n<h3>Background Music</h3>\n<audio controls loop>\n  <source src="ambient-music.mp3" type="audio/mpeg">\n  Ambient music for concentration\n</audio>',
    preview: {
      type: "audio",
      content: ["Audio player with controls", "Podcast: Introduction to HTML"],
      props: {
        controls: true,
      },
    },
    category: "media",
    level: "intermediate",
    color: "#b7ffca",
  },
  {
    id: 13,
    tag: "<figure> & <figcaption>",
    title: "Figures with Captions",
    description:
      "The <figure> element encapsulates self-contained content that is heavily referenced throughout a structural flow, such as graphics, illustrations, diagrams, or code snippets. <figcaption> represents an illustrative caption or legend describing the parent <figure>. Implementing this semantic duo allows the user and indexing bots to correlate media items organically with their specific descriptions.",
    example:
      '<figure>\n  <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" alt="Sunset over mountains">\n  <figcaption>Sunset at Mount Rainier National Park, Washington</figcaption>\n</figure>\n\n<figure>\n  <pre>\n    <code>\nfunction hello() {\n  console.log("Hello, World!");\n}\n    </code>\n  </pre>\n  <figcaption>Simple JavaScript function example</figcaption>\n</figure>\n\n<figure>\n  <blockquote>\n    <p>The web is more a social creation than a technical one.</p>\n  </blockquote>\n  <figcaption>— Tim Berners-Lee, inventor of the World Wide Web</figcaption>\n</figure>',
    preview: {
      type: "figure",
      content: [
        "Sunset at Mount Rainier",
        "JavaScript function example",
        "Tim Berners-Lee quote",
      ],
    },
    category: "media",
    level: "intermediate",
    color: "#b7ffca",
  },

  // ============================================
  // TABLES
  // ============================================
  {
    id: 14,
    tag: "<table>",
    title: "Tables",
    description:
      "The <table> element organizes and displays structured multidimensional data clearly into aligned rows and columns. A modern robust HTML table incorporates the <thead> (for column titles), <tbody> (for the bulk of informational content), and <tfoot> (for totals or summary outputs). Utilizing correct table formatting creates an incredibly accessible spreadsheet-like interface native to the DOM.",
    example:
      '<table border="1">\n  <caption><strong>Student Grades - Fall 2024</strong></caption>\n  <thead>\n    <tr>\n      <th>Student</th>\n      <th>Math</th>\n      <th>Science</th>\n      <th>English</th>\n      <th>Average</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Emma Watson</td>\n      <td>95</td>\n      <td>88</td>\n      <td>92</td>\n      <td>91.7</td>\n    </tr>\n    <tr>\n      <td>James Smith</td>\n      <td>82</td>\n      <td>79</td>\n      <td>85</td>\n      <td>82.0</td>\n    </tr>\n    <tr>\n      <td>Maria Garcia</td>\n      <td>98</td>\n      <td>94</td>\n      <td>96</td>\n      <td>96.0</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td><strong>Class Average</strong></td>\n      <td>91.7</td>\n      <td>87.0</td>\n      <td>91.0</td>\n      <td>89.9</td>\n    </tr>\n  </tfoot>\n</table>',
    preview: {
      type: "table",
      content: [
        "Student Grades",
        "Emma Watson: 91.7",
        "James Smith: 82.0",
        "Maria Garcia: 96.0",
      ],
    },
    category: "tables",
    level: "intermediate",
    color: "#9f7aea",
  },
  {
    id: 15,
    tag: "<th> & <td>",
    title: "Table Headers & Data",
    description:
      "Inside a table row (<tr>), <th> signifies a header block—usually displaying heavily weighted boldness and centered text to signify column taxonomy. <td> dictates generic table data holding standard output. To manipulate complex table relationships, employ attributes like `rowspan` and `colspan` to instruct cells to straddle across multiple boundaries—which frequently serves effectively for complex scheduling and pricing rosters.",
    example:
      '<table border="1">\n  <tr>\n    <th colspan="4">Employee Schedule - Week 1</th>\n  </tr>\n  <tr>\n    <th>Employee</th>\n    <th>Monday</th>\n    <th>Tuesday</th>\n    <th>Wednesday</th>\n  </tr>\n  <tr>\n    <th>John</th>\n    <td>9am-5pm</td>\n    <td>9am-5pm</td>\n    <td>Off</td>\n  </tr>\n  <tr>\n    <th>Sarah</th>\n    <td>Off</td>\n    <td>10am-6pm</td>\n    <td>10am-6pm</td>\n  </tr>\n  <tr>\n    <th>Mike</th>\n    <td>1pm-9pm</td>\n    <td>1pm-9pm</td>\n    <td>1pm-9pm</td>\n  </tr>\n</table>\n\n<h4>Product Features</h4>\n<table border="1">\n  <tr>\n    <th rowspan="2">Product</th>\n    <th colspan="2">Specs</th>\n  </tr>\n  <tr>\n    <th>RAM</th>\n    <th>Storage</th>\n  </tr>\n  <tr>\n    <td>Laptop Pro</td>\n    <td>16GB</td>\n    <td>512GB</td>\n  </tr>\n</table>',
    preview: {
      type: "generic",
      content: [
        "Employee Schedule",
        "John: Mon-Tue",
        "Sarah: Tue-Wed",
        "Mike: Mon-Wed",
      ],
    },
    category: "tables",
    level: "intermediate",
    color: "#9f7aea",
  },

  // ============================================
  // FORMS
  // ============================================
  {
    id: 16,
    tag: "<form>",
    title: "Forms",
    description:
      "The <form> element wraps the entire foundation for collecting interactive user input and data submission procedures. Using crucial attributes like `action` defines the server endpoint route to send data towards, while the `method` (commonly GET or POST) dictates how the data is securely transmitted via HTTP headers. Forms orchestrate textboxes, radios, checkboxes, and buttons directly.",
    example:
      '<h3>Create Account</h3>\n<form action="/signup" method="post">\n  <label for="username">Username:</label><br>\n  <input type="text" id="username" name="username" required><br><br>\n  \n  <label for="email">Email:</label><br>\n  <input type="email" id="email" name="email" required><br><br>\n  \n  <label for="password">Password:</label><br>\n  <input type="password" id="password" name="password" minlength="8" required><br><br>\n  \n  <label for="country">Country:</label><br>\n  <select id="country" name="country">\n    <option value="us">United States</option>\n    <option value="ca">Canada</option>\n    <option value="uk">United Kingdom</option>\n    <option value="au">Australia</option>\n  </select><br><br>\n  \n  <input type="checkbox" id="terms" name="terms" required>\n  <label for="terms">I agree to the Terms of Service</label><br><br>\n  \n  <button type="submit">Sign Up</button>\n  <button type="reset">Clear</button>\n</form>',
    preview: {
      type: "form",
      content: ["Username", "Email", "Password", "Country", "Terms of Service"],
      props: {
        action: "/signup",
        method: "post",
      },
    },
    category: "forms",
    level: "intermediate",
    color: "#475569",
  },
  {
    id: 17,
    tag: "<input>",
    title: "Input Types",
    description:
      "The <input> tag is uniquely versatile. Simply by switching the `type` attribute, developers can morph it into a generic text field, an obscured dot-laden secure password field, an interactive visual calendar via date pickers, or a dynamic range slider. Native HTML validation rules ensure data hygiene simply by including attributes like `required`, `minlength`, or strict URL/Email patterns.",
    example:
      '<h3>Personal Information</h3>\n<form>\n  <label>Full name: <input type="text" name="fullname" placeholder="John Doe"></label><br><br>\n  \n  <label>Email: <input type="email" name="email" placeholder="john@example.com"></label><br><br>\n  \n  <label>Password: <input type="password" name="password" placeholder="••••••••"></label><br><br>\n  \n  <label>Age: <input type="number" name="age" min="18" max="120" value="25"></label><br><br>\n  \n  <label>Birth date: <input type="date" name="birthdate"></label><br><br>\n  \n  <label>Phone: <input type="tel" name="phone" placeholder="(123) 456-7890"></label><br><br>\n  \n  <label>Favorite color: <input type="color" name="color" value="#ff5733"></label><br><br>\n  \n  <label>Volume: <input type="range" name="volume" min="0" max="100" value="50"></label><br><br>\n  <label>Resume: <input type="file" name="resume" accept=".pdf,.doc"></label><br><br>\n  \n  <button type="submit">Submit</button>\n</form>',
    preview: {
      type: "generic",
      content: [
        "text",
        "email",
        "password",
        "number",
        "date",
        "tel",
        "color",
        "range",
        "file",
        "checkbox",
        "radio",
      ],
      props: {
        type: "various",
      },
    },
    category: "forms",
    level: "intermediate",
    color: "#475569",
  },
  {
    id: 18,
    tag: "<select>",
    title: "Dropdown Lists",
    description:
      "The <select> element generates a space-saving clickable dropdown control menu that yields multiple <option> configurations for a user. By utilizing <optgroup>, options can be elegantly tiered under disabled parent-level headings for categorization. It's often manipulated to act as a multiselect menu via the `multiple` attribute when complex combinations are needed.",
    example:
      '<h3>Choose Your Plan</h3>\n<form>\n  <label for="plan">Subscription plan:</label>\n  <select id="plan" name="plan">\n    <optgroup label="Personal">\n      <option value="basic">Basic - $9.99/month</option>\n      <option value="pro" selected>Pro - $19.99/month</option>\n      <option value="premium">Premium - $29.99/month</option>\n    </optgroup>\n    <optgroup label="Business">\n      <option value="team">Team - $49.99/month</option>\n      <option value="enterprise">Enterprise - Contact sales</option>\n    </optgroup>\n  </select><br><br>\n  \n  <label for="country">Country:</label>\n  <select id="country" name="country">\n    <option value="">-- Select your country --</option>\n    <option value="us">United States</option>\n    <option value="ca">Canada</option>\n    <option value="mx">Mexico</option>\n    <option value="uk">United Kingdom</option>\n    <option value="fr">France</option>\n  </select><br><br>\n  \n  <button type="submit">Continue</button>\n</form>',
    preview: {
      type: "select",
      content: [
        "Basic - $9.99",
        "Pro - $19.99",
        "Premium - $29.99",
        "Team - $49.99",
        "Enterprise",
      ],
      props: {
        selected: "Pro - $19.99/month",
      },
    },
    category: "forms",
    level: "intermediate",
    color: "#475569",
  },
  {
    id: 19,
    tag: "<textarea>",
    title: "Textarea",
    description:
      "When standard input fields simply aren't large enough to accommodate robust entries, the <textarea> handles massive multi-line strings. Specifically tailored for descriptive biographies, extended contact ticket messages, or product review essays. Control its default dimensional capacity spanning strictly configurable grids driven precisely by character `rows` and `cols` attributes.",
    example:
      '<h3>Contact Us</h3>\n<form>\n  <label for="name">Name:</label><br>\n  <input type="text" id="name" name="name"><br><br>\n  \n  <label for="email">Email:</label><br>\n  <input type="email" id="email" name="email"><br><br>\n  \n  <label for="message">Your Message:</label><br>\n  <textarea id="message" name="message" rows="6" cols="50" placeholder="Please write your message here..." maxlength="500"></textarea><br>\n  <small>Maximum 500 characters</small><br><br>\n  \n  <h4>Product Review</h4>\n  <label for="review">Share your experience:</label><br>\n  <textarea id="review" name="review" rows="4" cols="50">I really enjoyed using this product. The quality is excellent and delivery was fast. Would definitely recommend!</textarea><br><br>\n  \n  <button type="submit">Send Message</button>\n</form>',
    preview: {
      type: "textarea",
      content: ["6 rows x 50 columns", "Maximum 500 characters"],
      props: {
        rows: 6,
        cols: 50,
        maxlength: 500,
      },
    },
    category: "forms",
    level: "intermediate",
    color: "#475569",
  },
  {
    id: 20,
    tag: "<button>",
    title: "Buttons",
    description:
      "The <button> delineates a direct interactive call-to-action click region. Unlike input components morphed into submits, a genuine <button> wraps multiple interior layers, rendering it entirely scalable to hold icons, styled formatting lines, and embedded images. When living nested freely within forms, button states will trigger immediate dynamic POST/GET submissions or reset clearing scripts instantly.",
    example:
      '<h3>Interactive Buttons</h3>\n\n<form action="/search" method="get">\n  <input type="text" name="q" placeholder="Search...">\n  <button type="submit">🔍 Search</button>\n</form>\n\n<form>\n  <input type="text" placeholder="Your name">\n  <button type="reset">🗑️ Clear</button>\n</form>\n\n<button type="button" onclick="alert(\'Download started!\')">\n  ⬇️ Download\n</button>\n\n<button type="button">\n  ❤️ Like\n</button>\n\n<button type="button" disabled>\n  ⏳ Processing...\n</button>\n\n<br><br>\n\n<button type="button">\n  <strong>🛒 Add to Cart</strong><br>\n  <small>Free shipping</small>\n</button>',
    preview: {
      type: "generic",
      content: [
        "🔍 Search",
        "🗑️ Clear",
        "⬇️ Download",
        "❤️ Like",
        "📧 Email",
        "🛒 Add to Cart",
      ],
      props: {
        type: "button",
      },
    },
    category: "forms",
    level: "beginner",
    color: "#475569",
  },
  {
    id: 21,
    tag: "<fieldset>",
    title: "Field Groups",
    description:
      "Crucial for high-tier accessibility logic, the <fieldset> clusters collectively themed sets of form inputs into cleanly drawn distinct borders, and is traditionally accompanied by a <legend> functioning as its prominent title descriptor label. Visually organizing broad surveys cleanly segregates personal variables from sensitive banking criteria, improving the visual consumption experience for all users reading.",
    example:
      '<form>\n  <fieldset>\n    <legend><strong>👤 Personal Information</strong></legend>\n    \n    <label for="fname">First name:</label><br>\n    <input type="text" id="fname" name="fname"><br><br>\n    \n    <label for="lname">Last name:</label><br>\n    <input type="text" id="lname" name="lname"><br><br>\n    \n    <label for="dob">Date of birth:</label><br>\n    <input type="date" id="dob" name="dob"><br>\n  </fieldset>\n  <br>\n  \n  <fieldset>\n    <legend><strong>📞 Contact Details</strong></legend>\n    \n    <label for="email">Email:</label><br>\n    <input type="email" id="email" name="email"><br><br>\n    \n    <label for="phone">Phone:</label><br>\n    <input type="tel" id="phone" name="phone"><br>\n  </fieldset>\n  <br>\n  \n  <fieldset>\n    <legend><strong>🔐 Account Security</strong></legend>\n    \n    <label for="pwd">Password:</label><br>\n    <input type="password" id="pwd" name="pwd"><br><br>\n    \n    <label for="confirm">Confirm password:</label><br>\n    <input type="password" id="confirm" name="confirm"><br>\n  </fieldset>\n  <br>\n  \n  <fieldset>\n    <legend><strong>📨 Newsletter Preferences</strong></legend>\n    \n    <label>\n      <input type="radio" name="frequency" value="daily">\n      Daily newsletter\n    </label><br>\n    \n    <label>\n      <input type="radio" name="frequency" value="weekly" checked>\n      Weekly digest\n    </label><br>\n    \n  </fieldset>\n  <br>\n  \n  <button type="submit">Create Account</button>\n</form>',
    preview: {
      type: "generic",
      content: [
        "Personal Information",
        "Contact Details",
        "Account Security",
        "Newsletter Preferences",
      ],
      props: {
        legend: true,
      },
    },
    category: "forms",
    level: "intermediate",
    color: "#475569",
  },

  // ============================================
  // INTERACTIVE ELEMENTS
  // ============================================
  {
    id: 22,
    tag: "<details>",
    title: "Collapsible Content",
    description:
      "A relatively newer lightweight HTML5 semantic component, the `<details>` widget generates native an autonomous accordion-style collapsible drop-down structure completely without the reliance on complicated JavaScript engineering. Upon being clicked, it safely displays the enclosed expanded content while relying prominently on the sibling `<summary>` attribute acting gracefully as universally visible persistent heading trigger text.",
    example:
      "<h3>Frequently Asked Questions</h3>\n\n<details>\n  <summary>📘 What is HTML and why do I need it?</summary>\n  <p>HTML (HyperText Markup Language) is the standard language for creating web pages. It provides the structure and meaning to content. Without HTML, web pages would just be plain text with no organization, links, images, or multimedia.</p>\n</details>\n\n<details>\n  <summary>💰 How much does this course cost?</summary>\n  <p>The course is completely free! We believe everyone should have access to quality web development education. No credit card required, no hidden fees.</p>\n</details>\n\n<details>\n  <summary>⏱️ How long will it take to complete?</summary>\n  <p>The course is self-paced. Most students complete it in 4-6 weeks studying 5 hours per week. However, you can go faster or slower depending on your schedule.</p>\n</details>\n\n<details open>\n  <summary>🎓 Will I get a certificate?</summary>\n  <p>Yes! After completing all modules and the final project, you'll receive a verified certificate of completion.</p>\n</details>",
    preview: {
      type: "details",
      content: [
        "What is HTML?",
        "How much does this cost?",
        "How long will it take?",
        "What tools do I need?",
        "Will I get a certificate?",
      ],
    },
    category: "interactive",
    level: "intermediate",
    color: "#fcd34d",
  },
  {
    id: 23,
    tag: "<iframe>",
    title: "Inline Frames",
    description:
      "IFrames afford developers the secure isolation needed to fully inject entirely external document pages smoothly directly within dynamic layouts. Their unique containment mechanism acts as a shielded window bridging separate domains tightly into one view. Primarily harnessed to pull robust mapping instances such as Google Maps directly inside contact widgets, rendering third-party advertisements intelligently, or embedding social media ecosystem comments seamlessly.",
    example:
      '<h3>Embedded Google Map</h3>\n<iframe \n  src="https://www.openstreetmap.org/export/embed.html?bbox=2.3470%2C48.8588%2C2.3490%2C48.8608&layer=mapnik"\n  style="width: 100%; height: 250px"\n  title="Map of Eiffel Tower area">\n  <p>Your browser does not support iframes. <a href="https://www.openstreetmap.org/#map=18/48.85980/2.34800">View map</a></p>\n</iframe>\n\n<h3>YouTube Video</h3>\n<iframe \n  src="https://www.youtube.com/embed/dQw4w9WgXcQ" \n  title="YouTube video player">\n</iframe>',
    preview: {
      type: "iframe",
      content: ["OpenStreetMap - Eiffel Tower", "YouTube video player"],
      props: {},
    },
    category: "containers",
    level: "intermediate",
    color: "#64748b",
  },

  // ============================================
  // CONTAINERS
  // ============================================
  {
    id: 24,
    tag: "<div>",
    title: "Division Container",
    description:
      "Standing distinctly as the fundamental core block level container, the `<div>` encapsulates code architecture entirely devoid of localized semantic footprint logic entirely. Designed explicitly to behave as flexible empty wrapping paper structurally connecting related children blocks together, paving the essential foundation to target massive CSS selector manipulation and deeply nested grid configuration layouts easily.",
    example:
      "<div>\n  <h2>Product Card</h2>\n  \n  <div>\n    <div>\n      <h3>Laptop Pro</h3>\n      <p>💻 16GB RAM, 512GB SSD</p>\n      <p>$1,299</p>\n    </div>\n    \n    <div>\n      <h3>Wireless Mouse</h3>\n      <p>🖱️ Bluetooth, rechargeable</p>\n      <p>$49</p>\n    </div>\n    \n    <div>\n      <h3>Mechanical Keyboard</h3>\n      <p>⌨️ RGB backlit, blue switches</p>\n      <p>$129</p>\n    </div>\n  </div>\n  \n  <div>\n    <p>🚚 Free shipping on orders over $100</p>\n  </div>\n</div>",
    preview: {
      type: "div",
      content: [
        "Product Card",
        "Laptop Pro",
        "Wireless Mouse",
        "Mechanical Keyboard",
      ],
    },
    category: "containers",
    level: "beginner",
    color: "#64748b",
  },
  {
    id: 25,
    tag: "<span>",
    title: "Span Container",
    description:
      "A purely inline twin concept to `<div>`, the natively constrained `<span>` element provides explicit inline boundary wrapping devoid of disrupting line formatting or causing vertical breakages. When developers must forcibly target hyper-specific single words directly occurring within massive paragraphs for precise granular coloration edits or interactive JavaScript targeting logic arrays, `<span>` assumes responsibility cleanly.",
    example:
      "<p>Today's weather: \n  <span>☀️ Sunny</span>, \n  <span>🌡️ 24°C</span>, \n  <span>💧 Humidity 45%</span>\n</p>\n\n<p>Price: \n  <span>$199</span>\n  <span style=\"text-decoration: line-through\"> $149</span>\n  <span style=\"color: red; font-weight: bold;\">SALE</span>\n</p>\n\n<p>\n  <span>⭐</span>\n  <span>4.8</span>\n  <span>(2,345 reviews)</span>\n</p>\n\n<p>\n  <span>❤️</span>\n  <span>💙</span>\n  <span>💚</span>\n  <span>Choose your favorite color</span>\n</p>",
    preview: {
      type: "span",
      content: [
        "☀️ Sunny",
        "🌡️ 24°C",
        "💧 Humidity 45%",
        "$149 SALE",
        "⭐ 4.8 (2,345 reviews)",
      ],
    },
    category: "containers",
    level: "beginner",
    color: "#64748b",
  },

  // ============================================
  // SEMANTIC HTML
  // ============================================
  {
    id: 26,
    tag: "<header>",
    title: "Header",
    description:
      "A highly purposeful block identifying preliminary orienting taxonomy. A `<header>` introduces the prominent core entity mapping parameters wrapping high-level navigation indices, universally overarching logomarks, or primary banner marketing imagery. Rather than purely generic structure divs, utilizing this instructs algorithms, automated indexers, and accessibility screen reading tools directly where introduction parameters natively begin.",
    example:
      '<header style="border-bottom: 2px solid #ccc; padding-bottom: 10px;">\n  <div>\n    <div>\n      <h1 style="margin: 0;">🏫 Web Academy</h1>\n      <p style="margin: 0;">Learn to code, build the future</p>\n    </div>\n    \n    <nav>\n      <a href="#" style="margin-right: 15px;">Home</a>\n      <a href="#" style="margin-right: 15px;">Courses</a>\n      <a href="#" style="margin-right: 15px;">Pricing</a>\n      <a href="#">Contact</a>\n    </nav>\n  </div>\n</header>\n\n<article style="margin-top: 20px;">\n  <header>\n    <h2>How to Learn HTML in 2024</h2>\n    <p>Published on March 15, 2024 • By Sarah Johnson</p>\n  </header>\n  <p>HTML5 has evolved with new semantic elements that make web pages more accessible and SEO-friendly...</p>\n</article>',
    preview: {
      type: "generic",
      content: [
        "Web Academy - Learn to code",
        "Home Courses Pricing Contact",
        "How to Learn HTML in 2024",
      ],
      props: {
        semantic: true,
      },
    },
    category: "semantic",
    level: "intermediate",
    color: "#64748b",
  },
  {
    id: 27,
    tag: "<nav>",
    title: "Navigation",
    description:
      "Signals an explicitly clustered routing hierarchy mechanism grouping directional web links logically. A `<nav>` structurally categorizes overarching primary domain routing or breadcrumb tracking. This powerful descriptive wrapper flags directly to assistive interface software identifying bypassing routing nodes rapidly saving tremendous effort navigating raw list code naturally.",
    example:
      '<nav style="background: #f4f4f4; padding: 10px; border-radius: 5px;">\n  <h3>Site Navigation</h3>\n  <ul style="list-style: none; padding: 0;">\n    <li><a href="#">🏠 Dashboard</a></li>\n    <li><a href="#">📚 My Courses</a></li>\n    <li><a href="#">📊 Progress</a></li>\n    <li><a href="#">⚙️ Settings</a></li>\n  </ul>\n</nav>\n\n<nav style="margin-top: 15px;">\n  <strong>Breadcrumbs: </strong>\n  <a href="#">Home</a> / \n  <a href="#">Courses</a> / \n  <a href="#">Web Development</a> / \n  <span>HTML5 Basics</span>\n</nav>',
    preview: {
      type: "generic",
      content: [
        "Dashboard",
        "My Courses",
        "Progress",
        "Settings",
        "Breadcrumbs: Home > Courses > Web Development",
      ],
      props: {
        semantic: true,
      },
    },
    category: "semantic",
    level: "intermediate",
    color: "#64748b",
  },
  {
    id: 28,
    tag: "<main>",
    title: "Main Content",
    description:
      "A strictly enforced singleton concept signifying the exclusive primary body context for an active unique route view. You may exclusively declare `<main>` once inherently visible concurrently preventing algorithmic index duplication penalty risks. The architecture inherently disregards global sidebars, repeated header footprints, and static global footers, filtering pure distinct routing relevated narrative efficiently.",
    example:
      '<div>\n  <header style="background: #eef; padding: 10px;">\n    <h1>My Blog</h1>\n    <a href="#">Home</a> | <a href="#">About</a>\n  </header>\n  \n  <main style="padding: 20px; outline: 2px dashed #007bff;">\n    <h2>The Future of Web Development</h2>\n    <p>By Alex Chen • April 1, 2024</p>\n    \n    <article>\n      <p>Web development is evolving faster than ever. With new frameworks, tools, and standards emerging regularly, it\'s an exciting time to be a developer.</p>\n      \n      <h3>Key Trends in 2024</h3>\n      <ul>\n        <li>AI-powered development tools</li>\n        <li>WebAssembly beyond the browser</li>\n        <li>Edge computing and serverless</li>\n        <li>CSS container queries</li>\n      </ul>\n    </article>\n  </main>\n  \n  <footer style="background: #333; color: white; padding: 10px; margin-top: 20px;">\n    <p>&copy; 2024 My Blog. All rights reserved.</p>\n  </footer>\n</div>',
    preview: {
      type: "generic",
      content: [
        "The Future of Web Development",
        "Key Trends in 2024",
        "AI-powered development tools",
        "WebAssembly",
      ],
      props: {
        semantic: true,
      },
    },
    category: "semantic",
    level: "intermediate",
    color: "#64748b",
  },
  {
    id: 29,
    tag: "<section>",
    title: "Section",
    description:
      "Implements a semantic subdivision logically organizing a massive unified layout topic laterally breaking context into strictly labeled independent domains appropriately. Traditionally requiring explicit localized headings accompanying the nested elements inside tightly to establish thematic legitimacy enforcing coherent distinct sub-themes gracefully without breaking full narrative progression patterns.",
    example:
      "<div>\n  <h1>Complete HTML5 Course</h1>\n  \n  <section style=\"margin-bottom: 20px; padding: 10px; background: #f9f9f9; border-left: 4px solid #007bff;\">\n    <h2>📘 Section 1: HTML Basics</h2>\n    <p>Learn the fundamental concepts of HTML, including document structure, elements, and attributes.</p>\n    <ul>\n      <li>What is HTML?</li>\n      <li>First HTML page</li>\n      <li>Text formatting</li>\n    </ul>\n  </section>\n  \n  <section style=\"margin-bottom: 20px; padding: 10px; background: #f9f9f9; border-left: 4px solid #28a745;\">\n    <h2>🖼️ Section 2: Media & Forms</h2>\n    <p>Discover how to add images, videos, audio, and create interactive forms.</p>\n    <ul>\n      <li>Images and figures</li>\n      <li>Video and audio</li>\n      <li>Form structure</li>\n    </ul>\n  </section>\n  \n  <section style=\"padding: 10px; background: #f9f9f9; border-left: 4px solid #6f42c1;\">\n    <h2>🏗️ Section 3: Semantic HTML</h2>\n    <p>Understand modern HTML5 semantic elements for better structure and accessibility.</p>\n    <ul>\n      <li>Header and nav</li>\n      <li>Main and article</li>\n      <li>Section and aside</li>\n    </ul>\n  </section>\n</div>",
    preview: {
      type: "generic",
      content: [
        "Section 1: HTML Basics",
        "Section 2: Media & Forms",
        "Section 3: Tables & Lists",
        "Section 4: Semantic HTML",
      ],
      props: {
        semantic: true,
      },
    },
    category: "semantic",
    level: "intermediate",
    color: "#64748b",
  },
  {
    id: 30,
    tag: "<article>",
    title: "Article",
    description:
      "Delineates truly distinct modular logic isolating fundamentally standalone distributable compositions entirely autonomous from surrounding scaffolding layouts. An `<article>` encompasses deeply robust syndicated material formats logically supporting interactive comments, dense forums threads, individual news narratives, or uniquely identifiable discrete component product catalog cards cleanly.",
    example:
      '<div>\n  <article style="border: 1px solid #ccc; padding: 15px; border-radius: 5px; margin-bottom: 15px;">\n    <h2 style="margin-top: 0;">Getting Started with Flexbox</h2>\n    <div style="font-size: 0.8em; color: #666; margin-bottom: 10px;">\n      <span>📅 March 20, 2024</span>\n      <span style="margin-left: 10px;">👤 By Emma Wilson</span>\n      <span style="margin-left: 10px;">📁 CSS</span>\n    </div>\n    <p>Flexbox is a one-dimensional layout method that makes it easy to align items and distribute space...</p>\n    <a href="#" style="font-weight: bold;">Read More →</a>\n  </article>\n  \n  <article style="border: 1px solid #ccc; padding: 15px; border-radius: 5px; background: #fafafa;">\n    <div style="font-size: 2em; float: left; margin-right: 15px;">🎧</div>\n    <h2 style="margin: 0 0 5px 0;">Wireless Headphones</h2>\n    <p style="margin: 0 0 10px 0;">Noise-cancelling, 30h battery - <strong>$199</strong></p>\n    <button style="padding: 5px 10px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">Add to Cart</button>\n  </article>\n</div>',
    preview: {
      type: "generic",
      content: [
        "Getting Started with Flexbox",
        "Wireless Headphones $199",
        "User Comment ★★★★★",
        "HTML6 Draft Announced",
      ],
      props: {
        semantic: true,
      },
    },
    category: "semantic",
    level: "intermediate",
    color: "#64748b",
  },
  {
    id: 31,
    tag: "<aside>",
    title: "Aside",
    description:
      "Encapsulates complementary tangentially related narratives situated contextually adjoining central overarching active domain context. Specifically designed framing out supplemental architectural insertions pulling relevant reference links, highlighting distinguished embedded quotation blurbs, or housing targeted promotional ad campaign grids discretely offset effectively holding boundaries strict.",
    example:
      '<div style="display: flex; gap: 20px;">\n  <div style="flex: 2;">\n    <h2>Complete Guide to Coffee Brewing</h2>\n    <p>There are many ways to brew coffee, from simple pour-over to complex espresso machines. Each method extracts different flavors from the beans to create a unique cup. This guide will walk you through the most popular methods and the science behind them.</p>\n  </div>\n  \n  <aside style="flex: 1; background-color: #fce4ec; padding: 15px; border-left: 4px solid #e91e63; border-radius: 4px;">\n    <h3 style="margin-top: 0;">☕ Coffee Tips</h3>\n    <ul style="padding-left: 20px;">\n      <li>Use filtered water</li>\n      <li>Grind beans just before brewing</li>\n      <li>Store beans in airtight container</li>\n      <li>Water temperature: 195-205°F</li>\n    </ul>\n    <p style="font-style: italic;">"The perfect cup starts with quality beans."</p>\n  </aside>\n</div>',
    preview: {
      type: "generic",
      content: [
        "Coffee Tips",
        "Related Articles",
        "JavaScript Promises",
        "Steve Jobs quote",
      ],
      props: {
        semantic: true,
      },
    },
    category: "semantic",
    level: "intermediate",
    color: "#64748b",
  },
  {
    id: 32,
    tag: "<footer>",
    title: "Footer",
    description:
      "Closes thematic container segments providing dense supplementary navigational reference closures signaling end-of-document sequences globally. Commonly encapsulating universally accessible site-map layouts gracefully handling corporate copyright legalese, extensive hyperlinked nested external partner links arrays, and rigid tracking documentation ensuring standardization.",
    example:
      '<footer style="background-color: #1f2937; color: #f3f4f6; padding: 30px; font-family: sans-serif;">\n  <div style="display: flex; gap: 40px; margin-bottom: 20px;">\n    <div style="flex: 1;">\n      <h4 style="color: #60a5fa;">About Us</h4>\n      <p style="font-size: 0.9em; line-height: 1.5;">We\'re dedicated to making web development education accessible to everyone, everywhere.</p>\n    </div>\n    \n    <div style="flex: 1;">\n      <h4 style="color: #60a5fa;">Quick Links</h4>\n      <ul style="list-style: none; padding: 0; font-size: 0.9em; line-height: 1.8;">\n        <li><a href="#" style="color: #9ca3af; text-decoration: none;">Courses</a></li>\n        <li><a href="#" style="color: #9ca3af; text-decoration: none;">Blog</a></li>\n        <li><a href="#" style="color: #9ca3af; text-decoration: none;">Contact</a></li>\n      </ul>\n    </div>\n    \n    <div style="flex: 1;">\n      <h4 style="color: #60a5fa;">Contact</h4>\n      <address style="font-style: normal; font-size: 0.9em; color: #9ca3af; line-height: 1.5;">\n        hello@webacademy.com<br>\n        +1 (555) 123-4567\n      </address>\n    </div>\n  </div>\n  \n  <div style="border-top: 1px solid #374151; padding-top: 15px; font-size: 0.8em; color: #9ca3af; display: flex; justify-content: space-between;">\n    <p>&copy; 2024 Web Academy. All rights reserved.</p>\n    <div style="display: flex; gap: 15px;">\n      <a href="#" style="color: #9ca3af; text-decoration: none;">Privacy</a>\n      <a href="#" style="color: #9ca3af; text-decoration: none;">Terms</a>\n    </div>\n  </div>\n</footer>',
    preview: {
      type: "generic",
      content: [
        "About Us",
        "Quick Links",
        "Resources",
        "Contact",
        "© 2024 Web Academy",
        "Privacy Policy",
      ],
      props: {
        semantic: true,
      },
    },
    category: "semantic",
    level: "intermediate",
    color: "#64748b",
  },
];

// 3. EXPORT CATEGORIES FOR FILTERING
export const htmlCategories = [
  { id: "all", name: "All Tags", color: "#94a3b8" },
  { id: "basics", name: "Basics", color: "#c5e6ff" },
  { id: "text", name: "Text Formatting", color: "#d2b7ff" },
  { id: "media", name: "Media", color: "#b7ffca" },
  { id: "lists", name: "Lists", color: "#ffb7c5" },
  { id: "tables", name: "Tables", color: "#9f7aea" },
  { id: "forms", name: "Forms", color: "#475569" },
  { id: "interactive", name: "Interactive", color: "#fcd34d" },
  { id: "containers", name: "Containers", color: "#64748b" },
  { id: "semantic", name: "Semantic HTML", color: "#64748b" },
];
