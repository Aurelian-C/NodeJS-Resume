# Closures

## _Function scope_ and conflicts

Let's talk a bit about [scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope) — a very important concept when dealing with functions. ==When you create a function, the variables and other things defined inside the function are inside their own separate **scope**, meaning that they are locked away in their own separate compartments, unreachable from code outside the functions.==

==The top level outside all your functions is called the **global scope**. Values defined in the global scope are accessible from everywhere in the code.==

==Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function.== However, a function can access all variables and functions defined inside the scope in which it is defined. In other words, a function defined in the global scope can access all variables defined in the global scope. ==A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.==

JavaScript is set up like this for various reasons — but mainly because of security and organization. Sometimes you don't want variables to be accessible from everywhere in the code — external scripts that you call in from elsewhere could start to mess with your code and cause problems because they happen to be using the same variable names as other parts of the code, causing conflicts. This might be done maliciously, or just by accident.

## _Local_ vs _global_ variables

==Variables declared within a JavaScript function, become local to the function.== Local variables can only be accessed from within the function. ==Since local variables are only recognized inside their functions, variables with the same name can be used in different functions. **Local variables are created when a function starts, and deleted when the function is completed**==.

JavaScript variables can belong to the local or global scope. Global variables can be made local (private) with closures. A function can access all variables defined inside it (local variables) and outside it (global variables). ==In a web page, global variables belong to the `window` object.==

==**Global variables can be used (and changed) by all scripts in the page (and in the window). A local variable can only be used inside the function where it is defined, it is hidden from other functions and other scripting code**. Global and local variables with the same name are different variables, modifying one does not modify the other.==

> **NOTE**: Variables created without a declaration keyword `var`, `let` or `const` are always global, even if they are created inside a function.

## Variable lifetime

==Global variables live until the page is discarded==, like when you navigate to another page or close the window. ==Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished==. Suppose you want to use a variable for counting something, and you want this counter to be available to all functions. You could use a global variable, and a function to increase the counter:

```js
// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3
```

**There is a problem with the solution above: Any code on the page can change the counter, without calling `add()`. The counter should be local to the `add()` function, to prevent other code from changing it**.

## Nested functions

All functions have access to the global scope. ==In fact, in JavaScript, all functions have access to the scope "above" them==. JavaScript supports nested functions. Nested functions have access to the scope "above" them. In this example, the inner function `plus()` has access to the counter variable in the parent function:

```js
function add() {
  let counter = 0;
  function plus() {
    counter += 1;
  }
  plus();
  return counter;
}
```

This could have solved the counter dilemma, if we could reach the `plus()` function from the outside. We also need to find a way to execute `counter = 0` only once. We need a closure.

## Closures & lexical environment

==A closure is the combination of a **function bundled together (enclosed) _with references to its surrounding state_** (the lexical environment)==. In other words, a closure gives you access to an outer function's scope from an inner function.

In JavaScript, ==closures are created every time a function is created, at function creation time==.

> **NOTE**: ==**A closure always return a function that references to its surrounding !!!**==

Remember self-invoking functions? What does this function do?

```js
const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

add();
add();
add();

// the counter is now 3
```

Example explained:

- The variable `add` is assigned to the return value of a self-invoking function.
- The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
- **This way `add` becomes a function. The "wonderful" part is that it can access the counter in the parent scope.**
- This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
- The counter is protected by the scope of the anonymous function, and can only be changed using the `add` function.

> **NOTE**: ==**A closure is a function having access to the parent scope, even after the parent function has closed**==.

Closures allow a function to access variables from an enclosing scope or environment even after it leaves the scope in which it was declared. In other words, a closure gives you access to its outer functions scope from the inner scope. ==The JavaScript Engine will keep variables around inside functions that have a reference to them, instead of "sweeping" them away after they are popped off the Call Stack==.

```js
function callMeMaybe() {
	const callMe = `Hey, I just met you!`
	setTimeout(function() {
       console.log(callMe)
    }, 8640000000);
};
    
callMeMaybe()
// ONE DAY LATER
// Hey, I just met you!

// Because of closures, even if some of the functions go all the way out to the Web API world, they still use closures and we're able to remember 'callMe' variable because of closures.
```

==Two of the major reasons closures are so beneficial are **memory efficiency** and **encapsulation**==.

## Closures & name conflicts

When two arguments or variables in the scopes of a closure have the same name, there is a *name conflict*. ==More nested scopes take precedence. So, **the innermost scope takes the highest precedence**, while **the outermost scope takes the lowest**. This is the scope chain.==

```js
function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

console.log(outside()(10)); // 20 (instead of 10)
```

The name conflict happens at the statement `return x * 2` and is between `inside`'s parameter `x` and `outside`'s variable `x`. The scope chain here is {`inside`, `outside`, global object}. Therefore, `inside`'s `x` takes precedences over `outside`'s `x`, and `20` (`inside`'s `x`) is returned instead of `10` (`outside`'s `x`).

## Closures & memory efficiency

==Using closures makes your code more memory efficient==. Take the example below:

```js
function inefficient(idx) {
  const bigArray = new Array(7000).fill("😄");
  console.log("created!");
  return bigArray[idx];
}

function efficient() {
  const bigArray = new Array(7000).fill("😄");
  console.log("created again!");
  return function(idx) {
    return bigArray[idx];
  };
}

inefficient(688);	// "inefficient" create the "bigArray" on every call
inefficient(1000);	// "inefficient" create the "bigArray" on every call
inefficient(6500);	// "inefficient" create the "bigArray" on every call
// created!
// created!
// created!

const getEfficient = efficient(); // "efficient" create the "bigArray" only once
getEfficient(688);
getEfficient(1000);
getEfficient(6500);
// created again!

// "inefficient" created the "bigArray" 3 times
// "efficient" created the "bigArray" only once
```

Every time we run `inefficient` function, we create the `bigArray` in memory and then we return it. Because nothing is referencing it, it gets destroyed, and then we create it again and then get it destroyed. ==By creating this array over and over again, each time we call the `inefficient` function, is not good for memory management !!!== With closures there is a way for us to _create the `bigArray` array **only once**_ and just have it in memory as a reference, so we can just constantly access it instead of doing all that work of creation-destruction.

## Closures & encapsulation

==Encapsulation means the restriction of direct access to some of an object's components. It hides as much as possible of an object's internal parts and only exposes the necessary parts to run.==

Why use encapsulation:

- Security - controlled access
- Hide implementation and expose behaviours
- Loose coupling - modify the implementation at any time
- ==Closures help us to **NOT POLLUTE THE GLOBAL SCOPE** !!!==

```js
const encapsulation = () => {
  let people = [];
  const setName = name => people.push(name);
  const getName = idx => people[idx];
  const rmName = idx => people.splice(idx, 1);
  return {
    setName,
    getName,
    rmName
  };
};

const data = encapsulation();
data.setName("Brittney"); // 0
data.getName(0); // 'Brittney'
data.rmName(0); // ['Brittney']
// you have no access to the array "people", can only change it via methods provided
```

## Practical closures

==Closures are useful because they let you **associate data (the lexical environment) with a function that operates on that data**. This has obvious parallels to object-oriented programming, where objects allow you to associate data (the object's properties) with one or more methods==.

Consequently, you can use a closure anywhere that you might normally use an object with only a single method.

## References

1. [JavaScript: The Advanced Concepts - Andrei Neagoie](https://www.udemy.com/course/advanced-javascript-concepts/)
2. [Closures - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
3. [What is a Closure? - medium.com](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36#.ecfskj935)
4. [Functions guide - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
