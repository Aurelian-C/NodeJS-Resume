const introduction = {
  title: 'Introduction',
  titleDescription: '',
  sections: [
    {
      sectionTitle: 'What is Node.js? What it is used for?',
      sectionSource: '',
      tooltips: [
        `<h3>What is Node.js?</h3>
        <p>If you are used to run JavaScript in the browser, then the browser is a runtime environment for JavaScript.</p>
        <p>Node.js is just another <b>runtime environment</b> build on Google's open-source V8 JavaScript Engine that <i>allows you to run JavaScript code outside of a web browser</i>, without all the restrictions that are in the browser.</p>
        <p>Node.js provides a set of build-in modules, libraries and tools for <i>building server-side and networking applications</i>.</p>`,
        `<h3>What is it used for?</h3>
        <p>Node.js is commonly used for building <i>web servers</i>, <i>APIs</i> (Application Programming Interfaces), real-time chat applications, streaming applications, and other networked applications.</p>
        <p>Don't use Node.js if you want to build applications with heavy server-side processing (CPU-intensive) like image manipulations, video conversion, file compression or anything like that.</p>
        `,
        `<h3>Node.js characteristics</h3>
        <p>It's <i>single-threaded</i>, <i>non-blocking I/O model</i>, <i>event-driven architecture</i> makes it particularly well-suited for building scalable and high-performance applications that <i>can handle a large number of simultaneous connections</i>.</p>
        <p>Additionally, it has a vibrant ecosystem of libraries and frameworks, such as Express.js, that make it easy to develop web applications with Node.js.</p>
        `,
      ],
    },
    {
      sectionTitle: 'How the Web Works',
      sectionSource: '',
      tooltips: [
        `<p>The web works through a combination of <i>client-server architecture</i>, <i>protocols</i>, and various technologies.</p>`,
        `<h3>Client-Server Model</h3>
        <p>The web operates on a client-server model. Clients, such as web browsers (e.g., Chrome, Firefox), request resources (e.g., web pages, images, videos) from servers, which store and provide those resources.</p>`,
        `<h3>Domain Name System (DNS)</h3>
        <p>When you type a URL (Uniform Resource Locator) into your browser, the first step is translating the human-readable domain name (e.g., www.example.com) into an IP address using DNS servers. This <i>IP address points to the server where the website is hosted</i>.</p>`,
        `<h3>HTTP/HTTPS Protocol</h3>
        <p>Hypertext Transfer Protocol (HTTP) and its secure variant HTTPS are <i><u>communication protocols</u> used for <u>transferring data</u> on the web</i>. When you request a web page by entering a URL or clicking a link, your browser sends an HTTP request to the server, which responds with the requested content.</p>`,
        `<h3>Request-Response Cycle</h3>
        <p>The client sends an <i>HTTP request</i> to the server, specifying the resource it wants (e.g., a web page). The server processes the request and sends back an <i>HTTP response</i> containing the requested resource. This cycle forms the basis of how information is exchanged on the web.</p>`,
        `<h3>HTML, CSS, JavaScript</h3>
        <p>The content of web pages is typically created using HTML (Hypertext Markup Language) for structure, CSS (Cascading Style Sheets) for styling, and JavaScript for interactivity. When your browser receives the HTML content from the server, it parses and renders it, fetching additional resources like stylesheets and scripts as needed.</p>`,
        `<h3>Web Servers and Hosting</h3>
        <p>Web servers are software applications that serve web content to clients upon request. <i>Websites are hosted on web servers, which store the website files and respond to requests from clients.</i> Common web server software includes Apache, Nginx, and Microsoft Internet Information Services (IIS).</p>`,
        `<h3>Client-Side and Server-Side Processing</h3>
        <p>Client-side processing refers to actions performed by the user's browser, such as rendering HTML and executing JavaScript. Server-side processing occurs on the server, where dynamic content is generated before being sent to the client. Server-side scripting languages like PHP, Python, Ruby, and Node.js are often used for this purpose.</p>`,
        `<h3>Cookies, Sessions, and Authentication</h3>
        <p><i>Cookies are small <u>pieces of data stored by the browser</u> and sent with each request</i>, enabling websites to track user sessions and store user preferences. <i>Sessions allow servers to maintain stateful interactions with clients across multiple requests.</i> Authentication mechanisms such as username/password or token-based authentication are used to verify the identity of users accessing restricted resources.</p>`,
        `<p>This overview covers the fundamental concepts behind how the web works, though the actual implementation can be more complex due to factors like caching, content delivery networks (CDNs), and web application frameworks.</p>`,
      ],
    },
    {
      sectionTitle: 'Static vs Dynamic vs API',
      sectionSource: '',
      tooltips: [`<p><img src="../../src/img/static_dynamic_api_1.jpg"/></p>`],
    },
    {
      sectionTitle: 'Working with the REPL',
      sectionSource: '',
      highlights: {
        highlight1: ['REPL'],
      },
      tooltips: [
        `<p>Node REPL (Read Eval Print Loop) enable that you can <i>run JavaScript code directly in your terminal</i>.</p>`,
      ],
    },
  ],
};

