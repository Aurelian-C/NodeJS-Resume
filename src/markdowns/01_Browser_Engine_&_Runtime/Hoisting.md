# Hoisting

Hoisting refers to the process whereby the Compiler appears to move the ==**declaration of functions**==, ==**variables**== or ==**classes**== to the top of their scope/environments, prior to execution of the code.

The Compiler is not physically moving variables or function declarations all the way up, at the top of the code. It looks like it may, but what it's doing is simply having one pass through the code and assign memory  for variables and function declarations into the Memory Heap. 

Behavior of hoisting is because the JavaScript Engine allocate memory for the variables and function declarations that it sees in your code during the Global Execution Context - creation phase, before of Global Execution Context - execution phase. 

![global_execution_context](../../img/global_execution_context.jpg)

==Hoisting happens on every execution context: global and function. **First hoisting is happen in the global execution context**, but any time we call a function a **_new_ execution context gets created (function execution context)**, and **we have to go through the creation phase and execution phase _again_**==.

![function_execution_context](../../img/function_execution_context.jpg)

==Variables are **partially hoisted**==, that means only the variable is hoisted, not the actual value that is stored in it. ==Function declarations are **fully hoisted**==.

Hoisting allows function declarations to be safely used in code before they are declared.

Variable and class declarations are also hoisted, so they too can be referenced before they are declared. Note that doing so can lead to unexpected errors, and is not generally recommended.

## Function hoisting

==Function **declarations** are fully **hoisted**==. One of the advantages of hoisting is that it lets you use a function declarations before you declare it in your code.

```js
catName('Tiger'); // "My cat's name is Tiger"

function catName(name) {
  console.log(`My cat's name is ${name}`);
}

// Without hoisting you would have to write the same code like this
function catName(name) {
  console.log(`My cat's name is ${name}`);
}

catName('Tiger'); // "My cat's name is Tiger"
```

==Function **expressions** are **not hoisted**==. Therefore, you cannot use function expressions before defining them.

```js
catName('Tiger'); // Uncaught ReferenceError: catName is not defined

const catName = function (name) {
  console.log(`My cat's name is ${name}`);
}
```

## Variable hoisting

Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.

However, ==JavaScript only **hoists declarations, not initializations!**== This means that initialization doesn't happen until the associated line of code is executed, even if the variable was originally initialized then declared, or declared and initialized in the same line. Until that point in the execution is reached, the variable has its ==**default initialization**== (`undefined` for a variable declared using `var`), otherwise ==**uninitialized**== for ```let``` and ```const```).

Below are some examples showing _what can happen if you use a variable before it is declared_.

### `var` hoisting

Here we declare and then initialize the value of a `var` after using it. The ==**default initialization**== of the `var` is `undefined`.

```js
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.
```

The same thing happens if we declare and initialize the variable in the same line.

```js
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num = 6; // Initialization and declaration.
console.log(num); // Returns 6 after the line with initialization is executed.
```

### `let` and `const` hoisting

Variables declared with `let` and `const` are also ==hoisted== but, unlike `var`, are ==**not initialized with a default value**==. An exception will be thrown if a variable declared with `let` or `const` is read before it is initialized.

```js
console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
let num = 6; // Initialization
```

Note that it is the order in which code is _executed_ that matters, not the order in which it is written in the source file. The code will succeed provided the line that initializes the variable is executed before any line that reads it.

### `class` hoisting

Classes defined using a ==class **declaration** are **hoisted**==, which means that JavaScript has a reference to the class. However ==the class is **not initialized by default**==, so any code that uses it before the line in which it is initialized is executed will throw a `ReferenceError`.

### Function and class expression hoisting

[Function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function) and [class expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#class_expressions) are ==not hoisted==.

The expressions evaluate to a function or class (respectively). They are typically then assigned to a variable or passed to other functions. In this case, the variable declaration is hoisted and the expression is its initialization. Therefore the expressions are not evaluated until the relevant line is executed.

## Important !!!

==Hoisting happens on every execution context: global and function.==

==**First hoisting is happen in the global execution context**, but any time we call a function a **_new_ execution context gets created (function execution context)**, and **we have to go through the creation phase and execution phase _again_**==.

```js
var favoriteFood = "grapes";

var foodThoughts = function() {
	console.log(`Original favorite food: ${favoriteFood}`);
	var favoriteFood = "sushi";
  	console.log(`New favorite food: ${favoriteFood}`);
};

foodThoughts();
// console.log('Original favorite food: undefined');
// console.log('New favorite food: sushi');

```

Behind the scene of what hoisting is does with the above code:

```js
var favoriteFood = undefined; //Hoisting is happen in the global execution context
var foodThoughts = undefined; //Hoisting is happen in the global execution context

favoriteFood = "grapes";

foodThoughts = function() { 
  	var favoriteFood = undefined; //Hoisting is happen in the function execution context
    
	console.log(`Original favorite food: ${favoriteFood}`);
	favoriteFood = "sushi";
  	console.log(`New favorite food: ${favoriteFood}`);
};

foodThoughts();
```

## References

1. [Hoisting - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
2. [JavaScript Hoisting - w3schools](https://www.w3schools.com/js/js_hoisting.asp)
3. [JavaScript: The Advanced Concepts - Andrei Neagoie](https://www.udemy.com/course/advanced-javascript-concepts/)
