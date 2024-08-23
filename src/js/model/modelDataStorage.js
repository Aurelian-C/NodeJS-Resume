const introduction = {
  title: 'Introduction',
  titleDescription: '',
  sections: [
    {
      sectionTitle: 'What is Node.js? What it is Used For?',
      sectionSource: '',
      tooltips: [
        `<h3>What is Node.js?</h3>
        <p>If you are used to run JavaScript in the browser, then the browser is a runtime environment for JavaScript.</p>
        <p>Node.js is just another <b>JavaScript runtime environment</b> build on Google's open-source V8 JavaScript Engine that <i>allows you to run JavaScript code outside of a web browser</i>, without all the restrictions that are in the browser.</p>
        <p><img src="../../src/img/what_is_node_01.jpg"/></p>
        <p>In order for Node.js do a lot more than just read JavaScript with the help of Google V8 Engine, it might want to do different things: maybe read files, access databases, maybe just run, some things that aren't part of the V8 Engine, aren't part of JavaScript. And that's where the libuv comes in.</p>
        <p>Any time Node.js sees something that maybe isn't part of JavaScript, it's going to communicate with the libuv library. <i>So Node.js is essentially an environment to run JavaScript outside of the browser, but that gives us a little bit more than just the V8 engine.</i></p>
        <p><img src="../../src/img/what_is_node_02.jpg"/></p>
        <p>IMPORTANT: Node.js is not a programming language, is not a framework. Node.js is a JavaScript runtime.</p>
        <p><i>In order to run JavaScript on your PC (outside the browser), you need to install Node.js. Node.js provides you tools to run JavaScript outside of the browser.</i> Is like when you download and install a browser on your computer to run JavaScript on it. Browsers and Node.js provides tools to run JavaScript in different environments. <i>Without these environments (Browser or Node.js), your PC can't read JavaScript code by it's own.</i></p>
        <p>Node.js provides a set of <b>build-in modules</b>, <b>libraries</b> and <b>tools</b> for <i>building server-side and networking applications</i>.</p>`,
        `<h3>What is it used for?</h3>
        <p>Node.js is commonly used for building <i>web servers</i>, <i>APIs</i> (Application Programming Interfaces), real-time chat applications, streaming applications, and other networked applications.</p>
        <p>Don't use Node.js if you want to build applications with heavy server-side processing (CPU-intensive) like image manipulations, video conversion, file compression or anything like that.</p>
        `,
        `<h3>Node.js characteristics</h3>
        <p><img src="../../src/img/what_is_node_03.jpg"/></p>
        <p>It's <b>single-threaded</b>, <b>non-blocking I/O model</b>, <b>event-driven architecture</b> makes it particularly well-suited for building scalable and high-performance applications that <i>can handle a large number of simultaneous connections</i>.</p>
        <p>Additionally, it has a vibrant ecosystem of libraries and frameworks, such as Express.js, that make it easy to develop web applications with Node.js.</p>
        `,
      ],
    },
    {
      sectionTitle: 'How the Web Works',
      sectionSource: '',
      tooltips: [
        `<p>The web works through a combination of <b>client-server architecture</b>, <i>protocols</i>, and various technologies.</p>`,
        `<h3>Client-Server Model</h3>
        <p>The web operates on a client-server model. Clients, such as web browsers (e.g., Chrome, Firefox), request resources (e.g., web pages, images, videos) from servers, which store and provide those resources.</p>`,
        `<h3>Domain Name System (DNS)</h3>
        <p>When you type a URL (Uniform Resource Locator) into your browser, the first step is translating the human-readable domain name (e.g., www.example.com) into an IP address using DNS servers. This <b>IP address points to the server where the website is hosted</b>.</p>`,
        `<h3>HTTP/HTTPS Protocol</h3>
        <p>Hypertext Transfer Protocol (HTTP) and its secure variant HTTPS are <i><b>communication protocols</b> used for <b>transferring data</b> on the web</i>. When you request a web page by entering a URL or clicking a link, your browser sends an HTTP request to the server, which responds with the requested content.</p>`,
        `<h3>Request-Response Cycle</h3>
        <p>The client sends an <b>HTTP request</b> to the server, specifying the resource it wants (e.g., a web page). The server processes the request and sends back an <b>HTTP response</b> containing the requested resource. This cycle forms the basis of how information is exchanged on the web.</p>`,
        `<h3>HTML, CSS, JavaScript</h3>
        <p>The content of web pages is typically created using HTML (Hypertext Markup Language) for structure, CSS (Cascading Style Sheets) for styling, and JavaScript for interactivity. <i>When your browser receives the HTML content from the server, it <u>parses and renders</u> it, <u>fetching additional resources</u> like stylesheets and scripts as needed.</i></p>`,
        `<h3>Web Servers and Hosting</h3>
        <p>Web servers are software applications that serve web content to clients upon request. <i>Websites are hosted on web servers, which <b>store the website files</b> and <b>respond to requests from clients</b>.</i> Common web server software includes Apache, Nginx, and Microsoft Internet Information Services (IIS).</p>`,
        `<h3>Client-Side and Server-Side Processing</h3>
        <p>Client-side processing refers to actions performed by the user's browser, such as rendering HTML and executing JavaScript. Server-side processing occurs on the server, where dynamic content is generated before being sent to the client. Server-side scripting languages like PHP, Python, Ruby, and Node.js are often used for this purpose.</p>`,
        `<h3>Cookies, Sessions, and Authentication</h3>
        <p><i>Cookies are small <b>pieces of data stored by the browser</b> and <b>sent with each request</b></i>, enabling websites to track user sessions and store user preferences. <i>Sessions allow servers to maintain stateful interactions with clients across multiple requests.</i> Authentication mechanisms such as username/password or token-based authentication are used to verify the identity of users accessing restricted resources.</p>`,
        `<p>This overview covers the fundamental concepts behind how the web works, though the actual implementation can be more complex due to factors like caching, content delivery networks (CDNs), and web application frameworks.</p>`,
        `<p><img src="../../src/img/how_the_web_works_01.jpg"/></p>
        <p><img src="../../src/img/how_the_web_works_02.jpg"/></p>
        `,
      ],
    },
    {
      sectionTitle: 'Static vs Dynamic vs API',
      sectionSource: '',
      tooltips: [
        `<h3>Static Websites</h3>
        <p>Static (simple) websites is when a developer upload ready to be served files of a website onto a web server. These files usually contains HTML, CSS, JavaScript, images and more. These are the exact files that the server will later send to the browser when the website is requested. The browser will then take these files and render them as they are. This means that <i>there is no work done on the server, there is no backend code, and there's also no Node.js application running</i>. So it's just <i>static web server serving static files</i>.</p>
        `,
        `
      <p><img src="../../src/img/static_dynamic_api_1.jpg"/></p>
      `,
      ],
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

const how_node_works = {
  title: 'How Node.js Works',
  titleDescription: 'A Look Behind the Scenes',
  sections: [
    {
      sectionTitle:
        'Blocking and Non-Blocking Code: Asynchronous Nature of Node.js',
      sectionSource: '',
      highlights: {
        highlight1: ['Asynchronous Nature of Node.js'],
      },
      tooltips: [
        `<p>Node.js has only <b>one single thread</b>, which means that <i>all the users accessing your web server application are all using the same thread</i>. And so, whenever they're interacting with the application, the code that is run for each user will be executed all in the same thread, at the same place, in the computer running the application. And that happen no matter if you have 5, 5.000 or 5.000.000 users. What this also means is that <b>when one user blocks the single thread with synchronous code, then all other users will have to wait for that execution to finish</b>.</p>
        <p>Imagine there's a user accessing your application and there's a huge synchronous file read in your code that will take like one second to load. This will mean that for that one second, all other users will have to wait because the entire execution is blocked for that one second. So if those other users want to do some simple tasks, like logging into your application or just requesting some data, they won't be able to do so. They will have to wait until the file is finished reading. Only when that happens they will finally be able to perform the simpler tasks, one after another.</p>
        <p>This is how the situation would play out with synchronous blocking code, which is obviously a terrible experience for your users. And so, it's really your job as a developer to avoid these kinds of situations by using asynchronous code.</p>
        <p><img src="../../src/img/synchronous_vs_asynchronous_01.jpg"/></p>
        `,
        `<h3>Synchronous vs Asynchronous Node.js code</h3>
        <p>Being a single thread, synchronous code <i>become a problem especially with slow operations</i>, because <i>each line of code blocks the execution of the rest of the code.</i> So we say that <b>synchronous code is also called blocking code</b> because <i>a certain operation can only be executed after the one before has finished</i>.</p>
        <p>An example of synchronous code:</p>
        <pre><code>
const fs = require('fs');

//Blocking code execution
const textFile = <b>fs.readFileSync</b>('./textFolder/textFile.text', 'utf-8');

console.log(textFile);
        </code></pre>
        <p>Because of the way Node.js was designed, synchronous code turns into a huge problem. The solution to synchronous code problem in Node.js is to <b>use asynchronous code (non-blocking code)</b>:</p>
        <pre><code>
const fs = require('fs');

//Non-blocking code execution
const textFile = <b>fs.readFile</b>('./textFolder/textFile.text', 'utf-8', <i>(err, data) => {
    console.log(data);
}</i>);
        
console.log('Reading file...');
        </code></pre>
        `,
        `<h3><code>fs.readFileSync</code> (Synchronous) vs <code>fs.readFile</code> (Asynchronous)</h3>
        <p><i><code>fs.readFileSync</code> is a <u>synchronous</u> function</i> that blocks the code execution until it's finish execution. On the other hand, <i><code>fs.readFile</code> is an <u>asynchronous</u> function</i> that receives a callback function as a parameter, and this callback will be called with the data (result) when <code>fs.readFile</code> finish it's execution. <i>In that time, the code execution is NOT blocked.</i></p>
        <p>IMPORTANT: It's YOUR job as a developer to avoid blocking code execution by using asynchronous code. This is actually the whole reason why <b>Node.js is completely designed around callbacks to implement asynchronous behavior</b>.</p>`,
        `<h3>Node.js asynchronous functions</h3>
        <p>It's important to know that, <i>when we use callbacks in our code, that doesn't automatically make it asynchronous</i>. So, passing functions around into other functions is quite common in JavaScript, but that doesn't make them asynchronous automatically. It only works this way for some functions in the Node.js, such as the <code>fs.readFile</code> function and many others.</p>
        `,
        `<h3>Node.js vs other programming languages</h3>
        <p>In other programming languages, like PHP, it works very differently, because you get one new thread for each new user, which really works completely different. But the creator of Node.js found this model to be the best solution for building highly performant and scalable web applications.</p>`,
        `<h3>Node.js top-level code it's <u>only executed once</u> when the server starts</h3>
        <p><i>The code that is outside the callback functions, so the so called <b>top level code is <u>only executed once</u> we start the server</b>, and so in that situation, it doesn't matter at all if it blocks the code execution, because it happens only once, and only when the server actually starts:</i></p>
        <pre><code>
const http = require('http');
const fs = require('fs');

<i>//Top-level code it's only executed once, only when the server starts, so you can use here synchronous code even it's block the code execution</i>
const textFile = fs<b>.readFileSync</b>('./textFolder/textFile.text', 'utf-8');

const server = http.createServer((req, res) => {
    <i>//Here you need to use asynchoronous code because it's executed over and over, for every incoming request</i>
});

server.listen(3000);
        </code></pre>
        <p><i>You gone use this technique when you want to handle data right when a server start.</i> So maybe you want to use some data and to be avaible right when the server starts.</p>
        <p><i>The secret is simply to know which code is only executed once and only at the beginning, when the server starts, and which code gets executed over and over again</i>, and is therefore problematic when blocking the Event Loop.</p>
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
        <p><img src="../../src/img/what_is_node_04.jpg"/></p>
          <li><h3>1. Initialization</h3>
            <p>When you run a Node.js application, it initializes by loading the main script file (typically index.js or app.js) and any modules it requires.</p>
          </li>
      
          <li><h3>2. Execution of Synchronous Code</h3>
            <p><i>Node.js starts executing the synchronous code in the main script file.</i> This includes tasks like loading configuration files, setting up database connections, and defining functions.</p>
          </li>
      
          <li><h3>3. Event Loop</h3>
            <p><i><b>The event loop is at the core of Node.js's asynchronous nature.</b> It continuously checks for events in the event queue and executes their associated callback functions. The event loop keeps the Node.js process running and responsive, even when handling I/O operations.</i></p>
          </li>
      
          <li><h3>4. Non-Blocking I/O Operations</h3>
            <p><i>Node.js <b>uses non-blocking I/O operations, which means that it can perform I/O tasks (like reading from files or making network requests) without waiting for the operation to complete.</b></i> Instead, it delegates these tasks to the operating system and continues executing other code.</p>
          </li>
      
          <li><h3>5. Event-Driven Architecture</h3>
            <p><i>Node.js is event-driven, meaning that it <b>relies heavily on events and callbacks to handle asynchronous operations</b>.</i> When an asynchronous operation completes or a certain condition is met, it triggers an event, which is then processed by the event loop.</p>
          </li>
      
          <li><h3>6. Event Queue and Callbacks</h3>
            <p>Asynchronous operations in Node.js typically <i>use <u>callbacks</u> to handle the results of the operation. When an asynchronous operation completes, its callback function is pushed onto the event queue. The event loop picks up these callback functions from the queue and executes them one by one.</i></p>
          </li>
      
          <li><h3>7. Concurrency and Scalability</h3>
            <p>Because <i>Node.js applications can handle multiple concurrent operations without blocking the event loop</i>, they are highly scalable and efficient, making them suitable for building real-time applications, APIs, and microservices.</p>
          </li>
      
          <li><h3>8. Termination</h3>
            <p>Node.js applications terminate either <i>when all event listeners have been removed and there are no more callbacks to execute</i>, or <i>when explicitly terminated by the user or the operating system</i>.</p>
          </li>
      </ul>`,
        `<p>Understanding the Node.js event loop and its lifecycle is crucial for writing efficient, scalable, and responsive applications. It allows developers to leverage asynchronous programming paradigms effectively and build high-performance applications that can handle large numbers of simultaneous connections.<p>`,
        `<p><img src="../../src/img/behind_the_scenes_01.jpg"/></p>
        <p><img src="../../src/img/behind_the_scenes_02.jpg"/></p>
        <p><img src="../../src/img/behind_the_scenes_03.jpg"/></p>
        `,
      ],
    },
    {
      sectionTitle: 'Understanding Event Driven Arhitecture of Node.js',
      sectionSource: '',
      highlights: {
        highlight2: ['Event Driven Arhitecture'],
      },
      tooltips: [
        `<p>Event-driven programming is a paradigm in which <b>the flow of the program is determined by events</b> such as <i><u>user actions</u></i> (e.g., mouse clicks, key presses), <i><u>system notifications</u></i> (e.g., file I/O completion, network requests), or <i><u>timer expirations</u></i>. Node.js is a popular runtime environment for JavaScript that is built on an event-driven architecture, allowing developers to write highly scalable and efficient server-side applications.</p>`,
        `<ul><i>In Node.js, the event-driven model is implemented using the <b><code>EventEmitter</code> class</b>, which provides methods for <b>emitting events</b> and <b>registering listeners</b> for those events.</i> Here's how event-driven code execution works in Node.js:
          <li>1. <b>Event Emitters</b>: <i>An event emitter is an object that emits <u>named events</u>.</i> It maintains a list of listeners, which are functions that are executed in response to a particular event being emitted.</li>
          <li>2. <b>Event Listeners</b>: <i>Event listeners are functions that are registered to handle specific events emitted by event emitters. When an event emitter emits an event, all registered listeners for that event are invoked.</i></li>
          <li>3. <i>Asynchronous Execution: Event-driven programming in Node.js is inherently asynchronous.</i> When an asynchronous operation (e.g., file I/O, network request) is initiated, Node.js does not block the execution of subsequent code. Instead, it continues executing the remaining code and registers a callback function to be invoked once the asynchronous operation completes.</li>
          <li>4. <i>Non-blocking I/O</i>: Node.js employs non-blocking I/O operations, meaning that it can handle multiple concurrent I/O operations without waiting for each operation to complete before starting the next one. This allows Node.js to efficiently handle a large number of connections without the need for threading.</li>
          <li>5. <b>Event Loop</b>: <i>The event loop is at the core of Node.js's event-driven architecture. It continuously checks for events in the event queue and dispatches them to event handlers when they occur.</i> This allows Node.js to efficiently handle asynchronous operations and respond to events in a timely manner.</li>
        </ul>`,
        `<p>Here's a simple example of event-driven code execution in Node.js:</p>
        <pre><code>
<i>const EventEmitter = require(<b>'events'</b>);</i>

//1.Create an instance of EventEmitter
const myEmitter = <i>new EventEmitter()</i>;

//2.Register a listener for the 'hello' event
myEmitter<i>.on</i>('hello', () => {
  console.log('Hello, world!');
});

//3.Emit the 'hello' event
myEmitter<i>.emit</i>('hello');

console.log('Event emitted');
        </code></pre>
        <p>This demonstrates how event-driven code execution works in Node.js, where the callback function associated with the 'hello' event is executed asynchronously when the event is emitted.</p>
        `,
        `<p><img src="../../src/img/behind_the_scenes_04.jpg"/></p>`,
        `<h3>Another example</h3>
        <pre><code>
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter<i>.on</i>('newSale', () => {
  console.log('Costumer name: Balenciaga');
});

myEmitter<i>.on</i>('newSale', stock => {
  console.log(stock);
});

myEmitter<i>.emit</i>('newSale', 9);
        </code></pre>

        <pre><code>
const { get } = require('https');

get('https://someURL.com', (res) => {
  res<i>.on</i>(<i>'data'</i>, (chunck) => {
    console.log(chunck);
  });

  res<i>.on</i>(<i>'end'</i>, () => {
    console.log('No more data');
  })
});
        </code></pre>
        `,
      ],
    },
    {
      sectionTitle: 'Node.js global Object',
      sectionSource: '',
      highlights: {
        highlight2: ['global'],
      },
      tooltips: [
        `<p>In Node.js, the <code>global</code> object is a <b>built-in object that serves as the top-level namespace</b> for variables, functions, and objects that are accessible from anywhere in your Node.js application. This object allows you to define properties and functions globally, meaning they can be accessed from any module within your application without requiring an import or export.</p>
        <p>The Node.js <code>global</code> object and the browser's <code>window</code> object serve similar purposes in their respective environments, but are fundamentally different in where and how they are used.</p>
        <p><img src="../../src/img/global_object_01.jpg"/></p>
        `,
        `<h3><code>global</code> Object in Node.js</h3>
        <p>The <code>global</code> object in Node.js is the equivalent of the <code>window</code> object in the browser. It is available in all modules and represents the global namespace.</p>
        <p>The <code>global</code> object can be used to store variables, functions, or other properties that you want to be accessible across different modules in your Node.js application.</p>
        <p>By default, objects and functions defined globally in a Node.js module are not added to <code>global</code>, unlike in the browser where everything is added to <code>window</code>.</p>
        `,
        `<h3><code>window</code> Object in Browser</h3>
        <p>The <code>window</code> object is specific to browser environments and represents the window in which the script is running. It serves as the global object for JavaScript running in a browser.</p>
        <p>It is the global context for all JavaScript code running in the browser. All global variables, functions, and objects automatically become properties of <code>window</code>.</p>
        `,
        `<h3>Key Differences</h3>
        <ul>1. Environment:
          <li>- <i><code>global</code> is used in Node.js</i>, a server-side runtime environment.</li>
          <li>- <i><code>window</code> is used in browsers</i>, a client-side environment.</li>
        </ul>
        <ul>2. APIs and Properties::
          <li>- <code>global</code> in Node.js <i>includes properties and methods specific to server-side development</i>, like <code>process</code>, <code>Buffer</code>, and <code>require</code>.</li>
          <li>- <code>window</code> in the browser <i>includes properties and methods specific to the client-side</i>, like <code>document</code>, <code>navigator</code>, and DOM-related APIs.</li>
        </ul>
        `,
      ],
    },
  ],
};

const development_workflow = {
  title: 'Improved Development Workflow',
  titleDescription: 'Developing Efficiently & Structuring Your Code',
  sections: [
    {
      sectionTitle: 'Using Modules in Node.js: Core (Build-In) Modules',
      sectionSource: '',
      highlights: {
        highlight2: ['Core (Build-In) Modules'],
      },
      tooltips: [
        `<p><i>Node.js is <b>built around a concept of modules</b>, where all kinds of <b><u>additional functionality</u> are stored in a module</b>.</i> For example, if you want to read a file from your system, you will use a module called <code>fs</code> (<code>fs</code> stands for file system).</p>
        <p>How do we open up these modules, or how can we use them? Well, we do <i><b><code>require()</code></b> them into our code, and then store the result of the <code>require()</code> function into a variable</i>. For example:
        <pre><code>
const fs = <b>require("fs")</b>;
        </code></pre>
        <p>By requiring and using the <code>fs</code> module, we will get access to functions for reading/writing data right to the file system.</p>
        <ul>Besides <code>fs</code> module, there are some other modules that will help you use additional functionalities:
          <li>- <code>http</code>: creates an HTTP server in Node.js;</li>
          <li>- <code>https</code>: creates an HTTPS server in Node.js;</li>
          <li>- <code>path</code>: includes methods to deal with file paths;</li>
          <li>- more build-in modules.</li>
        </ul>
        </p>
        `,
        `<h3>Why to use modules?</h3>
        <ul>There are at least 3 resoans to use modules:
          <li>1. Reuse existing code.</li>
          <li>2. Organize your code.</li>
          <li>3. Expose only what will be used.</li>
        </ul>
        `,
      ],
    },
    {
      sectionTitle: 'Using Modules in Node.js: Our Own Modules',
      sectionSource: '',
      highlights: {
        highlight1: [],
      },
      tooltips: [
        `<p>We can <i>create our own modules and export something from them</i>, like for example, a function. Then we can import this function into another module, and then use that function there.</p>
        <p>You need to know that <b>in Node.js every single file is treated as a module</b>.</p>
        <p><i>Node.js uses the <b>CommonJS module system</b> for importing and exporting modules within and across files.</i> This system is primarily used for server-side development and <i>is native to Node.js</i>.</p>
        `,
        `<h3>Exporting in Node.js</h3>
        <p>To export a module, function, object, or any variable from a file in Node.js, you use the <b><code>module.exports</code></b> object or the <b><code>exports</code></b> shorthand.</p>`,
        `<h3>Export a <u>single</u> entity</h3>
        <p>If you want to <i>export a <u>single</u> function, object, or class</i> from a file, you can <i><u>assign it directly</u> to <code>module.exports</code></i>:</p>
        <pre><code>
<b>module.exports</b> = function sayHello(name) {
  return "Hello world!";
};
        </code></pre>`,
        `<h3>Export <u>multiple</u> entities</h3>
        <ul>To export <u>multiple</u> entities, you have 2 solutions:
        <li>- <i>add them as properties</i> of the <code>exports</code> object:
        <pre><code>
<b>exports.</b>add = function(a, b) {
  return a + b;
};

<b>exports.</b>subtract = function(a, b) {
  return a - b;
};
        </code></pre>
        </li>

        <li>- as an <i>entire object</i> to <code>module.exports</code> object:
        <pre><code>
module.exports = <b>{</b>
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
<b>}</b>;
        </code></pre>
        </li>
        </ul>
        `,
        `<h3>Importing in Node.js</h3>
        <p>To use the exported module or functions in another file, you use the <code>require()</code> function provided by Node.js</p>
        <pre><code>
const sayHello = require('./sayHello');

const mathFunctions = require('./mathFunctions');
console.log(mathFunctions.add);
console.log(mathFunctions.subtract); 

//or <i>use destructuring</i>
const { add, subtract } = require('./mathFunctions');
        </code></pre>
        `,
        `<h3>ES Modules in Node.js</h3>
       <p><b>Node.js also supports ES Modules (ESM)</b>, a newer module system used in modern JavaScript development for both client and server side. ESM uses <code>import</code> and <code>export</code> statements and <i>is enabled by adding <code>"type": "module"</code> in your package.json</i> file or <i>using the <code>.mjs</code> extension for your modules</i>.</p>
       <p>You can choose between CommonJS and ESM depending on your project's compatibility and your team's preference.</p>
       `,
        `<h3>Why to use modules?</h3>
       <ul>There are at least 3 resoans to use modules:
         <li>1. Reuse existing code.</li>
         <li>2. Organize your code.</li>
         <li>3. Expose only what will be used.</li>
       </ul>
       `,
      ],
    },
    {
      sectionTitle:
        'Using Modules in Node.js: Installing 3rd Party Modules (Packages)',
      sectionSource: '',
      highlights: {
        highlight1: ['3rd Party Modules (Packages)'],
      },
      tooltips: [
        `<h3>Why to use modules?</h3>
        <ul>There are at least 3 resoans to use modules:
          <li>1. Reuse existing code.</li>
          <li>2. Organize your code.</li>
          <li>3. Expose only what will be used.</li>
        </ul>
        `,
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
        `<h3>Using 3rd Party Modules (Packages)</h3>
      <p>To use a 3rd Party Module (Package) that you already install, all you have to do is to <code>const moduleVariable = <i>require('moduleName')</i></code> without specifying a path to it. Then Node.js will automatically know that it will have to go into the node_modules folder where all the dependencies are, and search for that module there.</p>
      `,
      ],
    },
    {
      sectionTitle:
        'Global Features vs Core (Build-In) Modules vs 3rd Party Modules',
      sectionSource: '',
      tooltips: [
        `<p>In Node.js, understanding the distinction between global features, core modules, and third-party modules is essential for effective development.</p>`,
        `<h3>Global Features</h3>
        <ul>Global features in Node.js refer to <i>functionalities or objects that are available throughout the application without the need for explicit import or inclusion</i>. These features are built-in and can be accessed directly. Examples include:
          <li>- <code>console</code>: for logging messages to the console;</li>
          <li>- <code>process</code>: for accessing information about the current Node.js process;</li>
          <li>- <code>Buffer</code>: for handling binary data;</li>
          <li>- <code>setTimeout</code>, <code>setInterval</code>: for scheduling tasks;</li>
          <li>- <code>require</code>: for importing modules.</li>
        </ul>
        <p>While these features are globally available, it's often recommended to avoid over-reliance on them as they can lead to code that is difficult to maintain and debug.</p>
        `,
        `<h3>Core (Build-In) Modules</h3>
        <ul>Core modules in Node.js are <i>modules that are bundled with the Node.js runtime and can be imported into any Node.js application without the need for additional installation</i>. These modules provide essential functionalities for building applications. Examples include:
          <li>- <code>fs</code>: for file system operations;</li>
          <li>- <code>http</code> & <code>https</code>: for creating HTTP and HTTPS servers and clients;</li>
          <li>- <code>path</code>: for handling file paths;</li>
          <li>- <code>os</code>: for accessing operating system-related information.</li>
        </ul>
        <p>Core modules are generally more reliable and efficient compared to third-party modules since they are maintained as part of the Node.js project itself.</p>
        `,
        `<h3>3rd Party Modules</h3>
        <ul>Third-party modules are <i>modules developed by the Node.js community or external developers</i>. These modules extend the functionality of Node.js by <i>providing additional features that are not available in core modules</i>. They are typically published on npm (Node Package Manager) and can be easily installed using npm or yarn. Examples include:
          <li>- <code>express</code>: a web application framework;</li>
          <li>- <code>lodash</code>: a utility library;</li>
          <li>- <code>mongoose</code>: an ORM (Object-Relational Mapping) library for MongoDB;</li>
          <li>- <code>axios</code>: a promise-based HTTP client.</li>
        </ul>
        <p>Third-party modules greatly enhance the productivity of Node.js developers by <i>providing pre-built solutions for common tasks</i>. However, it's important to <i>check third-party modules for quality, security, and maintenance status</i> before including them in a project.</p>
        `,
        `<h3>Summary</h3>
        <p>In summary, global features are <i>built-in functionalities</i> available throughout the application, core modules are <i>essential modules bundled with Node.js</i>, and third-party modules are <i>external modules developed by the community to extend Node.js functionality</i>. Understanding the distinctions between these types of modules is crucial for building robust and efficient Node.js applications.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Understanding package.json File',
      sectionSource: '',
      highlights: {
        highlight1: ['package.json', 'NPM Scripts'],
      },
      tooltips: [
        `<p>NPM is a software that we use to manage the 3rd party open-source packages that we choose to include and use in our project.</p>
        <p>The first thing that we usually do whenever we start a new project, is to start with <code>npm init</code> that will create a <code>package.json</code> file.</p>
        <p><i><code>package.json</code> file is kind of a <u>configuration file</u> of our project where all kinds of data about the project is stored.</i></p>
        `,
        `<h3>Global & Local npm Packages</h3>
        <p>In the last lecture, we added nodemon as a <i>local dependency</i> to our project.</p>
      <p>The good thing about local dependencies is that you can share projects without the node_modules folder (where they are stored) and you can run <code>npm install</code> in a project to then re-create that node_modules folder. This allows you to share only your source code, hence reducing the size of the shared project vastly.</p>
      <p>I showed that <code>nodemon app.js</code> would not work in the terminal or command line because we don't use local dependencies there but global packages. You could install nodemon globally if you wanted (this is NOT required though - because we can just run it locally): <code>npm install -g nodemon</code> would do the trick. Specifically <i>the <code>-g</code> flag ensures that the package gets added as a global package which you now can use anywhere on your machine, <u>directly from inside the terminal or command prompt</u></i>.</p>
        `,
        `<h3>Package Versioning and Updating</h3>
        <p>By running <code>npm outdated</code> in your terminal, you will receive a table with all outdated packages.</p>
        <p>You can install a specific version of a npm package by running <code>npm install packageName<i>@4.8.3</i></code> or simply <code>npm install packageName<i>@4</i></code>.</p>
        <p>NOTE: <code>npm install packageName<i>@4</i></code> will install the latest version inside of 4, with the latest minor and patch versions.</p>
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
          <li>- <b><code>~</code></b> means that we only accept <i><b>PATCH (bug fixes)</b> releases</i> (~1.5.<i>7</i>). The patch releases includes only bug fixes that will not break our code;</li>
          <li>- <b><code>^</code></b> means that we only accept <i><b>MINOR</b> releases</i> (^1.<i>5</i>.7). The minor releases includes some new features added to the package that will not break our code;</li>
          <li>- <b><code>*</code></b> means that we accept <i><b>MAJOR (all)</b> releases</i>: major, minor & patch (bug fixes) (*1.5.7). The major releases includes huge new releases which can have breaking changes to previous versions (break our code).</li>
        </ul>
        <p>In the context of npm dependencies, version numbers and the symbols preceding them (<code>~</code>, <code>^</code> or <code>*</code>) signify <i>different strategies for updating dependencies</i>. Understanding these symbols helps <i>manage package versions</i> and <i>ensures compatibility</i> within projects.</p>
        <p>You can uninstall a npm package by running <code>npm uninstall packageName</code>.</p>
        `,
        `<h3>Symbols and Their Meanings: Explanation in detail</h3>
        <p>1. Tilde (<code>~</code>): When a version number is preceded by a tilde (<code>~</code>), it indicates that updates are allowed only to the latest PATCH version of the specified <i>MINOR version</i>. For example, <code>~1.5.7</code> allows updates to any version <code>1.5.x</code> where x >= 7. This is more restrictive and aims to reduce the risk of introducing breaking changes with new patches.</p>
        <p>2. Caret (<code>^</code>): The caret symbol (<code>^</code>) allows updates that do not modify the left-most non-zero digit in the semver string. For <code>^2.8.1</code>, this means any version <code>2.x.x</code> is allowed as long as x >= 8.1 for the <i>MINOR version, and any PATCH version updates</i>. This is more permissive than the tilde, allowing for minor updates that should be backwards compatible. The minor releases include some new features that will not break our code.</p>        
        </p>3. Asterisk (<code>*</code>) or Star: An asterisk (<code>*</code>) indicates that <i>any MAJOR (all) version is allowed</i>. It's the most permissive option, essentially ignoring versioning and always fetching the latest version. This can be risky as it might pull in incompatible updates. The major releases includes huge new releases which can have breaking changes to previous versions (break our code), so be aware that when there is a new version it might usually affect the code that you already have.</p>`,
      ],
    },
    {
      sectionTitle: 'Vulnerabilities In Dependencies',
      sectionSource: '',
      tooltips: [
        `<p>When developing Node.js applications, <i>managing dependencies is crucial for maintaining the security of your project</i>. The Node Package Manager (npm) offers tools to help developers identify and fix vulnerabilities in their dependencies. Two essential commands for this purpose are <b><code>npm audit</code></b> and <b><code>npm audit fix</code></b>.</p>
        <p>NOTE: <i><code>npm audit</code> will only report vulnerabilities that have been reported</i>, and it <i>can only fix them automatically if there's an available update</i>. If there isn't an available updates, it might be worth switching to an alternative library that is more secure.</p>
        `,
        `<h3>The <code>npm audit</code> command</h3>
        <p>The <code>npm audit</code> command <b>analyzes the dependencies in your project to identify known security vulnerabilities</b>. When you run <code>npm audit</code>, npm will perform a security check against your project's dependencies by querying the npm public registry for any known vulnerabilities in the packages you are using. It <i>generates a report that categorizes vulnerabilities by severity (low, moderate, high, critical)</i> and <i>provides information on the affected package version</i>, the vulnerability description, and possible remediation steps.</p>`,
        `<h3>The <code>npm audit</code> command</h3>
        <ul>The <code>npm audit fix</code> command <b>automatically applies available patches to resolve vulnerabilities in your project dependencies</b>. <code>npm audit fix</code> attempts to fix the vulnerabilities identified by <code>npm audit</code> by <i>installing patched versions of the affected packages or updating the dependency to a non-vulnerable version</i>:
          <li>1. It first checks if a fix is available that doesn’t break your existing dependency tree (i.e., doesn’t introduce breaking changes).</li>
          <li>2. If successful, it updates the package-lock.json and node_modules directory with the new dependency versions.</li>
          <li>3. If an automatic fix isn’t possible (for example, if the fix involves a major version update), it will inform you and provide instructions for manual resolution.</li>
        
        </ul>
        `,
        `<h3>Additional Options</h3>
        <ul><b><code>--force</code></b>: This option <i>forces the application of patches even if they include major version upgrades, which could introduce breaking changes</i>:
          <li>
          <pre><code>
npm audit fix <i>--force</i>
          </code></pre>
          </li>
        </ul>
        `,
        `<h3>Best Practices</h3>
        <p><b>Regular Audits</b>: <i>Regularly running <code>npm audit</code> as part of your development process</i> helps you stay aware of potential vulnerabilities in your dependencies.</p>
        <p><b>Manual Reviews</b>: While <code>npm audit fix</code> is convenient, <i>some vulnerabilities may require manual intervention, especially if they involve breaking changes or critical fixes</i> that affect the core functionality of your application.</p>
        <p><b>Dependency Management</b>: Consider using tools like <code>npm-check-updates</code> to keep your dependencies up-to-date regularly, reducing the chances of accumulating security debt.</p>`,
        `<h3>Limitations</h3>
        <p><b>False Positives</b>: <i>Occasionally, <code>npm audit</code> might flag vulnerabilities that are not applicable to your use case</i>, especially in development dependencies or optional features you’re not using.</p>
        <p><b>Outdated Vulnerabilities</b>: <i>Sometimes, the audit report may include vulnerabilities that have already been fixed in the latest versions of packages, but your package-lock.json might still reference older versions</i>.</p>`,
      ],
    },
    {
      sectionTitle: 'Understanding NPM Scripts',
      sectionSource: '',
      highlights: {
        highlight1: ['NPM Scripts'],
      },
      tooltips: [
        `<h3>What are NPM Scripts?</h3>
        <p><p>NPM (Node Package Manager) scripts are a feature of the <code>package.json</code> file that <i>allow you to <b>define custom commands</b> to automate various tasks</i> in your Node.js projects. <i>These scripts can be used to run build processes, start servers, run tests, lint code, and perform many other development activities.</i></p></p>`,
        `<h3>Definition</h3>
        <p>NPM scripts are defined in the scripts section of the <code>package.json</code> file. Each script is a key-value pair where the key is the script name and the value is the command to be executed.</p>
        <pre><code>
{
  "name": "my-app",
  "version": "1.0.0",
  <i>"scripts": {
    "start": "node app.js",
    "build": "webpack --config webpack.config.js",
    "test": "mocha test/",
    "lint": "eslint ."
  }</i>
}
        </code></pre>
        `,
        `<h3>Usage</h3>
        <p>To run an NPM script, you use the <code>npm run <script-name></code> command. For example, to run the start script, you would use <code>npm run start</code>.</p>`,
        `<h3>Default Scripts</h3>
        <p>Some script names have special meanings and can be run with shorter commands. For instance, <code>start</code>, <code>test</code>, <code>preinstall</code>, <code>postinstall</code>, <code>prepublish</code>, and <code>postpublish</code> have default behaviors. You can run <code>npm start</code> instead of <code>npm run start</code>.</p>`,
        `<h3>Script Composition</h3>
        <p>NPM scripts can call other NPM scripts, allowing for complex workflows. This can be achieved using the <code>npm run</code> command within another script.<p>
        <pre><code>
{
  "scripts": {
    "clean": "rm -rf dist",
    <i>"build": "npm run clean && webpack --config webpack.config.js"</i>
  }
}
        </code></pre>
        `,
        `<h3>Environment Variables</h3>
        <p>You can set environment variables in NPM scripts, which can be useful for configuring different environments (development, testing, production).</p>
        <pre><code>
{
  "scripts": {
    <i>"start": "<b>NODE_ENV=production</b> node app.js"</i>
  }
}
        </code></pre>
        `,
      ],
    },
    {
      sectionTitle: 'Using nodemon Package for Autorestarts',
      sectionSource: '',
      highlights: {
        highlight2: ['nodemon Package'],
      },
      tooltips: [
        `<p>nodemon is a very nice tool that helps us develop Node.js applications by <i>automatically restarting the Node.js application whenever we change some files in our working directory</i>.</p>
        <pre><code> 
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
       </code></pre>
       <p>To use nodemon, in your terminal you run the command that will execute the npm script called "start":</p>
       <pre><code>
npm run start
       </code></pre>
       `,
      ],
    },
    {
      sectionTitle: 'Environment Variables',
      sectionSource: '',
      tooltips: [
        `<h3>Introduction</h3>
        <p>Environment variables has to do with Node.js development in general.</p>
        <p><i>Node.js or Express.js apps can run in different environments, and the most important ones are the <u>development</u> environment and the <u>production</u> environment.</i> That's because depending on the environment, we might use different databases, or we might turn login on or off, or we might turn debugging on or off, or really all kinds of different settings that might change depending on the development that we're in. So this type of setting that I just mentioned, like different databases or login turned on or off, that will be based on environment variables.</p>
        <p><b>By default, Express.js sets the environment to development</b>, which makes a lot of sense because that's what we're doing when we start a new project.</p>
        <p><i>In Express.js, many packages depend on a special variable called <code>NODE_ENV</code>. <code>NODE_ENV</code> is a variable that's kind of a convention which should define whether we're in development or in production mode. However, <b>Express.js does not really define automatically the <code>NODE_ENV</code> variable</b>, so we as developers have to do that manually.</i></p>
        <ul>There are multiple ways in which we can do it:
          <li>- by using the command terminal: <b><code>NODE_ENV=development nodemon app.js</code></b>;</li>
          <li>- by using a <b><code>config.env</code></b> file.</li>
        </ul>
        `,
        `<h3>What are Environment Variables</h3>
        <p>In Node.js, environment variables are <i><b>values that are set outside of the application</b> but <b>can be accessed within the application</b> code</i>. They provide a way to <i>configure and customize how the application behaves without modifying the source code</i>.</p>
        <p>Environment variables are commonly <b>used to store sensitive information</b> <i>such as API keys, database credentials, or configuration parameters that vary between environments</i> (such as development, testing, and production).</p>`,
        `<h3>Setting Environment Variables</h3>
        <ul>Environment variables can be set in various ways:
          <li>1. <i>Operating System Environment</i>: You can set environment variables directly in your operating system.</li>
          <li>2. <b><code>.env</code> files</b>: It's common practice to use <code>.env</code> files to store environment variables in Node.js projects. These files are not loaded by default but can be loaded using packages like <code>dotenv</code>. <code>.env</code> files contain key-value pairs in the format KEY=value.</li>
          <li>3. <b>Command Line</b>: You can also pass environment variables directly through the command line when running Node.js scripts.</li>
        </ul>
        `,
        `<h3>Accessing Environment Variables in Node.js</h3>
        <p>Once environment variables are set, Node.js applications can access them using the <code>process.env</code> object:
        <pre><code>
const myVariable = <b>process.env.MY_VARIABLE</b>;
        </code></pre>
        </p>
        `,
        `<h3>Best Practices</h3>
        <p>1. <b>Keep Secrets Secure</b>: <i>Avoid storing sensitive information directly in your code.</i> Instead, use environment variables to store secrets and <i>avoid committing them to version control systems</i>.</p>
        <p>2. Environment-Specific Configuration: <i>Use environment variables to configure your application for different environments (development, testing, production). This allows you to keep the same codebase but adapt the behavior based on the environment.</i></p>
        <p>3. Use <code>.env</code> Files: When working with multiple environment variables, <i>use <code>.env</code> files and a package like <code>dotenv</code> to load them into your application</i>. This makes managing environment variables easier and more organized.</p>
        <p>4. Document Dependencies: Document all required environment variables and their purpose in your project's documentation to make it easier for developers to set up the application in different environments.</p>
        `,
        `<h3>Example</h3>
        <p>Let's say you have an application that connects to a database. You can use environment variables to specify the database connection details:
        <pre><code>
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};
        </code></pre>
        </p>
        <p>Then, you would set these variables either <i>in your operating system environment</i>, a <code>.env</code> file, or <i>pass them through the command line</i>:
        <pre><code>
DB_HOST=localhost
DB_USER=myuser
DB_PASSWORD=secretpassword
DB_NAME=mydatabase
        </code></pre>
        </p>
        <p>With this setup, you can easily change the database configuration without modifying your code.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'Backend Architecture: What is the MVC (Model-View-Controller)?',
      sectionSource: '',
      highlights: {
        highlight1: ['MVC'],
      },
      tooltips: [
        `<p>In this module I want to dive into a very important aspect of building backend applications. We want to follow a certain <i>pattern for structuring our code</i> and with that, I don't really just mean how we split it over files or how we write the code, but I mean how we <i>logically separate our code</i> and the different functions it fulfills or the different things it does.</p>
        `,
        `<h3>The MVC Pattern</h3>
        <p>What does MVC stand for or what is it? It's all about a <i>separation of concerns</i>, so making sure that <i>different parts of your code do different things</i>, and you clearly know which part is responsible for what. MVC stands for Model-View-Controller, so we work with <i>models</i>, <i>views</i> and <i>controllers</i>.</p>
        <p>MVC is a pattern that tells us <b>how to organize the various different pieces of our code <u>based on what they do</u></b>.</p>`,
        `<h3>How MVC works</h3>
        <p>Our code is split into the Model, the View and the Controller, while we have the User who interacts with these components. These interactions are generally that the <i>User uses the Controller</i>, for example, by making requests. <i>The Controller understands and processes that User's requests and then manipulates the Model accordingly</i>, for example, by adding or removing data from a database.</p>
        <p>And <i>when the Model is updated by the Controller, the View react to those changes and the User sees the updated data</i>.</p>
        <p><img src="../../src/img/mvc_arhitecture_3.jpg"/></p>
        <p>In Express, <i>the Controller is <b>the code or the functions that react to the incoming requests and set the response accordingly</b></i>, while <i>the Model is our data and also includes any functions that we use to access that database. The View is how that data from the Model is presented back to the user.</i></p>
        `,
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
        `<h3>Overview</h3>
        <p><img src="../../src/img/mvc_arhitecture_1.jpg"/></p>
        <p><img src="../../src/img/mvc_arhitecture_2.jpg"/></p>
        `,
      ],
    },
  ],
};

const working_with_REST_APIs = {
  title: 'Working with REST APIs',
  titleDescription: 'Decoupling Frontend and Backend',
  sections: [
    {
      sectionTitle: 'What are REST APIs and Why Do We Use Them?',
      sectionSource: '',
      tooltips: [
        `<p>REST APIs are there to solve one problem: <i>not every Frontend (User Interface) requires HTML Pages from your server! So not every Frontend Web App might want your server to generate the HTML code, which effectively is the UI</i>.</p>
        <p><i>With REST APIs we <b>only transfer <u>Data</u> instead of <u>UI</u> (HTML Pages)</b></i>.</p>`,
        `<h3>"Traditional" server-side logic vs REST APIs</h3>
        <p>It's important to highlight that in REST APIs only the request and the response data changes, but not the general server-side logic.</p>
        <ul>A REST APIs don't differ to much in what happens on the server from a Traditional Web Server. It only different in:
           <li>- Traditional Web Server render the views on the server-side, but REST APIs only return data, not the views.</li>
        </ul>
        <p>Most of the server-side code does not change when we build REST APIs, only request + response data is affected.</p>
        <p>The most important thing a REST API offers is that we can have <i>a single REST API with many consumers</i>: browsers, native mobiles systems (android, IOS), native app (Windows or MacOS). In "traditional" server, with the HTML pages generated on the server, only browsers can use that server.</p>
        `,
      ],
    },
    {
      sectionTitle: 'The REST API Arhitecture',
      sectionSource: '',
      highlights: {
        highlight1: ['REST API Arhitecture'],
      },
      tooltips: [
        `<h3>Separate API into logical resources</h3>
        <p>A resource is an object or representation of something, which has data associated to it. Any information that can be <u>named</u> can be a resource.</p>
        <p>We need to <i>expose these resources</i>, which means to <b>make available the data using some structured URLs that the client can send a request to</b>. So our API will have many different endpoints, and <i>each endpoint will send different data back to the client</i>, or also perform different actions.</p>
        <p><img src="../../src/img/rest_api_arhitecture_1.jpg"/></p>`,
        `<h3>Endpoints should contain only resources!</h3>
        <p><i><b>Endpoints should contain only resources (nouns)</b>, and use HTTP methods in order to perform actions on data!</i> So to perform different actions (reading / creating / updating / deleting) on data, <i>the API should use the right HTTP method and not the URL</i>.</p>
        <p><b>Endpoints should only contain our resources and not the actions that can be performed on them</b>, because they will quickly become a nightmare to maintain.</p>
        <p>For example, <code>/getTour</code> endpoint is to get data about a tour. So we should simply name the endpoint <code>/tours</code> and send the data whenever a GET request is made to <code>/tours</code> endpoint. Just like this, we only have resources in the endpoint and not actions, because the action is now in the HTTP method.</p>
        <p><img src="../../src/img/rest_api_arhitecture_2.jpg"/></p>
        <p>What's is important to understand is that we have a single resource in <code>/tours</code> endpoint that <i>performs different actions on data based on different HTTP methods</i>. So, for example, if the <code>/tours</code> endpoint is accessed with GET method, we send data to the client. But if the same <code>/tours</code> endpoint is accessed with POST method, we expect data to come in with an incoming request, so that we can then create a new resource on the server side. So that is really the beauty of only using HTTP methods, rather than messing with verbs in endpoint names.</p>
        `,
        `<h3>Accessing Data with REST APIs: Send data as JSON</h3>
        <ul>Data Formats:
          <li>- HTML;</li>
          <li>- Plain Text;</li>
          <li>- XML;</li>
          <li>- JSON;</li>
        </ul>
        <p><img src="../../src/img/rest_api_arhitecture_3.jpg"/></p>
        <p>When we send a JSON response back to the client, <i>there is are a couple of standards to <b>formatting the response before sending</b></i>. We're gonna use a very simple one called <b>JSend</b>. We simply create a new object, then add a <code>status</code> message to it in order to inform the client whether the request was a success, fail or error, and then we put our original data into a new object called <code>data</code>.</p>
        `,
        `<h3>REST APIs are stateless</h3>
        <p>In REST APIs <b>all state is handled <u>on the client</u></b>. This means that <b>each incoming request must contain <u>all</u> the information necessary to process a certain request from the server</b>. <i>The server should <u>not</u> have to remember previous requests in order to process the current request.</i></p>
        <p>In REST APIs the server does not save response history between requests.</p>
        <p><img src="../../src/img/rest_api_arhitecture_4.jpg"/></p>`,
        `<h3>REST APIs - The Core Principles</h3>
        <ul>REST Concepts & Ideas:
          <li>- <i>REST APIs are <b>all about data</b>, no UI logic in exchanged;</i></li>
          <li>- <i>REST APIs are normal Node.js servers which <b>expose different endpoints</b> (HTTP method + path) for clients to send request to;</i></li>
          <li>- <i><b>JSON is the common data format</b> that is used both for requests and resposnes;</i></li>
          <li>- REST APIs are <b>decoupled from the clients</b> that use them.</li>
        </ul>
        `,
      ],
    },
    {
      sectionTitle: 'Sending POST Requests From The Client',
      sectionSource: '',
      tooltips: [
        `<h3>The old way of submiting forms & sending HTTP "POST" request</h3>
        <pre><code>
form <i>action="/feed/post"</i> <i>method="POST"</i>
        </code></pre>`,
        `<h3>Sending "POST" requests in REST APIs</h3>
        <pre><code>
fetch('http://localhost:8080/feed/post', {
  <i><b>method</b>: 'POST',
  <b>headers</b>: {
    'Content-Type': 'application/json'
  }
  <b>body</b>: JSON.stringify</i>({ title: 'A title', content: 'Some content...'})
})      
      </code></pre>
      <p>Attach data in JSON format and let the other end know by setting the "Content-Type" header.</p>
      <ul><b>Express.js set the "Conten-Type" header automatically when using the <code>res.json()</code> method.</b> In the browser, setting the "Content-Type" header depends on which method you use:
        <li>- when using the <i>Fetch API</i> we had to set it manually;</li>
        <li>- when you would use <i>Axios library</i> in browser-side JavaScript for sending async requests, it would be done automatically.</li>
      </ul>
      `,
      ],
    },
  ],
};

const understanding_the_basics = {
  title: 'Understanding the Basics',
  titleDescription: 'The Essential Knownledge You Need',
  sections: [
    {
      sectionTitle: 'Creating a Simple Web Server',
      sectionSource: '',
      highlights: {
        highlight1: ['Web Server'],
      },
      tooltips: [
        `<p>Built-in <code>http</code> module gives us networking capabilities, such as building an http server.</p>
        <ul>In order to build a server, we have to do two things:
          <li>1. <b>Create a server</b>;</li>
          <li>2. <i><b>Start the server</b>, so that we can actually <b>listen to incoming requests</b>.</i></li>
        </ul>
        <pre><code>
const http = <i>require('http')</i>;

// 1. Create the server
const server = <i>http<b>.createServer</b></i>((<i>req</i>, <i>res</i>) => {
    //Your server side code here
});

// 2. Start the server
<i>server<b>.listen</b></i>(3000);
      </code></pre>
      <ul>Let's analyze what the code above does:
        <li>- we created our server, using <code>createServer()</code> and passed in it a callback function that is <i>executed each time that a new request hits the server</i>;</li>
        <li>- then we started <i>listening for incoming requests on the on port</i> 3000.</li>
      </ul>
      <p>NOTE: <code>http.createServer</code> will accept a callback function, which will be <u>fired off each time a new request hits our server</u>. And this callback function gets access to two very important and fundamental objects: it is the <i>request (<b><code>req</code></b>) object</i>, and a <i>response (<b><code>res</code></b>) object</i>.</p>
      `,
        `<h3>Request (<code>req</code>) and Response (<code>res</code>) objects</h3>
      <p>The request (<code>req</code>) and response (<code>res</code>) objects are fundamental components used to <i>handle HTTP requests and responses</i>.</p>
      <p>The <code>req</code> object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and more.</p>
      <p>The <code>res</code> object represents the HTTP response that a Node.js app sends when it gets an HTTP request.</p>
      <p><i>Understanding <code>req</code> and <code>res</code> objects is crucial for handling HTTP interactions</i> in Node.js apps.</p>
      `,
      ],
    },
    {
      sectionTitle: 'Understanding Requests',
      sectionSource: '',
      highlights: {
        highlight1: ['Requests'],
      },
      tooltips: [
        `<p>In Node.js, handling HTTP requests is a fundamental task, especially when building a server. Here’s a basic guide to understanding and working with requests in Node.js</p>`,
        `<h3>Handling HTTP Requests</h3>
        <p><b>GET Request</b>: to handle a GET request, you <i>define a route</i> and <i>a callback function that sends a response</i>:</p>
        <pre><code>
app<i>.get</i>('/', (req, res) => {
  res.send('Hello, World!');
});
        </code></pre>
        <p><b>POST Request</b>: to handle a POST request, you also <i>define a route</i> and <i>a callback function</i>. Typically, you’ll also need middleware to parse the request body:</p>
        <pre><code>
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const data = req.body;
  res.send('Data received: JSON.stringify(data)');
});
        </code></pre>
        `,
        `<h3>Request Object</h3>
        <ul><b>The request object (<code>req</code>) contains information about the HTTP request.</b> Some useful properties are:
        <li>- <i><code>req.params</code></i>: Parameters from the URL (route parameters);</li>
        <li>- <i><code>req.query</code></i>: Query string parameters;</li>
        <li>- <i><code>req.body</code></i>: Data sent in the request body (for POST, PUT, etc.);</li>
        <li>- <i><code>req.headers</code></i>: HTTP headers.</li>
        </ul>
        `,
        `<h3>Middleware</h3>
        <p>Middleware functions are functions that have access to the request object (<code>req</code>), the response object (<code>res</code>), and the next middleware function in the application’s request-response cycle. They can execute code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function.</p>`,
      ],
    },
    {
      sectionTitle: 'Understanding Responses',
      sectionSource: '',
      highlights: {
        highlight1: ['Responses'],
      },
      tooltips: [
        `<p>In Node.js, handling responses typically involves working with the http module or using a web framework like Express.js. Understanding how to manage responses is crucial for <i><b>sending data back to the client</b>, whether it’s HTML, JSON, or other types of data</i>.</p>`,
        `<h3>Using the <code>http</code> Module</h3>
        <p>The <code>http</code> module in Node.js provides functionalities to create an HTTP server and handle requests and responses.</p>
        <pre><code>
const http = require('http');

const server = http.createServer((req, res) => {
  //Setting response header
  <i>res.writeHead</i>(200, { 'Content-Type': 'text/plain' });
  
  //Sending response body
  <i>res.send</i>('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
        </code></pre>
        `,
        `<h3>Using Express.js</h3>
        <p>Express.js simplifies the process of handling requests and responses.</p>
        <pre><code>
const express = require('express');
const app = express();
const port = 3000;

//Handling GET request
app.get('/', (req, res) => {
  <i>res.send</i>('Hello, World!');
});

//Handling JSON response
app.get('/json', (req, res) => {
  <i>res.json</i>({ message: 'Hello, World!', status: 'success' });
});

//Handling 404
app.use((req, res, next) => {
  <i>res.status(404).send</i>('Sorry, we could not find that!');
});

//Starting the server
app.listen(port, () => {
  console.log('Server is running on http://localhost:port');
});
        </code></pre>
        `,
        `<h3>Key Concepts</h3>
        <p><b>Response <u>Headers</u></b>: Headers <i>provide essential information about the response</i> such as content type, status, etc.</p>
        <p><b>Response <u>Body</u></b>: The body contains <i>the data sent back to the client</i>.</p>
        <p><b>Response <u>Status Codes</u></b>: Status codes <i>indicate the result of the HTTP response</i>.</p>
        <p><img src="../../src/img/http_methods_status_code_01.jpg"/></p>
        <ul>Sending <i>Different Types of Responses</i>:
          <li>- <code>res<b>.send()</b></code> - Sends <i>various types</i> of responses (HTML, plain text, etc.);</li>
          <li>- <code>res<b>.json()</b></code> - Sends a <i>JSON</i> response;</li>
          <li>- <code>res<b>.sendFile()</b></code> - Sends <i>a file</i> as an attachment or inline.</li>
        </ul>
        `,
      ],
    },
    {
      sectionTitle: 'Request & Response Headers',
      sectionSource: '',
      highlights: {
        highlight1: ['Headers'],
      },
      tooltips: [
        `<p>Request & Response Headers are <i><b>pieces of information</b> that we can receive with a request or that we can add to our responses</i>.</p>`,
        `<h3>Response Headers</h3>
        <p>There are many different standard headers that we can specify to <b>inform the browser or whatever client is receiving a response about the response itself</b>. For example, <code>'Content-Type'</code> header informs the browser that the response it's receive it a HTML response.</p>
       <pre><code>
const http = require('http');

const server = http.createServer((req, res) => {
    <i>res.writeHead(404, {
      <b>'Content-Type': 'text/html'</b>
    });</i>
    res.send('&#129172span&#129174Hello world&#129172span/&#129174');
});

server.listen(3000);
        </code></pre>
        <p><i>There are many more headers that you can specify on your response.</i> You can also specify your own made-up headers.</p>
        <p>IMPORTANT: It's important to understand that, <i>in a the case you want to add headers to a response, you need to <b>set them before sending the response</b></i>.</p>
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
        `<p>With routing, you can <b>write Node.js <u>code that react to URL</u> that a user is requesting</b>. So, routing basically means <i>implementing <u>different actions</u> for <u>different URLs</u></i>.</p>
        <p>In Node.js, routing refers to the process of defining <i><b>how an application responds to a client request to a particular endpoint</b>, which is a <b>URL (or path)</b> and a specific <b>HTTP request method</b> (GET, POST, etc.). Routing is used to perform different actions based on the URL and HTTP method requested.</i> For example, you might have one route to send a user information when they access a webpage via a GET request, and another route to process the information submitted through a form via a POST request.</p>
        <pre><code>
const express = require("express");

const router = express.Router();

router
  .route('/pathName')
  <i>.get((req, res, next) => {})
  .post((req, res, next) => {})</i>;
        </code></pre>
        <p><i><b>Each route can have one or more handler functions</b>, which are executed when the route is matched.</i></p>
        <p><i>Node.js itself doesn't come with a built-in router</i>, so routing is often handled by Node.js frameworks like Express, which simplify the process of writing server-side code.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Controlling the Node.js Process',
      sectionSource: '',
      tooltips: [
        `<p>Remember when create a simple server? When we start that server and listening for incoming request, Node.js cannot simply exit the processs (exit the program), because the whole goal is to wait for the requests to come in.</p>
        <p><b>In Node.js, <code>process.exit()</code> is a method used to terminate the Node.js process.</b></p>
        <p><i>When <code>process.exit()</code> is called, the Node.js <b>event loop is stopped immediately</b>, and no further asynchronous operations are performed.</i> It's often used to forcefully terminate the application under certain conditions, like critical errors or when a specific condition is met.</p>
        <p>However, it's important to <i>use <code>process.exit()</code> with caution, especially in production code</i>, as it doesn't allow graceful shutdown and can leave resources in an inconsistent state. It's generally recommended to handle errors and shutdown gracefully whenever possible.</p>
        <ul>The <code>process</code> object is a global that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using <code>require()</code>. It can also be explicitly accessed using <code>require()</code>:
          <li>
            <pre><code>
const process = require('process');
            </code></pre>
          </li>
        </ul>
        <p>NOTE: <i><code>process</code> is a <u>global feature</u></i> provided by Node.js without the need for explicit import or inclusion. Node.js provide many these features that are built-in and can be accessed directly.</p>
        `,
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
        <p>With Node.js alone, you have to <i>write a lot of code to deal with basic things</i> like, for example, extracting the body of an incoming request. Now typically you don't want to do that, you want to focus on your business logic, the code that makes up your specific application, you don't want to care about standard tasks like handling incoming requests or routing.</p>
        <p>Now, of course you could stick to Vanilla Node.js and that works, and depending on the complexity of your application or the level of challenges you are seeking, you can absolutely stick to Vanilla Node.js, you can theoretically write everything on your own just with Vanilla Node.js.</p>
        `,
        `<h3>What is Express.js and why do we use it?</h3>
        <p>Express.js is a <b>framework</b> you can install as <b>a third party package into your Node.js project</b> that basically <i>gives you a set of helper functions, tools & rules that help to build your application</i> and as such, it basically <i>helps you outsource some of that nitty-gritty work</i>, some of these details you don't want to care about.</p>
        <ul>Express.js contains a very robust set of features:
          <li>- complex routing;</li>
          <li>- easier handling of requests and responses;</li>
          <li>- middleware;</li>
          <li>- server-side rendering;</li>
          <li>- much more.</li>
        </ul>
        `,
        `<h3>How to install Express.js</h3>
        <p>You install Express.js by typing in your VSCode terminal the <b><code>npm i express</code></b> command. This command will <i>install Express.js as a dependency to your Node.js project</i>.</p>
        <p>Once you install Express.js, you need to import it in your <code>server.js</code> file and create your Node.js server. You do this like the example below:</p>
        <pre><code>
<i>const express = require('express');</i>

const PORT = 3000;

<i>const app = express();</i>

<i>app.use</i>((req, res, next) => {
  res.status(200).send('Hello from the server!');
})

<i>app.listen</i>(PORT, () => {
  console.log('App start running!');
});
        </code></pre>
        <p><b>Express.js handling incoming requests in a certain way called middleware functions. Middleware functions are a key characteristic of Express framework.</b></p>
        `,
      ],
    },
    {
      sectionTitle: 'Express.js is All About Middleware Functions',
      sectionSource: '',
      highlights: {
        highlight1: ['Middleware Functions'],
      },
      tooltips: [
        `<h3>Middleware functions are a crucial aspect of Express.js</h3>
        <p>Express.js is all about middleware functions.</p>
        <p>In Express.js, <b>an <u>incoming request</u> is automatically funneled through a bunch of middleware functions</b>, so instead of just having one incoming request handler, you will actually have a possibility of hooking in multiple middleware functions which the incoming request will go through until you send a response. This allows you to split your code into multiple blocks/pieces, instead of having one huge middleware function that does everything, and this is the pluggable nature of Express.js, where you can easily add other third party packages which simply happen to give you such middleware functions that you can plug into Express.js and add certain functionalities.</p>
        <p>Middleware functions are <i>functions that have access to the <u><b>request</b> object</u> (req), the <u><b>response</b> object</u> (res), and <u>the <b>next()</b> middleware function</u> in the application's request-response cycle</i>.</p>
        <ul>Middleware functions can perform the following tasks:
          <li><i>- Execute any code.</i></li>
          <li><i>- Make changes to the request and the response objects (they can modify the request and response objects).</i></li>
          <li>- <i>End the request-response cycle.</i></li>
          <li>- Call the next middleware in the stack.</li>
        </ul>
        <p><i><b>If the current middleware function does not end the request-response cycle, it must call <code>next()</code> to pass control to the next middleware function.</b> Otherwise, the request will be left hanging.</i></p>
        <p><img src="../../src/img/middleware_1.jpg"/></p>
        <p>IMPORTANT: <i>A middleware function is <b>executed every time an incoming request is received</b> and <b>the route path is matched</b>.</i></p>
        `,
        `<h3>3rd Party Packages Middleware Function vs Custom Middleware Function</h3>
        <p>Express.js provides a wide range of <i>middleware modules</i> that can be easily integrated into your application, or you can create <i>custom middleware functions</i> tailored to your specific requirements.</p>
        `,
      ],
    },
    {
      sectionTitle: 'How to Use Middleware Functions: app.use() & next()',
      sectionSource: '',
      highlights: {
        highlight2: ['app.use()', 'next()'],
      },
      tooltips: [
        `<p><i>To load the middleware function, call <b><code>app.use()</code></b>, specifying the middleware function.</i> For example, the following code loads the <code>myLogger</code> middleware function before the route to the root path (/).
        <pre><code>
// ##### First example #####

const express = require('express');
const app = express();

const myLogger = function <i>(req, res, next)</i> {
  console.log('LOGGED');
  <i>next()</i>;
};

//<i>Every time the app receives a request</i>, it prints the message “LOGGED” to the terminal.
<i><b>app.use</b>(myLogger);</i>

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT)
        </code></pre>        
       
        <p><p>In the second example below, <b><code>app.use()</code> is used to register a middleware function</b>. This middleware function logs the current timestamp to the console <u>every time a request is received</u>. <i>The <code>next()</code> function is called to pass control to the next middleware function in the stack.</i></p></p>
        <pre><code>
// ##### Second example #####

const express = require('express');
const app = express();

<b>app.use</b>(<i>(req, res, next)</i> => {
    console.log('Time:', Date.now());
    <i>next();</i>
});

<b>app.use</b>(<i>(req, res, next)</i> => {
    console.log('Text:', 'Some text to print!');
    <i>next();</i>
});

app.get('/', (req, res) => {
    <i>res.send('Hello World!');</i>
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
        </code></pre>
        <p>NOTE: Using <code>next()</code> allows the request to continue to the next middleware in line (next middleware function in the stack).</p>
        `,
        `<h3>More details about <code>app.use()</code> function</h3>
        <p>The <code>app.use()</code> function in Express.js is <b>used to <u>mount middleware functions</u> at a specified path</b>. These middleware functions will be <b><u>executed for every request</u> that matches the specified path</b>.</p>
        <ul>The <code>app.use()</code> function takes two arguments:
          <li>1. <b><code>path</code> (optional)</b>: <i>specifies the path for which the middleware function should be executed.</i> <b>If no path is specified, the middleware function will be executed for every incoming request.</b> This is useful for setting up middleware that needs to be applied globally, such as logging, parsing request bodies, or handling authentication.
          <pre><code>
//In this example, the middleware function will be executed for every incoming request (globally - for your entire application)

app.use((req, res, next) => {
  //Middleware logic that runs for every incoming request
  next();
});
          </code></pre>
          <pre><code>
//In this example, the middleware function will only be executed for requests that start with /api

app.use('/api', (req, res, next) => {
  //Middleware logic that runs only for incoming requests to /api path
  next();
});
          </code></pre>
          <p>IMPORTANT: <i>By using <b><code>app.use()</code></b> or <b><code>router.use()</code></b>, you can use middleware functions <b>globally</b> (for your entire application), meaning they are executed for every request, or <b>apply them to specific routes or groups of routes</b></i>.</p>
          </li>
          <li>2. <b><code>callback</code></b>: the <i>middleware function</i> or an <i>array of middleware functions</i> to be executed. These functions have access to the request (req), response (res), and the next middleware function (next) in the stack.
          <pre><code>
//You can also chain multiple middleware functions together by passing an array of middleware functions to app.use():

function middleware1(req, res, next) {
  //Middleware 1 logic
  next();
}
          
function middleware2(req, res, next) {
  //Middleware 2 logic
  next();
}
          
app.use('/api', [middleware1, middleware2]);

//This will execute middleware1 and middleware2 in sequence for requests to the specified path.
          </code></pre>
          </li>
        </ul>
        `,
        `<h3>More details about <code>next()</code> function</h3>
        <p>In Express.js, the <code>next()</code> function is a callback function that is <i><u>used within middleware functions</u> to pass control to the next middleware function <u>in the stack</u></i>. It is often <b>used to chain multiple middleware functions together</b>, <i>allowing each middleware function to perform its <u>specific tasks</u> before passing control to the next one</i>.</p>
        <p>IMPORTANT: <b>We have to call <code>next()</code> to allow an incoming request to continue to the next middleware in line.</b> If we don't call <code>next()</code>, middleware just dies, so we should actually send back a response because otherwise the request can't continue its journey to the next middleware function, so it will never reach a place where we might send a response. <i>Express.js doesn't send a default response</i> or anything like that.</p>
        <ul>Here's how the <code>next()</code> function works:
          <li>1. When a middleware function is invoked, it receives three arguments: req (the request object), res (the response object), and next (the callback function).</li>
          <li>2. By calling <code>next()</code>, the current middleware function signals to Express.js that it has completed its tasks and that the control should be passed to the next middleware function.</li>
          <li>3. <i>If <code>next()</code> is called <u>without any arguments</u>, Express.js proceeds to the next middleware function in the stack. <b>If there are no more middleware functions in the stack, Express.js proceeds to route handlers</b>, or if there are no route handlers, it sends the response back to the client.</i></li>
        </ul>
        <p><i><b>The <code>next()</code> function can also be used to handle errors within middleware functions.</b> If <code>next()</code> is called <u>with an argument</u> (usually an error object), Express.js will skip all remaining middleware functions in the stack and pass control to the error handling middleware (if one is defined).</i> This allows you to centralize error handling logic in a single middleware function.</p>
        <p>NOTE: Starting with Express 5, <i>middleware functions that return a Promise will call <code>next(value)</code> when they reject or throw an error. <code>next()</code> will be called with either the rejected value or the thrown Error.</i></p>
        `,
      ],
    },
    {
      sectionTitle: 'The Order of Middleware Loading',
      sectionSource: '',
      tooltips: [
        `
      <p>The order of middleware loading is important: <b>middleware functions that are loaded first are also executed first</b>.</p>
      <p>If <code>myLogger</code> is loaded after the route to the root path, the request never reaches it and the app doesn't print “LOGGED”, because the route handler of the root path terminates the request-response cycle.</p>
      <pre><code>
const express = require('express');
const app = express();

const myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

//<i>This will terminate the request-response cycle by sending a response to the client!</i>
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//<i>This will be NEVER BE EXECUTED, because the function above it terminates the request-response cycle!</i>
app.use(myLogger);

app.listen(process.env.PORT);
      </code></pre>`,
        `<p>The middleware function <code>myLogger</code> simply prints a message, then passes on the request to the next middleware function in the stack by calling the <code>next()</code> function.</p>
      <pre><code>
const express = require('express');
const app = express();

const myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

<i>app.use(myLogger);</i>

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT);
      </code></pre> 
      `,
      ],
    },
    {
      sectionTitle: 'Make Changes to The Request and The Response Objects',
      sectionSource: '',
      tooltips: [
        `
        <p>Next, we'll create a middleware function called “timeRequest” and add a property called <code>requestTime</code> to the request object. The app now uses the <code>timeRequest</code> middleware function. Also, the callback function of the root path route uses the property that the middleware function adds to <code>req</code> (the request object).</p>
        <pre><code>
const express = require('express')
const app = express()

const timeRequest = function (req, res, next) {
  <i>req.requestTime</i> = Date.now()
  next()
}

app.use(timeRequest)

app.get('/', (req, res) => {
  const responseText = 'Hello World!' + <i>req.requestTime</i>
  res.send(responseText)
})

app.listen(process.env.PORT)
        </code></pre>
`,
      ],
    },
    {
      sectionTitle: 'Configurable Middleware',
      sectionSource: '',
      tooltips: [
        `
<p>If you need your middleware to be configurable, export a function which accepts an <code>options</code> object or other parameters, which, then returns the middleware implementation based on the input parameters.</p>
        <pre><code>
module.exports = function (<i>options</i>) {
  return function (req, res, next) {
    // Implement the middleware function based on the <i>options</i> object
    next()
  }
}
        </code></pre>
        <pre><code>
const mw = require('./my-middleware.js')

app.use(mw(<i>{ option1: '1', option2: '2' }</i>))
        </code></pre>
`,
      ],
    },
    {
      sectionTitle: 'Type of Responses in Express.js',
      sectionSource: '',
      tooltips: [
        `<ul>The methods on the response object (<code>res</code>) can <i>send a response to the client, and terminate the request-response cycle</i>. If none of these methods are called from a route handler, the client request will be left hanging.
          <li>- <code>res.download()</code>:	Prompt a file to be downloaded.</li>
          <li>- <code>res.<i>end()</i></code>:	End the response process.</li>
          <li>- <code>res.<i>json()</i></code>:	Send a JSON response.</li>
          <li>- <code>res.jsonp()</code>:	Send a JSON response with JSONP support.</li>
          <li>- <code>res.<i>redirect()</i></code>:	Redirect a request.</li>
          <li>- <code>res.<i>render()</i></code>:	Render a view template.</li>
          <li>- <code>res.<i>send()</i></code>:	Send a response of various types.</li>
          <li>- <code>res.sendFile()</code>:	Send a file as an octet stream.</li>
          <li>- <code>res.sendStatus()</code>: Set the response status code and send its string representation as the response body.</li>
        </ul>`,
      ],
    },
  ],
};

const routing = {
  title: 'Routing',
  titleDescription: '',
  sections: [
    {
      sectionTitle: 'Introduction to Routing in Express.js',
      sectionSource: '',
      tooltips: [
        `<p>Routing refers to <i>how an <b>application's endpoints (URIs)</b> respond to <b>client requests</b></i>.</p>
        <p><b>You define routing using methods of the Express <code>app</code> object that correspond to HTTP methods</b>: for example, <code>app.get()</code> to handle GET requests and <code>app.post</code> to handle POST requests.</p>
        <p>You can also <b>use <code>app.all()</code> to handle all HTTP methods</b> and <b><code>app.use()</code> to specify middleware as the callback function</b>.</p>
        <p><i>These routing methods specify a callback function (sometimes called “handler functions”) called when the application receives an incoming request to the specified route (endpoint) and HTTP method.</i> In other words, the application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.</p>
        <p>In fact, <b>the routing methods can have more than one callback function as arguments</b>. <i>With multiple callback functions, it is important to provide <code>next</code> as an argument to the callback function</i> and then call <code>next()</code> within the body of the function to hand off control to the next callback.</p>`,
        `<h3>Route methods</h3>
        <p>A route method is derived from one of the HTTP methods, and is attached to an instance of the express class. Express supports methods that correspond to all HTTP request methods: GET, POST, and so on.</p>
        <ul>Route definition takes the following structure: <code>app.<i>METHOD</i>(PATH, HANDLER)</code>, where:
          <li>- <code>app</code> is an instance of express;</li>
          <li>- <code>METHOD</code> is an HTTP request method, in lowercase;</li>
          <li>- <code>PATH</code> is a path on the server;</li>
          <li>- <code>HANDLER</code> is the function executed when the route is matched.</li>
        </ul>
        <pre><code>
//GET method route
<i>app<b>.get</b></i>('/', (req, res) => {
  res.send('GET request to the homepage');
});

//POST method route
<i>app<b>.post</b></i>('/', (req, res) => {
  res.send('POST request to the homepage');
});
      </code></pre>
      <p>There is a special routing method, <code>app.all()</code>, used to <i>load middleware functions at a path for all HTTP request methods</i>. For example, the following handler is executed for requests to the route “/secret” whether using GET, POST, PUT, DELETE.</p>
              <pre><code>
<i>app<b>.all</b></i>('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...');
  next(); //pass control to the next handler
});
      </code></pre>

      `,
      ],
    },
    {
      sectionTitle: 'Using express.Router()',
      sectionSource: '',
      highlights: {
        highlight2: ['express.Router()'],
      },
      tooltips: [
        `<p>With Express.js routing we can <i>execute different code for different incoming requests and paths</i>.</p>
        <p>When the application grows, we want to <i>split our routing code over multiple files</i>. Express.js  gives us a pretty nice way of outsourcing routing into other files. You can <b>use the <code>express.Router</code> to split your routes across files</b>.</p>
        <p>The convention is to create in your application a new folder called "routes". In this folder you will store all your files related to Express.js routes code that should execute for different paths. Use the <code>express.Router</code> class to create modular, mountable route handlers. <i>A Router instance is a complete middleware and routing system</i>; for this reason, it is often referred to as a “mini-app”.</p>
        `,
        `<p>Create a router file named birds.js in the app directory, with the following content:</p>
        <pre><code>
const express = require('express');
<i>const router = <b>express.Router()</b>;</i>

<i>//Middleware that is specific to this router</i>
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now());
  next();
}

<i>router.use</i>(timeLog)

//Define the main page for this route
<i>router.get</i>('/', (req, res) => {
  res.send('Birds home page');
})

//Define the about route
<i>router.get</i>('/about', (req, res) => {
  res.send('About birds');
})

<i>module.exports = router</i>
        </code></pre>

        <p>Then, load the router module in the app:</p>
        <pre><code>
const express = require('express');
<i>const birdsRouter = require('./birds')</i>

const app = express();

<i><b>app.use</b>('/birds', birdsRouter);</i>

app.listen(process.env.PORT);
        </code></pre>
        <p><i>The router is mounted on <code>/birds</code> using <code>app.use('/birds', birdsRouter);</code>, meaning any routes defined in <code>birdsRouter</code> will be prefixed with <code>/birds</code>.</i> The app will now be able to handle requests to <code>/birds</code> and <code>/birds/about</code>, as well as call the <code>timeLog</code> middleware function that is specific to the route.</p>
        <p>By using <code>express.Router()</code>, you can <b>simplify the paths to be relative to the router they're mounted on</b>.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'Create chainable route handlers for the same route path by using app.route()',
      sectionSource: '',
      highlights: {
        highlight1: ['chainable route handlers', 'the same route path'],
        highlight2: ['app.route()'],
      },
      tooltips: [
        `<p>You can create <i><b>chainable route handlers</b> for a route path</i> by using <code>app.route()</code>.</p>
        <pre><code>
const getBook = (req, res) => {
  res.send('Get a random book')
}

const addBook = (req, res) => {
  res.send('Add a book')
}

const updateBook = (req, res) => {
  res.send('Update the book')
}

<i>app</i>
  <b>.route('/book')</b>
  <i>.get</i>(getBook)
  <i>.post</i>(addBook)
  <i>.put</i>(updateBook)      
      </code></pre>
      <p>Because the <b>path is specified at a single location</b>, creating modular routes is helpful, as is reducing redundancy and typos.</p>
      `,
      ],
    },
    {
      sectionTitle:
        'Limiting Middleware Execution by Filtering a HTTP Request by Path and/or by Method',
      sectionSource: '',
      highlights: {
        highlight1: ['filtering a HTTP request by paths and methods'],
      },
      tooltips: [
        `<h3>Filtering request by method</h3>
        <p><code>app.route(path)</code> <i>returns an instance of a single route</i>, which you can then use to handle HTTP verbs with optional middleware. <i>Use <code>app.route()</code> to avoid duplicate route names</i> (and thus typo errors).</p>
        <pre><code>
const express = require("express");

const app = express();

<i>app
  <b>.route</b>("/add-product")
  <b>.get</b>((req, res, next) => {
    res.send('Form submision!');
  })
  <b>.post</b>((req, res, next) => {
    res.redirect("/");
 });</i>

app.listen(8080);
        </code></pre>
        <p>You can to the same thing with <code>express.Router()</code>:</p>
        <pre><code>
const express = require("express");

const router = express.Router();

<i>router
  <b>.route</b>("/add-product")
  <b>.get</b>((req, res, next) => {
    res.send('Form submision!');
  })
  <b>.post</b>((req, res, next) => {
    res.redirect("/");
 });</i>

module.exports = router;
        </code></pre>
        `,
        `<h3>Filtering request by path</h3>
        <pre><code>
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

<i>app.use(<b>'/admin'</b>, adminRoutes);</i>
<i>app.use(shopRoutes);</i>

app.use((req, res, next) => {
    res.status(404).send('Page not found!');
});

app.listen(process.env.PORT);
      </code></pre>`,
        `<h3><code>app.use("/")</code> vs <code>app.get("/")</code></h3>
      <p><code>app.use("/")</code> will <i>match all the paths</i> but <code>app.get("/")</code> will do an <i>exact match</i>.</p>
      <p>With <code>app.get("/")</code>, <code>app.post("/")</code> an so on, you make sure that you filter middleware execution not only by a specified HTTP method, but even by an exact match for the <code>/</code> path.</p>`,
      ],
    },

    {
      sectionTitle: 'Chaining Multiple Middleware Functions for the Same Route',
      sectionSource: '',
      tooltips: [
        `<p>Chaining multiple middleware functions for the same route in Express.js allows you to <i>perform a series of operations or checks sequentially before finally handling the request</i>. This feature is extremely <i>useful for structuring your application in a modular way, where you can separate concerns</i>, such as authentication, logging, data validation, etc., <i>into different middleware functions</i>.</p>
        <p>Chaining middleware functions is a powerful feature in Express.js that helps keep your code clean, organized, and modular, making it easier to maintain and scale your application.</p>
        `,
        `<h3>Basic Syntax</h3>
        <ul>The basic syntax for chaining middleware looks like this:
          <li>
            <pre><code>
app.get(
  '/your-route',
  <i>middlewareFunction1,
  middlewareFunction2,
  finalHandlerFunction</i>
);
            </code></pre>
          </li>
        </ul>
        <p>Each middleware function has access to the <code>request</code> object (req), the <code>response</code> object (res), and the <code>next</code> function in the application's request-response cycle. The <code>next</code> function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.</p>
        `,
        `<h3>Using <code>router</code></h3>
        <ul>For more complex applications, you might want to use <code>express.Router</code> to organize your routes and middleware. Here's a quick example:
        <li>
          <pre><code>
const express = require('express');
const router = express.Router();

router.get(
  '/example',
  <i>middlewareFunction1,
  middlewareFunction2,
  finalHandlerFunction</i>
);
          </code></pre>
        </li>
      </ul>
        `,
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
        `<p>We need the ability to <b>pass some dynamic data through our routes</b>. We want to be able to <i>encode some information in our URL</i>, so that we can, for example, pass a "productId" or "userId" as part of the URL.</p>
        <ul>In this module, you will learn how you can <i>submit or send data through the URL</i>, and when you would not do that and <i>put your data into the request body instead</i>. You will learn how to:
         <li>- pass <i>Route <u>Dynamic</u> Params</i>;</li>
         <li>- pass <i>Route <u>Optional</u> Params</i>;</li>
         <li>- use <i><u>Query</u> Params</i>;</li>
        </ul>
        `,
      ],
    },
    {
      sectionTitle: 'Route parameters & Extracting Dynamic Params',
      sectionSource: '',
      highlights: {
        highlight1: ['Dynamic Params'],
      },
      tooltips: [
        `<p>Route parameters are <b>named URL segments</b> that are <i>used to capture the values specified at their position in the URL. The captured values are populated in the <b><code>req.params</code></b> object, with the name of the route parameter specified in the path as their respective keys.</i></p>
        <pre><code>
Route path: /users/<b>:userId</b>/books/<b>:bookId</b>
Request URL: http://localhost:3000/users/<i>34</i>/books/<i>8989</i>
<b>req.params</b>: { <i>"userId"</i>: "34", <i>"bookId"</i>: "8989" }
        </code></pre>
        <p>To define routes with route parameters, simply specify the route parameters in the path of the route as shown below:</p>
        <pre><code>
app.get('/users/<b>:userId</b>/books/<b>:bookId</b>', (req, res) => {
  res.send(req.params);
})     
      </code></pre>
      <p>NOTE: The name of route parameters must be made up of “word characters” ([A-Za-z0-9_]).</p>
      <pre><code>
exports.getProduct = (req, res, next) => {
  <i>const prodId = <b>req.params</b>.productId;</i>
  res.redirect('/');
};      
      </code></pre>
      <p>IMPORTANT: <b>The extracted value from <code>req.params</code> will always be a string!</b> So boolean true or false will be extracted as string "true" or "false".</p>
      `,
      ],
    },
    {
      sectionTitle: 'Route parameters & Set Optional Params',
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
      <p>IMPORTANT: <b>The extracted value from <code>req.params</code> will always be a string!</b> So boolean true or false will be extracted as string "true" or "false".</p>
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
      
      <p>IMPORTANT: <b>The extracted value from query params will always be a string!</b> So boolean <code>true</code> or <code>false</code> will be extracted as string "true" or "false".</p>
      `,
      ],
    },
  ],
};

const working_with_files = {
  title: 'Working with Local Files',
  titleDescription: 'Fetch/store/send local files & handling files paths',
  sections: [
    {
      sectionTitle:
        'Storing/Feching Data in/from Files with fs.readFile() and fs.writeFile()',
      sectionSource: '',
      highlights: {
        highlight2: ['fs.readFile()', 'fs.writeFile()'],
      },
      tooltips: [
        `<p>In Node.js, <i>the <code>fs</code> (File System) module allows you to <b>interact with the file system on your computer</b></i>. Two commonly used methods in this module are <code>fs.readFile</code> and <code>fs.writeFile</code>, which are used for reading and writing files, respectively.</p>
        <p>NOTE: These methods are asynchronous, meaning they do not block the event loop.</p>
        `,
        `<h3>fs.readFile()</h3>
        <ul><code>fs.readFile</code> reads the contents of a file <u>asynchronously</u>. Takes as arguments:
          <li>1. <b><code>path</code></b>: the path to the file you want to read.</li>
          <li>2. <b><code>encoding</code> (optional)</b>: the character encoding to use. Commonly utf8.</li>
          <li>3. <b><code>callback</code></b>: a callback function that is <i>executed after the file is read. This callback function receives two arguments: <code>err</code> (if an error occurs) and <code>data</code> (the file content).</i></li>
        </ul>
        <pre><code>
const fs = require('fs');

fs.readFile('path/to/file', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log('File contents:', data);
});     
      </code></pre>`,
        `<h3>fs.writeFile()</h3>
        <ul><code>fs.writeFile</code> writes data to a file <u>asynchronously</u>. <i>If the file does not exist, it will be created. If the file exists, it will be overwritten.</i> Takes as arguments:
          <li>1. <b><code>path</code></b>: the path to the file where the data will be written.</li>
          <li>2. <b><code>data</code></b>: the content to write to the file.</li>
          <li>3. <b><code>encoding</code> (optional)</b>: the character encoding to use. Commonly utf8.</li>
          <li>4. <b><code>callback</code></b>: a callback function that is <i>executed after the file is written. It receives one argument: <code>err</code> (if an error occurs).</i></li>
        </ul>
        <pre><code>
const fs = require('fs');

fs.writeFile('path/to/file', 'data', 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File has been written');
});
      </code></pre>`,
        `<h3>Error Handling</h3>
      <p><i>Both <code>fs.readFile</code> and <code>fs.writeFile</code> take callback functions where the first parameter is always the error object (err). It's good practice to check for this error before proceeding with the rest of your logic.</i></p>`,
        `<p>IMPORTANT: It's important to understand that <i>working with <u>files for data storage</u> is suboptimal for bigger amounts of data</i>.</p>`,
      ],
    },
    {
      sectionTitle: 'Serving Files with sendFile() function',
      sectionSource: '',
      highlights: {
        highlight2: ['sendFile()'],
      },
      tooltips: [
        `<p>It's important to know that you're not limited to <code>send()</code> dummy text or anything like that, you can <code>sendFiles()</code> to your users, for example HTML files or images.</p>`,
        `<pre><code>
<i>const path = require('path');</i>
const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  <i>res.<b>sendFile</b>(<b>path.join</b>(<b>__dirname</b>, '..', 'images', 'someImage.jpg'));</i>
});

module.exports = router;
        </code></pre>
        `,
        `<h3>More about <code>res.sendFile()</code> function</h3>
        <p>The <code>res.sendFile()</code> function <i>transfers the file at the given path</i> and <i>it sets the Content-Type response HTTP header field based on the filename extension</i>.</p>
        <p>Unless the <code>root</code> option is set in the options object, <i>path must be an <u>absolute path</u> to the file</i>.</p>
        <ul>This API <i>provides access to data on the running file system</i>. Ensure that either:
          <li>a) the way in which the path argument was constructed into an absolute path is secure if it contains user input or</li>
          <li>b) set the root option to the absolute path of a directory to contain access within.</li>
        </ul>
        <p>When the <code>root</code> option is provided, the path argument is allowed to be a relative path, including containing <code>..</code>. Express.js will validate that the relative path provided as path will resolve within the given <code>root</code> option.</p>
        `,
        `<h3>More about <code>path.join()</code> method</h3>
        <p>The <code>path.join()</code> method <i>joins the specified <u>path segments</u> into <u>one path</u></i>. You can specify as many path segments as you like.</p>
        <p>The specified <i>path segments must be <u>strings</u></i>, separated by comma <code>,</code>.</p>
        <p>We're using <code>path.join()</code> because this will automatically build the path in a way that works on both Linux and Windows systems.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Serving static files with express.static()',
      highlights: {
        highlight2: ['express.static()'],
      },
      sectionSource: '',
      tooltips: [
        `<p>To serve static files such as images, CSS files, and JavaScript files, use the <b><code>express.static</code> built-in middleware function</b> in Express.js.</p>
        <p>The function signature is: <code>express.static(root, [options])</code>. The <code>root</code> argument specifies <i>the root directory from which to serve static assets</i>.</p>
        <p>For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:</p>
        <pre><code>
<b>app.use(express.static('public'))</b>
        </code></pre>
        <p>Now, you can load the files that are in the public directory:</p>
        <pre><code>
http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html
        </code></pre>
        <p>NOTE: <i><b>Express.js looks up the files <u>relative to the static directory</u></b>, so the name of the static directory is not part of the URL.</i></p>
        <p><i>To use multiple static assets directories, call the <code>express.static()</code> middleware function multiple times:</i></p>
        <pre><code>
app.use(express.static('public'))
app.use(express.static('files'))
        </code></pre>
        <p>NOTE: <i>Express.js looks up the files in the order in which you set the static directories with the <code>express.static()</code> middleware function.</i></p>
        `,
        `<h3>Another example</h3>
        <p>However, <b>the path that you provide to the <code>express.static()</code> function is <u>relative to the directory from where you launch your node process</u></b>. <i>If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:</i></p>
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

app.listen(process.env.PORT);      
      </code></pre>`,
      ],
    },
    {
      sectionTitle: 'Handling Large Volumes of Data: Introduction to Streams',
      sectionSource: '',
      highlights: {
        highlight1: ['Streams'],
      },
      tooltips: [
        `<p>Streams are used to <i><b>process (read and write) data piece by piece (chunks)</b>, without completing the whole read or write operation</i>, and therefore without keeping all the data in memory.</p>
        <p>Streams in Node.js come in different types, including readable, writable, duplex, and transform streams.</p>
        <ul>Benefits of using streams:
          <li>- perfect for handling <i>large volumes of data</i>, for example videos;</li>
          <li>- more efficient data processing in terms of <u>memory</u> (no need to keep all data in
            memory) and <u>time</u> (we don't have to wait until all the data is available).</li>
        </ul>
        <p><img src="../../src/img/streams_1.jpg"/></p>
        `,
        `<h3>Streams in practice</h3>
        <p>One important thing to note is that streams are actually instances of the <code>EventEmitter</code> class, meaning that <i>all streams can emit and listen to named events</i>.</p>
        <p>NOTE: <b>In Node.JS, all streams are implemented using the event emitter</b>, where the events are emitted by Node.js,and we just react to the events on that stream using the <code>.on()</code> function.</p>
        <p><i>In the case of readable streams, they can emit and we as developers can listen to many different events. The most important two are <b>the <code>data</code> and the <code>end</code> events</b>.</i> The <code>data</code> event is emitted when there is a new piece of data to consume, and the <code>end</code> event is emitted as soon as there is no more data to consume. And of course, we as developers can then react to these events accordingly.</p>
        <pre><code>
const fs = require("fs");
const server = require("http");

server.createServer((req, res) => {
  // ---- Solution 1: Read the entire file in one go ----
  <i>fs.readFile</i>("test-file.txt", (err, <i>data</i>) => {
    if (err) console.log(err);
    <i>res.send(data);</i>
  });


  // ---- Solution 2: Streams ----
  const readable1 = <i>fs.<b>createReadStream</b></i>("test-file.txt");

  readable1<i>.on(<b>"data"</b>, <b>chunk</b> => {
    res.write(chunk);
  })</i>;

  readable1<i>.on(<b>"end"</b>, () => {
    res.send();
  })</i>;

  readable1<i>.on(<b>"error"</b>, err => {
    res.statusCode = 500;
    res.send("File not found!");
  })</i>;


  // ---- Solution 3: Streams ----
  const readable2 = <i>fs<b>.createReadStream</b></i>("test-file.txt");
  readable2<i><b>.pipe</b>(res)</i>;
});

server.listen(3000);
      </code></pre>`,

        `<h3>Solution 2: Streams implemented with the <code>fs.createReadStream()</code> method</h3>
      <p>The <code>fs.createReadStream()</code> method in Node.js is used to <i>create a readable stream to read data from a file</i>. This method is part of the <code>fs</code> (file system) module and is <i>ideal for reading <u>large files</u>, as it <b>reads the file in chunks</b> rather than loading the entire file into memory</i>.</p>
      <p>The <code>fs.createReadStream()</code> method returns the <code>fs.ReadStream</code> object. The <code>fs.ReadStream</code> object is a kind of an event emitter that emits various different named events, depending on what's currently happening to that file. We can use these events to read our file in piece by piece, and every time a piece of data is received, we can do some processing on that data while we wait for the rest of the data to be read it.</p>
      <p>The results we get back from readable streams are just <b>raw buffers of bytes</b>.</p>
      `,
        `<h3>Solution 3: Streams implemented with the <code>pipe</code> function</h3>
      <p>The <code>pipe</code> function is meant to <i>connect a readable <u>stream source</u> to a readable <u>stream destination</u></i>. In other words, the <code>pipe</code> function sends the data from the readable stream to a writable stream.</p>
      <p><code>pipe</code> <i><b>automatically manages the flow of data</b>, pausing and resuming as necessary so that the writable stream is not overwhelmed with data</i>. You can chain multiple pipes to handle complex streaming workflows.</p>
      <pre><code>
const fs = require('fs');

const readableStream = fs<i>.createReadStream</i>('source.txt');
const writableStream = fs<i>.createWriteStream</i>('destination.txt');

<i>readableStream.pipe(writableStream);</i>
      </code></pre>
      <p>In the above example, <i><code>readableStream.pipe(writableStream)</code> will read data from source.txt and write it directly to destination.txt <u>without loading the entire file into memory</u></i>, making it very efficient.</p>
      `,
        `<h3>Advantages of Using Streams and <code>pipe()</code></h3>
      <p><i>Memory Efficiency</i>: Streams process data in chunks, which means you don’t have to load the entire dataset into memory at once.</p>
      <p><i>Time Efficiency</i>: Streams can start processing data as soon as it begins to be available, rather than waiting for all the data to be loaded.</p>
      <p><i>Ease of Use</i>: The <code>.pipe()</code> method simplifies the process of transferring data from one stream to another.</p>`,
      ],
    },
    {
      sectionTitle: 'Get a file path with path.join() and __dirname',
      sectionSource: '',
      highlights: {
        highlight2: ['path.join()', '__dirname'],
      },
      tooltips: [
        `<pre><code>
const express = require('express');
<i>const path = require('path');</i>

app.use('/someRoute', (req, res, next) => {
  res.sendFile(<b>path.join</b>(<b>__dirname</b>, '..', 'views', 'htmlFile.html'));
});

app.listen(process.env.PORT);
        </code></pre>
        `,
        `<h3>More about <code>path.join()</code> method</h3>
        <p>The <code>path.join()</code> method <i>joins the specified <u>path segments</u> into <b>one path</b></i>.</p>
        <p>You can specify as many path segments as you like. The specified <b>path segments must be <u>strings</u></b>, separated by comma <code>,</code>.</p>
        <p>We're using <code>path.join()</code> because this will automatically build the path in a way that works on both Linux and Windows systems.</p>
        `,
      ],
    },
    {
      sectionTitle: 'More about <code>__dirname</code> global variable',
      sectionSource: '',
      highlights: {},
      tooltips: [
        `
    <p>In Node.js, <code><b>./</b>folder/fileName</code> and <code><b>__dirname</b> + '/folder/fileName'</code> are used to specify file paths, but they have <u>different behaviors and use cases</u>.</p>`,
        `<h3>Setting a Path with <code>./folder/fileName</code></h3>
      <p><b>Relative Path</b>: <i><code>./folder/fileName</code> is a relative path</i>, meaning it is <i>relative to the current working directory (CWD) from which the Node.js process was started</i>.</p>
      <p><b>This path changes based on where the Node.js process is executed from.</b> If you run your script from different directories, the path might not resolve correctly.</p>`,
        `<h3>Setting a Path with <code>__dirname + '/folder/fileName'</code></h3>
      <p><b>Absolute Path</b>: <i><code>__dirname</code> is an absolute path to the directory that contains the currently executing script, not the CWD</i>.</p>
      <p><i><b>This path is stable and reliable</b>, as it always points to the same directory regardless of where the Node.js process is started from.</i></p>
      <p><code>__dirname</code> is a <b>global variable</b> made available by Node.js (environment variable) that tells you the <u>absolute path of the directory</u> containing the currently executing file.</p>
      `,
        `<h3>Key Differences between <code>./folder/fileName</code> and <code>__dirname + '/folder/fileName'</code></h3>
    <ul>Scope:
      <li>- <code>./folder/fileName</code>: Dependent on the current working directory (CWD).</li>
      <li>- <code>__dirname + '/folder/fileName'</code>: Dependent on the location of the script file.</li>
    </ul>
    <ul>Reliability:
      <li>- <code>./folder/fileName</code>: Can be unreliable if the script is executed from different directories.</li>
      <li>- <code>__dirname + '/folder/fileName'</code>: Consistent and reliable path resolution.</li>
    </ul>
    <ul>Use Case:
      <li>- Use <code>./folder/fileName</code> when the file path is meant to be relative to the working directory of the process.</li>
      <li>- Use <code>__dirname + '/folder/fileName'</code> when the file path needs to be relative to the script's location, ensuring consistency regardless of the CWD.</li>
    </ul>
    <p><i>In summary, using <code>__dirname</code> is generally more robust and reliable, especially when your Node.js application may be executed from various directories.</i></p>
    `,
      ],
    },
    {
      sectionTitle:
        'Using a helper function for navigation: path.dirname() with process.mainModule.filename or require.main.filename',
      sectionSource: '',
      highlights: {
        highlight1: ['process.mainModule.filename', 'require.main.filename'],
        highlight2: ['path.dirname()'],
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
  ],
};

const parsing_data = {
  title: 'Parsing Request Body in Express.js',
  titleDescription: 'Parsing incoming request data',
  sections: [
    {
      sectionTitle:
        'Parsing data on incoming Requests with body-parser package',
      sectionSource: '',
      highlights: {
        highlight1: ['Parsing data on incoming Requests'],
        highlight2: ['body-parser'],
      },
      tooltips: [
        `<p><b>By default, <code>req.body</code> doesn't try to parse the incoming request.</b> For that, we need to install a 3rd party packages.</p>
        <p><code>body-parser</code> package is a npm package for Node.js body parsing middleware. You install it with <i><code>npm install body-parser</code></i> command.</p>
        <p><code>body-parser</code> <b>parse incoming request bodies in a middleware before your handlers</b>, available under the <code>req.body</code> property.</p>
        <p><b><code>bodyParser.urlencoded()</code> will not parse all kinds of possible bodies</b>, files, JSON and so on, but will parse bodies like sent through a form. If we have other bodies like files, we'll <u>use different parsers</u>, and this makes Express.js so extensible. If we need something, we can plug it in.</p>
        `,
        `<h3>An example of parsing an incoming request body</h3>
        <pre><code>
const express = require('express');
<i>const bodyParser = require('body-parser');</i>

const app = express();

app.use(<b>bodyParser.urlencoded({ extended: false })</b>);

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

app.listen(process.env.PORT);
      </code></pre>`,
      ],
    },
    {
      sectionTitle:
        'Parsing JSON Requests with express.json() build-in middleware',
      sectionSource: '',
      highlights: {
        highlight2: ['express.json()'],
      },
      tooltips: [
        `<p><i>Our web servers don't understand JSON format by default.</i> So we need to use a middleware function that parse JSON for us.</p>
        <p><code>express.json()</code> is a <b>built-in middleware function</b> in Express that understands when an incoming request is being passed in as JSON by the client, based on the <code>Content-Type</code> header, and when it notices an  incoming request with the "application/json" type, it'll do the parsing automatically for us, and it'll set the <code>req.body</code> parameter on the <code>req</code> object with the parsed JSON data.</p>
        <p>It is based on <code>body-parser</code>. Returns middleware that only parses JSON and <i>only looks at requests where the <code>Content-Type</code> header matches the "application/json" type</i>.</p>
        <h3>An example of parsing an incoming JSON request body</h3>
        <pre><code>
const express = require('express');

const app = express();

<i>app.use(<b>express.json()</b>);</i>

app.post('/product', (req, res, next) => {
    console.log(<i>req.body</i>);
    res.redirect('/');
});

app.listen(process.env.PORT);
      </code></pre>
      <p>NOTE: As <code>req.body</code>’s shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting.</p>
      `,
      ],
    },
  ],
};

const error_handling_with_ExpressJS = {
  title: 'Debugging & Error Handling',
  titleDescription: 'Fixing Error & Fail Gracefully',
  sections: [
    {
      sectionTitle: 'Setting up ESLint',
      sectionSource: '',
      tooltips: [
        `<p>ESLint is basically a program that constantly scans our code and finds potential coding errors or simply bad coding practices that it thinks are wrong. It's very configurable so that you can really fine tune it to your needs, and coding habits.</p>`,
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
    {
      sectionTitle: 'Debugging Node.js with ndb package',
      sectionSource: '',
      highlights: {
        highlight1: ['ndb'],
      },
      tooltips: [
        `<p>You can debug Node.js code by installing a 3rd party package called <code>ndb</code>: <code>npm install <b>ndb</b> --global</code>.</p>`,
        `<p>In <code>package.json</code> file, you add a new script for <code>ndb</code>.</p>
        <pre><code>
{
  "scripts": {
    "start": "nodemon server.js",
    "start:prod": "NODE_ENV=production nodemon server.js",
    <b>"debug": "ndb server.js"</b>
  },
}       
        </code></pre>`,
      ],
    },
    {
      sectionTitle:
        'An Overview of Error Handling: Operational vs Programming Errors',
      sectionSource: '',
      highlights: {
        highlight2: ['Operational vs Programming Errors'],
      },
      tooltips: [
        `
      <p>Up until this point we haven't really <i>handled errors in a central place in our application</i>. What we did was to simply send back an error message as JSON in each route handler in case something went wrong.</p>
      <ul>Let's take a minute to just get a brief overview of error handling in Express.js. There are two types of errors that can occur: 
        <li>- <i><b>operational</b> errors</i>;</li>
        <li>- <i><b>programming</b> errors</i>.</li>
      </ul>
      <p>Operational errors are problems that we can predict will inevitably happen at some point in the future, so we just need to handle them in advance. <i>They have nothing to do with bugs in our code. Instead, they depend on the user, or the system, or the network.</i> So, things like a user accessing an invalid route, inputting invalid data, or an application failing to connect to the database. All these are operational errors that we will need to handle in order to prepare our application for these cases.</p>
      <p>On the other hand, we have programming errors. <i>Programming errors are simply bugs that we developers introduce into our code.</i> Like, for example, trying to read properties from an <code>undefined</code> variable, using <code>await</code> without <code>async</code>, accidentally using <code>request.query</code> instead of <code>request.body</code>, or many other errors that we might make. This are really inevitable but also more difficult to find and to handle.</p>
      <p>It's important that you understand this crucial difference between operational errors and programming errors. <i>When we're talking about error handling with Express.js, we mainly just mean operational errors, because these are the ones that are easy to catch and to handle with our Express.js application.</i></p>
      <p>Express.js actually comes with error handling out of the box. So, all we have to do is to <i>write a global Express.js error handling middleware which will then catch errors coming from all over the application</i>. So, no matter if it's an error coming from a route handler, or a model validator or really, someplace else, the goal is that <b>all these errors end up in one central error handling middleware</b>. So that we can send a nice response back to the client letting them know what happened.</p>
      <p>The beauty of having <b>a global error handling middleware</b> is that it allows for a nice separation of concerns. So, we don't have to worry about error handling right in our business logic or our controllers, or really anywhere in our application. We can simply send the errors down to the error handler which will then decide what to do with them next.</p>
      <p><img src="../../src/img/error_handling_1.jpg"/></p>
      `,
      ],
    },
    {
      sectionTitle: 'Handling Unhandled Routes (URL/path)',
      sectionSource: '',
      highlights: {
        highlight1: ['Unhandled Routes'],
      },
      tooltips: [
        `<p>Express.js automatically sends a <code>404 Not Found</code> error code in case that we try to access a route (path or URL) that has not any handler attach to it.</p>
        <p>We can create a handle function for all the routes that are not cached by other routers handlers, so we can write a middleware function that <i>handle undefined routes, so routes that we didn't assign any handler</i> yet. <b>This middleware function should be the last part after all our other routes</b>, because remember that all middleware functions are executed in the order they are in the code.</p>
        <pre><code>
const express = require('express');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

<i>app<b>.all</b>(<b>'*'</b>, (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: "Can't find {req.originalUrl} in this server!"
  })
});</i>

app.listen(8080);
      </code></pre>
      <p>NOTE: <code>app.use()</code> will only see whether URL starts with specified path. But, <b><code>app.all()</code> will match the complete path</b>.</p>
      `,
      ],
    },
    {
      sectionTitle: 'Implementing a Global Error Handling Middleware',
      sectionSource: '',
      highlights: {
        highlight2: ['Global Error Handling Middleware'],
      },
      tooltips: [
        `<h3>Introduction to Error Handling Middleware</h3>
        <p>Express allows you to <i><b>define error-handling middleware functions</b> that have four arguments instead of three (<code>err, req, res, next</code>)</i>. These are defined in the same way but are designed to handle errors that occur in the preceding middleware/functions.</p>
        `,
        `<h3>Global Error Handling Middleware</h3>
        <p>To define an error handling middleware, all we need to do is to <i><b>give the middleware function 4 arguments</b>, and Express.js will then automatically recognize it as an error handling middleware</i>, and therefore, <b>only call it when there is an error</b>.</p>
        <p>To pass an error from our routes handlers to the error handling middleware, we need to <b>pass that error as an argument to <code>next()</code> function</b>. <i>If the <code>next()</code> function receives an argument, no matter what it is, Express.js will automatically know that there was an error, so it will assume that whatever we pass into <code>next()</code> is gonna be an error, and that applies to every <code>next()</code> function in every single middleware anywhere in our application</i>.</p>
        <p>IMPORTANT: <b>Whenever we pass anything into <code>next()</code> function, Express.js will assume that it is an error, and it will then skip all the other middlewares in the middleware stack and sent the error that we passed in to our global error handling middleware, which will then, of course, be executed.</b></p>
        <pre><code>
const express = require('express');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// Handle all unhandled routes
app.all('*', (req, res, next) => {
  const error = new Error('Error message!');
  error.statusCode = 404;
  error.status = 'fail';
  <b>next(error)</b>;
})

// Handle all errors globally
<i>app.use((<b>err</b>, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error;

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  })
});</i>
      </code></pre>        
        `,
        `<h3>Refactoring your Global Error Handling Middleware</h3>
        <p>You can refactor your code and creating a class for handling building errors. This class will inherit from the <code>Error</code> object.</p>
        <pre><code>
class AppError extends Error {
  constructor(message, statusCode) {
    <i>super(message);</i>

    <i>this.statusCode</i> = statusCode;
    <i>this.status</i> = String(statusCode).startsWith('4') ? 'fail' : 'error';
    <i>this.isOperational</i> = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
        </code></pre>
        <p><code>this.isOperational</code> is used to <i>identify only operational errors</i>, not programming errors. We are doing that so later we can then test for <code>this.isOperational</code> property and only send error messages back to the client for only operational errors that we created using the <code>AppError</code> class.</p>
        <p>This is useful because some other crazy unexpected errors that might happen in our application, for example a programming error, or some bug in one of the packages that we require into our app, and these errors will then of course not have the <code>this.isOperational</code> property on them.</p>
        <pre><code>
const express = require('express');

<i>const AppError = require('./utils/AppError');</i>

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// Handle all unhandled routes
app.all('*', (req, res, next) => {
  // const error = new Error('Error message!');
  // error.statusCode = 404;
  // error.status = 'fail';

  <i>next(new AppError('Error Message!', 404));</i>
})

// Handle all errors globally
app.use((<b>err</b>, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error;

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  })
});
      </code></pre>       
        `,
      ],
    },
    {
      sectionTitle: 'Handle Synchronous vs Asynchronous Errors',
      sectionSource: '',
      tooltips: [
        `<p>If your server <i>thrown errors</i> and you don't <i>handle them</i>, your server just crashes. Now how can we handle errors?</p>
        <p>One solution for synchronous code, so code that executes line by line immediately and does not wait for anything (for example where we don't interact with files or where we don't send requests), such code can  be wrapped with try/catch block.</p>
        <p>We also have async operations that can fail, and such operations when using Promises are handled with <code>then()</code> and <code>catch()</code>.</p>
        `,
        `<h3>Synchronous errors: handling errors with <code>try {} catch {}</code> block</h3>
        <p>To handle errors for synchronous code use <code>try {} catch {}</code> block.</p>
        <p>With try/catch we <code>try{}</code> a certain code, and then we have to add <code>catch{}</code> where we catch a potential error that might have been thrown, and in <code>catch{}</code> we can handle errors.</p>
        <pre><code>
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
        `<h3>Extra: Catching Errors in Async Functions</h3>
        <p>By implementing the code below, <i>you get rid of <code>try/catch</code> block</i> in your <u>asynchronous</u> functions.</p>
        <pre><code>
module.exports = <i>fn</i> => {
  return (req, res, next) => {
    <i>fn(req, res, next)<b>.catch(next)</b>;</i>
  };
};      
      </code></pre>
      <pre><code>
<i>const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');</i>

exports.getAllTours = <b>catchAsync</b>(<i>async (req, res, next)</i> => {
  const features = new APIFeatures(Tour.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const tours = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  });
});

exports.getTour = <b>catchAsync</b>(<i>async (req, res, next)</i> => {
  const tour = await Tour.findById(req.params.id);

  <i>if (!tour) {
    return next(new AppError('No tour found with that ID', 404));
  }</i>

  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
});

exports.updateTour = <b>catchAsync</b>(<i>async (req, res, next)</i> => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  <i>if (!tour) {
    return next(new AppError('No tour found with that ID', 404));
  }</i>

  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
});

exports.deleteTour = <b>catchAsync</b>(<i>async (req, res, next)</i> => {
  const tour = await Tour.findByIdAndDelete(req.params.id);

  <i>if (!tour) {
    return next(new AppError('No tour found with that ID', 404));
  }</i>

  res.status(204).json({
    status: 'success',
    data: null
  });
});
      </code></pre>
        `,
      ],
    },
    {
      sectionTitle:
        'Environment Variables & Handle Errors in Different Environments: Development vs Production',
      sectionSource: '',
      tooltips: [
        `<p>The idea behind "Errors During Development vs Production" is to <i>send different error messages for the development and production environment</i>. Is not a good practice to send the same response error message to everyone. In production, we want to leak as little information about our errors to the client as possible. So in that case, we only want to send a nice, human-friendly message so that the user knows what's wrong. On the other hand, when written development, we want to get as much information about the error that occurred as possible.</p>`,
        `<p>We can distinguish between the development and the production environment by setting a <i><code>.env</code> file</i> where we save our informations about development environment, for example, <i><code>NODE_ENV=development</code></i>. Then, we can read that information with <i><code>process.env.NODE_ENV</code></i> and send different errors in development or production environment.</p>
        <pre><code>
const <i>sendErrorDev</i> = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

const <i>sendErrorProd</i> = (err, res) => {
  // Operational errors, trusted errors: send message to client
  if (<i>err.isOperational</i>) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });

    // Programming errors or other unknown errors: <b>don't leak errors details to the client</b>
  } else {
    // 1) Log error
    console.error(err);

    // 2) Send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!'
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (<b>process.env.NODE_ENV === 'development'</b>) {
    <i>sendErrorDev(err, res);</i>
  } else if (<b>process.env.NODE_ENV === 'production'</b>) {
    let error = { ...err };
    <i>sendErrorProd(error, res);</i>
  }
};
        </code></pre>
        `,
        `<pre><code>
const express = require('express');
<i>const globalErrorHandler = require('./controllers/errorController');</i>
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

<i>app.use(globalErrorHandler);</i>

app.listen(process.env.PORT);
        </code></pre>`,
      ],
    },
    {
      sectionTitle:
        'Globally Handle: Unhandled Promise Rejections & Uncaught Exceptions',
      sectionSource: '',
      highlights: {
        highlight1: ['Unhandled Promise Rejections', 'Uncaught Exceptions'],
      },
      tooltips: [
        `<p>In Node.js and its frameworks like Express.js, handling asynchronous operations and exceptions are crucial parts of building robust applications. Let's break down the concepts of unhandled Promise rejection and catching uncaught exceptions, especially in the context of Express.js.</p>`,
        `<h3>Handle Globally: Unhandled Promise Rejection</h3>
        <p>In JavaScript, Promises are used to handle asynchronous operations. <i>When a Promise is rejected due to an error and <u>there is no <code>.catch()</code> block to handle the rejection</u>, it results in an unhandled Promise rejection.</i> This situation is similar to throwing an error in synchronous code without wrapping it in a <code>try/catch</code> block.</p>
        <p>I want to explain to you how to <i><u>globally</u> handle unhandled rejected Promises</i>, because in a bigger application, it can become a bit more difficult to always keep track of all the Promises that might become rejected at some point. So at some point, you might have some unhandled Promise rejection somewhere I'll show you how to deal with that Promise rejection globally.</p>
        <p><b>Node.js will emit an <code>unhandledRejection</code> event when a Promise is rejected and no handler is found.</b> If not properly managed, it can lead to memory leaks, inconsistent application state, or application crashes. <i>Starting from Node.js version 15, an unhandled Promise rejection will terminate the Node.js process by default, making it critical to handle them correctly.</i> So each time there is an unhandled rejection (Promise rejection) somewhere in our application, the <code>process</code> object will emit an event called <code>unhandledRejection</code> and so <i>we can subscribe to <code>unhandledRejection</code> event for handling Promise rejection</i>.</p>
        <pre><code>
const express = require('express');

const app = express();

const server = app.listen(8000);

process<i>.on('unhandledRejection'</i>, (err) => {
  console.log(err.name, err.message);

  // First close the server and only then shutdown the app
  <i>server.close(() => {
    <b>process.exit(1);</b>
  });</i>
});      
      </code></pre>
        `,
        `<h3>Handle Globally: Uncaught Exceptions</h3>
        <p><i>Uncaught exceptions are errors (bugs) that <u>occur in synchronous code</u> but are <u>not caught by any <code>try/catch</code> block</u>.</i> In a Node.js environment, uncaught exceptions can lead to the program terminating or getting into an <code>undefined</code> state.</p>
        <p><b>Node.js provides an <code>uncaughtException</code> event that you can listen to for handling uncaught exceptions.</b> However, it's generally recommended to gracefully shut down the process after an uncaught exception, as the application may be in an unknown state.</p>
        <p>Express.js does not provide built-in handling for uncaught exceptions. You should listen for these at the process level and decide how to handle them, often by logging the error, cleaning up resources, and restarting the application. <i>The <code>uncaughtException</code> handler should be at the very top of our code, or at least before any other code is really executed.</i></p>
        <pre><code>
const express = require('express');

process<i>.on('uncaughtException'</i>, (err) => {
  console.log(err.name, err.message);
  <b>process.exit(1);</b>
}); 

const app = express();

const server = app.listen(8000);

process.on('unhandledRejection'</i>, (err) => {
  console.log(err.name, err.message);

  // First close the server and only then shutdown the app
  server.close(() => {
    process.exit(1);
  });</i>
});
      </code></pre>
      <p>NOTE: While in the Unhandled Rejection crashing the application is optional, when there is an Uncaught Exception, we really, really need to crash our application, because after there was an Uncaught Exception, the entire Node.js process is in a so-called unclean state. So to fix that, the process need to terminate and then to be restarted. In production, we should then have a tool which will restart the application after crashing. And many hosting services already do that out of the box, so completely automatically without us having to do anything.</p>`,
        `<h3>Why Terminate the Process?</h3>
      <p>Terminating the process helps to catch and fix issues early in development. Unhandled promise rejections can lead to unpredictable behavior and bugs that are hard to track down. By terminating the process, Node.js ensures developers notice and address these errors promptly.</p>`,
        `<h3>IMPORTANT: handle errors in the place where it happen</h3>
      <p><i>In Node.js, it's not really a good practice to just blindly rely on these two error handlers (<code>unhandledRejection</code> & <code>uncaughtException</code>) that we just implemented in the code above. So <b>ideally errors should really be handled right where they occur</b>.</i> Some people even say that we shouldn't use these at all, but I disagree with that. I think that as a safety net, they can be very useful and play a part in our application.</p>
      <p>While Express.js does not directly handle Promise rejections for you, you can manage them by <i>ensuring that all Promises in your middleware or route handlers have corresponding <code>.catch()</code> blocks or by using async/await with <code>try/catch</code>.</i></p>
        `,
        `<h3>Best Practices</h3>
      <p>1. <i>Do not ignore Promise rejections</i>. Always have a .catch() for each promise chain or use async/await within a try/catch block.</p>
      <p>2. <i>Centralize error handling</i> in Express.js by using Express's built-in error-handling middleware to manage errors that occur in your routes.</p>
      <p>3. <i>Gracefully shutdown on <code>uncaughtException</code></i> to ensure that your application does not continue to run in an unstable state.</p>
      <p>4. Log errors to help with debugging and maintaining the health of your application.</p>
      <p>5. Consider using tools or libraries that help with error management and automatic restarts of your Node.js application, such as PM2, which can handle process management and help in scenarios where the application crashes.</p>
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

const adding_authentication = {
  title: 'Authentication & Authorization',
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
      </code></pre>
      
      <p>Or simply:</p>
      <pre><code>
const express = require('express');
const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

<i>router.use('/', <b>isAuth</b>);</i>

router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;      
      </code></pre>
      `,
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

const authentication_with_JWT = {
  title: 'Authentication with JWT Tokens',
  titleDescription: 'Create & Use JWT Tokens',
  sections: [
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
  <p>Instead of using session like we use to do, <i>in REST APIs we return a so-called <b>token</b> to the client</i>. That token will be <b>generated on the server</b> and will hold some information which can only be <i>validated by the server</i>, and this token will then be <b>stored in the client (in storage in the browser)</b>. The client can then attach this token to every subsequent request it sends to the server. <i>So this stored token is then attached to every request that targets a resource on the server which requires authentication.</i></p>
  <p>That token can only be validated by the server, which created the token, and if you change that token on the frontend or you try to create it to fake that you are authenticated, that will be detected, because the server used a certain algorithm for generating the token which you can't fake, because you don't know the private key used by that server for generating the token.</p>
  <p><img src="../../src/img/token_1.jpg"/></p>
  `,
        `<h3>What's that Token?</h3>
    <p>The token contains <i>JSON data</i> or JavaScript data in the end, plus a <i>signature</i> (this signature is generated on the server with a special private key which is only stored on the server), and this gives us a so-called <b>JSON Web Token (JWT)</b>.</p>
    <p>This JWT is then returned to the client and <i>the signature can only be verified by the server</i>, so you can't edit or create the JWT on the client (well, you can edit it, but then the server will detect this and will treat the token as invalid).</p>
    <p><img src="../../src/img/token_2.jpg"/></p>
    <p>This is how we generate the token or how we do authentication in REST APIs. We have the token which can be checked by the server, but which is NOT stored on the server with a session, instead is stored in the browser storage.</p>
    <p><img src="../../src/img/token_4.jpg"/></p>
    `,
        `<h3>Summary</h3>
        <p>- JSON Web Tokens are a stateless solution for authentication: there is no need to store any session state on the server. The REST API server does NOT care about the client, request are handled in isolation => No session.</p>
    <p>- Due to no sessions being used, authentication works differently in REST APIs.</p>
    <p>- Each request needs to be able to send some data that proves that the request is authenticated.</p>
    <p>- JSON Web Tokens ("JWT") are a common way of storing authentication information on the client and providing authentication status.</p>
    <p>- JWTs are signed by the server and can only be validated by the server.</p>`,
        `<h3>How authentication with JWT works: step by step</h3>
    <p>Assuming we already have a registered user in our database, this is how a user logs into the app: the user's client starts by making a POST request with the username/email and the password. The server then checks if the user exists and if the password is correct. If so, a unique JWT for only that user is created using a secret string that is stored on a server. A JWT itself is really just a string. The server then sends that JWT back to the client which will store it either in a cookie or in local storage. And just like this the user is authenticated and basically logged into our application <i>without leaving any state on the server</i>. So <b>the server does in fact not know which users are actually logged in, but of course, the user knows that he's logged in because he has <u>a valid JWT stored on the client</u> in a cookie/localStorage</b>, which is a bit like a passport to access protected parts of the application. This process is therefore completely stateless because the JWT is NOT SAVED ANYWHERE ON THE SERVER.</p>
    <p>Each time a user wants to access a protected route, he sends his JWT along with a request. once the request hits the server, our app will verify if the JWT is actually valid. if the token is actually valid, then the requested data will be sent to the client and if not, then there will be an error telling the user that he's not allowed to access that resource.</p>
    <p>What's very important to note is that all this communication must happen over HTTPS, so secure encrypted HTTP, in order to prevent that anyone can get access to passwords or JWT.</p>
    <p><img src="../../src/img/token_3.jpg"/></p>
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
const token = <i>jwt<b>.sign</b>(
  {
    email: 'userEmail',
    userId: 'userId',
  },
  <b>process.env.JWT_SECRET</b>,
  { <b>expiresIn</b>: process.env.JWT_EXPIRES_IN }
);</i>

res.status(201).json({
  status: 'success',
  <b>token</b>,
  data: {
    user: {
      userId,
      userEmail
    }
  }
  });
});
    </code></pre>
    <p><code>jwt.sign()</code> creates a new signature and packs that into a new JSON Web Token.</p>
    <p><i>Setting an expiration time to the JWT is a security mechanism you should add.</i> Because the token is stored in the client, that token could be stolen. If the user does not logout, another person copies the token from his browser storage and then he can use it on his own PC forever. If you set an expiration time, the token becomes invalid when that time passed, so setting an expiration time is a good security mechanism and a nice balance between usability, where you would want infinite sessions, and security, where you would want to limit JWT validity to an amount of time.</p>
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

const security = {
  title: 'Authentication & Authorization: Security',
  titleDescription: 'Secure your JWT Tokens & API against Hackers Attacks',
  sections: [
    {
      sectionTitle: 'Same Origin Policy & CORS Errors',
      sectionSource: '',
      highlights: {
        highlight2: ['CORS Errors'],
      },
      tooltips: [
        `<p>The Same Origin Policy (SOP) and Cross-Origin Resource Sharing (CORS) are <b>security mechanisms</b> used in web development to <b>control how resources are shared between different origins</b>. They are important concepts to understand, especially when working with web APIs and frontend-backend communication.</p>`,
        `<h3>What is Same Origin Policy (SOP)</h3>
        <p>The Same Origin Policy is <i>a security feature implemented by web browsers to restrict how web pages can interact with resources (e.g., scripts, images, or data) from different origins</i>. An "origin" is defined by the scheme (protocol), hostname (domain), and port of a URL.</p>
        <p>SOP is designed to <b>prevent malicious websites from accessing sensitive data on other sites</b>.</p>
        `,
        `<h3>What are CORS?</h3>
      <p>CORS stands for Cross Origin Resource Sharing and <b>by default, CORS is not allowed by browsers</b>.</p>
      <p>CORS is <b>a mechanism that allows a server to <u>explicitly specify</u> who can access its resources when they are requested from a different origin</b> (i.e., a cross-origin request). <i>CORS relaxes the Same Origin Policy by allowing servers to <u>explicitly permit</u> certain cross-origin requests</i>.</p>
      <p><img src="../../src/img/cors_1.jpg"/></p>`,
        `<h3>How CORS works?</h3>
      <p>When a web page makes a request to a different origin (e.g., fetching data from an API hosted on a different domain), the browser first sends an <code>OPTIONS</code> request (called a "preflight request") to the server to check if the actual request is allowed. The server responds with appropriate CORS headers, such as <code>Access-Control-Allow-Origin</code>, indicating which origins are permitted.</p>
      <ul>Key Headers:
        <li>- <b>Access-Control-Allow-<u>Origin</u></b>: <i>specifies which origins can access the resource.</i> For example, <code>Access-Control-Allow-Origin: *</code> allows any origin, while <code>Access-Control-Allow-Origin: https://www.example.com</code> only allows requests from that specific origin.</li>
        <li>- <b>Access-Control-Allow-<u>Methods</u></b>: Indicates <i>the HTTP methods (e.g., GET, POST, PUT) that are allowed when accessing the resource</i>.</li>
        <li>- <b>Access-Control-Allow-<u>Headers</u></b>: Lists <i>the HTTP headers that can be used in the actual request</i>.</li>
      </ul>
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
      
      <p>NOTE: We can <i>overwrite CORS</i> in our Node.js server, because CORS mechanism makes sense for some applications, for REST APIs, it typically does not. We want to <i>allow our server to share its data</i>, we want to offer data from our server to different clients, and these clients will often not be served by the same server as our REST API runs on.</p>
      <p>IMPORTANT: A lot of people see the CORS error on the client-side and want to solve it in their browser-side JavaScript code, you just can't, <b>you can only solve CORS errors on the server</b>. CORS errors occur when the API and your client are sitting on different servers, different domains, and they want to exchange data. You "fix them" in quotation marks, because they are a security mechanism, but you can bypass that on purpose by setting the right <u>CORS headers</u>, which basically tell the client "Hey, it's fine, I'm a public API! You may use my data!". So <b>CORS errors occur when using an API that does NOT set CORS headers!</b></p>
      `,
        `<h3>Implementing CORS with cors package</h3>
      <p>By calling <code>cors()</code>  the <code>Access-Control-Allow-Origin</code> will be set by default to <code>*</code>.</p>
      <pre><code>
const express = require('express');
<i>const cors = require('cors');</i>

const app = express();

// Access-Control-Allow-Origin *
app.use(<i>cors()</i>);

// app.use(cors({
//   <b>origin</b>: 'https://www.myWebsite.com'
// }));

app.listen(process.env.PORT);
      </code></pre>
      <p>You can enable CORS for the entire application or for a specific route:</p>
      <pre><code>
const express = require('express');
<i>const cors = require('cors');</i>

const app = express();

app.use('/routePath', <i>cors()</i>, (req, res, next) => {
//Code here
});

app.listen(process.env.PORT);
      </code></pre>
      `,
        `<h3>Summary</h3>
      <p><b>Same Origin Policy (SOP)</b>: <i>A <b>security measure</b> that restricts how resources from different origins can interact.</i> It <b>prevents malicious activities like cross-site scripting (XSS) attacks</b>.</p>
      <p><b>Cross-Origin Resource Sharing (CORS)</b>: A protocol that <i>allows servers to define which cross-origin requests are permitted</i>, thereby relaxing the SOP under controlled conditions.</p>
      <p>Understanding SOP and CORS is essential for web developers, particularly when dealing with APIs, as it directly affects <i>how frontend applications can communicate with backend services across different domains</i>.</p>`,
      ],
    },
    {
      sectionTitle: 'Security Best Practices & Suggestions',
      sectionSource: '',
      tooltips: [
        `<h3>Compromised Database</h3>
          <p>This means that an attacker gained access to our database. This is an extremely severe problem, but to prevent even bigger problems, we must always encrypt passwords and password reset tokens. This way, the attacker can't at least steal our users passwords and also can't reset them.</p>`,
        `<h3>Brute Force Attack</h3>
          <p>The attacker basically tries to guess a password by trying millions and millions of random passwords until they find the right one. To prevent this, we can make the login request really slow, and the <code>bcrypt</code> package actually does just that. Another strategy is to implement rate limiting, which limits the number of requests coming from one single IP. Another strategy is to actually implement a maximum number of login attempts for each user.</p>`,
        `<h3>Cross-Site Scripting (XSS) Attack</h3>
          <p><i>The attacker tries to <b>inject scripts</b> into our page to run his malicious code.</i> On the client side, this is especially dangerous because it allows the attacker to read the local storage, which is the reason why <b>we should never ever store the JSON web token in local storage</b>. Instead, <b>JWT should be stored in an HTTPOnly cookie</b> that makes it so that the browser can only receive and send the cookie, but cannot access or modify it in any way. That then makes it impossible for any attacker to steal the JSON Web Token that is stored in the cookie.</p>
          <p>On the backend side, in order to prevent XSS attacks, we should sanitize user input data and set some special HTTP headers which make these attacks a bit more difficult to happen. Express doesn't come with these best practices out of the box, so we're gonna use middleware to set all of these special headers.</p>`,
        `<h3>Denial-of-Service (DOS) Attacks</h3>
          <p>Denial-of-Service (DOS) happens when the attacker sends so many requests to a server that it breaks down and the application becomes unavailable. implementing rate limiting is a good solution for this. Also, we should limit the amount of data that can be sent in a body in a POST or a PATCH request.</p>
          <p>Also, we should avoid using so-called evil regular expressions to be in our code. These are just regular expressions that take an exponential time to run for non-matching inputs and they can be exploited to bring our entire application down.</p>
          `,
        `<h3>NoSQL Query Injection Attack</h3>
          <p>Query injection happens when an attacker, instead of inputting valid data, injects some query in order to create query expressions that are gonna translate to <code>true</code>.</p>`,
        `<h3>Other Best Practices & Suggestions</h3>
          <p>In a production application, all communication between server and client needs to happen over HTTPS. Otherwise, anyone can listen into the conversation and steal our JSON Web Token.</p>
          <p>Never commit a configuration file (.env file), like for environment variables, to a version control like Git. In fact, do not upload it anywhere, because this file contains the most sensitive data of the entire application.</p>
          <p>Whenever there is an error, do not send the entire error to the client. So, stuff like the stack trace could give the attacker some valuable insights into your system.</p>
          `,
        `<p><img src="../../src/img/security_best_practices.jpg"/></p>`,
      ],
    },
    {
      sectionTitle: 'Sending JWT via HTTPOnly Cookie',
      sectionSource: '',
      highlights: {
        highlight1: ['Sending JWT via HTTPOnly Cookie'],
      },
      tooltips: [
        `<p>JSON Web Token should be stored in a secure HTTPOnly cookie.</p>
        <p>A Cookie is basically just a small piece of text that a server can send to client. Then when the client receives a Cookie, it will automatically store it and then automatically send it back along with all future requests to the same server. So a browser automatically stores a Cookie that it receives and sends it back in all future requests to that server where it came from.</p>
        <p>In order to send a Cookie, it's actually very easy. All we have to do is to basically attach it to the response object.</p>
        `,
        `<p>Testing for Secure HTTPS Connections when you have an app deploy to Heroku:</p>
        <pre><code>
const express = require('express');

const app = express();

<b>app.enable('trust proxy');</b>

app.listen(process.env.PORT);
        </code></pre>
        <pre><code>
const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    <b>expires</b>: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    <b>httpOnly</b>: true,
    <b>secure</b>: <i>req.secure</i> || <i>req.headers['x-forwarded-proto'] === 'https'</i>
  };

  //if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  <i><b>res.cookie</b>('jwt', token, cookieOptions);</i>

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
};        
        </code></pre>
        <ul><code>res.cookie()</code> has 3 parameters:
          <li>- the name of the cookie;</li>
          <li>- the data that we actually want to send in the cookie;</li>
          <li>- a couple of options for the cookie.</li>
        </ul>
        `,
      ],
    },
    {
      sectionTitle: 'A Secure Way of Logging Out Users',
      sectionSource: '',
      highlights: {
        highlight1: ['Logging Out Users'],
      },
      tooltips: [
        `<p>Up until this point, when we wanted to logout a user, we would simply delete the cookie from our browser. However, the thing is that we created a cookie as an HttpOnly Cookie. So that means that we cannot manipulate an HttpOnly Cookie in any way in our browser. We cannot change it, and we can also not delete it.</p>
        <p>If we want to keep using this super secure way of storing cookies on login, then how are we going to be able to logout users on our website? Because usually with JWT authentication we just delete the cookie or the token from local storage, But with an HttpOnly Cookie that's not possible.</p>
        <p>What we're gonna do instead is to create a very simple <code>/logout</code> route that will <i>send back <b>a new HttpOnly Cookie with the <u>exact same name</u>, but without the token</b></i>. So that will then <i>override the current HttpOnly Cookie</i> that we have in the browser with one that has the same name but no token. So when that HttpOnly Cookie is then sent back along with the next request, then we will not be able to identify the user as being logged in. This will effectively then logout the user, and also were gonna give this HttpOnly Cookie a very <u>short expiration time</u>.</p>
        `,
        `<h3>Login Implementation</h3>
        <pre><code>
const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  res.cookie(<b>'jwt'</b>, token, {
    <i>expires</i>: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    <i>httpOnly</i>: true,
    <i>secure</i>: req.secure || req.headers['x-forwarded-proto'] === 'https'
  });

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
};
      </code></pre>`,
        `<h3>Logout implementation</h3>
      <pre><code>
app.get('/logout', (req, res) => {
  res.cookie(<b>'jwt'</b>, 'loggedout', {
    <i>expires: new Date(Date.now() + 10 * 1000)</i>, //10 seconds
    <i>httpOnly</i>: true
  });

  res.status(200).json({ status: 'success' });
});
        </code></pre>
        <p>NOTE: We do not need to set it as <code>secure</code> like in the case of login, because in the logout case there is no sensitive data that anyone can get a hold of.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Protect Routes with JWT Token',
      sectionSource: '',
      tooltips: [
        `<p>To send a JSON Web Token as a header, there's actually a standard for doing that:</p>
        <pre><code>
fetch('http://localhost:8080/protected_route', {
  method: 'POST',
  <b>headers</b>: {
    'Content-Type': 'application/json',
    <b>'Authorization': 'Bearer JWT_TOKEN_VALUE',</b>
  }
  body: JSON.stringify({ title: 'A title', content: 'Some content...'})
})      
      </code></pre>`,
        `<p>You can read headers send from client with <code>req.headers</code>:</p>
        <pre><code>
<i>const { promisify } = require('util');</i>

app.use(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization && 
    req.headers.authorization.startsWith('Bearer)
  ) {
    token = <i><b>req.headers</b>.authorization</i>.split(' ')[1];
  }

  if (!token) next(new Error('You are NOT logged in!'));

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  } catch(err) {
    next(new Error(err));
  }
  
  next();
})
      </code></pre>
      `,
      ],
    },
    {
      sectionTitle: 'Implementing Rate Limiting with express-rate-limit',
      sectionSource: '',
      highlights: {
        highlight1: ['Rate Limiting'],
        highlight2: ['express-rate-limit'],
      },
      tooltips: [
        `<p>In this article we will implement rate limiting, in order to <i>prevent the same IP from making too many requests to our API</i>. This will then help us preventing attacks like Denial-of-Service or Brute Force Attacks.</p>
        <p><b>The rate limiter will be implemented as a global middleware function.</b> The rate limiter will count the number of requests coming from one IP and then, when there are too many requests, block these requests.</p>
        <p>The rate limiter that we're going to use is a third party package called <code>express-rate-limit</code>.</p>
        <pre><code>
const express = require('express');
<i>const rateLimit = require('express-rate-limit');</i>

const app = express();

<i>const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,</i> //1hour
  <i>message: 'Too many requests from this IP, please try again in an hour!'
});

//You can rate limit any route
app.use('/api', limiter);</i>

app.listen(process.env.PORT);
        </code></pre>
        <p>We kind of need to find a balance which works best for our application. For example, if you're building an API, which really needs a lot of requests for one IP, then of course, the <code>max</code> property number should be greater. So don't just follow blindly what I just put in the <code>max</code> property (100), but really adapt it to your own application so that you don't make it unusable because of <code>max</code> property limiter.</p>
        <ul>The limiter will <i>automatically creates and send some HTTP Headers</i> with the limiter rate number, limiter remaining number and limiter time until is reset:
          <li>- <code>X-RateLimit-Limit</code>: 100;<li>
          <li>- <code>X-RateLimit-Remaining</code>: 99;<li>
          <li>- <code>X-RateLimit-Reset</code>: 1556894073.<li>
        </ul>
        <p>For each request, the <code>X-RateLimit-Remaining</code> will decrease. Also with passed time, the <code>X-RateLimit-Reset</code> milliseconds will decrease.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'Limit the amount of data that comes in a <code>req.body</code>',
      sectionSource: '',
      highlights: {
        highlight1: ['Limit the amount of data'],
      },
      tooltips: [
        `<pre><code>
const express = require('express');

const app = express();

//Body parser, reading data from body into req.body
app.use(<i>express.json(<b>{ limit: '10kb' }</b>)</i>);

app.listen(process.env.PORT);
        </code></pre>
        <p>Now when we have a body larger than 10 kilobyte, it will basically not be accepted.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Setting Security HTTP Headers with Helmet',
      sectionSource: '',
      highlights: {
        highlight1: ['Security HTTP Headers'],
        highlight2: ['Helmet'],
      },
      tooltips: [
        `<pre><code>
const express = require('express');
<i>const helmet = require('helmet');</i>

const app = express();

//Set security HTTP headers
<b>app.use(helmet());</b>

app.listen(process.env.PORT);
      </code></pre>
      <p>It's best to use the <code>helmet</code> package early in the middleware stack, so that these headers are really sure to be set. So don't put it like somewhere at the end, put it right in the beginning.</p>
      `,
      ],
    },
    {
      sectionTitle: 'Data Sanitization with xss-clean',
      sectionSource: '',
      highlights: {
        highlight1: ['Data Sanitization'],
        highlight2: ['xss-clean'],
      },
      tooltips: [
        `<p>Data sanitization means to clean all the data that comes into the application from malicious code.</p>
        <p>We will do data sanitization against NoSQL Query Injection, and also data sanitization against Cross-Site Scripting Attacks.</p>
        <p>With NoSQL Query Injection, we were able to log in, without knowing the email address, only the password:</p>
        <pre><code>
fetch('http://localhost:8080/users/login', {
  method</b>: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
  body: JSON.stringify</i>(
    { email: <b>{"$gt": ""}</b>,
      password: pass1234
    }
  )
})      
      </code></pre>
      <p>This works basically because <code>{"$gt": ""}</code> will always be <code>true</code> and will then select all the usernames. And for passwords it's not really difficult to find a bunch of really popular passwords that are used on every application.</p>
      <p>To protect against NoSQL Query Injection we need to install a package called <code>express-mongo-sanitize</code>.</p>
      <pre><code>
const express = require('express');
<i>const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');</i>

const app = express();

app.use(express.json({ limit: '10kb' }));

//Data sanitization against NoSQL query injection
app.use(<b>mongoSanitize()</b>);

//Data sanitization against XSS
app.use(<b>xss()</b>);

app.listen(process.env.PORT);
      </code></pre>
      <p>What <code>mongoSanitize()</code> middleware does is to look at the request body, the request query string, and also at request params, and then it will filter out all of the dollar signs and dots, because that's how MongoDB operators are written. By removing that, well, these operators are then no longer going to work.</p>
      <p><code>xss()</code> will clean any user input from malicious HTML code. Imagine that an attacker would try to insert some malicious HTML code with some JavaScript code attached to it. If that would then later be injected into our HTML site, it could really create some damage then. The <code>xss()</code> middleware will <i>convert all the HTML tags/symbols</i>.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Preventing Parameter Pollution with hpp',
      sectionSource: '',
      highlights: {
        highlight1: ['Parameter Pollution'],
        highlight2: ['hpp'],
      },
      tooltips: [
        `<p><code>hpp</code> package is an express middleware to protect against HTTP Parameter Pollution attacks.</p>
      <pre><code>
fetch('http://localhost:8080/tours?<i><u>duration</u>=5&<u>duration</u>=9</i>');
      </code></pre>
      <pre><code>
const express = require('express');
<i>const hpp = require('hpp');</i>

const app = express();

//Prevent parameter pollution
<i>app.use(<b>hpp()</b>);</i>

app.listen(process.env.PORT);
      </code></pre>
      <p><i><code>hpp()</code> should be used by the end</i>, because what it does is to clear up the query string.</p>
      <p>If you want some duplicate query params, you can pass to <code>hpp()</code> an object with a <code>whitelist</code> property. For example, we might want to search for /tours with the duration of nine and five.</p>
      <p>The <code>whitelist</code> property holds an array of properties for which we actually allow duplicates in the query string.</p>
      <pre><code>
fetch('http://localhost:8080/tours?<i><u>duration</u>=5&<u>duration</u>=9</i>');
      </code></pre>
      <pre><code>
const express = require('express');
<i>const hpp = require('hpp');</i>

const app = express();

//Prevent parameter pollution
<i>app.use(
  hpp({
    <b>whitelist</b>: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price'
    ]
  })
);</i>

app.listen(process.env.PORT);
      </code></pre>
      `,
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
        <pre><code>
const nodemailer = require('nodemailer');

const sendEmail = async options => {
  //1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  //2) Define the email options
  const mailOptions = {
    from: 'Jonas Schmedtmann <hello@jonas.io>',
    to: options.email,
    subject: options.subject,
    text: options.message
    // html:
  };

  //3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
        </code></pre>
        `,
        `<p>Using Gmail for sending emails is not at all a good idea for a production app, because you can only send 500 emails per day, and also, you will probably very quickly be marked as a spammer, and from there, it will only go downhill. So, unless you build a private app, and you just send emails to yourself, or, like 10 friends, well, then you should use another service. Some well-known ones are <b>SendGrid</b> and <b>Mailgun</b>.</p>`,
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
      sectionTitle: 'Setup & Basic Validation: express-validator package',
      sectionSource: '',
      highlights: {
        highlight1: ['express-validator'],
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

const file_upload_and_download = {
  title: 'File Upload & Download',
  titleDescription: 'Handling Files Correctly',
  sections: [
    {
      sectionTitle:
        'Handling File Uploads with Multer when Using Forms Rendered by Server',
      sectionSource: '',
      highlights: {
        highlight2: ['Multer'],
      },
      tooltips: [
        `<p>When using forms rendered by server, you need to specify an attribute to the form element called <b><code>enctype="multipart/form-data"</code></b>.</p>
        <p><i>Multer will not process any form which is not multipart (multipart/form-data)</i>:</p>
        <pre><code>
form action="/admin/edit-product" method="POST" <b>enctype="multipart/form-data"</b>
        </code></pre>
        `,
      ],
    },
    {
      sectionTitle: 'Handling File Uploads with Multer in REST APIs',
      highlights: {
        highlight1: ['Multer in REST APIs'],
      },
      sectionSource: '',
      tooltips: [
        `<p>Multer is a third party package that <i>parses incoming requests for files</i>, request with mixt data: text and file data.</p>
        <p>Multer is a Node.js middleware for handling multipart/form-data, which is primarily used for uploading files. <i>Multer will not process any form which is not multipart (multipart/form-data)</i>.</p>
        <p>Like <code>bodyParser</code> package, <i><code>multer</code> is a middleware which we <u>execute on every incoming request</u></i>, and it then simply has a look at that request, sees if it's multipart/form-data and tries to extract files if that is the case.</p>`,
        `<h3>Frontend code</h3>
        <pre><code>
function submitForm(e) {
  e.preventDefault();

  <i>const formData = <b>new FormData()</b>;
  <b>formData.append</b>('userName', 'someUserName');
  <b>formData.append</b>('photo', FileList);</i>
  
  fetch('http://localhost:8080/updatePhoto', {
    <i><b>method</b>: 'PATCH',
    <b>body</b>: formData</i>,
  })   
}
        </code></pre>`,
        `<h3>Server code</h3>
        <pre><code>
const express = require('express');
<i>const multer = require('multer');</i>

const app = express();

<i>const upload = multer({ dest: 'public/img' });</i>

function uploadPhoto(req, res, next) {
  upload<i>.single</i>('photo');
}

function updateMe(req, res, next) {
  console.log(<i>req.file</i>);
  console.log(<i>req.body</i>);
}

app.patch('/updatePhoto', uploadPhoto, updateMe)

app.listen(process.env.PORT);
        </code></pre>
        <p>In the code above we included the Multer package and then with that we created an <code>upload</code> variable. The <code>upload</code> is just to define a couple of settings, where in the above example we only define the destination.  Then we use that <code>upload</code> to create a new middleware, and that middleware will handle upload file.</p>
        <p>We use <code>upload.single()</code> because we only have one single file that we want to upload. <code>upload.single()</code> takes as an argument the name of the field that hold the file. The name must match with the name in the UI form.</p>
        <p><code>upload.single()</code> will put some information about the file on the request object.</p>
        <p>NOTE: When we upload images, we won't use JSON data because <i>JSON data is only text</i>, so only data that can be represented as a text. A file can't be, or not easily can be JSON format, it will be very big quickly and very big files are a huge issue or impossible to upload in JSON format. So <b>we can't use JSON for data where we have both a file and normal text data</b>.</p>
        <p>Uploaded images/videos/big files are not directly uploaded into the database, we just upload them into our file system, and then in the database we put a link basically to that image.</p>
  `,
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
      sectionTitle:
        'Configuring Multer to Adjust Filename & Filtering Files by Mimetype',
      sectionSource: '',
      tooltips: [
        `<pre><code>
const express = require('express');
const multer = require('multer');
      
const app = express();
      
const <b>multerStorage</b> = <i>multer.diskStorage</i>({
  <i>destination</i>: (req, file, cb) => {
    cb(null, 'public/img');
  },
  <i>filename</i>: (req, file, cb) => {
    const fileExtension = file.mimetype.split('/)[1];
    cb(null, 'user-' + req.user.id + '-' + Date.now() + fileExtension)
})
      
//A user can only upload image files
const <b>multerFilter</b> = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('error', false)
  }
}
      
const <b>upload</b> = multer({
  <i>storage</i>: multerStorage,
  <i>fileFilter</i>: multerFilter
});
      
function uploadPhoto(req, res, next) {
  upload<i>.single</i>('photo');
}
      
function updateMe(req, res, next) {
  console.log(req.file);
  console.log(req.body);
}
      
app.patch('/updatePhoto', uploadPhoto, updateMe)
      
app.listen(process.env.PORT);
        </code></pre>`,
      ],
    },
    {
      sectionTitle: 'Resize Images with sharp',
      sectionSource: '',
      highlights: {
        highlight1: ['Resize Images'],
        highlight2: ['sharp'],
      },
      tooltips: [
        `<p>When doing image processing like resizing images after uploading an image, then it's always best to not even save the image to the disk, but instead save it to memory.</p>
        <p>For that we need to modify the <code>storage</code> property to configure Multer, and instead of <code>multer.diskStorage</code> to pass <code>multer.memoryStorage</code>.</p>
        <p>With <code>multer.memoryStorage</code> the image will be stored as a buffer, and that buffer is then available at <code>req.file.buffer</code>.</p>
        <p>Calling the <code>sharp()</code> function will create an object on which we can chain multiple methods in order to do our image processing.</p>
        <pre><code>
const express = require('express');
const multer = require('multer');
<i>const sharp = require('sharp');</i>

const app = express();

const multerStorage = <i>multer.memoryStorage()</i>;

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('error', false);
  }
}

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

function uploadPhoto(req, res, next) {
  upload.single('photo');
}

<i>const resizePhoto = async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = 'user-' + req.user.id + '-' + Date.now();

  await <b>sharp(req.file.buffer)
    .resize</b>(500, 500)
    <b>.toFormat</b>('jpeg')
    <b>.jpeg</b>({ quality: 90 })
    <b>.toFile</b>('public/img/' + req.file.filename)

  next();
}</i>

function updateMe(req, res, next) {
  console.log(req.file);
  console.log(req.body);
}

app.patch('/updatePhoto', uploadPhoto, resizePhoto, updateMe)

app.listen(process.env.PORT);
        </code></pre>
        `,
      ],
    },
    {
      sectionTitle: 'Uploading & Proccessing Multiple Images',
      sectionSource: '',
      tooltips: [
        `        <pre><code>
const express = require('express');
const multer = require('multer');
const sharp = require('sharp');

const app = express();

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('error', false);
  }
}

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

<i>function uploadPhotos(req, res, next) {
  //When we have multiple images with the <u>same HTML "name" attribute</u>
  <b>upload.array</b>('images', 8);

  //When we have multiple images with <u>mixed HTML "name" attribute</u>
  // <b>upload.fields</b>([
  //   {name: 'imageCover', maxCount: 1},
  //   {name: 'images', maxCount: 8}
  // ]);


  //When we have only one <u>image</u>
  //<b>upload.single</b>('image');
}</i>

const resizePhotos = async (req, res, next) => {
  if (!<b>req.files</b>) return next();

  <i>req.body.images = [];</i>
  <b>await Promise.all</b>(
    <i>req.files.images</i>.map(async (file, idx) => {
      const filename = 'user-' + req.user.id + '-' + Date.now() + '-' + idx + '.jpeg';
      
      await sharp(file.buffer)
        .resize(500, 500)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile('public/img/' + filename)
        
      <i>req.body.images.push(filename);</i>
    })
  );

  next();
}

function updatePhotos(req, res, next) {
  console.log(req.file);
  console.log(req.body);
}

app.patch('/updatePhotos', uploadPhotos, resizePhotos, updatePhotos)

app.listen(process.env.PORT);
        </code></pre>`,
      ],
    },
    {
      sectionTitle: 'Storing File Data in the Database',
      sectionSource: '',
      tooltips: [
        `<p>Files like images, videos, PDFs etc, should not be stored in a database, they are too big. It's too inefficient to store files in a database and query them from there. You need to <i>store files on file system</i>, but you need to <i>store the path to the file in the database</i>.</p>`,
      ],
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
    {
      sectionTitle:
        'Read & parse Cookies from <code>request</code> object with cookie-parser package',
      sectionSource: '',
      highlights: {
        highlight1: ['parse Cookies'],
        highlight2: ['cookie-parser'],
      },
      tooltips: [
        `<p>In order to get access to the cookies that are in our <code>request</code> object, we need to install an NPM package called <code>cookie-parser</code>. This package will <i>parse all the cookies from the incoming request</i>.</p>
        <p>With <code>cookie-parser</code>, we're also able to <i>authenticate users based on JWT Tokens sent via Cookies</i>, and not only the Authorization Header.</p>
        <pre><code>
const express = require('express');
<i>const cookieParser = require('cookie-parser');</i>

const app = express();

app.use(<b>cookie-parser()</b>);

app.use('/route', (req, res, next) => {
  console.log(<i>req.cookies</i>);
})

app.listen(process.env.PORT);
        </code></pre>
    `,
      ],
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

const deploying_our_app = {
  title: 'Deploying our App',
  titleDescription: 'From Development to Production',
  sections: [
    {
      sectionTitle: 'Deploying Different Kinds of Apps',
      sectionSource: '',
      tooltips: [
        `<p>How do we deploy apps build with <i>Server Side Rendered Views</i> and apps build as <i>REST APIs or GraphQL APIs</i>? So there are two types of applications, one with views and one without views.</p>
      <p>First of all we have to keep in mind that how the application behaves, what it does with incoming requests and which data it accepts and returns. In the end, when we look at those apps from a technical perspective, in both kinds of applications, we start a normal Node.js server and we use Express.js framework, and therefore <i>these types of applications have <u>the same hosting requirements</u></i>.</p>
      <p>We don't have to make a difference because in the end when we move our code to a web server, then there we also just want to do the exact same thing we did locally. We'll start our Node server and wait for incoming requests, and therefore we don't have to differentiate between these kinds of applications. When it comes to deployment we simply deploy our code, start the node server and we are good to go.</p>
      <p><img src="../../src/img/deploy_1.jpg"/></p>
      `,
      ],
    },
    {
      sectionTitle: 'Deployment Preparations',
      sectionSource: '',
      tooltips: [
        `<p><img src="../../src/img/deploy_2.jpg"/></p>
        <p>It's worth mentioning that the last three points, compression logging and SSL are often handled by your hosting provider. When we choose a hosting provider we want to use some managed service where these things are also managed for us, so that we don't have to worry too much about that.</p>
        `,
        `<h3>Use Environment Variables: most important <code>process.env.PORT</code></h3>
        <p>How do we prepare the code for production? In general, you want to use something which is called Environment Variables. Use Environment Variables instead of hardcoding certain values like API keys, port numbers, passwords and so on into your code.<p>
        <p>Another thing that's really important when you deploy an application to Heroku is that you <i>listen to the port at <code>process.env.PORT</code></i>. Behind the scenes, Heroku will actually assign a random port to <code>process.env.PORT</code> environment variable.<p>
        `,
        `<h3>Use Production API Keys</h3>
        <p>Also make sure that if you are using some third party services like Stripe, that you use the production API keys and not the development keys. For example Stripe gave us a testing API key, while that is obviously what we want to use as long as we test the application, as soon as we deploy it we want to use the production ready API, and that is something that also depends on the third parties or on the third party APIs you might be using.</p>`,
        `<h3>Reduce the error output details and get rid of most of the <code>console.log</code></h3>
        <p>We might have some mechanisms to handle errors or to log something, and there we want to make sure that we reduce the error output details. We don't want to send sensitive info to our users, so if something fails, if some error message is thrown, we want to make sure that it does contain as little information as possible because the users of our website should of course not get any insights into our source code.</p>
        <p>The next step before deploying our app is to <i>get rid of most of the <code>console.log</code></i> that we still have in our code. That's just because these logins will end up in our hosting platform logs, and so we don't want to pollute these logs in production. You can find these <code>console.log</code></i> by searching them in VSCode with <code>CTRL + SHIFT + F</code>.</p>
        `,
        `<h3>Setting Secure Response Headers with Helmet</h3>
        <p>Regarding the responses your application sends, you want to make sure that you set secure response headers.</p>`,
        `<h3>Compressing Assets</h3>
        <p>In a typical node application, you might also be serving some assets, some JavaScript, some CSS files and there, or therefore also your response time, because the client has to download less, and most modern browsers are able to download compressed, so zipped assets and unzip them on the fly directly in the browser.</p>
        <p>You need to <i>install a package called <b><code>compression</code></b> that's gonna compress all our responses</i>, so whenever we send a text response to a client, no matter if that's JSON or HTML code. With the compression package, that text will then be dramatically compressed.</p>
        <pre><code>
const express = require('express');
<i>const compression = require('compression');</i>

const app = express();

app.use(<b>compression()</b>);

app.listen(process.env.PORT);
        </code></pre>
        `,
        `<h3>Setting Up Request Logging</h3>
        <p>You also want to configure logging so that you are aware of what's happening on your server. Since we're now not testing the server anymore but real users do interact with it, we certainly want to log interactions into log files that we can look into at any time we feel like it.</p>`,
        `<h3>Setting Up a SSL Server</h3>
        <p>SSL/TLS, so encryption of data in transit is also something we might want to look into. Thus far we used the normal HTTP server and therefore our communication with the server was not encrypted. For development this is obviously fine, now for a production ready app, it's strongly recommended that you do encrypt your connections</p>
        <p>SSL/TLS is all about securing your data that is sent from a client to the server, because when we communicate between client-server, we typically exchange data.</p>
        `,
        `<h3>Review your package.json file</h3>
        <p>Another thing you need to do is to change the NPM script from <code>"start": "nodemon server.js"</code> to <b><code>"start": "node server.js"</code></b>. This is because in production you want to run your application with node command. You only use nodemon in development.</p>
        <pre><code>
"scripts": {
  <b>"start": "node server.js",</b>
  "dev": "nodemon server.js",
  "prod": "NODE_ENV=production nodemon server.js",
},
        `,
      ],
    },
    {
      sectionTitle: 'Using a Hosting Provider',
      sectionSource: '',
      tooltips: [
        `<p>The alternative to a Hosting Provider always is that you build your own computer and you set it up such that it is connected to the Internet, that you expose the right ports ,and that people can send requests to your computer which might be running in your room, and that is not a solution I recommend unless you really know what you are doing, otherwise it's very likely to be insecure, not scalable at all, if your app is doing really well then you will quickly need a new computer, a second computer, a third computer, and it only gets more complex and expensive and therefore, we typically use Hosting Providers like Heroku, AWS or others.</p>
      <p>There we take our code and we deploy it onto <i>managed spaces</i> on their computers, also often called <i>virtual servers</i>, and this means that these providers have very large and powerful machines in their data centers, and you typically don't rent an entire machine, though you could do that, but a part on that machine, so a part of the hard drive and some resources which are then provisioned for your managed space and your code runs totally separated from the other apps which might be running on the same computer on the same server, your app runs separated from them.</p>
      <p>Now you want to connect your app running on that virtual server with your users. Typically you don't directly connect your space on that machine to your servers, though that is also possible on some providers, but instead a lot of providers manage a lot of the heavy lifting for you and they give you their own managed servers you could say in front of your server, where you can conveniently add SSL encryption, compression, logging or load balancing. Load balancing means that when you have multiple virtual servers because your app is doing really well and you need more resources, that in such a case incoming requests are sent to servers with available capacities in an efficient way. So that is all handled by so-called managed servers which are typically invisible to you, which you don't configure, but which are part of the hosting provider package and you just use a nice user interface provided by the hosting provider to set up how your app behaves regarding SSL or regarding logging and so on.</p>
      <p>Now this all runs in a private network which means that your own virtual server and your code is not directly exposed to the web, but it's exposed to that managed server which then in turn talks to the web, and therefore to your users through a public server gateway, and that essentially is like a door where requests can come in there and then forwarded to your server, to your virtual server, and the responses are also forwarded.</p>
      <p>So this is how most hosting providers work, that is what happens behind the scenes, just important for you to know, not really a lot of stuff you have to do on that.</p>
      <p><img src="../../src/img/deploy_3.jpg"/></p>
      `,
      ],
    },
    {
      sectionTitle: 'A Deployment Example with Heroku',
      sectionSource: '',
      tooltips: [
        `<p>Heroku use it's <b>CLI (Command Line Interface)</b>, and that is heroku specific. On other hosting providers, you might simply be able to drag and drop your code to deploy it. Heroku just doesn't use such a drag and drop alternative, instead <i>Heroku uses that command line interface which allows you to run or to deploy your code through the command line by typing on commands</i>.</p>
        <p>To use Heroku CLI, you need to download and install it on your computer. Once you did install it, you can run all Heroku commands in your VSCode terminal or command prompt.</p>
        <ul>Heroku commands:
          <li>- <code>heroku login</code></li>
          <li>- <code>heroku create -a example-app</code>: creates a new empty application on Heroku, along with an associated empty Git repository. If you run this command from your app's root directory, the empty Heroku Git repository is automatically set as a remote for your local repository.</li>
          <li>- <code>git remote -v</code>: you can use this command to confirm that a remote named heroku has been set for your app</li>
          <li>- <code>git push heroku master</code>: to deploy your app to Heroku, use this command to push the code from your local repository's main branch to your heroku remote.</li>
        </ul>
        </code></pre>
        <p>Another thing you need to <i>add to your package.json file</i> when using Heroku is the version of Node.js you are using. Heroku will now use the specified version (^10) when it installs your Node.js app on the remote server:</p>
        <pre><code>
"engines": {
  "node": "^10"
}
        </code></pre>
        <p>NOTE: You can detect your Node.js version by running <code>node -v</code> in your project folder or anywhere on your computer.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Responding to a Heroku SIGTERM Signal',
      sectionSource: '',
      highlights: {
        highlight1: ['SIGTERM Signal'],
      },
      tooltips: [
        `<p>Heroku every 24 hours will shut down our application by sending the 'SIGTERM' signal to our application. So then, we shut down the process gracefully, by using <code>server.close()</code>, which allows all the pending requests to still process until the end.</p>
        <pre><code>
<i>process.on</i>(<b>'SIGTERM'</b>, () => {
  console.log('SIGTERM RECEIVED. Shutting down gracefully');

  <i>server.close</i>(() => {
    console.log('Process terminated!');
  });
});     
      </code></pre>`,
      ],
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

const server_side_rendering = {
  title: 'Server Side Rendering with Express.js & Template Engines',
  titleDescription: '',
  sections: [
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
      sectionTitle: 'Serving HTML Pages with sendFile() function',
      sectionSource: '',
      highlights: {
        highlight2: ['sendFile()'],
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
        `<h3>More about <code>res.sendFile()</code> function</h3>
        <p>The <code>res.sendFile()</code> function <i>transfers the file at the given path</i> and <i>it sets the Content-Type response HTTP header field based on the filename extension</i>.</p>
        <p>Unless the <code>root</code> option is set in the options object, <i>path must be an <u>absolute path</u> to the file</i>.</p>
        <ul>This API <i>provides access to data on the running file system</i>. Ensure that either:
          <li>a) the way in which the path argument was constructed into an absolute path is secure if it contains user input or</li>
          <li>b) set the root option to the absolute path of a directory to contain access within.</li>
        </ul>
        <p>When the <code>root</code> option is provided, the path argument is allowed to be a relative path, including containing <code>..</code>. Express.js will validate that the relative path provided as path will resolve within the given <code>root</code> option.</p>
        `,
        `<h3>More about <code>path.join()</code> method</h3>
        <p>The <code>path.join()</code> method <i>joins the specified <u>path segments</u> into <u>one path</u></i>. You can specify as many path segments as you like.</p>
        <p>The specified <i>path segments must be <u>strings</u></i>, separated by comma <code>,</code>.</p>
        <p>We're using <code>path.join()</code> because this will automatically build the path in a way that works on both Linux and Windows systems.</p>
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

app.listen(process.env.PORT);
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

app.listen(process.env.PORT);
              </code></pre>`,
      ],
    },
    {
      sectionTitle: 'Sharing Data Across Requests & Users',
      sectionSource: '',
      highlights: {
        highlight1: ['Sharing Data'],
      },
      tooltips: [
        `<pre><code>
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
        'Installing & implementing Pug with app.set() & res.render()',
      sectionSource: '',
      highlights: {
        highlight1: ['Pug'],
        highlight2: ['app.set()', 'res.render()'],
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

app.listen(process.env.PORT);        
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

app.listen(process.env.PORT);        
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
  how_node_works,
  development_workflow,
  working_with_REST_APIs,
  understanding_the_basics,
  working_with_ExpressJS,
  routing,
  dynamic_routes_and_advanced_models,
  working_with_files,
  parsing_data,
  error_handling_with_ExpressJS,
  understanding_validation,
  adding_authentication,
  authentication_with_JWT,
  security,
  file_upload_and_download,
  sending_emails,
  adding_pagination,
  understanding_async_requests,
  understanding_async_await_in_NodeJS,
  server_side_rendering,
  sessions_and_cookies,
  adding_payments,
  deploying_our_app,
  // websockets_and_socket,
  // graphQL,
  // testing,
  // nodeJS_as_a_build_tool,
  // modern_javaScript_and_nodeJS,
  // nodeJS_and_TypeScript,
];

dataStorage.forEach((el, index) => {
  el.titleNumber = index + 1;
  el.sections.forEach((section, idx) => (section.sectionNumber = idx + 1));
});

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