const understanding_the_basics = {
  title: 'Understanding the Basics',
  titleDescription: 'The Essential Knownledge You Need',
  sections: [
    {
      sectionTitle: 'Installing Node.js',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using Modules in Node.js: Core (Build-In) Modules',
      sectionSource: '',
      highlights: {
        highlight2: ['Core (Build-In) Modules'],
      },
      tooltips: [
        `<p><i>Node.js is built around a concept of modules</i>, where all kinds of <i><u>additional functionality</u> are stored in a module</i>. For example, if you want to read a file from your system, you will use a module called "fs" (fs stands for file system).</p>
        <p>How do we open up these modules, or how can we use them? Well, we do <b><code>require()</code></b> them into our code, and then store the result of the <code>require()</code> function in a variable. For example:
        <pre><code>
const fs = require("fs");
        </code></pre>
        <p>By requiring and using the <code>fs</code> module, we will get access to functions for reading data and writing data right to the file system.</p>
        <ul>Besides <code>fs</code> module, there are some other module that will help you use additional functionalities:
          <li>- <code>http</code>: creates an HTTP server in Node.js;</li>
          <li>- <code>https</code>: creates an HTTPS server in Node.js;</li>
          <li>- <code>path</code>: includes methods to deal with file paths;</li>
          <li>- more build-in modules.</li>
        </ul>
        </p>
        `,
      ],
    },
    {
      sectionTitle:
        'Blocking and Non-Blocking Code: Asynchronous Nature of Node.js',
      sectionSource: '',
      highlights: {
        highlight1: ['Asynchronous Nature of Node.js'],
      },
      tooltips: [
        `<h3>Synchronous vs Asynchronous Node.js code</h3>
        <p>Node.js has only <b>one single thread</b>, which means that all the users accessing your web server application are all using the same thread. Being a single thread, synchronous code become a problem especially with slow operations, because each line of code blocks the execution of the rest of the code. So we say that <i>synchronous code is also called blocking code</i> because a certain operation can only be executed after the one before has finished.</p>
        <p>For example, when one user of your web server application locks the single thread with synchronous code, then all other users will have to wait for that execution to finish.</p>
        <p>An example of synchronous code:</p>
        <pre><code>
const fs = require('fs');

//Blocking code execution
const input = <b>fs.readFileSync</b>('input.text', 'utf-8');

console.log(input);
        </code></pre>
        <p>Because of the way Node.js was designed, synchronous code turns into a huge problem. The solution to synchronous code problem in Node.js is to <i>use asynchronous code (non-blocking code)</i>:</p>
        <pre><code>
const fs = require('fs');

//Non-blocking code execution
const input = <b>fs.readFile</b>('input.text', 'utf-8', <i>(err, data) => {
    console.log(data);
}</i>);
        
console.log('Reading file...');
        </code></pre>
        `,
        `<h3><code>fs.readFileSync</code> (Synchronous) vs <code>fs.readFile</code> (Asynchronous)</h3>
        <p><i><code>fs.readFileSync</code> is a <u>synchronous</u> function</i> that blocks the code execution until it's finish execution.</p>
        <p>On the other hand, <i><code>fs.readFile</code> is an <u>asynchronous</u> function</i> that receives a callback function as a parameter, and this callback will be called with the data (result) when <code>fs.readFile</code> finish it's execution. In that time, the code execution is NOT blocked.</p>
        <p>IMPORTANT: It's YOUR job as a developer to avoid blocking code execution by using asynchronous code. This is actually the whole reason why <b>Node.js is completely designed around callbacks to implement asynchronous behavior</b>.</p>`,
        `<h3>Node.js vs other programming languages</h3>
        <p>In other programming languages, like PHP, it works very differently, because you get one new thread for each new user, which is a and really works completely different. But the creator of Node.js found this model to be the best solution for building highly performant and scalable web applications.</p>`,

        `<h3>Node.js asynchronous functions</h3>
        <p>It's important to know that, when we use callbacks in our code, that doesn't automatically make it asynchronous. So, passing functions around into other functions is quite common in JavaScript, but that doesn't make them asynchronous automatically. It only works this way for some functions in the Node.js, such as the <code>fs.readFile</code> function and many others.</p>
        `,
        `<h3>Node.js top-level code it's only executed once when the server starts</h3>
        <p><b>Top-level code is only executed once we start the server</b>, and so in that situation, it doesn't matter at all if it blocks the code execution, because it happens only once, and only when the server actually starts:</p>
        <pre><code>
const http = require('http');
const fs = require('fs');

<i>//Top-level code it's only executed once, only when the server starts, so you can use here synchronous code even it's block the code execution</i>
const input = fs.readFileSync('input.text', 'utf-8');

const server = http.createServer((req, res) => {
    <i>//Here you need to use asynchoronous code because it's executed over and over, for every incoming request</i>
});

server.listen(3000);
        </code></pre>
        <p>The secret is simply to know which code is only executed once and only at the beginning, when the server starts, and which code gets executed over and over again, and is therefore problematic when blocking the Event Loop.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Creating a Simple Web Server',
      sectionSource: '',
      highlights: {
        highlight1: ['Web Server'],
      },
      tooltips: [
        `<pre><code>
const http = <i>require('http')</i>;

const server = <i>http.createServer</i>((req, res) => {
    //Your server side code here
});

server.listen(3000);
      </code></pre>
      `,
      ],
    },
    {
      sectionTitle: 'Understanding Requests',
      sectionSource: '',
      highlights: {
        highlight1: ['Requests'],
      },
      tooltips: [``],
    },
    {
      sectionTitle: 'Sending Responses',
      sectionSource: '',
      highlights: {
        highlight1: ['Responses'],
      },
      tooltips: [``],
    },
    {
      sectionTitle: 'Request & Response Headers',
      sectionSource: '',
      highlights: {
        highlight1: ['Headers'],
      },
      tooltips: [
        `<p>Request & Response Headers are <i>pieces of information</i> that we can receive with a request or that we can add to our responses.</p>
        <pre><code>
const http = require('http');

const server = http.createServer((req, res) => {
    <i>res.writeHead(404, {
      <b>'Content-Type': 'text/html'</b>
    });</i>
    res.end('&#129172span&#129174Hello world&#129172span/&#129174');
});

server.listen(3000);
        </code></pre>
        <p>For example, <code>'Content-Type'</code> header informs the browser that the response it's receive it a HTML response. There are many more headers that you can specify on your response.</p>
        <p>It's important to understand that, <i>in a the case you want to add headers to a response, you need to set them before sending the response</i>.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Routing Requests',
      sectionSource: '',
      highlights: {
        highlight1: ['Routing'],
      },
      tooltips: [
        `<p>With routing, you can <i>write Node.js code that react to URL that a user is requesting</i>.</p>
        <p>In Node.js, routing refers to the process of defining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, etc.). <i>Each route can have one or more handler functions, which are executed when the route is matched.</i></p>
        <p><i>Routing is used to perform different actions based on the URL and HTTP method requested.</i> For example, you might have one route to send a user information when they access a webpage via a GET request, and another route to process the information submitted through a form via a POST request.</p>
        <p><i>Node.js itself doesn't come with a built-in router</i>, so routing is often handled by Node.js frameworks like Express, which simplify the process of writing server-side code.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Redirecting Requests',
      sectionSource: '',
      highlights: {
        highlight1: ['Redirecting'],
      },
      tooltips: [``],
    },
    {
      sectionTitle: 'Using Modules in Node.js: Our Own Modules',
      sectionSource: '',
      highlights: {
        highlight1: [],
      },
      tooltips: [
        `<p>We can create our own modules and export something from them, like for example, a function. Thenwe can import this function into another module, and then use that function there.</p>
        <p>You need to know that in Node.js every single file is treated as a module.</p>
        <p>Node.js uses the <i>CommonJS module system</i> for importing and exporting modules within and across files. This system is primarily used for server-side development and is native to Node.js.</p>
        `,
        `<h3>Exporting in Node.js</h3>
        <p>To export a module, function, object, or any variable from a file in Node.js, you use the <b><code>module.exports</code></b> object or the <b><code>exports</code></b> shorthand.</p>`,
        `<h3>Export a <u>single</u> entity</h3>
        <p>If you want to <i>export a <u>single</u> function, object, or class</i> from a file, you can assign it directly to <code>module.exports</code>:</p>
        <pre><code>
module.exports = function sayHello(name) {
  return "Hello world!";
};
        </code></pre>`,
        `<h3>Export <u>multiple</u> entities</h3>
        <p>To <i>export <u>multiple</u> entities</i>, you can add them as properties of the <code>module.exports</code> object or <code>module.exports</code> object:</p>
        <pre><code>
exports.add = function(a, b) {
  return a + b;
};

exports.subtract = function(a, b) {
  return a - b;
};
        </code></pre>
        `,
        `<h3>Importing in Node.js</h3>
        <p>To use the exported module or functions in another file, you use the <code>require()</code> function provided by Node.js</p>
        <pre><code>
const sayHello = require('./sayHello');

const mathFunctions = require('./mathFunctions');
console.log(mathFunctions.add;
console.log(mathFunctions.subtract); 

//or use destructuring
const { add, subtract } = require('./mathFunctions');
        </code></pre>
        `,
        `<h3>ES Modules in Node.js</h3>
       <p><i>Node.js also supports ES Modules (ESM)</i>, a newer module system used in modern JavaScript development for both client and server side. ESM uses <code>import</code> and <code>export</code> statements and <i>is enabled by adding <code>"type": "module"</code> in your package.json</i> file or <i>using the <code>.mjs</code> extension for your modules</i>.</p>
       <p>You can choose between CommonJS and ESM depending on your project's compatibility and your team's preference.</p>
       `,
      ],
    },
    {
      sectionTitle: 'The Node Lifecycle & Event Loop',
      sectionSource: '',
      highlights: {
        highlight1: ['Event Loop'],
      },
      tooltips: [
        `<ul>The lifecycle of a Node.js application revolves around its <i>event-driven</i>, <i>non-blocking architecture</i>, which is facilitated by the event loop. Here's an overview:
          <li><h3>1. Initialization</h3>
            <p>When you run a Node.js application, it initializes by loading the main script file (typically index.js or app.js) and any modules it requires.</p>
          </li>
      
          <li><h3>2. Execution of Synchronous Code</h3>
            <p><i>Node.js starts executing the synchronous code in the main script file.</i> This includes tasks like loading configuration files, setting up database connections, and defining functions.</p>
          </li>
      
          <li><h3>3. Event Loop</h3>
            <p><i>The event loop is at the core of Node.js's asynchronous nature. It continuously checks for events in the event queue and executes their associated callback functions. The event loop keeps the Node.js process running and responsive, even when handling I/O operations.</i></p>
          </li>
      
          <li><h3>4. Non-Blocking I/O Operations</h3>
            <p><i>Node.js uses non-blocking I/O operations, which means that it can perform I/O tasks (like reading from files or making network requests) without waiting for the operation to complete.</i> Instead, it delegates these tasks to the operating system and continues executing other code.</p>
          </li>
      
          <li><h3>5. Event-Driven Architecture</h3>
            <p><i>Node.js is event-driven, meaning that it relies heavily on <u>events and callbacks to handle asynchronous operations</u>.</i> When an asynchronous operation completes or a certain condition is met, it triggers an event, which is then processed by the event loop.</p>
          </li>
      
          <li><h3>6. Event Queue and Callbacks</h3>
            <p>Asynchronous operations in Node.js typically <i>use callbacks to handle the results of the operation</i>. When an asynchronous operation completes, its callback function is pushed onto the event queue. The event loop picks up these callback functions from the queue and executes them one by one.</p>
          </li>
      
          <li><h3>7. Concurrency and Scalability</h3>
            <p>Because <i>Node.js applications can handle multiple concurrent operations without blocking the event loop</i>, they are highly scalable and efficient, making them suitable for building real-time applications, APIs, and microservices.</p>
          </li>
      
          <li><h3>8. Termination</h3>
            <p>Node.js applications terminate either when all event listeners have been removed and there are no more callbacks to execute, or when explicitly terminated by the user or the operating system.</p>
          </li>
      </ul>`,
        `<p>Understanding the Node.js event loop and its lifecycle is crucial for writing efficient, scalable, and responsive applications. It allows developers to leverage asynchronous programming paradigms effectively and build high-performance applications that can handle large numbers of simultaneous connections.<p>`,
      ],
    },
    {
      sectionTitle: 'Controlling the Node.js process',
      sectionSource: '',
      tooltips: [
        `<p>In Node.js, <code>process.exit()</code> is a method used to terminate the Node.js process.</p>
        <p>When <code>process.exit()</code> is called, the Node.js <i>event loop is stopped immediately</i>, and no further asynchronous operations are performed. It's often used to forcefully terminate the application under certain conditions, like critical errors or when a specific condition is met.</p>
        <p>However, it's important to <i>use <code>process.exit()</code> with caution, especially in production code</i>, as it doesn't allow graceful shutdown and can leave resources in an inconsistent state. It's generally recommended to handle errors and shutdown gracefully whenever possible.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Understanding Event Driven code execution',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Introduction to Streams',
      sectionSource: '',
      highlights: {
        highlight1: ['Streams'],
      },
      tooltips: [
        `<p>Streams are used to <i><b>process (read and write) data piece by piece (chunks)</b>, without completing the whole read or write operation</i>, and therefore without keeping all the data in memory.</p>
        <ul>Benefits of using streams:
          <li>- perfect for handling large volumes of data, for example videos;</li>
          <li>- More efficient data processing in terms of <u>memory</u> (no need to keep all data in
            memory) and <u>time</u> (we don't have to wait until all the data is available).</li>
        </ul>
        <p><img src="../../src/img/streams_1.jpg"/></p>
        `,
        `<h3>Streams in practice</h3>
        <pre><code>
const fs = require("fs");
const server = require("http");

server.createServer((req, res) => {
  // ---- Solution 1 ----
  <i>fs.readFile</i>("test-file.txt", (err, <i>data</i>) => {
    if (err) console.log(err);
    <i>res.end(data);</i>
  });


  // ---- Solution 2: Streams ----
  const readable1 = <i>fs.<b>createReadStream</b></i>("test-file.txt");

  readable1<i>.on(<b>"data"</b>, <b>chunk</b> => {
    res.write(chunk);
  })</i>;

  readable1<i>.on(<b>"end"</b>, () => {
    res.end();
  })</i>;

  readable1<i>.on("error", err => {
    res.statusCode = 500;
    res.end("File not found!");
  })</i>;


  // ---- Solution 3: Streams ----
  const readable2 = <i>fs<b>.createReadStream</b></i>("test-file.txt");
  readable2<i><b>.pipe</b>(res)</i>;
});

server.listen(3000);
      </code></pre>`,
      ],
    },
  ],
};

const development_workflow_and_debugging = {
  title: 'Improved Development Workflow and Debugging',
  titleDescription: 'Fixing Error, Developing Efficiently',
  sections: [
    {
      sectionTitle:
        'Understanding <code>package.json</code> file and NPM Scripts',
      sectionSource: '',
      highlights: {
        highlight1: ['<code>package.json</code>', 'NPM Scripts'],
      },
      tooltips: [
        `<p>NPM is a software that we use to manage the 3rd party open-source packages that we choose to include and use in our project.</p>
        <p>The first thing that we usually do whenever we start a new project, is to start with <code>npm init</code> that will create a <code>package.json</code> file.</p>
        <p><code>package.json</code> file is kind of a configuration file of our project where all kinds of data about the project is stored.</p>
        `,
        `<h3>Global & Local npm Packages</h3>
        <p>In the last lecture, we added nodemon as a <i>local dependency</i> to our project.</p>
      <p>The good thing about local dependencies is that you can share projects without the node_modules folder (where they are stored) and you can run <code>npm install</code> in a project to then re-create that node_modules folder. This allows you to share only your source code, hence reducing the size of the shared project vastly.</p>
      <p>I showed that <code>nodemon app.js</code> would not work in the terminal or command line because we don't use local dependencies there but global packages. You could install nodemon globally if you wanted (this is NOT required though - because we can just run it locally): <code>npm install -g nodemon</code> would do the trick. Specifically <i>the <code>-g</code> flag ensures that the package gets added as a global package which you now can use anywhere on your machine, <u>directly from inside the terminal or command prompt</u></i>.</p>
        `,
        `<h3>Package Versioning and Updating</h3>
        <p>By running <code>npm outdated</code> in your terminal, you will receive a table with all outdated packages.</p>
        <p>You can install a specific version of a npm package by running <code>npm install packageName<i>@1.4.3</i></code> or simply <code>npm install packageName<i>@1</i></code>.</p>
        <p>You can update a specific npm package by running <code>npm update packageName</code>. The update command will respect the symbol that you'll have in the front of the package: <code>~</code>, <code>^</code> or <code>*</code>.</p>
        <pre><code>
{
  "dependecies": {
      "package1": "<b>~</b>1.5.7",
      "package2": "<b>^</b>2.8.1",
      "package3": "<b>*</b>4.1.5"
  }
}
        </code></pre>
        <ul>What symbols means:
          <li>- <code>~</code> means that we only accept <i>patch (bug fixes)</i> releases (~1.5.<i>7</i>);</li>
          <li>- <code>^</code> means that we only accept <i>minor</i> releases (^1.<i>5</i>.7);</li>
          <li>- <code>*</code> means that we accept <i>all</i> releases: major, minor & patch (bug fixes) (*1.5.7).</li>
        </ul>
        <p>You can uninstall a npm package by running <code>npm uninstall packageName</code>.</p>
        <p>In the context of npm dependencies, version numbers and the symbols preceding them (<code>~</code>, <code>^</code> or <code>*</code>) signify <i>different strategies for updating dependencies</i>. Understanding these symbols helps <i>manage package versions</i> and <i>ensures compatibility</i> within projects.</p>
        `,
        `<h3>Symbols and Their Meanings: Explanation in detail</h3>
        <p>1. Tilde (<code>~</code>): When a version number is preceded by a tilde (<code>~</code>), it indicates that updates are allowed only to the latest PATCH version of the specified MINOR version. For example, <code>~1.5.7</code> allows updates to any version <code>1.5.x</code> where x >= 7. This is more restrictive and aims to reduce the risk of introducing breaking changes with new patches.</p>
        <p>2. Caret (<code>^</code>): The caret symbol (<code>^</code>) allows updates that do not modify the left-most non-zero digit in the semver string. For <code>^2.8.1</code>, this means any version <code>2.x.x</code> is allowed as long as x >= 8.1 for the MINOR version, and any PATCH version updates. This is more permissive than the tilde, allowing for minor updates that should be backwards compatible.</p>        
        </p>3. Asterisk (<code>*</code>) or Star: An asterisk (<code>*</code>) indicates that any version is allowed. It's the most permissive option, essentially ignoring versioning and always fetching the latest version. This can be risky as it might pull in incompatible updates.</p>`,
      ],
    },
    {
      sectionTitle: 'Using Modules in Node.js: Installing 3rd Party Packages',
      sectionSource: '',
      highlights: {
        highlight1: ['3rd Party Packages'],
      },
      tooltips: [
        `<h3>Node.js core modules, custom code and third-party packages</h3>
        <p>Node projects typically don't just use core modules and custom code, but also third-party packages.</p>
        <p>You install them via npm.</p>
        `,
        `<h3>Third-party packages: development vs production vs global packages</h3>
      <ul>Third-party packages which you install can be divided into:
        <li>- <i>development</i> dependencies (<code>--save-dev</code>), so packages which mostly help you during development;</li>
        <li>- <i>production</i> dependencies (<code>--save</code>), so packages that helps you for the app as it's running on a server.</li>
      </ul>
      <p>NOTE: You can basically tell npm which kind of dependency you will install. This does not make a huge difference and you can omit the setting, but it helps you understand which package is used for what. <code>--save</code> and <code>--save-dev</code> allow you to differentiate between production and development dependencies.</p>
      <p>For example nodemon package would be a development dependency, because we only use it during the development process, once we install our app on a real server we don't need it there. The real server which is running somewhere in the Internet of course shouldn't restart and it also doesn't have to because we'll not change its code dynamically.</p>
      <p>There also is a third option by the way, <i><code>-g</code> we'll not install a package on a specific project, but globally on your machine so that you can use it anywhere</i>.</p>
      <p>NOTE: You can differentiate between <u>production</u> dependecies (<code>--save</code>), <u>development</u> dependencies (<code>--save-dev</code>) and <u>global</u> dependencies (<code>-g</code>).</p>
      `,
      ],
    },
    {
      sectionTitle: 'Using nodemon package for autorestarts',
      sectionSource: '',
      highlights: {
        highlight2: ['nodemon package'],
      },
      tooltips: [
        `<pre><code> 
{
  "name": "js-project-1", 
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
      "test": "echo "Error: no test specified" &amp;&amp; exit 1",
      <i>"start": "nodemon app.js"</i>
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
      <i>"nodemon": "^3.1.0"</i>
  }
}
       </code></pre>`,
      ],
    },
    {
      sectionTitle: 'Global Features vs Core Modules vs Third-Party Modules',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Understanding different Error Types',
      sectionSource: '',
      highlights: {
        highlight1: ['Error Types'],
      },
      tooltips: [
        `<ul>Types of errors:
          <li>- Syntax Errors</li>
          <li>- Runtime Errors</li>
          <li>- Logical Errors</li>
        </ul>
        <p>Syntax and runtime error throw (helpful) error messages (with line numbers!).</p>
        <p>Logical error can be fixed with testing and the help of the debugger.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Debugging errors in Visual Studio Code',
      sectionSource: '',
      tooltips: [
        `<ul>
        <li>- Use the VS Code debugger to step into your code and go through it step by step;</li>
        <li>- Analyze variable values at runtime;</li>
        <li>- Look into (and manipulate) variables at runtime;</li>
        <li>- Set breakpoints cleverly (i.e. respect the async/event-driven nature).</li>
      </ul>`,
      ],
    },
  ],
};

const working_with_ExpressJS = {
  title: 'Working with Express.js',
  titleDescription: 'Do not reinvent the Wheel!',
  sections: [
    {
      sectionTitle: 'What is Express.js?',
      highlights: {
        highlight1: ['Express.js'],
      },
      sectionSource: '',
      tooltips: [
        `<h3>Working only with Node.js can be a pain</h3>
        <p>With Node.js alone, you have to <i>write a lot of code to deal with basic things</i> like, for example, extracting the body of an incoming request. Now typically you don't want to do that, you want to focus on your business logic, the code that makes up your specific application, you don't want to work or you don't want to care about standard tasks like handling incoming requests or routing, and therefore we'll now have a look at Express.js.</p>
        <p>NOTE: Express.js is a package/framework you can use for Node.js that will help you write better Node.js code and focus on your business logic. Now, of course you could stick to Vanilla Node.js and that works, and depending on the complexity of your application or the level of challenges you are seeking, you can absolutely stick to Vanilla Node.js, you can theoretically write everything on your own just with Vanilla Node.js.</p>
        `,
        `<h3>What is Express.js and why do we use it?</h3>
        <p>Express.js is a <i>framework</i> you can install as a third party package into your Node.js project and as such, it basically <i>helps you outsource some of that nitty-gritty work</i>, some of these details you don't want to care about, it gives you a rule set in which you work and a lot of utility functions that help you write cleaner code and focus on your core business.</p>
        <p>A framework is basically a set of helper functions, tools & rules that help you build your applicatiion.</p>
        <ul>Express.js contains a very robust set of features:
          <li>- complex routing;</li>
          <li>- easier handling of requests and responses;</li>
          <li>- middleware;</li>
          <li>- server-side rendering;</li>
          <li>- much more.</li>
        </ul>
        `,
      ],
    },
    {
      sectionTitle: 'Installing Express.js',
      sectionSource: '',
      tooltips: [
        `<p>You install Express.js by typing in your VSCode terminal the <b><code>npm i express</code></b> command. This command will <i>install Express.js as a dependency to your project</i>.</p>`,
        `<p>Once you install Express.js, you need to import it in your <code>app.js</code> file and create your Node.js server. You do this like the example below:</p>
        <pre><code>
const express = require('express');

const port = 3000;

const app = express();

app.use((req, res, next) => {
  res.status(200).send('Hello from the server!');
})

app.listen(port, () => {
  console.log('App start running!')
});
        </code></pre>`,
        `<p>Express.js handling incoming requests in a certain way called middleware functions. Middleware functions are a key characteristic of Express framework.</p>`,
      ],
    },
    {
      sectionTitle:
        'Middleware functions, <code>next()</code> function & sending a Response with <code>res.send()</code> function',
      sectionSource: '',
      highlights: {
        highlight2: [
          'Middleware',
          '<code>next()</code>',
          '<code>res.send()</code>',
        ],
      },
      tooltips: [
        `<h3>Middleware functions are a crucial aspect of Express.js</h3>
        <p><i>Express.js is all about middleware functions</i>.</p>
        <p>In Express.js <i>an incoming request is automatically funneled through a bunch of functions</i>, so instead of just having one request handler, you will actually have a possibility of hooking in multiple functions which the request will go through until you send a response.</p>
        <p>This allows you to split your code into multiple blocks or pieces, instead of having one huge function that does everything, and this is the pluggable nature of Express.js, where you can easily add other third party packages which simply happen to give you such middleware functions that you can plug into Express.js and add certain functionalities.</p>
        <p>Middleware functions are <i>functions that have access to the <u>request object</u> (req), the <u>response object</u> (res), and <u>the next middleware function</u> in the application's request-response cycle</i>. These functions can execute any code, modify request and response objects, end the request-response cycle, and call the next middleware function in the stack.</p>
        <p><i>Middleware functions are used to perform tasks</i> like authentication, logging, parsing request bodies, and error handling. They allow you to modularize your application's logic and make it easier to manage and maintain.</p>`,
        `<h3>Middleware example</h3>
        <p>Here's a simple example of a middleware function in Express.js:</p>
        <pre><code>
const express = require('express');
const app = express();

// Middleware function
app.use(<i>(req, res, next) => {
    console.log('Time:', Date.now());
    next(); //allows the request to continue to the next middleware in line (next middleware function in the stack)
}</i>);

// Another middleware function
app.use(<i>(req, res, next) => {
    console.log('Text:', 'Some text to print!');
    next(); //allows the request to continue to the next middleware in line (next middleware function in the stack)
}</i>);

// Route handler
app.get('/', (req, res) => {
    <i>res.send('Hello World!');</i>
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
        </code></pre>
        `,
        `<p>In this example, <i><code>app.use()</code> is used to register a middleware function</i>. This middleware function logs the current timestamp to the console <u>every time a request is received</u>. <i>The <code>next()</code> function is called to pass control to the next middleware function in the stack.</i></p>
        <p>NOTE: A middleware function is executed every time an incoming request is received.</p>
        <p><i>Middleware functions can be <u>used globally</u>, meaning they are executed for every request, or they can be <u>applied to specific routes or groups of routes</u> using <code>app.use()</code> or <code>router.use()</code>.</i></p>
        <p>Express.js provides a wide range of <i>middleware modules</i> that can be easily integrated into your application, or you can create <i>custom middleware functions</i> tailored to your specific requirements.</p>`,
        `<h3>More details about <code>app.use()</code> function</h3>
        <p>The <code>app.use()</code> function in Express.js is <i>used to <u>mount middleware functions</u> at a specified path</i>. These middleware functions will be <i>executed for every request that matches the specified path</i>. It can be used to set up middleware <u>globally</u> for your entire application or to apply middleware to <u>specific routes or groups of routes</u>.</p>
        <ul>The <code>app.use()</code> function takes two arguments:
          <li>1. <code>path</code> (optional): specifies the path for which the middleware function should be executed. If no path is specified, the middleware function will be executed for every incoming request. This is useful for setting up middleware that needs to be applied globally, such as logging, parsing request bodies, or handling authentication.
          <pre><code>
app.use((req, res, next) => {
    // Middleware logic here
    next();
});
          </code></pre>
          <pre><code>
// In this example, the middleware function will only be executed for requests that start with /api
app.use('/api', (req, res, next) => {
    // Middleware logic for requests to /api/
    next();
});
          </code></pre>
          </li>
          <li>2. <code>callback</code>: the middleware function or an array of middleware functions to be executed. These functions have access to the request (req), response (res), and the next middleware function (next) in the stack.
          <pre><code>
// You can also chain multiple middleware functions together by passing an array of middleware functions to app.use():
function middleware1(req, res, next) {
  // Middleware 1 logic
  next();
}
          
function middleware2(req, res, next) {
  // Middleware 2 logic
  next();
}
          
app.use('/api', [middleware1, middleware2]);

// This will execute middleware1 and middleware2 in sequence for requests to the specified path.
          </code></pre>
          </li>
        </ul>
        <p>Overall, <code>app.use()</code> is a powerful function in Express.js that allows you to <i>set up middleware for your application</i>, making it easy to <i>handle common tasks</i> and <i>modularize your code</i>.</p>
        `,
        `<h3>More details about <code>next()</code> function</h3>
        <p>In Express.js, the <code>next()</code> function is a callback function that is <i><u>used within middleware functions</u> to pass control to the next middleware function <u>in the stack</u></i>. It is often <i>used to chain multiple middleware functions together</i>, allowing each middleware function to perform its specific tasks before passing control to the next one.</p>
        <p>NOTE: We have to call <code>next()</code> to allow an incoming request to continue to the next middleware in line. If we don't call <code>next()</code>, middleware just dies, so we should actually send back a response because otherwise the request can't continue its journey to the next middleware function, so it will never reach a place where we might send a response. <i>Express.js doesn't send a default response</i> or anything like that.</p>
        <ul>Here's how the <code>next()</code> function works:
          <li>1. When a middleware function is invoked, it receives three arguments: req (the request object), res (the response object), and next (the callback function).</li>
          <li>2. By calling <code>next()</code>, the current middleware function signals to Express.js that it has completed its tasks and that the control should be passed to the next middleware function.</li>
          <li>3. If <code>next()</code> is called without any arguments, Express.js proceeds to the next middleware function in the stack. If there are no more middleware functions in the stack, Express.js proceeds to route handlers, or if there are no route handlers, it sends the response back to the client.</li>
        </ul>
        <p>The <code>next()</code> function can also be used to handle errors within middleware functions. If <code>next()</code> is called with an argument (usually an error object), Express.js will skip all remaining middleware functions in the stack and pass control to the error handling middleware (if one is defined). This allows you to centralize error handling logic in a single middleware function.</p>
        <p>If an error occurs in any middleware function or route handler and <code>next(err)</code> is called with the error object, Express.js will pass control to the error handling middleware, which can then handle the error and send an appropriate response back to the client.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Handling different routes with <code>app.use()</code>',
      sectionSource: '',
      tooltips: [
        `<pre><code>
const express = require('express');

const app = express();
        
app.use(<b>'/'</b>, (req, res, next) => {
  console.log('This middleware ALWAYS RUNS even if you access "/add-product" path! app.use() that has the "/" path will run for ALL ACCESED PATHS that starts with "/".');
  <i>next();</i>
});
        
app.use(<b>'/add-product'</b>, (req, res, next) => {
  console.log('First middleware!');
  <i>res.send('Add Products Page');</i>
});
        
app.use(<b>'/'</b>, (req, res, next) => {
  console.log('Second middleware!');
  <i>res.send('Hello from the other side!');</i>
});
        
app.listen(3000);
      </code></pre>`,
        `<h3>Basic routing</h3>
        <p>Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).</p>
        <p>Each route can have one or more handler functions, which are executed when the route is matched.</p>
        <ul>Route definition takes the following structure: <code>app.<i>METHOD</i>(PATH, HANDLER)</code>, where:
          <li>- <code>app</code> is an instance of express;</li>
          <li>- <code>METHOD</code> is an HTTP request method, in lowercase;</li>
          <li>- <code>PATH</code> is a path on the server;</li>
          <li>- <code>HANDLER</code> is the function executed when the route is matched.</li>
        </ul>
        `,
      ],
    },
    {
      sectionTitle: 'Parsing incoming Requests with body-parser package',
      sectionSource: '',
      highlights: {
        highlight1: ['Parsing incoming Requests'],
        highlight2: ['body-parser'],
      },
      tooltips: [
        `<p><i>By default, <code>req.body</code> doesn't try to parse the incoming request.</i> For that, we need to install a 3rd party packages.</p>
        <p><code>body-parser</code> package is a npm package for Node.js body parsing middleware. You install it with <i><code>npm install body-parser</code></i> command.</p>
        <p><code>body-parser</code> parse incoming request bodies in a middleware before your handlers, available under the <code>req.body</code> property.</p>
        <p><i><code>bodyParser.urlencoded()</code> will not parse all kinds of possible bodies</i>, files, json and so on, but will parse bodies like sent through a form. If we have other bodies like files, we'll <u>use different parsers</u>, and this makes Express.js so extensible. If we need something, we can plug it in.</p>
        `,
        `<h3>An example of parsing an incoming request body</h3>
        <pre><code>
const express = require('express');
<i>const bodyParser = require('body-parser');</i>

const app = express();

app.use(<i>bodyParser.urlencoded({ extended: false })</i>);

app.use('/', (req, res, next) => {
    next();
});

app.get('/add-product', (req, res, next) => {
     res.send('Form html markup for submiting!');
});

app.post('/product', (req, res, next) => {
    console.log(<i>req.body</i>); //by default, request doesn't try to parse the incoming request body
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('Go to add products page!');
});

app.listen(3000);
      </code></pre>`,
      ],
    },
    {
      sectionTitle:
        'Parsing JSON Requests with <code>express.json()</code> middleware',
      sectionSource: '',
      highlights: {
        highlight2: ['express.json()'],
      },
      tooltips: [
        `<h3>An example of parsing an incoming JSON request body</h3>
        <pre><code>
const express = require('express');

const app = express();

<i>app.use(<b>express.json()</b>);</i>

app.post('/product', (req, res, next) => {
    console.log(<i>req.body</i>);
    res.redirect('/');
});

app.listen(3000);
      </code></pre>`,
      ],
    },
    {
      sectionTitle: 'Using Express Router',
      sectionSource: '',
      tooltips: [
        `<p>With Express.js routing we can execute different code for different incoming requests and paths or urls without having to write a bunch of <code>if</code> statements.</p>
        <p>When the application grows, we want to <i>split our routing code over multiple files</i>. Express.js  gives us a pretty nice way of outsourcing routing into other files. You can <i>use the <code>express.Router</code> to split your routes across files</i>.</p>
        <p>The convention is to create in your application a new folder called "routes". In this folder youl will store all your files related to Express.js route code that should execute for different paths.</p>
        `,
        `<pre><code>
const express = require('express');

<i>const router = express.Router();</i>
        
<i>router.get</i>('/add-product', (req, res, next) => {
  res.send('Add Product Form');
});
        
<i>router.post</i>('/product', (req, res, next) => {
  res.redirect('/');
});
        
<i>module.exports = router;</i>
        </code></pre>

        <pre><code>
const express = require('express');

<i>const router = express.Router();</i>

<i>router.get</i>('/', (req, res, next) => {
  res.send('Hello from Express!');
});

<i>module.exports = router;</i>
        </code></pre>

        <pre><code>
const express = require('express');

const app = express();

<i>const adminRoutes = require('./<u>routes</u>/admin');
const shopRoutes = require('./<u>routes</u>/shop');

app.use(adminRoutes);
app.use(shopRoutes);</i>

app.listen(3000);
        </code></pre>
        `,
      ],
    },
    {
      sectionTitle:
        'Limiting middleware execution by filtering Request by paths and methods',
      sectionSource: '',
      tooltips: [
        `<h3>Filtering request by method</h3>
        <p><i>If you filter requests by method, paths are matched exactly</i>, otherwise, with <code>app.use()</code> the first segment of a URL is matched.</p>
        <pre><code>
const express = require("express");

const router = express.Router();
        
// The same path (/add-product) can be used if the method is different (.get), because is treated as a different URL path
// /admin/add-product => GET
<i>router<b>.get</b>("/add-product"</i>, (req, res, next) => {
  res.send('Form submision!');
});
        
// The same path (/add-product) can be used if the method is different (.post), because is treated as a different URL path
// /admin/add-product => POST
<i>router<b>.post</b>("/add-product"</i>, (req, res, next) => {
   res.redirect("/");
});

module.exports = router;
        </code></pre>`,
        `<h3>Filtering request by path</h3>
        <pre><code>
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

<i>app.use(<b>'/admin'</b>, adminRoutes);</i>
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('Page not found!');
});

app.listen(3000);
      </code></pre>`,
        `<h3><code>app.use("/")</code> vs <code>app.get("/")</code></h3>
      <p><code>app.use("/")</code> will <i>match all the paths</i> but <code>app.get("/")</code> will do an <i>exact match</i>.</p>
      <p>With <code>app.get("/")</code>, <code>app.post("/")</code> an so on, you make sure that you filter middleware execution not only by a specified HTTP method, but even by an exact match for the <code>/</code> path.</p>`,
      ],
    },
    {
      sectionTitle: 'Creating HTML Pages',
      sectionSource: '',
      tooltips: [
        `<p>You store all your HTML pages in a folder called "views" because you will structure your application folders in a MVC arhitecture.</p>
        <p>One part of MVC is that you manage your views, so what you serve to the user, in one place of our application, in the "views" folder. So "views" folder will just be a bunch of HTML files.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'Serving HTML Pages with <code>sendFile()</code> function, <code>path.join()</code> method and <code>__dirname</code> global variable',
      sectionSource: '',
      highlights: {
        highlight2: [
          '<code>sendFile()</code>',
          '<code>path.join()</code>',
          '<code>__dirname</code>',
        ],
      },
      tooltips: [
        `<p>It's important to know that you're not limited to <code>send()</code> dummy text or anything like that, you can <code>sendFiles()</code> to your users, for example HTML files or images.</p>
        <p>I'll show you how we can return HTML pages (files), more specific HTML files we prepared to our client, instead of writing HTML code in Node.js as we did us far, which wasn't really that great.</p>`,
        `<pre><code>
const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  <i>res.<b>sendFile</b>(<b>path.join</b>(<b>__dirname</b>, '..', 'views', 'add-product.html'));</i>
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
        </code></pre>
        `,
        `<h3>More aboute <code>res.sendFile()</code> function</h3>
        <p>The <code>res.sendFile()</code> function <i>transfers the file at the given path</i> and <i>it sets the Content-Type response HTTP header field based on the filename extension</i>.</p>
        <p>Unless the <code>root</code> option is set in the options object, <i>path must be an <u>absolute path</u> to the file</i>.</p>
        <ul>This API <i>provides access to data on the running file system</i>. Ensure that either:
          <li>a) the way in which the path argument was constructed into an absolute path is secure if it contains user input or</li>
          <li>b) set the root option to the absolute path of a directory to contain access within.</li>
        </ul>
        <p>When the <code>root</code> option is provided, the path argument is allowed to be a relative path, including containing <code>..</code>. Express.js will validate that the relative path provided as path will resolve within the given <code>root</code> option.</p>
        `,
        `<h3>More aboute <code>path.join()</code> method</h3>
        <p>The <code>path.join()</code> method <i>joins the specified <u>path segments</u> into <u>one path</u></i>. You can specify as many path segments as you like.</p>
        <p>The specified <i>path segments must be <u>strings</u></i>, separated by comma <code>,</code>.</p>
        <p>We're using <code>path.join()</code> because this will automatically build the path in a way that works on both Linux and Windows systems.</p>
        `,
        `<h3>More aboute <code>__dirname</code> variable</h3>
        <p><code>__dirname</code> is a <i>global variable</i> made available by Node.js (environment variable) that tells you <i>the <u>absolute path of the directory</u> containing the currently executing file</i>.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Serving a 404 Error HTML Page',
      sectionSource: '',
      tooltips: [
        `<h3><code>app.use("/")</code> is tipically used as "catch all unhandled routes" middleware</h3>
        <p><i><code>app.use("/")</code> is commonly used at the final of your Node.js code for unhandled routes, because in the case you <u>access a URL path that doesn't exist (a URL path that is not handled by a middleware)</u>, you need to have a middleware function that handle that incoming request and finally send a response that serves a HTML error page.</i></p>
        <pre><code>
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

<i>app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});</i>

app.listen(3000);
              </code></pre>
        
        <pre><code>
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

<i>app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});</i>

app.listen(3000);
              </code></pre>`,
      ],
    },
    {
      sectionTitle:
        'Using a helper function for navigation: <code>path.dirname()</code> with <code>process.mainModule.filename</code> or <code>require.main.filename</code>',
      sectionSource: '',
      highlights: {
        highlight2: [
          '<code>path.dirname()</code>',
          '<code>process.mainModule.filename</code>',
          '<code>require.main.filename</code>',
        ],
      },
      tooltips: [
        `<h3>The <code>path.dirname()</code> method</h3>
        <p>The <code>path.dirname()</code> method <i>return the directory name of a file path</i>.</p>`,
        `<h3>The <code>process.mainModule</code> property</h3>
        <p><i><code>process</code> is a global variable</i> provided by Node.js, you don't need to import it.</p>
        <p>The <code>process.mainModule</code> property is an inbuilt application programming interface of the processing module which is <i>used to get the main module</i>. This is <i>an alternative way to get <code>require.main</code></i> but unlike <code>require.main</code>, <code>process.mainModule</code> dynamically changes in runtime. Generally, we can assume those two modules are the same.</p>
        `,
        `<h3>The <code>require.main.filename</code></h3>
        <p><code>require.main.filename</code> is great for <i>figuring out the entry point for the current application</i>.</p>
        <p>Unfortunately, <code>require.main.filename</code> sometimes fails when an application is executed with an alternative process manager, e.g., iisnode.</p>`,
        `<pre><code>
const path = require("path");

<i>module.exports = path.dirname(process.mainModule.filename);</i>

// If you get a deprecation warning for above code - in that case, you can simply switch to the code below:
<i>// module.exports = path.dirname(require.main.filename);</i>

// With path.dirname(process.mainModule.filename) or path.dirname(require.main.filename) you <i>get the parent directory path</i>
      </code></pre>

      <pre><code>
const path = require('path');
const express = require('express');
<i>const rootDir = require('../util/path');</i>

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(<i>rootDir</i>, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
      </code></pre>

      <pre><code>
const path = require('path');
const express = require('express');
<i>const rootDir = require('../util/path');</i>
      
const router = express.Router();
      
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(<i>rootDir</i>, 'views', 'add-product.html'));
});
      
