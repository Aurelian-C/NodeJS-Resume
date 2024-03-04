const introduction = {
  title: 'Introduction',
  sections: [
    {
      sectionTitle: 'What is Node.js? What it is used for?',
      sectionSource: '',
      tooltips: [
        `<h3>What is Node.js?</h3>
        <p>Node.js is a <i>runtime environment</i> that <i>allows you to run JavaScript code outside of a web browser</i>. It's built on the Chrome V8 JavaScript engine and provides a set of libraries and tools for <i>building server-side and networking applications</i>.</p>`,
        `<h3>What is it used for?</h3>
        <p>Node.js is commonly used for building web servers, APIs (Application Programming Interfaces), real-time chat applications, streaming applications, and other networked applications.</p>
        `,
        `<h3>Node.js characteristics</h3>
        <p>Its <i>non-blocking</i>, <i>event-driven architecture</i> makes it particularly well-suited for building scalable and high-performance applications that <i>can handle a large number of simultaneous connections</i>. Additionally, it has a vibrant ecosystem of libraries and frameworks, such as Express.js, that make it easy to develop web applications with Node.js.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Installing Node.js',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Working with the REPL vs using files',
      sectionSource: '',
      highlights: {
        highlight1: ['REPL vs using files'],
      },
      tooltips: [``],
    },
  ],
};

const understanding_the_basics = {
  title: 'Understanding the Basics',
  sections: [
    {
      sectionTitle: 'How the Web works',
      sectionSource: '',
      tooltips: [
        `<p>The web works through a combination of <i>client-server architecture</i>, <i>protocols</i>, and various technologies.</p>`,
        `<h3>Client-Server Model</h3>
        The web operates on a client-server model. Clients, such as web browsers (e.g., Chrome, Firefox), request resources (e.g., web pages, images, videos) from servers, which store and provide those resources.`,
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
      sectionTitle: 'Creating a Node Server',
      sectionSource: '',
      highlights: {
        highlight1: ['Node Server'],
      },
      tooltips: [
        `<pre><code>
const http = require('http');

const server = http.createServer((req, res) => {
    // Your server side code here
});

server.listen(3000);
      </code></pre>
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
      tooltips: [``],
    },
    {
      sectionTitle: 'Routing Requests',
      sectionSource: '',
      highlights: {
        highlight1: ['Routing'],
      },
      tooltips: [``],
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
      sectionTitle: 'Parsing Request Bodies',
      sectionSource: '',
      highlights: {
        highlight1: ['Parsing'],
      },
      tooltips: [``],
    },
    {
      sectionTitle: 'Understanding Event Driven Code Execution',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Blocking and Non-Blocking code',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using the Node Modules system',
      sectionSource: '',
      highlights: {
        highlight1: ['Node Modules'],
      },
      tooltips: [``],
    },
  ],
};

const development_workflow_and_debugging = {
  title: 'Improved Development Workflow and Debugging',
  sections: [
    {
      sectionTitle: 'Understanding NPM Scripts',
      sectionSource: '',
      highlights: {
        highlight1: ['NPM Scripts'],
      },
      tooltips: [``],
    },
    {
      sectionTitle: 'Installing 3rd Party Packages',
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
      sectionTitle: 'Global Features vs Core Modules vs Third-Party Modules',
      sectionSource: '',
      tooltips: [``],
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
      sectionTitle: 'Global & Local npm Packages',
      sectionSource: '',
      tooltips: [
        `<p>In the last lecture, we added nodemon as a <i>local dependency</i> to our project.</p>
      <p>The good thing about local dependencies is that you can share projects without the node_modules folder (where they are stored) and you can run <code>npm install</code> in a project to then re-create that node_modules folder. This allows you to share only your source code, hence reducing the size of the shared project vastly.</p>
      <p>I showed that <code>nodemon app.js</code> would not work in the terminal or command line because we don't use local dependencies there but global packages. You could install nodemon globally if you wanted (this is NOT required though - because we can just run it locally): <code>npm install -g nodemon</code> would do the trick. Specifically <i>the <code>-g</code> flag ensures that the package gets added as a global package which you now can use anywhere on your machine, <u>directly from inside the terminal or command prompt</u></i>.</p>`,
      ],
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
  sections: [
    {
      sectionTitle: 'What is Express.js?',
      highlights: {
        highlight2: ['Express.js'],
      },
      sectionSource: '',
      tooltips: [
        `<h3>Working only with Node.js can be a pain</h3>
        <p>With Node.js alone, you have to <i>write a lot of code to deal with basic things</i> like, for example, extracting the body of an incoming request. Now typically you don't want to do that, you want to focus on your business logic, the code that makes up your specific application, you don't want to work or you don't want to care about standard tasks like handling incoming requests or routing, and therefore we'll now have a look at Express.js.</p>
        <p>NOTE: Express.js is a package/framework you can use for Node.js that will help you write better Node.js code and focus on your business logic. Now, of course you could stick to Vanilla Node.js and that works, and depending on the complexity of your application or the level of challenges you are seeking, you can absolutely stick to Vanilla Node.js, you can theoretically write everything on your own just with Vanilla Node.js.</p>
        `,
        `<h3>What is Express.js and why do we use it?</h3>
        <p>Express.js is a <i>framework</i> you can install as a third party package into your node project and as such, it basically <i>helps you outsource some of that nitty-gritty work</i>, some of these details you don't want to care about, it gives you a rule set in which you work and a lot of utility functions that help you write cleaner code and focus on your core business.</p>
        <p>A framework is basically a set of helper functions, tools & rules that help you build your applicatiion.</p>`,
      ],
    },
    {
      sectionTitle: 'Installing Express.js',
      sectionSource: '',
      tooltips: [
        `<p>You install Express.js by typing in your VS Code terminal the <code>npm i express</code> command. This command will install Express.js as a dependency to your project.</p>`,
        `<p>Once you install Express.js, you need to import it in your app.js file and create your Node.js server. You do this like the example below:</p>
        <pre><code>
const express = require('express');

const app = express();

app.use((req, res, next) => {
  // Middleware function code
})

app.listen(3000);
        </code></pre>`,
        `<p>Express.js handling incoming requests in a certain way called middleware functions. Middleware functions are a key characteristic of Express framework.</p>`,
      ],
    },
    {
      sectionTitle:
        'Middleware Functions, <code>next()</code> Function & Sending a Response with <code>res.send()</code> function',
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
      sectionTitle: 'Handling Different Routes With <code>app.use()</code>',
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
      sectionTitle: 'Parsing Incoming Requests with body-parser Package',
      sectionSource: '',
      highlights: {
        highlight1: ['Parsing Incoming Requests'],
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
      sectionTitle: 'Limiting Middleware Execution to POST Requests',
      sectionSource: '',
      tooltips: [
        `<pre><code>
const express = require('express');
const bodyParser = require('body-parser');
        
const app = express();
        
app.use(bodyParser.urlencoded({ extended: false }));
        
<i>// app.use() will work with all HTTP methods (GET, POST, PATCH, etc.)</i>
app<b>.use</b>('/', (req, res, next) => {
  next();
});
        
<i>// app.get() will work only with GET method</i>
app<b>.get</b>('/add-product', (req, res, next) => {
  res.send();
});
        
<i>// app.post() will work only with POST method</i>
app<b>.post</b>('/product', (req, res, next) => {
  res.redirect('/');
});
        
app.use('/', (req, res, next) => {
  res.send();
});
        
app.listen(3000);
      </code></pre>`,
        `<ul>There are also:
        <li>- <code>app.put()</code>;</li>
        <li>- <code>app.patch()</code>;</li>
        <li>- <code>app.delete()</code>.</li>
      </ul>
      `,
      ],
    },
    {
      sectionTitle: 'Using Express Router',
      sectionSource: '',
      tooltips: [
        `<p>With Express.js routing we can execute different code for different incoming requests and paths or urls without having to write a bunch of <code>if</code> statements.</p>`,
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

const app = express();

<i>const adminRoutes = require('./routes/admin');</i>

<i>app.use(adminRoutes);</i>

app.listen(3000);
        </code></pre>
        `,
      ],
    },
    {
      sectionTitle: 'Adding a 404 Error Page',
      sectionSource: '',
      tooltips: [
        `<pre><code>
const express = require('express');
      
const app = express();
      
const adminRoutes = require('./routes/admin');
      
app.use(adminRoutes);

<i>app.use((req, res, next) => {
  res.send('Page Not Found!');
})</i>
      
app.listen(3000);
              </code></pre>`,
      ],
    },
    {
      sectionTitle: 'Filtering Paths',
      sectionSource: '',
      tooltips: [
        `<pre><code>
const express = require("express");

const router = express.Router();
        
// The same path (/add-product) can be used if the method is different (.get)
// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.send('Form submision!');
});
        
// The same path (/add-product) can be used if the method is different (.post)
// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
   res.redirect("/");
});

module.exports = router;
        </code></pre>
        
        <pre><code>
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

<i>app.use('/admin', adminRoutes);</i>
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('Page not found!');
});

app.listen(3000);
      </code></pre>`,
      ],
    },
    {
      sectionTitle: 'Creating HTML Pages',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Serving HTML Pages',
      sectionSource: '',
      tooltips: [
        `<p>I'll show you how we can return HTML pages (files), more specific HTML files we prepared to our client, instead of writing HTML code in Node.js as we did us far, which wasn't really that great.</p>`,
        `<pre><code>
const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  <i>res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));</i>
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
        </code></pre>
        `,
        `<h3>More aboute <code>path.join()</code> method</h3>
        <p>The <code>path.join()</code> method <i>joins the specified <u>path segments</u> into <u>one path</u></i>. You can specify as many path segments as you like.</p>
        <p>The specified <i>path segments must be <u>strings</u></i>, separated by comma <code>,</code>.</p>
        `,
        `<h3>More aboute <code>__dirname</code> variable</h3>
        <p><code>__dirname</code> is an <i>environment variable</i> that tells you <i>the <u>absolute path of the directory</u> containing the currently executing file</i>.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Using a Helper Function for Navigation',
      sectionSource: '',
      tooltips: [
        `<pre><code>
const path = require("path");

<i>module.exports = path.dirname(process.mainModule.filename);</i>

// If you get a deprecation warning for above code - in that case, you can simply switch to the code below:
// module.exports = path.dirname(require.main.filename);      
      </code></pre>
const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;

      <pre><code>
const path = require('path');

const express = require('express');
      
<i>const rootDir = require('../util/path');</i>
      
const router = express.Router();
      

router.get('/add-product', (req, res, next) => {
  <i>res.sendFile(path.join(rootDir, 'views', 'add-product.html'));</i>
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
      sectionTitle: 'Serving Files Statically',
      sectionSource: '',
      tooltips: [
        `<pre><code>
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
  title: 'Working with Dynamic Content & Adding Templating Engines',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Sharing Data Across Requests & Users',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Templating Engines - An Overview',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Installing & Implementing Pug',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Outputting Dynamic Content',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Official Pug Docs',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Converting HTML Files to Pug',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding a Layout',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Finishing the Pug Template',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Avoiding an Error',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Working with Handlebars',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Converting our Project to Handlebars',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding the Layout to Handlebars',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Working with EJS',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Working on the Layout with Partials',
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

const mvc = {
  title: 'The Model View Controller (MVC)',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'What is the MVC?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Controllers',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Finishing the Controllers',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding a Product Model',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Storing Data in Files Via the Model',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fetching Data from Files Via the Model',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Refactoring the File Storage Code',
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

const dynamic_routes_and_advanced_models = {
  title: 'Dynamic Routes & Advanced Models',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Preparations',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Applied Changes',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding the Product ID to the Path',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Extracting Dynamic Params',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Loading Product Detail Data',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Rendering the Product Detail View',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Passing Data with POST Requests',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding a Cart Model',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using Query Params',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Pre-Populating the Edit Product Page with Data',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Linking to the Edit Page',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Editing the Product Data',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding the Product-Delete Functionality',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Deleting Cart Items',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Displaying Cart Items on the Cart Page',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Deleting Cart Items',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fixing a Delete Product Bug',
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

const sql_introduction = {
  title: 'SQL Introduction',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Choosing a Database',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'NoSQL Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Comparing SQL and NoSQL',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Setting Up MySQL',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Connecting our App to the SQL Database',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Basic SQL & Creating a Table',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Retrieving Data',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fetching Products',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fetching Products - Time to Practice',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Inserting Data Into the Database',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fetching a Single Product with the "where" Condition',
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

const understanding_sequelize = {
  title: 'Understanding Sequelize',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'What is Sequelize?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Connecting to the Database',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Defining a Model',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Syncing JS Definitions to the Database',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Inserting Data & Creating a Product',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'MUST READ: findById() in Sequelize 5',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Retrieving Data & Finding Products',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Getting a Single Product with the "where" Condition',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fetching Admin Products',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Updating Products',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Deleting Products',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Creating a User Model',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding a One-To-Many Relationship',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Creating & Managing a Dummy User',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using Magic Association Methods',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fetching Related Products',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'One-To-Many & Many-To-Many Relations',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Creating & Fetching a Cart',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding New Products to the Cart',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Existing Products & Retrieving Cart Items',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Deleting Related Items & Deleting Cart Products',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding an Order Model',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Storing Cartitems as Orderitems',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Resetting the Cart & Fetching and Outputting Orders',
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

const noSQL_and_MongoDB = {
  title: 'Working with NoSQL & Using MongoDB',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'What is MongoDB?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Relations in NoSQL',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Setting Up MongoDB',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Installing the MongoDB Driver',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Creating the Database Connection',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Finishing the Database Connection',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using the Database Connection',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Creating Products',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Understanding the MongoDB Compass',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fetching All Products',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fetching a Single Product',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Making the "Edit" & "Delete" Buttons Work Again',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Working on the Product Model to Edit our Product',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Finishing the "Update Product" Code',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'One Note About Updating Products',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Deleting Products',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fixing the "Add Product" Functionality',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Creating New Users',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Storing the User in our Database',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Working on Cart Items & Orders',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding the "Add to Cart" Functionality',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Storing Multiple Products in the Cart',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Displaying the Cart Items',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fixing a Bug',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Deleting Cart Items',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding an Order',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Relational Order Data',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Getting Orders',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Removing Deleted Items From the Cart',
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
    {
      sectionTitle: 'Two Adjustments (behind the scenes)',
      sectionSource: '',
      tooltips: [``],
    },
  ],
};

const mongoose = {
  title: 'Working with Mongoose',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'What is Mongoose?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Connecting to the MongoDB Server with Mongoose',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Creating the Product Schema',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Saving Data Through Mongoose',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fetching All Products',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fetching a Single Product',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Updating Products',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Deleting Products',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding and Using a User Model',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using Relations in Mongoose',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'One Important Thing About Fetching Relations',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Working on the Shopping Cart',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Loading the Cart',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Deleting Cart Items',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Creating & Getting Orders',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Storing All Order Related Data',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Clearing the Cart After Storing an Order',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Getting & Displaying the Orders',
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

const sessions_and_cookies = {
  title: 'Sessions & Cookies',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'What is a Cookie?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'The Current Project Status',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Optional: Creating the Login Form',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding the Request Driven Login Solution',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Setting a Cookie',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Manipulating Cookies',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Configuring Cookies',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'What is a Session?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Initializing the Session Middleware',
      sectionSource: '',
      tooltips: [``],
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
      sectionTitle: 'Sessions & Cookies - A Short Summary',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Assignment 5: Time to Practice - Sessions and Cookies',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Deleting a Cookie',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fixing Some Minor Bugs',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Making "Add to Cart" Work Again',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Two Tiny Improvements',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Wrap Up',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Code Adjustments',
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

const adding_authentication = {
  title: 'Adding Authentication',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'What is Authentication?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'How is Authentication Implemented?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Our Updated Project Status',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Implementing an Authentication Flow',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Encrypting Passwords',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding a Tiny Code Improvement',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding the Signin Functionality',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Working on Route Protection',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using Middleware to Protect Routes',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Understanding CSRF Attacks',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using a CSRF Token',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding CSRF Protection',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'csurf() Alternatives',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fixing the Order Button',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Providing User Feedback',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Optional: Styling Error Messages',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Finishing the Flash Messages',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Additional Flash Messages',
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

const sending_emails = {
  title: 'Sending Emails',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'How Does Sending Emails Work?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using SendGrid',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using Nodemailer to Send an Email',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Potential Limitation for Large Scale Apps',
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

const advanced_authentication = {
  title: 'Advanced Authentication',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Resetting Passwords',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Implementing the Token Logic',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Creating the Token',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Creating the Reset Password Form',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Logic to Update the Password',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Why we Need Authorization',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Authorization',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Protection to Post Actions',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Why Editing Fails',
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

const understanding_validation = {
  title: 'Understanding Validation',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Why Should We Use Validation?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'How to Validate Input?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Setup & Basic Validation',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using Validation Error Messages',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Built-In & Custom Validators',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'More Validators',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Checking For Field Equality',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Async Validation',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Assignment 6: Time to Practice - Validation',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Keeping User Input',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Conditional CSS Classes',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Validation to Login',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Sanitizing Data',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Validating Product Addition',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Validating Product Editing',
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

const error_handling = {
  title: 'Error Handling',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Types of Errors & Error Handling',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Analyzing the Error Handling in the Current Project',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Errors - Some Theory',
      sectionSource: '',
      tooltips: [``],
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
      tooltips: [``],
    },
    {
      sectionTitle: 'Updating the App',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using the Error Handling Middleware Correctly',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Status Codes',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Available Status Codes',
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

const file_upload_and_download = {
  title: 'File Upload & Download',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding a File Picker to the Frontend',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Handling Multipart Form Data',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Handling File Uploads with Multer',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Configuring Multer to Adjust Filename & Filepath',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Filtering Files by Mimetype',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Storing File Data in the Database',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Remove imageUrl from "Add Product"',
      sectionSource: '',
      tooltips: [``],
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
      tooltips: [``],
    },
    {
      sectionTitle: 'Restricting File Access',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Streaming Data vs Preloading Data',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using PDFKit for .pdf Generation',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Generating .pdf Files with Order Data',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Deleting Files',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fixing Invoice Links',
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

const adding_pagination = {
  title: 'Adding Pagination',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Pagination Links',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Retrieving a Chunk of Data',
      sectionSource: '',
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
    {
      sectionTitle: 'Re-Using the Pagination Logic & Controls',
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

const understanding_async_requests = {
  title: 'Understanding Async Requests',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'What are Async Requests?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Client Side JS Code',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'The JSON Data Format',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Sending & Handling Background Requests',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Manipulating the DOM',
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

const adding_payments = {
  title: 'Adding Payments',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
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
    {
      sectionTitle: 'Useful Resources & Links',
      sectionSource: '',
      tooltips: [``],
    },
  ],
};

const working_with_REST_APIs_basics = {
  title: 'Working with REST APIs - The Basics',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'What are REST APIs and why do we use Them?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Accessing Data with REST APIs',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Understanding Routing & HTTP Methods',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'REST APIs - The Core Principles',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle:
        'Creating our REST API Project & Implementing the Route Setup',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Sending Requests & Responses and Working with Postman',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'REST APIs, Clients & CORS Errors',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Sending POST Requests',
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

const working_with_REST_APIs_practical = {
  title: 'Working with REST APIs - The Practical Application',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'REST APIs & The Rest Of The Course',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Understanding the Frontend Setup',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Planning the API',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fetching Lists of Posts',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding a Create Post Endpoint',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Server Side Validation',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Setting Up a Post Model',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Storing Posts in the Database',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Static Images & Error Handling',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Fetching a Single Post',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Image Names & Windows',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Uploading Images',
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
      sectionTitle: 'Adding Pagination',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding a User Model',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding User Signup Validation',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Signing Users Up',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'How Does Authentication Work?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Starting with User Login',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Logging In & Creating JSON Web Tokens (JWTs)',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using & Validating the Token',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Auth Middleware to All Routes',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Connecting Posts & Users',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Authorization Checks',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Clearing Post-User Relations',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Assignment 7: Time to Practice - Working with REST APIs',
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

const understanding_async_await_in_NodeJS = {
  title: 'Understanding Async Await in Node.js',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'What is Async Await All About?',
      sectionSource: '',
      tooltips: [``],
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
    {
      sectionTitle: 'Assignment 8: Time to Practice - Async Await',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'The User Name is Missing!',
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

const websockets_and_socket = {
  title: 'Understanding Websockets & Socket.io',
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
  sql_introduction,
  understanding_sequelize,
  noSQL_and_MongoDB,
  mongoose,
  sessions_and_cookies,
  adding_authentication,
  sending_emails,
  advanced_authentication,
  understanding_validation,
  error_handling,
  file_upload_and_download,
  adding_pagination,
  understanding_async_requests,
  adding_payments,
  working_with_REST_APIs_basics,
  working_with_REST_APIs_practical,
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
