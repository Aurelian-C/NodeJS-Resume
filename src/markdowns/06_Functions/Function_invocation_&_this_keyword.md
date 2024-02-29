# Function invocation & `this` keyword

## What is ```this```?

![what_is_this](../../img/what_is_this.jpg)

```js
// 'this' keyword refers to global window object
function a() {
    console.log(this)
}
a() // Window {0: Window, 1: Window, window: Window, document: document, …}
window.a() // Window {0: Window, 1: Window, window: Window, document: document, …}
// calling a() is same as calling window.a()

// 'this' keyword refers to someObject object
const someObject = {
    a() {
        console.log(this);
    }
}
someObject.a() //{a: ƒ}
```

==In JavaScript, the `this` keyword refers to an **object**: which object depends on how the function that has the `this` inside of it is being invoked (used or called). The `this` keyword ==**refers to different objects** depending on how the function that have ```this``` inside of it is used/called/invoked==:

- In an _object method_, `this` refers to the object;
- _Alone_, `this` refers to the global ```window``` object;
- _Alone, in Strict Mode_, `this` is ```undefined```;
- In a _function_, `this` refers to the global ```window ```object;
- In a _function, in Strict Mode_, `this` is `undefined`;
- In an _event_, `this` refers to the element that received the event;
- _Arrow function_ don't have their own ```this```;
- Methods like `call()`, `apply()`, and `bind()` can refer `this` to any object.

![the_value_of_this_keyword](../../img/the_value_of_this_keyword.jpg)

> **IMPORTANT**: ==`this` is not a variable, `this` is a keyword. You cannot change the value of `this`. The value of ```this``` is always set **when the function is invoked**, not when the function is declared==.

## All functions are methods

==In JavaScript **all functions are object methods**. If a function is not a method of a JavaScript object, it is a function of the global `window` object== (see "Invoking a function as a global function" below).

### Invoking a function as a global function

When a function is called without an owner object, the value of ```this``` becomes the global ```window``` object. This example returns the ```window``` object as the value of ```this```:

```js
function myFunction() {
  return this;
}

let x = myFunction(); // x will be the window object
```

Invoking a function as a global function, causes the value of ```this``` to be the global ```window``` object. Using the ```window``` object as a variable can easily crash your program.

### Invoking a function as a method

In JavaScript you can define functions as object methods. An object method is a property containing a function definition, so ==methods are functions stored as object properties==.

The following example creates an object ```myObject```, with two properties ```firstName``` and ```lastName```, and a method ```fullName```:

```js
const myObject = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
myObject.fullName(); // Will return "John Doe"
```

The ```fullName``` method is a function (method). The function (method) belongs to the ```myObject ```object. ```myObject``` is the owner of the function (method). The thing called ```this``` is the object that "owns" the JavaScript code. In this case the value of ```this``` is ```myObject```.

> **NOTE**: ==**Invoking a function as an object method, causes the value of ```this``` to be the object itself.** ```this ``` keyword was created to **gives methods access to their object**. It gives ```fullName``` access to the ```myObject```, so that ```fullName``` can use properties and methods that are within ```myObject``` object==.

With ```this``` keyword you can ==execute the same code for multiple objects==. You write a function once and multiple objects can use that function, every object with his own ```this```:

```js
// With this approach you can change the code only in the "importantPerson" function and both objects are going to get the changes.

function importantPerson() {
    console.log(`My name is ${this.name}`);
}

const name = 'Sunny';

const person1 = {
    name: 'Arnold',
    importantPerson
}

const person2 = {
    name: 'Bruzli',
    importantPerson
}

person1.importantPerson() //My name is Arnold
person2.importantPerson() //My name is Bruzli

// Remeber that "this" is the object that the function is a property of
importantPerson() //My name is Sunny
window.importantPerson() //My name is Sunny
```

==The ```this``` keyword acts as a **placeholder** for an object, and it we'll refer to whichever object called that function/method==.

```js
const a = function() {
  console.log("a", this);
  const b = function() {
    console.log("b", this);
    const c = {
      hi: function() {
        console.log("c", this);
      }
    };
    c.hi(); // the obj "c" called function
};
  b(); // ran by a window.a(b())
};

a(); // called by window
// a Window {…}
// b Window {…}
// c {hi: ƒ}
```

### Invoking a function with a Function Constructor

==If a function invocation is preceded with the ```new``` keyword, it is a constructor invocation.== It looks like you create a new function, but since JavaScript functions are objects you actually create a new object:

```js
// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName = arg2;
}

// This creates a new object
const myObj = new myFunction('John', 'Doe');

// This will return "John"
myObj.firstName;
```

A constructor invocation creates a new object. The new object inherits the properties and methods from its constructor.

> **NOTE**: ==The ```this``` keyword in the constructor does not have a value. The value of ```this``` will be the new object created when the function is invoked==.

## ```this``` & Dynamic Scope vs Lexical Scope

A big gotcha for a lot of people working with ```this``` is when a _function is ran inside of another function_. It gets a little confusing, but we can remember ==who called the function==.

```js
const obj = {
  name: "Billy",
  sing() {
    console.log("a", this);          // a {name: "Billy", sing: ƒ}
    var anotherFunc = function() {
      console.log("b", this);        // b Window {…}
    };
    anotherFunc();
  }
};

obj.sing();
// a {name: "Billy", sing: ƒ}
// b Window {…} //functions inside of method is, well, a function inside of a function. That means 'this' keyword is not assigned to the object itself, but actually to the 'window' object. "this" is not lexically scoped, it doesn't matter where "this" is write in our code, it matters how the function was called.
```

==The ```this``` keyword is **not lexically scoped**, it doesn't matter where ```this``` is write in our code, it matters **how the function was called**==. Everything in JavaScript is actually lexically scoped, where you write your code determines what we have available, except for the ```this``` keyword. ==The ```this``` keyword is actually **dynamically scoped**, it doesn't matter where ```this``` is written, it matters how the function was called==.

## ```this``` & arrow functions

==Arrow functions are lexically bound==, arrow functions has a lexical ```this``` behavior unlike normal functions. ==Arrow functions don't have their own ```this```, it will lexically bound ```this``` to the surrounding object !!!==

```js
const obj = {
  name: "Billy",
  sing() {
    console.log("a", this);          // a {name: "Billy", sing: ƒ}
    var anotherFunc = () => {        // arrow function don't have their own "this"
      console.log("b", this);        // b {name: "Billy", sing: ƒ}
    };
    anotherFunc();
  }
};

obj.sing();
// a {name: "Billy", sing: ƒ}
// b {name: "Billy", sing: ƒ}
```

## References

1. [The JavaScript this Keyword - w3schools](https://www.w3schools.com/js/js_this.asp)
2. [this - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
3. [JavaScript: The Advanced Concepts - Andrei Neagoie](https://www.udemy.com/course/advanced-javascript-concepts/)