router.post('/add-product', (req, res, next) => {
  res.redirect('/');
});
      
module.exports = router;
      </code></pre>
      `,
      ],
    },
    {
      sectionTitle: 'Serving files statically with <code>express.static</code>',
      highlights: {
        highlight2: ['<code>express.static</code>'],
      },
      sectionSource: '',
      tooltips: [
        `<p>To serve static files such as images, CSS files, and JavaScript files, use the <code>express.static</code> built-in middleware function in Express.js.</p>
        <p>The function signature is: <code>express.static(root, [options])</code>. The <code>root</code> argument specifies <i>the root directory from which to serve static assets</i>.</p>
        <p>For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:</p>
        <pre><code>
app.use(express.static('public'))
        </code></pre>
        <p>Now, you can load the files that are in the public directory:</p>
        <pre><code>
http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html
        </code></pre>
        <p><i>NOTE: Express.js looks up the files relative to the static directory, so the name of the static directory is not part of the URL.</i></p>
        <p>To use multiple static assets directories, call the express.static middleware function multiple times:</p>
        <pre><code>
app.use(express.static('public'))
app.use(express.static('files'))
        </code></pre>
        <p><i>NOTE: Express.js looks up the files in the order in which you set the static directories with the <code>express.static</code> middleware function.</i></p>
        `,
        `<h3>Another example</h3>
        <pre><code>
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
<i>app.use(express.static(path.join(__dirname, 'public')));</i>

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);      
      </code></pre>`,
      ],
    },
  ],
};

const dynamic_content_and_adding_templating_engines = {
  title: 'Working with Dynamic Content & adding Templating Engines',
  titleDescription: 'Rendering more than Static HTML',
  sections: [
    {
      sectionTitle: 'Sharing Data Across Requests & Users',
      sectionSource: '',
      highlights: {
        highlight1: ['Sharing Data'],
      },
      tooltips: [
        `<pre></code>
