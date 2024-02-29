const introduction = {
  title: 'Introduction',
  sections: [
    {
      sectionTitle: 'What is Node.js?',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Installing Node.js and creating our first app',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Understanding the role & usage of Node.js',
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
      sectionTitle: 'How The Web works',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Creating a Node Server',
      sectionSource: '',
      highlights: {
        highlight1: ['Node Server'],
      },
      tooltips: [``],
    },
    {
      sectionTitle: 'The Node Lifecycle & Event Loop',
      sectionSource: '',
      highlights: {
        highlight1: ['Event Loop'],
      },
      tooltips: [``],
    },
    {
      sectionTitle: 'Controlling the Node.js process',
      sectionSource: '',
      tooltips: [``],
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
      sectionTitle: 'Node.js - looking behind the scenes',
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
      sectionTitle: 'Using Nodemon for autorestarts',
      sectionSource: '',
      highlights: {
        highlight2: ['Nodemon for autorestarts'],
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
        `<h3>Working with only Node.js can be a pain</h3>
        <p>With Node.js alone, you have to <i>write a lot of code to deal with basic things</i> like, for example, extracting the body of an incoming request. Now typically you don't want to do that, you want to focus on your business logic, the code that makes up your specific application, you don't want to work or you don't want to care about standard tasks like handling incoming requests or routing, and therefore we'll now have a look at Express.js.</p>`,
        `<h3>What is Express.js and why do we use it?</h3>
        <p>Express.js is a <i>framework</i> you can install as a third party package into your node project and as such, it basically <i>helps you outsource some of that nitty-gritty work</i>, some of these details you don't want to care about, it gives you a rule set in which you work and a lot of utility functions that help you write cleaner code and focus on your core business.</p>`,
      ],
    },
    {
      sectionTitle: 'Installing Express.js',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding Middleware',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'How Middleware Works',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Express.js - Looking Behind the Scenes',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Handling Different Routes',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Parsing Incoming Requests',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Limiting Middleware Execution to POST Requests',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using Express Router',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Adding a 404 Error Page',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Filtering Paths',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Creating HTML Pages',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Serving HTML Pages',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Returning a 404 Page',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'A Hint!',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Using a Helper Function for Navigation',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Styling our Pages',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Serving Files Statically',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: 'Wrap Up',
      sectionSource: '',
      tooltips: [``],
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
      sectionTitle: 'Assignment 4: Time to Practice - Templating Engines',
      sectionSource: '',
      tooltips: [``],
    },
    {
      sectionTitle: '[OPTIONAL] Assignment Solution',
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
