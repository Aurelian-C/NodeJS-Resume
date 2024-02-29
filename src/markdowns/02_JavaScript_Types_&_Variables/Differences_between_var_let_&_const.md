# `var` vs `let` vs `const`

Back when JavaScript was first created, `var` was the only way to declare variables. The design of `var` is confusing and error-prone. So `let` and `const` was created in modern versions of JavaScript, new keywords for creating variables that works somewhat differently to `var`, fixing its issues in the process.

## Declaration, initialization & hoisting

If you write a multiline JavaScript program that declares and initializes a variable, you can actually declare a variable with `var` after you initialize it and it will still work. This behavior happens because of _hoisting_.

```js
myName = 'Chris'; //No error
var myName;
```

Variables declared with `let` and `const` are also hoisted but, unlike `var`, are ==**not initialized with a default value**==. An exception will be thrown if a variable declared with `let` or `const` is read before it is initialized. This is a good thing — declaring a variable after you initialize it results in confusing, harder to understand code.

```js
myName = 'Chris';
let myName; // Uncaught ReferenceError: Cannot access 'myName' before initialization
```

```js
myName = 'Chris';
const myName; // Uncaught SyntaxError: Missing initializer in const declaration
```

`let` and `const` variables cannot be read/written until they have been declared.

## Scope

`let` and `const` allows you to declare variables that are ==limited to the scope of a block statement _or_ expression on which it is used==, unlike the `var` keyword, which declares a variable globally or locally to an entire function, regardless of block scope.

Variables declared by `let` and `const` have their scope in the block for which they are declared, as well as in any contained sub-blocks. In this way, `let` works very much like `var`. The main difference is that the scope of a `var` variable is the entire enclosing function. Accessing the variable before the declaration results in a `ReferenceError`. This differs from `var` variables, which will return a value of `undefined` if they are accessed before they are declared.

```js
// var is only function scoped, NOT block scoped
var a = 1;
if (6 > 3) {
  var a = 2;
}
console.log(a); //2

// let & const are function & block scoped
let a = 1;
const b = 1;
if (6 > 3) {
  let a = 2;
  const b = 2;
}
console.log(a); //1
console.log(b); //1
```

## Initialization

If `var` isn't initialized at declaration, initial value is `undefined`.

```js
var myName;
myName; // undefined
```

If `let` isn't initialized at declaration, initial value is `undefined`.

```js
let myName;
myName; // undefined
```

An initializer for a `const` variable is **required**. You must specify its value in the same statement in which it's declared.

```js
const myName; // Uncaught SyntaxError: Missing initializer in const declaration
```

## Duplicate variable declarations (Redeclarations)

Duplicate variable declarations using `var` will not trigger an error, even in "strict mode", and the variable will not lose its value, unless another assignment is performed.

```js
// The following would work:
var myName = 'Chris';
var myName = 'Bob';
```

Duplicate variable declarations within the same function or block scope using `let` raises a `SyntaxError`.

```js
// The following would throw an error on the second line:
let myName = 'Chris';
let myName = 'Bob'; // Uncaught SyntaxError: Identifier 'myName' has already been declared

// You'd have to do this instead:
let myName = 'Chris';
myName = 'Bob';
```

Duplicate variable declarations within the same function or block scope using `const` raises a `SyntaxError`. The ==value of a constant can't be changed through reassignment== (i.e. by using the assignment operator), and it ==can't be redeclared== (i.e. through a variable declaration). However, ==if a constant is an object or array its properties or items can be updated or removed==. Global constants do not become properties of the `window` object, unlike `var` variables.

```js
// The following would throw an error on the second line:
const myName = 'Chris';
const myName = 'Bob'; // Uncaught SyntaxError: Identifier 'myName' has already been declared

// If the `const` variable store an object, only the object can be redefined but the variable can NOT be reassignmen to another value/object
const myName = { firstName: 'Tom', lastName: 'Cruise' };
myName.firstName = 'Brad';
```

Again, this is a sensible language decision. ==**There is no reason to redeclare variables**== — it just makes things more confusing. For these reasons and more, we recommend that you use `let` or `const` in your code, rather than `var`. There is no reason to use `var`, unless you need to support Internet Explorer 10 or older with your code.

## Global object (`window`)

In the **global context**, a variable declared using `var` is added as a non-configurable property of the global object but `let` and `const` does not create properties of the `window` object when declared globally.

```js
// Variable declared using `var` is a property of the global object (window)
var myName = 'Tom';
window.myName; // Tom

// `let` does not create properties of the global object (window)
let myName = 'Tom';
window.myName; // undefined

// `const` does not create properties of the global object (window)
const myName = 'Tom';
window.myName; // undefined
```

## When to use `const` and when to use `let`

If you can't do as much with `const` as you can with `let`, why would you prefer to use it rather than `let`? In fact `const` is very useful. If you use `const` to name a value, it tells anyone looking at your code that this name will never be assigned to a different value. Any time they see this name, they will know what it refers to.

You can following the principle about when to use `let` and when to use `const`: ==**Use** `const` **when you can, and use** `let` **when you have to**. This means that if you can initialize a variable when you declare it and don't need to reassign it later, make it a constant==.

## Summary:

|                                                 |                       `var`                        |                       `let`                       |                      `const`                      |
| :---------------------------------------------- | :------------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------------: |
| Hoisting                                        | Yes, initialized with a default value (`undefind`) |   Yes, but NOT initialized with a default value   |   Yes, but NOT initialized with a default value   |
| Can be used before it's declared?               |                        Yes                         |                        No                         |                        No                         |
| Scope                                           |                 Global & Function                  |                 Function & Block                  |                 Function & Block                  |
| Global object (window)                          |      Create properties of the `window` object      | Does NOT create properties of the `window` object | Does NOT create properties of the `window` object |
| Optionally initialization                       |                        Yes                         |                        Yes                        |                        No                         |
| Initialization                                  |                    `undefined`                     |                    `undefined`                    |       Required initialization when declared       |
| Duplicate variable declarations (redeclaration) |                        Yes                         |                        No                         |                        No                         |

## References

1. [Storing the information you need — Variables - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)

2. [var - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting)

3. [let - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

4. [const - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

5. [Hoisting - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting#:~:text=let%20and%20const%20hoisting,read%20before%20it%20is%20initialized.)