const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

<i>//ALL USERS have access to the "products" array and ANY USER can manipulate "products". The "products" array is shared to ALL USERS. 
const products = [];</i>

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  <i>products.push({ title: req.body.title });</i> //ANY USER can manipulate the "products" array, because it's shared to ALL USERS
  res.redirect('/');
});

exports.routes = router;
<i>exports.products = products;</i>      
      </code></pre>
      <p>Later we'll learn about a technique to <i>share data in memory in the Node.js app across <u>different requests but only for one and the same user</u></i> and not across all users, because in the above code we have shared data across requests and across users.</p>
      `,
      ],
    },
    {
      sectionTitle: 'Templating Engines - An Overview',
      sectionSource: '',
      tooltips: [
        `<p>A template engine enables you to use <i>static template files</i> in your application. <i>At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client.</i> This approach makes it easier to design an HTML page.</p>
        <p>Some popular template engines that work with Express are <i>Pug (Jade)</i>, <i>EJS</i> and <i>Handlebars</i>. The Express application generator uses Pug as its default, but it also supports several others.</p>
        `,
        `<h3>Reference Links</h3>
        <p><a href="https://expressjs.com/en/resources/template-engines.html">Template engines</a></p>
        `,
      ],
    },
    {
      sectionTitle:
        'Installing & implementing Pug with <code>app.set()</code> & <code>res.render()</code>',
      sectionSource: '',
      highlights: {
        highlight1: ['Pug'],
        highlight2: ['<code>app.set()</code>', '<code>res.render()</code>'],
      },
      tooltips: [
        `<h3>Install Pug on your project</h3>
        <p>You install Pug on your project by run the <i><code>npm install pug</code></i> command in your VS Code terminal.</p>`,
        `<h3>Implementing Pug - step 1</h3>
        <ul>To render template files, set the following application setting properties, set in <code>app.js</code> in the default app created by the generator:
          <li>a) <code>view engine</code>, the template engine to use. For example, to use the Pug template engine: <i><code>app.set('view engine', 'pug')</code></i>.</li>
          <li>b) <code>views</code>, the directory where the template files are located. Eg: <i><code>app.set('views', './views')</code></i>. This defaults to the <code>views</code> directory in the application root directory.</li>
        </ul>
        <pre><code>
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

<i>app.<b>set</b>('view engine', 'pug');
app.<b>set</b>('views', 'views');</i>

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);        
        </code></pre>
        <p>After the <code>view engine</code> is set, you don't have to specify the engine or load the template engine module in your app; Express loads the module internally, as shown below (for the above example): <code>app.set('view engine', 'pug')</code>.</p>
        `,
        `<h3>Implementing Pug - step 2</h3>
        <p>Create a Pug template file named <code>shop.pug</code> in the views directory, with the following content:</p>
        <pre><code>
html
  head
    title= title
  body
    h1= message
        </code></pre>
        `,
        `<h3>Implementing Pug - step 3</h3>
        <p>Then create a route to render the <code>shop.pug</code> file. If the <code>view engine</code> property is not set, you must specify the extension of the view file. Otherwise, you can omit it.</p>
        <pre><code>
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  <i>res.<b>render</b>('shop');</i>
});

module.exports = router;
        </code></pre>
        <p>When you make a request to the home page, the <code>shop.pug</code> file will be rendered as HTML.</p>
        <p>NOTE: The view engine cache does not cache the contents of the template's output, only the underlying template itself. The view is still re-rendered with every request even when the cache is on.</p>
        `,
        `<h3>More about <code>app.set()</code> function</h3>
        <p>The <code>app.set()</code> function is used to <i>assign the setting name to value (or to set a <u>global configuration</u> value)</i>. You may store any value that you want, but <i>certain names can be used to <u>configure the behavior of the server</u></i>.</p>
        <ul>Some of this certain names interesting for you are:
          <li>- <code>view engine</code>: the default engine extension to use when omitted.</li>
          <li>- <code>views</code>: a directory or an array of directories for the application's views. If an array, the views are looked up in the order they occur in the array.</li>
          <p>In other words, <code>view engine</code> allows us to tell Express.js "Hey, for any dynamic templates we're trying to render please use this engine we're registering here", and <code>views</code> allows us to tell Express.js where to find these dynamic views.</p>
        </ul>
        `,
        `<h3>More about <code>res.render()</code> function</h3>
        <p>The <code>res.render()</code> function <i>renders a <code>view</code> and sends the rendered HTML string to the client</i>.</p>
        <pre><code>
//send the rendered view to the client
res.render('shop')
        </code></pre>
        <p>The <code>view</code> argument is <i>a string that is the <u>file path</u> of the view file to render</i>. This can be an absolute path, or a path relative to the <code>views</code> setting. If the path does not contain a file extension, then the <code>view</code> engine setting determines the file extension.</p>
        <p>NOTE: The <code>view</code> argument performs file system operations like reading a file from disk and evaluating Node.js modules, and as so for security reasons should not contain input from the end-user.</p>
        `,
        `<h3>Reference Links</h3>
        <p><a href="https://expressjs.com/en/guide/using-template-engines.html">Using template engines with Express</a></p>
        <p><a href="https://expressjs.com/en/api.html#app.set">app.set() function</a></p>
        <p><a href="https://expressjs.com/en/api.html#res.render">res.render() function</a></p>
        <p><a href="https://pugjs.org/api/getting-started.html">Pug documentation</a></p>
        `,
      ],
    },
    {
      sectionTitle: 'Outputting Dynamic Content with Pug',
      sectionSource: '',
      highlights: {
        highlight1: ['Dynamic Content'],
      },
      tooltips: [
        `<ul>The <code>res.render()</code> function renders a <code>view</code> and sends the rendered HTML string to the client. <i>Optional parameters</i>:
          <li><i>- <code>locals</code>, an <u>object</u> whose properties define local variables for the view.</i></li>
          <li>- <code>callback</code>, a callback function. If provided, the method returns both the possible error and rendered string, but does not perform an automated response. When an error occurs, the method invokes next(err) internally.</li>
        </ul>
      <pre><code>
const express = require("express");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  //pass a local variable to the view
  res.render("shop", <i>{ prods: adminData.products, htmlTitle: "Shop" }</i>); 
});

module.exports = router;
      </code></pre>`,
        `<p>You access local variables in the Pug file like in example below:</p>
      <pre><code>
doctype html
head
  meta(charset='UTF-8')
  meta(name='viewport' content='width=device-width, initial-scale=1.0')
  meta(http-equiv='X-UA-Compatible' content='ie=edge')
  <i>title <b>#{htmlTitle}</b></i>
  link(rel='stylesheet' href='/css/main.css')
header.main-header
  nav.main-header__nav
    ul.main-header__item-list
      li.main-header__item
        a.active(href='/') Shop
      li.main-header__item
        a(href='/admin/add-product') Add Product
main
  <b>if prods.length > 0</b>
    .grid
      <b>each product in prods</b>
        article.card.product-item
          header.card__header
            <i>h1.product__title <b>#{product.title}</b></i>
          .card__image
            img(src='https://cdn.com/photo.png' alt='A Book')
          .card__content
            h2.product__price $19.99
            p.product__description
              | A very interesting book
              | things!
          .card__actions
            button.btn Add to Cart
  <b>else</b> 
    h1 No products
      </code></pre>
      `,
        `<h3>Reference Links</h3>
    <p><a href="https://expressjs.com/en/api.html#res.render">res.render() function</a></p>
    <p><a href="https://pugjs.org/api/getting-started.html">Pug documentation</a></p>
    `,
      ],
    },
    {
      sectionTitle: 'Adding a Layout with Pug by exteding your .pug files',
      sectionSource: '',
      highlights: {
        highlight1: ['Layout', 'exteding your .pug files'],
      },
      tooltips: [
        `<pre><code>
<!DOCTYPE html>
html(lang="en")
  head
    meta(charset="UTF-8")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    meta(http-equiv="X-UA-Compatible", content="ie=edge")
    title #{pageTitle}
    link(rel="stylesheet", href="/css/main.css")
    <i><b>block</b> styles</i>
  body   
    header.main-header
      nav.main-header__nav
        ul.main-header__item-list
          li.main-header__item
            a(href="/", <i>class=(path === '/' ? 'active' : '')</i>) Shop
          li.main-header__item
            a(href="/admin/add-product", <i>class=(path === '/admin/add-product' ? 'active' : '')</i>) Add Product
    <i><b>block</b> content</i>      
      </code></pre>
      <p>NOTE: <code>path</code> is a local variable read by "main-layout.png":</p>
      <pre><code>
router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', { prods: products, pageTitle: 'Shop', <i>path: '/'</i> });
});

router.get('/add-product', (req, res, next) => {
  res.render('add-product', { pageTitle: 'Add Product', <i>path: '/admin/add-product'</i> });
});
      </code></pre>`,
        `<h3>Extends your <code>.pug</code> files</h3>
      <pre><code>
<b>extends</b> layouts/main-layout.pug

<i><b>block</b> content</i>
    h1 Page Not Found!
      </code></pre>

      <pre><code>
<b>extends</b> layouts/main-layout.pug

<i><b>block</b> styles</i>
  link(rel="stylesheet", href="/css/forms.css")
  link(rel="stylesheet", href="/css/product.css")

<i><b>block</b> content</i>
  main
    form.product-form(action="/admin/add-product", method="POST")
      .form-control
        label(for="title") Title
        input(type="text", name="title")#title
        button.btn(type="submit") Add Product
      </code></pre>
      `,
      ],
    },
    {
      sectionTitle: 'Working with EJS',
      sectionSource: '',
      highlights: {
        highlight2: ['EJS'],
      },
      tooltips: [
        `<h3>Install EJS on your project</h3>
      <p>You install EJS on your project by running the <i><code>npm install ejs</code></i> command in your VS Code terminal.</p>`,
        `<h3>Implementing EJS template engine</h3>
      <ul>To render template files, set the following application setting properties, set in <code>app.js</code> in the default app created by the generator:
        <li>a) <code>view engine</code>, the template engine to use. For example, to use the EJS template engine: <i><code>app.set('view engine', 'ejs')</code></i>.</li>
        <li>b) <code>views</code>, the directory where the template files are located. Eg: <i><code>app.set('views', './views')</code></i>. This defaults to the <code>views</code> directory in the application root directory.</li>
      </ul>
      <pre><code>
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

<i>app.<b>set</b>('view engine', 'ejs');
app.<b>set</b>('views', 'views');</i>

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);        
      </code></pre>
      <p>After the <code>view engine</code> is set, you don't have to specify the engine or load the template engine module in your app; Express loads the module internally, as shown below (for the above example): <code>app.set('view engine', 'ejs')</code>.</p>
      `,
        `<h3>Render a .ejs template file</h3>
      <p>The rendering process of a .ejs template file is the same like .pug template files.</p>
      <p>As your learn, you render a template file with the special <code>res.render()</code> method provided by Express.js:</p>
      <pre><code>
router.get('/', (req, res, next) => {
  //To .render method you can optionally define an object which will hold the data that is passed as variables into the template file
  <i>res.<b>render</b>('shop', { pathTitle: 'Shop', otherKey: 'someData' });</i>
});
      </code></pre>
      <p>The <code>res.render()</code> method will always look for the registered <code>view engine</code>, something you do at the beginning in app.js:</p>
      <pre><code>
<i>app.<b>set</b>('view engine', 'ejs');
app.<b>set</b>('views', 'views');</i>
      </code></pre>
      `,
        `<h3>Reference Links</h3>
      <p><a href="https://ejs.co/">EJS documentation</a></p>
      `,
      ],
    },
    {
      sectionTitle: 'Adding a Layout with Partials',
      sectionSource: '',
      highlights: {
        highlight1: ['Partials'],
      },
      tooltips: [
        `<p><i>EJS doesn't have layouts</i> but we can use so-called Partials or Includes, a feature that PUG also have it.</p>
        <p>The idea is that you have some code blocks which you reuse in different parts of your templates, and you can therefore just share them across your templates. So it's a bit like the opposite of a layout, instead of having one master layout where you put your individual view parts into, you have a couple of separated shared view parts which you can merge into the views you're creating</p>
        <p>For that you need to create a new subfolder in the <code>views</code> folder which you name it, for example, <code>includes</code>, and that name is up to you. There you will create a couple of shared files or shared code blocks, which you want to share across all your views.</p>
        `,
      ],
    },
  ],
};

const mvc = {
  title: 'The Model View Controller (MVC)',
  titleDescription: 'Structuring your code',
  sections: [
    {
      sectionTitle: 'What is the MVC?',
      sectionSource: '',
      highlights: {
        highlight1: ['MVC'],
      },
      tooltips: [
        `<p>In this module I want to dive into a very important aspect of building backend applications. We want to follow a certain <i>pattern for structuring our code</i> and with that, I don't really just mean how we split it over files or how we write the code, but I mean how we <i>logically separate our code</i> and the different functions it fulfills or the different things it does.</p>`,
        `<h3>The MVC Pattern</h3>
        <p>What does MVC stand for or what is it? It's all about a <i>separation of concerns</i>, so making sure that different parts of your code do different things, and you clearly know which part is responsible for what. MVC stands for Model View Controller, so we work with <i>models</i>, <i>views</i> and <i>controllers</i>.</p>`,
        `<h3>Model</h3>
        <ul>Model characteristics:
          <li>- Responsible for <i>representing your data</i>;</li>
          <li>- Responsible for <i>managing your data</i> (saving, updating, fetching, ...);</li>
          <li>- Doesn't matter if you manage data in memory, files, databases;</li>
          <li>- Contains <i>data-related logic</i>.</li>
        </ul>
        `,
        `<h3>View</h3>
        <ul>View characteristics:
          <li>- What the users see;</li>
          <li>- Shouldn't contain too much logic.</li>
        </ul>
        `,
        `<h3>Controller</h3>
        <ul>Controller characteristics:
          <li>- Connects Model and View;</li>
          <li>- Should only make sure that the two can communicate (in both directions).</li>
        </ul>
        <p>Controller should do everything that needs to be done to connect your Model and the View, so to get the data from A to B, and that can involve both directions. It can mean that through your View, for example, through a form, some data was sent to your Node.js application, and you now need to send that data to the Model to save it there, or it can of course mean you're fetching data via the Model and send that into a View, which is then returned to the user.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'Storing/Feching Data in/from Files with <code>fs.readFile()</code> and <code>fs.writeFile()</code>',
      sectionSource: '',
      highlights: {
        highlight1: ['Storing/Feching Data in/from Files'],
        highlight2: [
          '<code>fs.readFile()</code>',
          '<code>fs.writeFile()</code>',
        ],
      },
      tooltips: [
        `<pre><code>
