# Execution Context and the Call Stack

## How JavaScript Code Gets Executed

For does who don't know, the browser doesn't natively understand the high-level JavaScript code that we write in our applications. It needs to be converted into a format that the browser and our computers can understand – machine code.

While reading through HTML, if the browser encounters JavaScript code to run via a `<script>` tag or an attribute that contains JavaScript code like `onClick`, it sends it to its JavaScript Engine. The browser's JavaScript Engine then creates a special environment to handle the transformation and execution of this JavaScript code. This environment is known as the **Execution Context**.

Programs are simply ==assigning memory==, for example assigning a value to a variable, and then ==running a function== for the program to do something with those variables. That's all we really do in a programming language.

How do we run code in JavaScript? Well, we ==assign variables== and then we ==run functions==, right? When you give your JavaScript file to a browser, the JavaScript Engine start to read and execute the code inside your file, line by line, in order. As the JavaScript Engine starts to read your code, it creates something called the ==**Global Execution Context (GEC)**==. Whenever JavaScript Engine sees a function call in you code, it's going to create something called an ==**Function Execution Context (FEC)**==. Each function call gets its own execution context.

Code in JavaScript is always ran inside a type of execution context. Execution context is simply the ==**environment within which your code is ran**==. So any time we run code in JavaScript, it's always going to be part of an execution context, it's part of global or inside of some function that we call.

==Each execution context has its own **variable environment**==.

There are ==two **types**== of execution context in JavaScript:

- **==global==** 
-  **==function==**
  There are ==two **stages**== as well to each context:
- ==**creation**== phase
- ==**executing**== phase

_Initially, our JavaScript Engine is going to create a Global Execution Context (GEC). We don't see this, it's underneath the hood, but it's saying "Hey, here's the JavaScript file for you, just start reading it for me", and on top of GEC, that's when we start adding functions calls and then eventually, as these execution context (execution context for the functions calls) get popped off, the last thing that remains is the GEC. And when the final line of our code runs and we're done with the JavaScript Engine, GEC is going to get popped off the Call Stack_.

![execution_context](../../img/execution_context.jpg)

## Global execution context (GEC)

Whenever the JavaScript Engine receives a script file, it first creates a default Execution Context known as the **Global Execution Context (GEC)**. The GEC is ==the **base/default Execution Context** where all JavaScript code that is **not inside of a function** gets executed==. For every JavaScript file, there can only be ==**one** GEC==.

==GEC is the very **first item on the Call Stack**==, _the first thing the JavaScript Engine does is to create the GEC, and it gives you two things: first thing is a **global object `window`** and the other thing is that **`this` keyword** in JavaScript_. 

But to start things off, GEC gives us these two things right off the JavaScript Engine starts up. So let's test this assumption: if what I just told you is correct, that means _I can just give an empty JavaScript file to the browser and I should have a `window` object and the `this` keyword already defined without me having to do anything_. So I get these two things that `this` keyword and `window` object without even writing a piece of JavaScript, because the browser has created a GEC for me.

_To the global object (in our case `window` object), we can assign variables, we can add functions and we can add different things to this global object_.

![global_execution_context](../../img/global_execution_context.jpg)

So once we have done what we call a creation phase in our JavaScript Engine, we then have a second phase and that second phase is called the _execution phase_, where you actually run your code.

Don't forget that ==**each execution context has its own _variable environment_**==.

### Creation Phase

1. Global Object created (in the browser the global object is **`window`**)
2. Initializes **`this`** keyword to global

3. Variable Environment created - memory space for `var` variables and functions created

4. Initializes all variables to `undefined` (also known as **hoisting**) and places them with any functions into memory

   ```js
   this;
   window;
   this === window;
   
   // Window {...}
   // Window
   ```

   ### Executing Phase

   All JavaScript code that is **not inside of a function** is executed.

## Function execution context (FEC)

Whenever a function is called, the JavaScript Engine creates a different type of Execution Context known as a Function Execution Context (FEC) _within_ the Global Execution Context (GEC) to evaluate and execute the code within that function. Since every function call gets its own FEC, there can be ==**more than one FEC** in the run-time of a script==.

A function context is created by the JavaScript Engine ==when it sees a **function call**==. ==Each function gets its own execution context==.

![function_execution_context](../../img/function_execution_context.jpg)

### Creation Phase

1. **`arguments`** object created with any arguments (on each execution context we create a new `arguments` object)
2. Sets **`this`** to the global object unless in strict mode, where it's `undefined`

3. **Variable Environment** created - _memory space for variable and functions created_
4. **Initializes all variables** to `undefined` and places them into memory with any new functions

```js
// Function Execution Context creates arguments object
function showArgs(arg1, arg2) {
  console.log('arguments: ', arguments);
  return `argument 1 is: ${arg1} and argument 2 is: ${arg2}`;
}

showArgs('hello', 'world');
// arguments: { 0: 'hello', 1: 'world' }
// argument 1 is hello and argument 2 is world

function noArgs() {
  console.log('arguments: ', arguments);
}

noArgs();
// arguments: {}
// even though there are no arguments, the object is still created
```

### Executing Phase

Executing the function.

## References

1. [JavaScript: The Advanced Concepts - Andrei Neagoie](https://www.udemy.com/course/advanced-javascript-concepts/)
1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)
1. [JavaScript Execution Context – How JS Works Behind The Scenes - Victor Ikechukwu](https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/#:~:text=Whenever%20the%20JavaScript%20engine%20receives,can%20only%20be%20one%20GEC.)
