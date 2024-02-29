# Function syntax

Broadly speaking, ==JavaScript has **four kinds of functions**==:

- ==**Regular function**: can return anything; always runs to completion after invocation==
- **Generator function**: returns a [`Generator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) object; can be paused and resumed with the [`yield`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield) operator
- ==**Async function**: returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise); can be paused and resumed with the [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) operator==
- **Async generator function**: returns an [`AsyncGenerator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) object; both the `await` and `yield` operators can be used

==For every kind of function, there are **three ways to define it**:==

- ==**Declaration**==

  [`function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function), [`function*`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function), [`async function*`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function*)

- ==**Expression**==

  [`function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function), [`function*`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function*), [`async function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function), [`async function*`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function*)

- ==**Constructor**==

  [`Function()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function), [`GeneratorFunction()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction), [`AsyncFunction()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction), [`AsyncGeneratorFunction()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction)

==In addition, there are special syntaxes for defining **[arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)** and **[methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)**, which provide more precise semantics for their usage. **[Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)** are conceptually not functions (because they throw an error when called without `new`), but they also inherit from `Function.prototype`, and have `typeof MyClass === "function"`.==

```javascript
// Constructor
const multiply = new Function("x", "y", "return x * y");

// Declaration
function multiply(x, y) {
  return x * y;
} // No need for semicolon here

// Expression; the function is anonymous but assigned to a variable
const multiply = function (x, y) {
  return x * y;
};
// Expression; the function has its own name
const multiply = function funcName(x, y) {
  return x * y;
};

// Arrow function
const multiply = (x, y) => x * y;

// Method
const obj = {
  multiply(x, y) {
    return x * y;
  },
};
```

==All syntaxes do approximately the same thing, but there are some subtle **behavior differences**.==

- The `Function()` constructor, `function` expression, and `function` declaration syntaxes **create full-fledged function objects, which can be constructed with [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)**. However, arrow functions and methods **cannot be constructed**. Async functions, generator functions, and async generator functions are **not constructible regardless of syntax**.
- The `function` declaration creates **functions that are [*hoisted*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_hoisting)**. **Other syntaxes do not hoist the function** and the function value is only visible after the definition.
- **The arrow function and `Function()` constructor always create *anonymous* functions**, which means they can't easily call themselves recursively. One way to call an arrow function recursively is by assigning it to a variable.
- **The arrow function syntax does not have access to `arguments` or `this`**.
- **The `Function()` constructor cannot access any local variables** — it only has access to the global scope.
- The `Function()` constructor causes runtime compilation and is often slower than other syntaxes.

==For `function` expressions, there is a distinction between the function name and the variable the function is assigned to. The function name cannot be changed, while the variable the function is assigned to can be reassigned. The function name can be different from the variable the function is assigned to — they have no relation to each other. The function name can be used only within the function's body.== Attempting to use it outside the function's body results in an error (or gets another value, if the same name is declared elsewhere). For example:

```js
const y = function x() {};
console.log(x); // ReferenceError: x is not defined
```

On the other hand, the variable the function is assigned to is limited only by its scope, which is guaranteed to include the scope in which the function is declared.

A function declaration also creates a variable with the same name as the function name. Thus, unlike those defined by function expressions, functions defined by function declarations can be accessed by their name in the scope they were defined in, as well as in their own body.

A function defined by a function expression or by a function declaration inherits the current scope. That is, the function forms a closure. On the other hand, a function defined by a `Function` constructor does not inherit any scope other than the global scope (which all functions inherit).

Functions defined by function expressions and function declarations are parsed only once, while a function defined by the `Function` constructor parses the string passed to it each and every time the constructor is called. Although a function expression creates a closure every time, the function body is not reparsed, so function expressions are still faster than `new Function(...)`. Therefore the `Function` constructor should generally be avoided whenever possible.

## Defining functions

JavaScript functions are defined with the `function` keyword. You can use a ==function **declaration**== or a ==function **expression**==.

### Function declarations

==A JavaScript function declaration is defined with the `function` keyword, followed by a **name**, followed by parentheses `()`.==

==Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).== The parentheses may include parameter names separated by commas: (**parameter1**, **parameter2**, ...). The code to be executed, by the function, is placed inside curly brackets `{}`.

Function **parameters** are listed inside the parentheses () in the function definition. Function **arguments** are the **values** received by the function when it is invoked. ==Inside the function, the **arguments (the parameters) behave as local variables**==.

Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

```js
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

### Function expressions

A JavaScript function can also be defined using an **expression**. ==A function expression can be **stored in a variable**==:

```js
const x = function (a, b) {
  return a * b;
};
```

==After a function expression has been stored in a variable, the variable can be used as a function==:

```js
const x = function (a, b) {
  return a * b;
};
let z = x(4, 3);
```

### Anonymous functions

The function above is actually an ==**anonymous function** (_a function without a name_)==. Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

==However, a name *can* be provided with a function expression.== Providing a name allows the function to refer to itself, and also makes it easier to identify the function in a debugger's stack traces:

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
```

Function expressions are convenient when passing a function as an argument to another function.

## Arrow Functions

If you pass an anonymous function like this, there's an alternative form you can use, called an **arrow function**. Instead of `function(event)`, you write `(event) =>`:

```js
textBox.addEventListener('keydown', (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

If **the function only has one line in the curly brackets**, you omit the curly brackets:

```js
textBox.addEventListener('keydown', (event) => console.log(`You pressed "${event.key}".`));
```

If **the function only takes one parameter**, you can also omit the brackets around the parameter:

```js
textBox.addEventListener('keydown', event => console.log(`You pressed "${event.key}".`));
```

Finally, **if your function needs to return a value, and contains only one line**, you can also omit the `return` statement. In the following example we're using the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method of `Array` to double every value in the original array:

```js
const originals = [1, 2, 3];

const doubled = originals.map((item) => item * 2);

console.log(doubled); // [2, 4, 6]
```

==Arrow functions allows a **short syntax** for writing **function expressions**. You don't need the function keyword, the return keyword, and the curly brackets.==

```js
// ES5
var x = function (x, y) {
  return x * y;
};

// ES6
const x = (x, y) => x * y;
```

==Arrow functions do not have their own `this` keyword. They are not well suited for defining object methods.==

==Arrow functions are not hoisted. They must be defined before they are used.== Using `const` is safer than using `var`, because a function expression is always constant value.

==Two factors influenced the introduction of arrow functions: **shorter functions** and **non-binding of `this`**==:

- No separate [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this): until arrow functions, every new function defined its own `this` value (a new object in the case of a constructor, undefined in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) function calls, the base object if the function is called as an "object method", etc.). This proved to be less than ideal with an object-oriented style of programming. ==An arrow function does not have its own `this`; the `this` value of the enclosing execution context is used.==

## References

1. [Functions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
2. [Functions guide - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
3. [Function expression - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
4. [Anonymous functions - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#anonymous_functions_and_arrow_functions)
5. [Arrow function expressions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