<i>const fs = require('<b>fs</b>');</i>
const path = require('path');

const filePath = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = cb => {
  <b>fs.readFile</b>(filePath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      <b>fs.writeFile</b>(filePath, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};     
      </code></pre>`,
        `<p>IMPORTANT: It's important to understand that <i>working with <u>files for data storage</u> is suboptimal for bigger amounts of data</i>.</p>`,
      ],
    },
  ],
};

const dynamic_routes_and_advanced_models = {
  title: 'Dynamic Routes',
  titleDescription: 'Passing & using Dynamic Data',
  sections: [
    {
      sectionTitle: 'Module introduction',
      sectionSource: '',
      tooltips: [
        `<p>We need the ability to <i>pass some dynamic data through our routes</i>. We want to be able to <i>encode some information in our URL</i>, so that we can, for example, pass a product ID as part of the URL. In this module, you will learn how you can do that, how you can actually <i>submit or send data through the URL</i>, and when you would not do that and put your data into the request body instead.</p>
        <ul>You will learn about how to:
         <li>- pass <i>Route <u>Dynamic</u> Params</i>;</li>
         <li>- pass <i>Route <u>Optional</u> Params</i>;</li>
         <li>- use <i><u>Query</u> Params</i>;</li>
        </ul>`,
      ],
    },
    {
      sectionTitle: 'Responding to URL Parameters & Extracting Dynamic Params',
      sectionSource: '',
      highlights: {
        highlight1: ['Dynamic Params'],
      },
      tooltips: [
        `<pre><code>
const path = require('path');
const express = require('express');
const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
<i>router.get('/products/<b>:productId</b>', shopController.getProduct);</i>
router.get('/cart', shopController.getCart);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckout);

module.exports = router;      
      </code></pre>
      
      <pre><code>
exports.getProduct = (req, res, next) => {
  <i>const prodId = <b>req.params</b>.productId;</i>
  console.log(prodId);
  res.redirect('/');
};      
      </code></pre>
      `,
      ],
    },
    {
      sectionTitle: 'Responding to URL Parameters & Set Optional Params',
      sectionSource: '',
      highlights: {
        highlight1: ['Optional Params'],
      },
      tooltips: [
        `<pre><code>
app.get('/api/tours/:product/<b>:id?</b>', req, res, next) => {
  console.log(<i>req.params</i>);
};      
      </code></pre>
      `,
      ],
    },
    {
      sectionTitle: 'Using Query Params',
      sectionSource: '',
      highlights: {
        highlight1: ['Query Params'],
      },
      tooltips: [
        `      <pre><code>
exports.getProduct = (req, res, next) => {
  <i>const editMode = <b>req.query</b>.edit;</i>  //The extracted value always is a string!
  console.log(editMode);
  res.redirect('/');
};      
      </code></pre>
      
      <p>IMPORTANT: <i>The extracted value from query params will always be a string!</i> So boolean <code>true</code> or <code>false</code> will be extracted as string "true" or "false".</p>
      `,
      ],
    },
  ],
};

const sessions_and_cookies = {
  title: 'Sessions & Cookies',
  titleDescription: 'Persisting Data across Requests',
  sections: [
    {
      sectionTitle: 'What is a Cookie?',
      sectionSource: '',
      highlights: {
        highlight1: ['Cookie'],
      },
      tooltips: [
        `<h3>What is a cookie when we talk about browsers and servers?</h3>
        <p>In the context of browsers and servers, a "cookie" refers to <i>a small <b>piece of data</b> sent from a website and stored on the user's device by the user's web browser</i>. Cookies are <i>commonly used to remember information about the user</i>, such as their preferences, login credentials, or items added to a shopping cart.</p>
        <p><i>When you visit a website, <u>the server sends a cookie to your browser, which then stores it on your device</u>. The next time you visit the same website, <u>your browser sends the stored cookie back to the server along with your request</u>. This allows the server to recognize you and provide personalized content or functionality based on your previous interactions.</i></p>
        <ul>Cookies can be either <i><b>session</b> cookies</i> or <i><b>persistent</b> cookies</i>:
          <li>1. Session cookies: these are <i>temporary cookies that are erased when you close your browser</i>. They are typically used to maintain your session state while you navigate a website, such as keeping you logged in.
          <li>2. Persistent cookies: these cookies <i>remain on your device even after you close your browser</i>. They are <i>used to remember your preferences or login information across multiple sessions</i>, such as language preferences or customization settings.</li></li>
        </ul>
        <p>Cookies play a crucial role in enhancing user experience on the web by enabling personalized content and functionality, but they also raise privacy concerns. Some users may be wary of cookies tracking their online behavior, leading to debates over privacy regulations and the development of technologies like browser cookie settings and privacy-focused browsing modes.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Setting & manipulating Cookies',
      sectionSource: '',
      tooltips: [
        `<h3>Setting a cookie</h3>
        <pre><code>
exports.postLogin = (req, res, next) => {
  <i>res.<b>setHeader('Set-Cookie', 'loggedIn=true')</b>;</i>
  res.redirect('/');
};
      </code></pre>`,
        `<h3>Manipulating a cookie</h3>
        <pre><code>
exports.getLogin = (req, res, next) => {
  const isLoggedIn = <b>req
    .get('Cookie')</b>
    .split(';')[1]
    .trim()
    .split('=')[1];
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  <b>res.setHeader('Set-Cookie', 'loggedIn=true')</b>;
  res.redirect('/');
};      
      </code></pre>`,
        `<pre><code>
 const express = require('express');
 const authController = require('../controllers/auth');
 
 const router = express.Router();
 
 <i>router.get('/login', authController.getLogin);
 router.post('/login', authController.postLogin);</i>
 
 module.exports = router;     
      </code></pre>`,
        `<h3>Don't store sensitive cookies (data) in the browser</h3>
        <p>Keep in mind that a <i>user can view and can manipulate some cookies value directly on the client side (browser)</i>. So whilst it is certainly interesting to store some cookies (data) in the client side, especially things that are related to tracking users, advertisements tracking and so on, <i>sensitive cookies (data) should not be stored in the browser because users can edit them</i>. So whilst cookies are generally a good thing for storing data across requests, it might not be the best approach in all scenarios, and that is exactly something where sessions can help us with, and we will learn how sessions can help us with storing sensitive information across requests.</p>`,
      ],
    },
    {
      sectionTitle: 'What is a Session?',
      sectionSource: '',
      highlights: {
        highlight1: ['Session'],
      },
      tooltips: [
        `<p>Sessions and cookies are both mechanisms used in web development to manage user interactions and maintain stateful information, but they serve different purposes and have distinct characteristics.</p>
        <ul>Differences:
          <li>1. <i><u>Storage Location</u>: <b>Sessions store data on the server-side</b>, typically in memory or a database, while <b>cookies store data on the client-side</b>, within the user's browser.</i></li>
          <li>2. <u>Data Storage Capacity</u>: Sessions can store larger amounts of data since they are not limited by the size constraints of HTTP headers (like cookies are). Cookies, on the other hand, are limited to around 4KB of data per domain.</li>
          <li>3. <u>Lifetime</u>: Sessions are typically temporary and expire after a certain period of inactivity or when the user closes their browser. Cookies can have varying lifetimes, including session cookies (which expire when the browser is closed) and persistent cookies (which have an expiration date set by the server).</li>
          <li>4. <i><u>Security</u>: Sessions are generally considered more secure than cookies because session data is stored on the server-side, reducing the risk of data tampering or theft by malicious actors.</i> However, cookies can be encrypted or set with the 'HttpOnly' flag to enhance security.</li>
        </ul>
        `,
        `<h3>When to use each?</h3>
        <ul>Use Sessions When:
          <li>- You need to <i>store sensitive information</i> such as user authentication tokens or session-specific data.</li>
          <li>- You want to <i>minimize the amount of data stored on the client-side for security reasons</i>.</li>
          <li>- You require a larger storage capacity for session data.</li>
          <li>- You need to maintain state across multiple HTTP requests within a single browsing session.</li>
        </ul>
        <ul>Use Cookies When:
          <li>- You need to <i>persistently identify users</i> across multiple sessions or visits to the site.</li>
          <li>- You want to <i>store non-sensitive information</i> such as user preferences or browsing history.</li>
          <li>- You want to implement features like remembering login credentials, language preferences, or shopping cart contents.</li>
          <li>- You need to <i>share data between the client and server in a lightweight and efficient manner</i>.</li>
        </ul>
        <p>In practice, web developers often use a combination of sessions and cookies to achieve specific functionality and balance security, performance, and usability requirements. For example, <i>sessions may be used for managing user authentication and storing sensitive data, while cookies may be used for personalization and user tracking</i>.</p>
        <p>In general, use a session for any data that belongs to a user that you don't want to lose after every response you send from the server, and that should not be visible to other users.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Initializing the Session Middleware',
      sectionSource: '',
      tooltips: [
        `<p>We handle sessions by installing a third party package called <i><code>express-session</code></i>. <code>express-session</code> package is actually part of the official Express.js suite, but not baked into Express.js itself, that's why we need to install it.</p>`,
      ],
    },
    {
      sectionTitle: 'Using the Session Middleware',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using MongoDB to Store Sessions',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Deleting a Cookie',
      sectionSource: '',
      tooltips: [``],
    },
  ],
};

const adding_authentication = {
  title: 'Adding Authentication',
  titleDescription: 'Restricting Access',
  sections: [
    {
      sectionTitle: 'What is Authentication & how is implemented?',
      sectionSource: '',
      tooltips: [
        `<p>Authentication in web development is the <i>process of <b>verifying the identity</b> of a user or entity attempting to access a system or resource</i>. It ensures that the user is who they claim to be before granting access to sensitive data or functionalities.</p>`,
        `<h3>Authentication methods</h3>
        <ul>Authentication is typically implemented using various methods such as:
          <li>1. <i>Username and Password</i>: this is the most common form of authentication where users provide a unique username and a secret password that they have previously set up. The server compares these credentials with those stored in its database to authenticate the user.</li>
          <li>2. <i>Token-based Authentication</i>: in this method, a token is generated by the server and sent to the client upon successful authentication. The client then includes this token in subsequent requests to access protected resources. Tokens can be in the form of <u>JSON Web Tokens (JWT)</u>, <u>OAuth tokens</u>, or <u>session tokens</u>.</li>
          <li>3. <i>Multi-factor Authentication (MFA)</i>: MFA adds an extra layer of security by requiring users to provide two or more forms of verification before granting access. This could include something the user knows (like a password), something the user has (like a smartphone or token generator), or something the user is (like biometric data).</li>
        </ul>
        `,
        `<h3>Authentication flow</h3>
        <ul>The authentication process typically follows these steps:
          <li>1. <i>User Requests Access</i>: the user attempts to access a protected resource or log in to a system.</li>
          <li>2. <i>Authentication Request</i>: the user provides their credentials (such as username and password) to the server.</li>
          <li>3. <i>Credential Verification</i>: the server validates the provided credentials against those stored in its database.</li>
          <li>4. <i>Token Generation (if applicable)</i>: if the provided credentials are valid, the server generates a token and sends it to the client.</li>
          <li>5. <i>Access Granted</i>: the client includes the token (if applicable) in subsequent requests, and the server verifies the token to grant access to the requested resource.</li>
        </ul>`,
        `<h3>Storing & using Credentials</h3>
        <ul>User credentials refer to the information used by a user to prove their identity during the authentication process. This typically includes:
          <li>Username: a unique identifier assigned to the user.</li>
          <li>Password: a secret string chosen by the user during registration or account setup.</li>
        </ul>
        <p>In some cases, additional credentials might be required, such as security questions or biometric data, depending on the authentication method being used. It's essential for users to keep their credentials secure to prevent unauthorized access to their accounts.</p>
        <p>We can use sessions to store the information whether a user is signed in and let him interact with the page across requests. This is the idea behind authentication.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Encrypting vs Hashing Passwords',
      sectionSource: '',
      highlights: {
        highlight1: ['Encrypting vs Hashing'],
      },
      tooltips: [
        `<p>You can hashing passwords string by install a third party package: <code>npm install <b>bcryptjs</b></code>.</p>
        <p>bcryptjs is a package that helps us with hashing passwords.</p>`,
        `<h3>Encryption vs Hashing Passwords</h3>
        <p>There's two ways to take a password and encode it in some way that makes it different. One is encryption and the other is hashing.</p>
        <p>Encryption and hashing are both <i><u>cryptographic techniques</u> used to protect sensitive information</i> like passwords. However, they serve different purposes and have different properties when it comes to password security.</p>
        <ul>Encryption:
          <li>- Encryption is a <i>reversible process</i> where data (plaintext) is converted into an unreadable format (ciphertext) using an encryption algorithm and a key.</li>
          <li>- The key is required to decrypt the ciphertext back into plaintext.</li>
          <li>- <i>In the context of passwords, encryption isn't typically used directly. Instead, passwords are often hashed before storage, and encryption is used for other types of data protection.</i></li>
          <li>- With encryption, if someone gains access to the key, they can decrypt the data, potentially compromising the security of the passwords.</li>
        </ul>
        <ul>Hashing:
          <li>- Hashing is a <i>one-way process</i> where data is transformed into a fixed-size string of characters (hash value) using a hashing algorithm.</li>
          <li>- <i>Unlike encryption, hashing is not reversible. Once data is hashed, it cannot be transformed back into its original form.</i></li>
          <li>- For password storage, the hash value of a password is stored instead of the password itself.</li>
          <li>- <i>When a user attempts to log in, the password they provide is hashed and compared to the stored hash value.</i></li>
        </ul>
        `,
        `<h3>More about hashing technique</h3>
        <ul>Hash functions have some important properties for password security:
          <li>1. Deterministic: The same input always produces the same hash value.</li>
          <li>2. Pre-image resistance: Given a hash value, it should be computationally infeasible to determine the input that produced it.</li>
          <li>3. Collision resistance: It should be computationally infeasible to find two different inputs that produce the same hash value./li>
          <li>4. Non-reversible: The original input cannot be derived from the hash value.</li>
        </ul>
        <p>Common hashing algorithms include SHA-256, bcrypt, and Argon2.</p>
        `,
        `<h3>Security</h3>
        <p>Hashing is generally considered more secure for password storage because it's not reversible. Even if an attacker gains access to the hashed passwords, they cannot obtain the original passwords (assuming a secure hashing algorithm is used).</p>
        <p>Encryption, on the other hand, introduces the risk that an attacker could gain access to the decryption key and decrypt the passwords.</p>`,
        `<h3>Usage</h3>
        <p>Hashing is commonly used for password storage and verification.</p>
        <p>Encryption is used for securing data in transit or at rest, such as encrypting files, communications, or databases.</p>
        `,
        `<h3>Reversibility</h3>
        <p>Hashing is non-reversible, while encryption is reversible.</p>
        `,
        `<h3>Conclusion</h3>
        <p>In summary, when it comes to password security, <i>hashing is generally the preferred method for storing passwords because it provides better protection against unauthorized access even if the hashed data is compromised</i>. Encryption, while useful for other purposes, is not typically used directly for password storage due to its reversible nature and the potential risks associated with key management.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Using Middleware to Protect Routes',
      sectionSource: '',
      tooltips: [
        `<pre><code>
<i>module.exports = (req, res, next) => {
  if (!req.session.isLoggedIn) {
      return res.redirect('/login');
  }
  next();
}</i>      
      </code></pre>`,
        `<pre><code>
const path = require('path');
const express = require('express');
const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/add-product', <i>isAuth</i>, adminController.getAddProduct);

router.get('/products', <i>isAuth</i>, adminController.getProducts);

router.post('/add-product', <i>isAuth</i>, adminController.postAddProduct);

router.get('/edit-product/:productId', <i>isAuth</i>, adminController.getEditProduct);

router.post('/edit-product', <i>isAuth</i>, adminController.postEditProduct);

router.post('/delete-product', <i>isAuth</i>, adminController.postDeleteProduct);

module.exports = router;      
      </code></pre>`,
        `<p>You can add as many handlers as you want (ex: <code>router.get('/add-product', <i>isAuth, adminController.getAddProduct</i>)</code>), and they will be <i>parsed from left to right</i>, the request made for '/add-product' path will travel through handlers from left to right.<p>
      <p>So the request which reaches "/add-product" goes into that <code>isAuth</code> middleware first, and in the <code>isAuth</code> middleware, if the condition is meet, we will be redirecting and we don't call <code>next()</code>, hence the request would never continue to <code>adminController.getAddProduct</code> middleware.</p>
      <p>But if we make it past the <code>if</code> check in the <code>isAuth</code> middleware, we do call <code>next()</code>, so the next middleware in line will be called, and the next middleware in line would be the <code>adminController.getAddProduct</code> middleware.</p>`,
      ],
    },
    {
      sectionTitle: 'Understanding CSRF Attacks',
      sectionSource: '',
      highlights: {
        highlight1: ['CSRF Attacks'],
      },
      tooltips: [
        `<p><i>Cross-Site Request Forgery (CSRF)</i> is a type of malicious attack where an attacker tricks a user into unknowingly executing actions on a web application <i>in which they are authenticated</i>. In a CSRF attack, the attacker crafts a malicious request and gets the victim to execute it, exploiting the victim's authentication with the target website.</p>`,
        `<h3>CSRF Attacks flow</h3>
        <ul>Here's how a typical CSRF attack works:
          <li>1. User Authentication: The victim user is authenticated to a web application, usually by logging in and obtaining a session cookie.</li>
          <li>2. Malicious Link or Content: The attacker crafts a malicious link, usually embedded in an email, social media message, or on a compromised website, which when clicked, triggers a request to the target website.</li>
          <li>3. Execution of Request: When the victim clicks the malicious link, their browser sends a request to the target website. Since the victim is already authenticated, the target website processes the request thinking it's legitimate.</li>
          <li>4. Unauthorized Actions: The malicious request executes actions on the target website on behalf of the victim. These actions could include changing account settings, making purchases, transferring funds, or any other action that the victim has permission to perform.</li>
        </ul>`,
        `<p>CSRF attacks are particularly dangerous because they <i>exploit the trust that a website has in the authenticated user's browser. The attack doesn't require any vulnerabilities in the target website itself; instead, it relies on the trust between the user's browser and the website.</i></p>`,
        `<h3>How to prevent CSRF attacks</h3>
        <p>The idea behind protection of CSRF attacks is that you want to <i><b>ensure that users can only use their session if they are working only with your pages own by your domanin</b>, so that the session is not available on any fake page that might look like your page, but that aren't your page</i>.</p>
        <ul>To prevent CSRF attacks, web developers can implement the following measures:
          <li>1. <b>CSRF Tokens</b>: Include unique tokens in each form or request that are validated by the server to ensure that the request originated from the legitimate user.</li>
          <li>2. <i>Same-Site Cookies</i>: Use the SameSite attribute for cookies to limit when they are sent in a cross-site context, reducing the risk of CSRF attacks.</li>
          <li>3. <b>Referer Header Checks</b>: Validate the <code>Referer</code> header on incoming requests to ensure that they originate from the expected source.</li>
          <li>4. <i>Custom Request Headers</i>: Include custom headers in requests and validate them on the server side to ensure they match expected values.</li>
          <li>5. <i>Double Submit Cookies</i>: Have the server set a cookie value and also expect that same value to be sent as a parameter in the request, validating that they match.</li>
        </ul>
        <p>By implementing these measures, web developers can significantly reduce the risk of CSRF attacks on their applications.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'Using a CSRF Token & Adding CSRF Protection on Your Web Pages',
      sectionSource: '',
      highlights: {
        highlight1: ['CSRF Token'],
      },
      tooltips: [
        `
      <p>To generate CSRF Tokens we need to install a package <code>npm install <b>csurf</b></code>.</p>
      <p><code>csurf</code> is a package for Express.js that allows you to generate a so-called CSRF token. <i>CSRF token is a string value you can embed into your HTML forms into your web pages</i>, for every request that does something on the backend that changes the users state, so anything like ordering something, anything that does something sensitive which you want to protect against. You can include such a CSRF token in your views (pages) and <i>on the server, the <code>csurf</code> package will check if the incoming request does have that valid CSRF token that you include into your HTML forms</i>.</p>`,
        `<h3>How does a CSRF token protect us?</h3>
      <p>The fake sites might send a request to your backend and they could theoretically use your session, but the requests will be missing the CSRF token and they can't guess the CSRF token because it's a random hashed value and only one value is valid, and the <code>csurf</code> package which runs on the server determines whether a CSRF token is valid, so the fake sites can't guess it and they also can steal it, because a new CSRF token is generated for every page you render.</p>
      `,
      ],
    },
    {
      sectionTitle: 'csurf() alternatives',
      sectionSource: '',
      highlights: {
        highlight1: ['csurf()'],
      },
      tooltips: [``],
    },
  ],
};

const advanced_authentication = {
  title: 'Advanced Authentication',
  titleDescription: 'Beyond Signup & Login',
  sections: [
    {
      sectionTitle: 'Resetting Passwords',
      sectionSource: '',
      tooltips: [
        `<p>Password resetting has to be implemented ina way that prevents users from resetting random user accounts</p>`,
        `<p>Reset tokens have to be random, unguessable and unique.</p>`,
      ],
    },
    {
      sectionTitle: 'Implementing the Token Logic & Creating the Token',
      sectionSource: '',
      tooltips: [
        `<p>We want to be able to enter an email address and then receive an email with a link that allows us to reset the password Now for that, we need to first of all create a unique token that also has some expiry date, which we will store in our database, so that the link which we didn't click includes that token, and we can verify that the user did get that link from us because if we just, well let the user now change that password, we got no security mechanism in place, so we need that token to put it into the email we're about to send to only let users change the password through the email that contains that token, that's an additional security mechanism.</p>`,
        `<p>Reset tokens have to be random, unguessable and unique.</p>`,
      ],
    },
    {
      sectionTitle: 'Why we Need Authorization',
      sectionSource: '',
      tooltips: [
        `<p>Not every autenticated user should be able to do everything Instead, you want to lock down access by restricting the permissions of your users.</p>`,
      ],
    },
  ],
};

const sending_emails = {
  title: 'Sending Emails',
  titleDescription: 'Communicating with the Outside World',
  sections: [
    {
      sectionTitle: 'How Does Sending Emails Work?',
      sectionSource: '',
      tooltips: [
        `<h3>How does sending mails work?</h3>
      <p>It's important to understand that Node.js or Express.js are runtimes that we use for writing our server side logic, but <i>with Node.js or Express.js you can't trivially create a mailing server</i>.</p>
      <p>Handling mails is totally different to handling incoming requests and responses, it's a totally different technology, something totally different happens behind the scenes. Therefore in reality, you will very likely never implement your own mail server because that is a very complex task, creating a mail server that is capable of handling thousands of emails at the same time, sending them and so on, security, all that stuff is highly complex, so <i>in reality you typically use third party mail servers for sending emails</i>.</p>
      <p>By the way, all major web applications you might be interacting with, including Udemy, don't have their own mail servers, they are using third party providers like AWS or whatever it is for sending emails.</p>
      `,
      ],
    },
    {
      sectionTitle: 'Using Nodemailer to Send an Email',
      sectionSource: '',
      highlights: {
        highlight1: ['Nodemailer'],
      },
      tooltips: [
        `<p><i>Node.js or Express.js won't send emails on its own, you need some third party service for that.</i></p>
        <p>You can use a packages called <code>nodemailer</code> for sending email from Node.js or Express.js</p>
        `,
      ],
    },
    {
      sectionTitle: 'Potential Limitation for Large Scale Apps',
      sectionSource: '',
      tooltips: [``],
    },
  ],
};

const understanding_validation = {
  title: 'Understanding Validation: Form, User Input & Validation',
  titleDescription: 'Getting that Precious User Input',
  sections: [
    {
      sectionTitle: 'Why Should We Use Validation?',
      sectionSource: '',
      tooltips: [
        `<h3>Client-Side vs Server-Side Validation</h3>
        <p>Validating user inputs and forms in a web application is essential for <i>security</i>, <i>data integrity</i>, and <i>user experience</i>. Both client-side and server-side validations play crucial roles, and <i>implementing validation on both ends is considered the best approach</i>.</p>`,
        `<h3>Client-side Validation</h3>
        <p>Client-side validation occurs in the user's browser before the data is sent to the server. This is typically done using JavaScript.</p>
        <ul>Advantages:
          <li>- <i>Immediate Feedback</i>: Users get immediate feedback on their inputs, which enhances the user experience by allowing them to correct errors on-the-fly without waiting for a server response.</li>
          <li>- <i>Reduced Server Load</i>: By catching common input errors on the client side, it reduces the number of requests made to the server, hence lowering the server's workload and network traffic.</li>
        </ul>
        <ul>Considerations:
          <li>- <i>Cannot Be Trusted Alone</i>: Since client-side code can be modified or bypassed by an attacker, you cannot rely on client-side validation for security.</li>
          <li>- <i>Compatibility Issues</i>: You must ensure that validations work across different browsers and devices.</li>
        </ul>
        `,
        `<h3>Server-side Validation</h3>
        <p>Server-side validation is performed on the server, after the data has been submitted.</p>
        <ul>Advantages:
          <li>- <b>Security</b>: <i>Server-side validation is secure because the user cannot bypass or modify the validation logic.</i> It is the final checkpoint for ensuring that the data adhering to your application’s rules and requirements is saved in your database.</li>
          <li>- <b>Data Integrity</b>: <i>It ensures that only valid data is processed and stored, protecting your application against malicious data and attacks</i>, such as SQL injection, cross-site scripting (XSS), etc.</li>
        </ul>
        <ul>Considerations:
          <li>- <i>User Experience</i>: Solely relying on server-side validation can deteriorate the user experience, as it requires a round trip to the server to validate inputs, causing delays in feedback.</li>
          <li>- <i>Increased Server Load</i>: Every form submission requires server processing, which can increase the workload on the server.</li>
        </ul>        
        `,
        `<h3>Best Approach: Combination of Both</h3>
        <ul>The best practice is to implement both client-side and server-side validation:
          <li>- Use client-side validation to provide immediate feedback and improve the user experience. This is your first line of defense against incorrect or incomplete data submission.</li>
          <li>- Implement server-side validation as the primary security measure to ensure that the data is valid, secure, and consistent with your application's rules, regardless of the client-side validation outcome.</li>
        </ul>
        <p>This dual-layer approach <i>maximizes security and user experience</i>, ensuring that your application is robust against malicious activities while being user-friendly. <b>Always remember the golden rule of web development: "Never trust user input."</b></p>
        `,
      ],
    },
    {
      sectionTitle:
        'Setup & Basic Validation: <code>express-validator</code> package',
      sectionSource: '',
      highlights: {
        highlight1: ['<code>express-validator</code>'],
      },
      tooltips: [
        `<p>To add validation, we'll use a third party package. The package we'll be using is called <i><code>express-validator</code></i>.</p>
        <p>Typically you want to <i>validate on your <code>app.post()</code> or your non-get routes</i>, because you want to validate whenever the user sends data, and that is not the case for our <code>app.get()</code> routes.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Built-In & Custom Validators',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Async Validation',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Sanitizing Data with <code>express-validator</code>',
      sectionSource: '',
      tooltips: [
        `<h3>Sanitizing Data: Visual vs Security</h3>
      <p>Visual sanitizing data is a type of sanitizing data which makes sense to ensure that <i>your data is stored in a uniform format</i> (ex: trim all white spaces in an email, lowercase all letters in an email etc.). This type of data sanitization is only for visual aspects, not for security reasons.</p>
      `,
      ],
    },
  ],
};

const error_handling = {
  title: 'Error Handling',
  titleDescription: 'Fail Gracefully',
  sections: [
    {
      sectionTitle: 'Types of Errors & Error Handling',
      sectionSource: '',
      highlights: {
        highlight1: ['Error Handling'],
      },
      tooltips: [
        `<p>If your server <i>thrown errors</i> and you don't <i>handle them</i>, your server just crashes. Now how can we handle errors?</p>
        <p>One solution for synchronous code, so code that executes line by line immediately and does not wait for anything (for example where we don't interact with files or where we don't send requests), such code can  be wrapped with try/catch block.</p>
        <p>We also have async operations that can fail, and such operations when using Promises are handled with <code>then()</code> and <code>catch()</code>.</p>
        `,
        `<h3>Synchronous errors: handling errors with <code>try {} catch {}</code> block</h3>
        <p>To handle errors for synchronous code use <code>try {} catch {}</code> block.</p>
        <p>With try/catch we <code>try{}</code> a certain code, and then we have to add <code>catch{}</code> where we catch a potential error that might have been thrown, and in <code>catch{}</code> we can handle errors.</p>
        <pre></code>
function sum(a, b) {
    if (a && b) return a + b;
    throw new Error('Invalid arguments');
};

// console.log(sum(1));

try {
    console.log(sum(1));
} catch (error) {
    console.log('Error occurred!');
    console.log(error);
}

console.log('This works!');
        </code></pre>
        <p><i>NOTE: If you don't use try/catch, when a error occurrs, the call stack is blocked and you can't continue after the error line. If you handle errors with try/catch, when a error occurrs, the error is handle in catch block, BUT the call stack can continue to run after the catch block.</i></p>
        <p>When you use try/catch and handle a error inside of it, the call stack will never be blocked, and it can continue running after the error line.</p>
        `,
        `<h3>Asynchronous errors: handling errors with <code>then()</code> and <code>catch()</code></h3>
        <p>To handle errors for asynchronous code use <code>then()</code> and <code>catch()</code>.</p>`,
      ],
    },
    {
      sectionTitle: 'Throwing Errors in Code',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Returning Error Pages',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using the Express.js Error Handling Middleware',
      sectionSource: '',
      highlights: {
        highlight1: ['Express.js Error Handling Middleware'],
      },
      tooltips: [
        `<p>You can <i>use the Express error handling middleware to <u>handle all unhandled errors</u></i>.</p>
        <p>Instead of throwing an error in <code>catch()</code>, we can call <code>next(error)</code> with an error passed as an argument. This let Express.js know that an error occurred, and it will skip all other middlewares and move right away to an error handling middleware:</p>
        <pre><code>
.then() {
    //code here
}
.catch(err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    <i>next(error);</i>
}
        </code></pre>
        `,
        `<pre><code>
app.use(<i>(error, req, res, next)</i> {
    //code here
})
        </code></pre>
        <p>NOTE: If you got more than one error-handling middleware, they'll execute from top to bottom. Just like the "normal" middleware.</p>
        `,
        `<h3>Using the Error Handling Middleware Correctly</h3>
        <pre><code>
app.use((req, res, next) => {
    if (!req.session.user) {
      <i>throw new Error('Dummy Error'); //this will work because it is in synchronous function</i>
    }

    Promise
      .then(
        //code here
      )
      .catch(error) {
        <i>// throw new Error(error); //this will not work because it is in asynchronous function
        next(error);</i>
      }
})
        </code></pre>
        <pre><code>
app.use(<i>(error, req, res, next)</i> {
    //code here
})
        </code></pre>
        <p>In synchronous places, so outside of callbacks and Promises, you throw an error and Express.js will detect it and execute your next error handling middleware. Inside of async code, so inside of <code>then()</code>, <code>catch()</code> or callbacks, throwing an error does not work. <b>Inside of async code, you have to use <code>next(error)</code> with an error included.</b> So inside of async ode snippets, you need to use <code>next(error)</code> wrapping that error, outside of async code you can just throw that error.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Errors & HTTP Response Status Codes',
      sectionSource: '',
      highlights: {
        highlight1: ['Status Codes'],
      },
      tooltips: [
        `<h3>Which codes do we have and why do we use them?</h3>
      <p>First of all let's start with what the codes are therefore. The codes are simply <i><u>extra information</u> we pass to the browser which helps the browser understand if an operation succeeded or not</i>. If you're writing an application with a lot of client side JavaScript or a mobile app and you will fetch only data instead of complete HTML pages, status codes also allow you to understand if an error happened and which kind of error, because <i>you typically map certain kinds of errors to certain kinds of status codes</i>.</p>
      <ul>Status codes:
        <li>- <b><code>2xx</code> (Success)</b>: these are always success status codes, they indicate that the operation simply succeeded.</li>
        <li>- <b><code>3xx</code> (Redirect)</b>: indicates that a redirection happened.</li>
        <li>- <b><code>4xx</code> (Client-side error)</b>: indicates that something happened because an error was done by the client.</li>
        <li>- <b><code>5xx</code> (Server-side error)</b>: indicate that a server side error occurred.</li>
      </ul>
      <p>When returning responses, it can make sense to also set an appropiate HTTP status code - this lets the browser know what went wrong. Setting status code does NOT mean that the response is incomplete or the app crashed!</p>
      `,
      ],
    },
  ],
};

const file_upload_and_download = {
  title: 'File Upload & Download',
  titleDescription: 'Handling Files Correctly',
  sections: [
    {
      sectionTitle: 'Handling File Uploads with Multer',
      sectionSource: '',
      highlights: {
        highlight2: ['Multer'],
      },
      tooltips: [
        `<p>Multer is a third party package that <i>parses incoming requests for files</i>, request with mixt data: text and file data.</p>
        <p>Multer is a Node.js middleware for handling multipart/form-data, which is primarily used for uploading files.</p>
        <p><i>Multer will not process any form which is not multipart (multipart/form-data)</i>:</p>
        <pre><code>
form action="/admin/edit-product" method="POST" <b>enctype="multipart/form-data"</b>
        </code></pre>
        `,
        `<p>Like <code>bodyParser</code> package, <i><code>multer</code> is a middleware which we <u>execute on every incoming request</u></i>, and it then simply has a look at that request, sees if it's multipart/form-data and tries to extract files if that is the case.</p>`,
        `<h3>Key features and uses of Multer</h3>
        <p>1. <i>File Uploads</i>: Multer is used to handle file uploads, such as images, videos, documents, and other binary data, from HTML forms. It can process both single and multiple file uploads.</p>
        <p>2. <i>Configuration</i>: Multer allows you to configure various options, such as where to store uploaded files, how to name them, and size limits for uploaded files.</p>
        <p>3. <i>Middleware</i>: Multer is typically used as middleware in Express.js applications. It can be added to specific routes to process file uploads. Multer processes the uploaded files and makes them accessible in the request object for further handling.</p>
        <p>4. <i>Storage Engines</i>: Multer supports different storage engines, including disk storage, memory storage, and cloud storage solutions like Amazon S3. You can choose the storage engine that best suits your project's needs.</p>
        <p>5. <i>File Validation</i>: Multer can validate uploaded files based on file type, file size, and other criteria. This helps ensure that only acceptable files are processed.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Configuring Multer to Adjust Filename & Filepath',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Filtering Files by Mimetype',
      sectionSource: '',
      highlights: {
        highlight1: ['Mimetype'],
      },
      tooltips: [``],
    },
    {
      sectionTitle: 'Storing File Data in the Database',
      sectionSource: '',
      tooltips: [
        `<p>Files like images, videos, PDFs etc, should not be stored in a database, they are too big. It's too inefficient to store files in a database and query them from there. You need to <i>store files on file system</i>, but you need to <i>store the path to the file in the database</i>.</p>`,
      ],
    },
    {
      sectionTitle: 'Serving Images Statically',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Downloading Files with Authentication',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Setting File Type Headers',
      sectionSource: '',
      highlights: {
        highlight1: ['File Type Headers'],
      },
      tooltips: [
        `<p>Setting headers to files that you are download, you control how the browser should handle the incoming data. For example, should it automatically open a file, should it instead let you download it?</p>`,
      ],
    },
    {
      sectionTitle: 'Restricting File Access',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Streaming Data vs Preloading Data',
      sectionSource: '',
      highlights: {
        highlight1: ['Streaming Data'],
      },
      tooltips: [
        `<p><code>fs.readFile()</code> vs <code>fs.createReadStream()</code></p>
        <p>We can <code>fs.pipe(res)</code> our readable stream, the file stream into the response, and that means that the response will be streamed to the browser and will contain the data, and the data will basically be downloaded by the browser step by step, and for large files this is a huge advantage because Node.js never has to preload all the data into memory, but just streams it to the client on the fly, and the most it has to store is one chunk of data.</p>
        <pre><code>
const fs = require('fs');

function downloadPDF(req, res, next) {
    const file = <i>fs.createReadStream</i>(invoicePath);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline');
    <i>file.pipe(res);</i>
};
        </code></pre>
        `,
      ],
    },
    {
      sectionTitle: 'Using PDFKit for .pdf Generation',
      sectionSource: '',
      highlights: {
        highlight2: ['PDFKit'],
      },
      tooltips: [``],
    },
    {
      sectionTitle: 'Deleting Files',
      sectionSource: '',
      tooltips: [
        `<pre><code>
const fs = require('fs');

const deleteFile = (filePath) => {
    <i>fs.unlink</i>(filePath, (err) => {
        if (err) {
            throw (err);
        }
    });
}

exports.deleteFile = deleteFile;      
      </code></pre>`,
      ],
    },
  ],
};

const adding_pagination = {
  title: 'Adding Pagination',
  titleDescription: 'Fetching Data in Chuncks',
  sections: [
    {
      sectionTitle: 'Adding Pagination Links',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Retrieving a Chunk of Data',
      sectionSource: '',
      highlights: {
        highlight1: ['Chunk of Data'],
      },
      tooltips: [``],
    },
    {
      sectionTitle: 'Skip & Limit with SQL',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Preparing Pagination Data on the Server',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Dynamic Pagination Buttons',
      sectionSource: '',
      tooltips: [``],
    },
  ],
};

const understanding_async_requests = {
  title: 'Understanding Async Requests',
  titleDescription: 'Behind-The-Scenes Work',
  sections: [
    {
      sectionTitle: 'What are Async Requests?',
      sectionSource: '',
      highlights: {
        highlight1: ['Async Requests'],
      },
      tooltips: [
        `<h3>Traditional Request-Response flow on Web Applications</h3>
        <p>Thus far we always had a look at a particular kind of request and response. The request was always a request sent from our browser, when we submitted a form or entered a URL or clicked a link, and the response always was either a redirect or a new HTML page. Now that can take you very far, but <i>sometimes, you get some requests that will only happen behind the scenes, that means you don't want to get back a new HTML page, you only want to exchange some data with the server</i>. We'll have a look at what asynchronous JavaScript requests are, why we would use them, and how we will use them.</p>
        <p>In a web/mobile application you have your frontend(client-side) and you have your backend(server-side). Now typically, you send a request from your client to the server and you get back a response. Up until now, the response always was a HTML page or a redirect to another route that then returned also a HTML page.</p>
        <p>Now there is nothing wrong with that, but there are tasks where you don't want to reload the HTML page just to, for example delete an item. And actually, in modern web applications, the portion that happens behind the scenes grows, since we can do a lot with JavaScript in the browser where we never need to fetch a new HTML page, but where we constantly change the existing HTML page, as this is faster than loading a new one, but that's something I'll cover in the restful API modules.</p>
        `,
        `<h3>What are Asynchronous Requests?</h3>
        <p>The idea behind asynchronous requests is that you do send the request, but that request typically contains just some data in a special format named JSON, and that data is sent to the server, to a certain URL or a route accepted by that server (so that logic doesn't change). The server can do whatever it wants to do with that, and then we return a response, and that response is also returned behind the scenes, so it's NOT a new HTML page that needs to be rendered, it's instead again just some data in that <i>JSON format</i> typically.</p>
        <p>That is how client-server can communicate through JavaScript, so through client-side JavaScript and the server-side logic, <i>without exchanging a new HTML page</i>. That allows you to do some work behind the scenes without interrupting the user flow, without reloading the HTML page.</p>
        `,
      ],
    },
    {
      sectionTitle: 'The JSON Data Format',
      sectionSource: '',
      highlights: {
        highlight1: ['JSON'],
      },
      tooltips: [
        `<p>JSON stands for JavaScript Object Notation. JSON data looks a lot like a normal JavaScript object, but one important difference is that all key names are enclosed by double quotation marks <code>"</code>. Besides that, you can store text (string), numeric (integers and floats) and boolean data as well as nested objects and arrays.</p>`,
      ],
    },
    {
      sectionTitle: 'Adding Client-Side JS Code',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Sending & Handling Background Requests',
      sectionSource: '',
      tooltips: [
        `<p><pre><code>
function asyncRequest(req, res, next) {
    res.status(200)<i>.json({ message: "Success", data: ["str1", "str2"] })</i>;
}
        </code></pre></p>
        <p><i>NOTE: <code>.json()</code> will automatically transform a JavaScript object to JSON format.</i></p>
        `,
      ],
    },
    {
      sectionTitle: 'Manipulating the DOM',
      sectionSource: '',
      tooltips: [``],
    },
  ],
};

const adding_payments = {
  title: 'Adding Payments',
  titleDescription: 'Creating a Real Shop',
  sections: [
    {
      sectionTitle: 'How Payments Work',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding a Checkout Page',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using Stripe in Your App',
      sectionSource: '',
      tooltips: [``],
    },
  ],
};

const working_with_REST_APIs = {
  title: 'Working with REST APIs',
  titleDescription: 'Decoupling Frontend and Backend',
  sections: [
    {
      sectionTitle: 'What are REST APIs and why do we use Them?',
      sectionSource: '',
      tooltips: [
        `<p>REST APIs are there to solve one problem: <i>not every Frontend (User Interface) requires HTML Pages from your server! So not every UI might want your server to generate the HTML code, which effectively is the UI</i>.</p>
        <p><i>With REST APIs we <b>transfer <u>Data</u> instead of <u>UI</u> (HTML Pages)</b></i>.</p>
        <p>It's also important to highlight that in REST APIs only the response and the request data changes, but not the general server-side logic. So everything you learned about validating, reaching out to databases, handling files on the server, all these things don't change, you do that in exactly the same way when building a REST API, and that is really important because often, REST APIs and traditional web apps where you render the views on the server-side are seen as two totally different things. They are not, they only differ in the response and in the kind of data you expect, but they don't differ in what happens on the server, besides the fact that you don't render the view.</p>
        <p>Most of the server-side code does not change when we build REST APIs, only reqeust + response data is affected.</p>
        `,
        `<h3>"Traditional" server-side logic vs REST APIs</h3>
        <p>The most important thing a REST API offers is that we can have <i>a single REST API with many consumers</i>: browsers, native mobiles systems (android, IOS), native app (Windows or MacOS).
        <p>In "traditional" server, with the HTML pages generated on the server, only browsers can use that server.</p>
        `,
      ],
    },
    {
      sectionTitle: 'The REST API Arhitecture',
      sectionSource: '',
      tooltips: [
        `<h3>Separate API into logical resources</h3>
        <p><img src="../../src/img/rest_api_arhitecture_1.jpg"/></p>
        <p><img src="../../src/img/rest_api_arhitecture_2.jpg"/></p>
        `,
        `<h3>Send data as JSON</h3>
        <p><img src="../../src/img/rest_api_arhitecture_3.jpg"/></p>`,
        `<h3>REST APIs are stateless</h3>
        <p>In REST APIs all state is handled <i>on the client</i>. This means that each request must contain <u>all</u> the information necessary to process a certain request from the server. <i>The server should <u>not</u> have to remember previous requests in order to process the current request.</i></p>
        <p><img src="../../src/img/rest_api_arhitecture_4.jpg"/></p>`,
      ],
    },
    {
      sectionTitle: 'Accessing Data with REST APIs',
      sectionSource: '',
      tooltips: [
        `<ul>Data Formats:
        <li>- HTML;</li>
        <li>- Plain Text;</li>
        <li>- XML;</li>
        <li>- JSON;</li>
      </ul>`,
      ],
    },
    {
      sectionTitle: 'Understanding Routing & HTTP Methods',
      sectionSource: '',
      tooltips: [
        `<p>API Endpoints</p>
        <p>When you switch from "Classic" to REST APIs, you will have more HTTP methods available. In "classic" server, you only have "GET" and "POST", in REST APIs you will have: "PUT", "PATCH", "DELETE" and "OPTIONS".</p>`,
      ],
    },
    {
      sectionTitle: 'REST APIs - The Core Principles',
      sectionSource: '',
      tooltips: [
        `<ul>REST Concepts & Ideas:
        <li>- <i>REST APIs are all about data, no UI logic in exchanged;</i></li>
        <li>- <i>REST APIs are normal Node.js servers</i> which expose different endpoints (HTTP method + path) for clients to send request to;</li>
        <li>- <i>JSON is the common data format</i> that is used both for requests and resposnes;</li>
        <li>- REST APIs are decoupled from the clients that use them.</li>
      </ul>`,
      ],
    },
    {
      sectionTitle: 'Sending Requests & Responses and Working with Postman',
      sectionSource: '',
      highlights: {
        highlight1: ['Postman'],
      },
      tooltips: [``],
    },
    {
      sectionTitle: 'REST APIs, Clients & CORS Errors',
      sectionSource: '',
      highlights: {
        highlight2: ['CORS Errors'],
      },
      tooltips: [
        `<h3>What are CORS?</h3>
      <p>CORS stands for Cross Origin Resource Sharing and <i>by default, CORS is not allowed by browsers</i>.</p>
      <p><img src="../../src/img/cors_1.jpg"/></p>
      <p>We can <i>overwrite CORS</i> in our Node.js server, because CORS mechanism makes sense for some applications, for REST APIs, it typically does not. We want to <i>allow our server to share its data</i>, we want to offer data from our server to different clients, and these clients will often not be served by the same server as our REST API runs on.</p>
      <p>Take Google Maps for example: you're not running your app on Google servers, still you can access it, and the same is true for your own API. Even if you build both the frontend and the backend, you will often serve the two ends from different servers, because you can choose a server for the frontend that's optimized for frontend code, that really serves that really well, and you serve your server-side code, your Node.js code from a different server. So you will have different domains, different addresses there too for frontend and backend.</p>
      <p>A lot of people see the CORS error on the client-side and want to solve it in their browser-side JavaScript code, you just can't, <b>you can only solve CORS errors on the server</b>.</p>
      <pre><code>
const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    <i>res.setHeader(<b>'Access-Control-Allow-<u>Origin</u>'</b>, '*');
    res.setHeader(<b>'Access-Control-Allow-<u>Methods</u>'</b>, 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader(<b>'Access-Control-Allow-<u>Headers</u>'</b>, 'Content-Type, Authorization');</i>
    next();
});

app.use('/feed', feedRoutes);

app.listen(8080);
      </code></pre>
      <p>CORS errors occur when the API and your client are sitting on different servers, different domains, and they want to exchange data. You "fix them" in quotation marks, because they are a security mechanism, but you can bypass that on purpose by setting the right <u>CORS headers</u>, which basically tell the client "Hey, it's fine, I'm a public API! You may use my data!".</p>
      <p>So <b>CORS errors occur when using an API that does NOT set CORS headers!</b></p>
      `,
      ],
    },
    {
      sectionTitle: 'Sending POST Requests',
      sectionSource: '',
      tooltips: [
        `<pre><code>
fetch('http://localhost:8080/feed/post', {
  <i><b>method</b>: 'POST',
  <b>headers</b>: {
    'Content-Type': 'application/json'
  }
  <b>body</b>: JSON.stringify</i>({ title: 'A title', content: 'Some content...'})
})      
      </code></pre>
      <p>Attach data in JSON format and let the other end know by setting the "Conten-Type" header.</p>
      <ul><i>Express.js set the "Conten-Type" header automatically when using the <code>res.json()</code> method.</i> In the browser, setting the "Conten-Type" header depends on which method you use:
        <li>- when using the <i>Fetch API</i> we had to set it manually;</li>
        <li>- when you would use <i>Axios library</i> in browser-side JavaScript for sending async requests, it would be done automatically</li>
      </ul>
      `,
      ],
    },
    {
      sectionTitle: 'Static Images & Error Handling',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Image Names & Windows Operating System',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Uploading Images (Files) with Multer',
      highlights: {
        highlight1: ['Uploading Images (Files) with Multer'],
      },
      sectionSource: '',
      tooltips: [
        `<pre><code>
<i>const formData = <b>new FormData()</b>;
<b>formData.append</b>('title', 'someTitle');
<b>formData.append</b>('image', FileList);</i>

fetch('http://localhost:8080/feed/post', {
<i><b>method</b>: 'POST',
<b>body</b>: formData</i>,
})      
  </code></pre>
  <p>NOTE: When we upload images, we won't use JSON data because <i>JSON data is only text</i>, so only data that can be represented as a text. A file can't be, or not easily can be JSON format, it will be very big quickly and very big files are a huge issue or impossible to upload in JSON format. So <b>we can't use JSON for data where we have both a file and normal text data</b>.</p>
  `,
      ],
    },
    {
      sectionTitle: 'How Does Authentication Work: JSON Web Token (JWT)',
      sectionSource: '',
      highlights: {
        highlight2: ['JSON Web Token (JWT)'],
      },
      tooltips: [
        `<h3>A REST API is stateless</h3>
        <p>In REST APIs all state is handled <i>on the client</i>. This means that each request must contain <u>all</u> the information necessary to process a certain request from the server. <i>The server should <u>not</u> have to remember previous requests in order to process the current request.</i></p>
        `,
        `<h3>How Does Authentication Work?</h3>
    <p>In REST APIs, we still have our client-side and server-side. The client still sends authentication credentials to the server.</p>
  <p>In the past, without building a REST API, we would have checked that credentials on the server and if it is valid, we would have established a session. Now, <i>we don't use a session anymore because REST APIs are stateless</i>, REST APIs don't care about the client. In REST APIs, server and client are strict decoupling and every request should be treated standalone: that means every request should have all the data it needs to authenticate itself. With a session, the server needs to store data about the client, the server then stores that a client is authenticated, and that's just not how REST APIs work. <i>In REST APIs, the server will not store anything about any client, so <b>we don't store sessions on a REST API</b>.</i></p>
  <p>Instead of using session like we use to do, <i>in REST APIs we return a so-called <b>token</b> to the client</i>. That token will be <i>generated on the server</i> and will hold some information which can only be <i>validated by the server</i>, and this token will then be <i>stored in the client (in storage in the browser)</i>. The client can then attach this token to every subsequent request it sends to the server. <i>So this stored token is then attached to every request that targets a resource on the server which requires authentication.</i></p>
  <p>That token can only be validated by the server, which created the token, and if you change that token on the frontend or you try to create it to fake that you are authenticated, that will be detected, because the server used a certain algorithm for generating the token which you can't fake, because you don't know the private key used by that server for generating the token.</p>
  <p><img src="../../src/img/token_1.jpg"/></p>
  `,
        `<h3>What's that Token?</h3>
    <p>The token contains <i>JSON data</i> or JavaScript data in the end, plus a <i>signature</i> (this signature is generated on the server with a special private key which is only stored on the server), and this gives us a so-called <b>JSON Web Token (JWT)</b>.</p>
    <p>This JWT is then returned to the client and <i>the signature can only be verified by the server</i>, so you can't edit or create the JWT on the client (well, you can edit it, but then the server will detect this and will treat the token as invalid).</p>
    <p><img src="../../src/img/token_2.jpg"/></p>
    <p>This is how we generate the token or how we do authentication in REST APIs. We have the token which can be checked by the server, but which is NOT stored on the server with a session, instead is stored in the browser storage.</p>
    `,
        `<h3>Summary</h3>
        <p>- The REST API server does NOT care about the client, request are handled in isolation => No session.</p>
    <p>- Due to no sessions being used, authentication works differently in REST APIs.</p>
    <p>- Each request needs to be able to send some data that proves that the request is authenticated.</p>
    <p>- JSON Web Tokens ("JWT") are a common way of storing authentication information on the client and providing authentication status.</p>
    <p>- JWTs are signed by the server and can only be validated by the server.</p>
    `,
      ],
    },
    {
      sectionTitle: 'Creating JSON Web Tokens (JWTs)',
      sectionSource: '',
      highlights: {
        highlight1: ['Creating JSON Web Tokens (JWTs)'],
      },
      tooltips: [
        `<p>For generating JSON Web Tokens we need to install a package: <code>npm install <i>jsonwebtoken</i></code>. This is a package which allows us to create new JSON Web Tokens.</p>
    <pre><code>
const jwt = require('jsonwebtoken');

app.post((req, res, next) => {
<i>jwt<b>.sign</b>(
  {
    email: 'userEmail',
    userId: 'userId,
  },
  <b>'secret-key'</b>,
  { <b>expiresIn</b>: '1h' }
);</i>

res.status(200).json({ token, userId });
});
    </code></pre>
    <p><code>jwt.sign()</code> creates a new signature and packs that into a new JSON Web Token.</p>
    <p>Setting an expiration time to the JWT is a security mechanism you should add. Because the token is stored in the client, that token could be stolen. If the user does not logout, another person copies the token from his browser storage and then he can use it on his own PC forever. If you set an expiration time, the token becomes invalid when that time passed, so setting an expiration time is a good security mechanism and a nice balance between usability, where you would want infinite sessions, and security, where you would want to limit JWT validity to an amount of time.</p>
    `,
      ],
    },
    {
      sectionTitle: 'Using & Validating the Token',
      sectionSource: '',
      highlights: {
        highlight1: ['Using', 'Validating'],
      },
      tooltips: [
        `<p>Now that we're generating a token and we're passing it to the client, we need to make sure that the client can pass back the token to the backend, to the REST API, and we then check for it's existence and it's validity, before we allow the request to continue. So <i>with JWT validation, we can block access to specific API Endpoints</i>.</p>`,
        `<h3>How you attach a JWT when you send an async request from the client</h3>
    <p>When you make a async request from the client to your REST API, you can <i>attach your JWT to the <code>fetch()</code> request headers</i>:</p>
    <pre><code>
fetch('https://rest-api/auth', {
<i>headers: {
  <b>Authorization: 'Bearer ' + token</b>
}</i>
});
    </code></pre>`,
        `<p>On your server, you can read the Authorization header:</p>
    <pre><code>
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  <i>const authHeader = <b>req.get('Authorization')</b>;</i>

  if (!authHeader) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
}

  const token = authHeader.split(' ')[1];

  let decodedToken;
  try {
    <i>decodedToken = <b>jwt.verify</b>(token, 'somesupersecretsecret');</i>
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }

  if (!decodedToken) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }

  req.userId = decodedToken.userId;
  next();
};
    </code></pre>
    <p><code>jwt.verify()</code> will both decode and verify your JWT. You also have a <code>jwt.decode()</code>, but this will only decode your JWT and not check if it's valid.</p>
    `,
      ],
    },
  ],
};

const understanding_async_await_in_NodeJS = {
  title: 'Understanding Async Await in Node.js',
  titleDescription: 'Working with Async Code more Elegantly',
  sections: [
    {
      sectionTitle: 'What is Async Await All About?',
      sectionSource: '',
      tooltips: [
        `<p><code>async</code> and <code>await</code> are two keywords which are part of the core JavaScript language, they're not an exclusive part of the Node.js runtime, they are also available in modern browsers or in frontend projects, but you can use them in also Node.js projects. The question of course is what do these two keywords do?</p>
        <p><i><code>async</code> and <code>await</code> allows you to write asynchronous requests that looks like a synchronous way.</i></p>
        `,
      ],
    },
    {
      sectionTitle: 'Transforming "Then Catch" to "Async Await"',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Top-level "await"',
      sectionSource: '',
      tooltips: [``],
    },
  ],
};

const websockets_and_socket = {
  title: 'Understanding Websockets & Socket.io',
  titleDescription: 'Pushing Data from Server to Client',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'What Are Websockets & Why Would You Use Them?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Websocket Solutions - An Overview',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Setting Up Socket.io on the Server',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Establishing a Connection From the Client',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Identifying Realtime Potential',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Sharing the IO Instance Across Files',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Synchronizing POST Additions',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fixing a Bug - The Missing Username',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Updating Posts On All Connected Clients',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Sorting Correctly',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Deleting Posts Across Clients',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Wrap Up',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Useful Resources & Links',
      sectionSource: '',
      tooltips: [``],
    },
  ],
};

const graphQL = {
  title: 'Working with GraphQL',
  titleDescription: 'REST on Steroids',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'What is GraphQL?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Understanding the Setup & Writing our First Query',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Defining a Mutation Schema',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding a Mutation Resolver & GraphiQL',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Input Validation',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Handling Errors',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Connecting the Frontend to the GraphQL API',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding a Login Query & a Resolver',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Login Functionality',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding a Create Post Mutation',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Extracting User Data From the Auth Token',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Sending the "Create Post" Query',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fixing a Bug & Adding New Posts Correctly',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding a "Get Post" Query & Resolver',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Sending "Create Post" and "Get Post" Queries',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Pagination',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Uploading Images',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fetching the imageUrl',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Viewing a Single Post',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Updating Posts',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Deleting Posts',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Posts & Pagination',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Managing the User Status',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using Variables',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fixing a Pagination Bug',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Wrap Up',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Useful Resources & Links',
      sectionSource: '',
      tooltips: [``],
    },
  ],
};

const deploying_our_app = {
  title: 'Deploying our App',
  titleDescription: 'From Development to Production',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Deploying Different Kinds of Apps',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Deployment Preparations',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using Environment Variables',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using Production API Keys',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Setting Secure Response Headers with Helmet',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Compressing Assets',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Setting Up Request Logging',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'More on Logging',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Setting Up a SSL Server',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using a Hosting Provider',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Understanding the Project & the Git Setup',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'A Deployment Example with Heroku',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Storing User-generated Files on Heroku',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Deploying APIs',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Useful Resources & Links',
      sectionSource: '',
      tooltips: [``],
    },
  ],
};

const testing = {
  title: 'Testing Node.js Applications',
  titleDescription: 'Automated Code Test',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'What is Testing?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Why & How?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Setup and Writing a First Test',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Testing the Auth Middleware',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Organizing Multiple Tests',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'What Not To Test!',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using Stubs',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Testing Controllers',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Testing Asynchronous Code',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Setting up a Testing Database',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Testing Code With An Active Database',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Cleaning Up',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Hooks',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Testing Code That Requires Authentication',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Wrap Up & Mastering Tests',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Useful Resources & Links',
      sectionSource: '',
      tooltips: [``],
    },
  ],
};

const nodeJS_as_a_build_tool = {
  title: 'Node.js as a Build Tool & Using npm',
  titleDescription: 'Beyond Node Web Servers',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'npm & Node.js',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using npm',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Versioning in package.json',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'What is a Build Tool?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using Node.js in Build Processes',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Useful Resources & Links',
      sectionSource: '',
      tooltips: [``],
    },
  ],
};

const modern_javaScript_and_nodeJS = {
  title: 'Modern JavaScript & NodeJS',
  titleDescription: '',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'What is this Module About?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Working with ES Modules & Node',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'More on ES Modules',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Node Core Modules & Promises',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Module Resources',
      sectionSource: '',
      tooltips: [``],
    },
  ],
};

const nodeJS_and_TypeScript = {
  title: 'NodeJS & TypeScript',
  titleDescription: '',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'TypeScript: What & Why?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'TypeScript Setup',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Assigning Types',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Type Inference & Type Casting',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Configuring TypeScript',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Working with Union Types',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using Object & Array Types',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Working with Type Aliases & Interfaces',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Understanding Generics',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'A First Summary',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Node & TypeScript: Setup',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Getting Started with Node and TypeScript',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Writing TypeScript Express.js Code',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding REST Routes with TypeScript',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Finishing the REST Routes',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Testing the API',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using Type Casting',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Moving to a Better Project Structure',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Wrap Up',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Module Resources',
      sectionSource: '',
      tooltips: [``],
    },
  ],
};

export const dataStorage = [
  introduction,
  understanding_the_basics,
  development_workflow_and_debugging,
  working_with_ExpressJS,
  dynamic_content_and_adding_templating_engines,
  mvc,
  dynamic_routes_and_advanced_models,
  sessions_and_cookies,
  adding_authentication,
  advanced_authentication,
  sending_emails,
  understanding_validation,
  error_handling,
  file_upload_and_download,
  adding_pagination,
  understanding_async_requests,
  adding_payments,
  working_with_REST_APIs,
  understanding_async_await_in_NodeJS,
  websockets_and_socket,
  graphQL,
  deploying_our_app,
  testing,
  nodeJS_as_a_build_tool,
  modern_javaScript_and_nodeJS,
  nodeJS_and_TypeScript,
];

const allSections = dataStorage.map(el => el.sections).flat();
export const allArticles = allSections
  .map(el => {
    let subArticles;
    if (el.sectionArticles?.length > 0) {
      subArticles = el.sectionArticles.map(subElement => {
        return {
          sectionTitle: subElement.title,
          id: subElement.id,
          sectionSource: subElement.source,
          tooltips: subElement.summary,
        };
      });
    }

    if (subArticles) {
      return [
        {
          sectionTitle: el.title,
          id: el.id,
          sectionSource: el.source,
          tooltips: el.summary,
        },
        ...subArticles,
      ];
    }

    return {
      sectionTitle: el.title,
      id: el.id,
      sectionSource: el.source,
      tooltips: el.summary,
    };
  })
  .flat();
