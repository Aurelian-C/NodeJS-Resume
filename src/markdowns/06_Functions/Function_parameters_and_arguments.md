# Function parameters & arguments

Parameters and arguments have slightly different meanings.

```js
function formatNumber(num) {
  return num.toFixed(2);
}

formatNumber(2);
```

In this example, the `num` variable is called the ==function's **parameter**: it's _declared in the bracket-enclosed list of the **function's definition**_==. The function expects the `num` parameter to be a number — although this is not enforceable in JavaScript without writing runtime validation code. In the `formatNumber(2)` call, the number `2` is the ==function's **argument**: it's _the value that is actually passed to the function in the **function call**_==. The argument value can be accessed inside the function body through the corresponding parameter name or the [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object.

## Arguments are _passed by value_ vs objects are _passed by reference_

Arguments are always [*passed by value*](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_reference) and never *passed by reference*. This means that if a function reassigns a parameter, the value won't change outside the function. More precisely, object arguments are [*passed by reference*](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_sharing), which means if the object's properties are mutated, the change will impact the outside of the function. For example:

```javascript
function updateBrand(obj) {
  // Mutating the object is visible outside the function
  obj.brand = "Toyota";
  
  // Try to reassign the parameter, but this won't affect the variable's value outside the function
  obj = null;
}

const car = {
  brand: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(car.brand); // Honda

// Pass object reference to the function
updateBrand(car);

// updateBrand mutates car
console.log(car.brand); // Toyota
```

So JavaScript arguments are passed by value: the function only gets to know the values, not the argument's locations. If a function changes an argument's value, it does not change the parameter's original value. Changes to arguments are not visible (reflected) outside the function.

In JavaScript, object references are values. Because of this, objects will behave like they are passed by reference: if a function changes an object property, it changes the original value. Changes to object properties are visible (reflected) outside the function.

## Function parameters

Each function parameter is a simple identifier that you can access in the local scope.

```js
function myFunc(a, b, c) {
  // You can access the values of a, b, and c here
}
```

There are three special parameter syntaxes:

- **[Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)** allow formal parameters to be initialized with default values if no value or `undefined` is passed.
- The **[rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)** allows representing an indefinite number of arguments as an array.
- **[Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)** allows unpacking elements from arrays, or properties from objects, into distinct variables.

```js
function myFunc({ a, b }, c = 1, ...rest) {
  // You can access the values of a, b, c, and rest here
}
```

Parameters are essentially passed to functions **by value** — so if the code within the body of a function assigns a completely new value to a parameter that was passed to the function, **the change is not reflected globally or in the code which called that function**.

When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function.

==Some functions require **parameters to be specified when you are invoking them** — these are values that need to be included inside the function parentheses, which it needs to do its job properly.== As an example, the browser's built-in `Math.random()` function doesn't require any parameters. When called, it always returns a random number between 0 and 1:

```js
const myNumber = Math.random();
```

The browser's built-in string `replace()` function however needs two parameters — the substring to find in the main string, and the substring to replace that string with:

```js
const myText = 'I am a string';
const newString = myText.replace('string', 'sausage');
```

==Sometimes parameters are **optional** — you don't have to specify them. If you don't, the function will generally adopt some kind of default behavior.== As an example, the array `join()` function's parameter is optional:

```js
const myArray = ['I', 'love', 'chocolate', 'frogs'];

const madeAString = myArray.join(' '); // returns 'I love chocolate frogs'
const madeAnotherString = myArray.join(); // returns 'I,love,chocolate,frogs'
```

## Parameter Rules

- JavaScript function definitions do not specify data types for parameters;
- JavaScript functions do not perform type checking on the passed arguments;
- JavaScript functions do not check the number of arguments received;
- When you need to specify multiple parameters, they are separated by commas.

## Optional parameters

Sometimes parameters are optional — you don't have to specify them. If you don't, the function will generally adopt some kind of default behavior. As an example, the array [`join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) function's parameter is optional:

```js
const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

If no parameter is included to specify a joining/delimiting character, a comma is used by default.

## Default Parameters

==In JavaScript, parameters of functions default to `undefined`. However, in some situations it might be useful to set a different default value. This is exactly what default parameters do.==

In the past, the general strategy for setting defaults was to test parameter values in the body of the function and assign a value if they are `undefined`:

```js
function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
  }
}
```

With *default parameters*, a manual check in the function body is no longer necessary. ==If you're writing a function and want to support optional parameters, you can specify default values by adding `=` after the name of the parameter, followed by the default value==:

```js
function hello(name = 'Chris') {
  console.log(`Hello ${name}!`);
}

hello('Ari'); // Hello Ari!
hello();      // Hello Chris!
```

==Default function parameters allow named parameters to be initialized with default values if no value or `undefined` is passed.== If a function is called with missing arguments (less than declared), the missing values are set to `undefined`. Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter.

### Passing `undefined` vs. other falsy values

In the example below, at the second function call, even if the first argument is set explicitly to `undefined` (though not `null` or other falsy values), the value of the `num` argument is still the default.

```js
function test(num = 1) {
  console.log(typeof num);
}

test(); // 'number' (num is set to 1)
test(undefined); // 'number' (num is set to 1 too)

// test with other falsy values:
test(''); // 'string' (num is set to '')
test(null); // 'object' (num is set to null)
```

### Evaluated at call time

The default argument is evaluated at _call time_. So, unlike (for example) Python, a new object is created each time the function is called.

```js
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); // [1]
append(2); // [2], not [1, 2]
```

### Earlier parameters are available to later default parameters

Parameters defined earlier (to the left) are available to later default parameters:

```js
function greet(name, greeting, message = greeting + ' ' + name) {
  return [name, greeting, message];
}

greet('David', 'Hi'); // ["David", "Hi", "Hi David"]
greet('David', 'Hi', 'Happy Birthday!'); // ["David", "Hi", "Happy Birthday!"]
```

### Parameters without defaults after default parameters

Parameters are still set left-to-right, overwriting default parameters even if there are later parameters without defaults.

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

### Destructured parameter with default value assignment

==You can use default value assignment with the destructuring assignment notation.== A common way of doing that is to assign an empty object/array to the destructured object/array; for example: `[x = 1, y = 2] = []` . By doing it that way, you make it possible to pass an empty array/object to the function and still have those values prefilled:

```js
function preFilledArray([x = 1, y = 2] = []) {
  return x + y;
}

preFilledArray(); // 3
preFilledArray([]); // 3
preFilledArray([2]); // 4
preFilledArray([2, 3]); // 5

// Works the same for objects:
function preFilledObject({ z = 3 } = {}) {
  return z;
}

preFilledObject(); // 3
preFilledObject({}); // 3
preFilledObject({ z: 2 }); // 2
```

## The Arguments Object

==You can refer to a function's arguments within the function by using the [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object. `arguments` is an array-like object containing the arguments passed to the currently executing function.==

Using the `arguments` object, you can call a function with more arguments than it is formally declared to accept. This is often useful if you don't know in advance how many arguments will be passed to the function. You can use `arguments.length` to determine the number of arguments actually passed to the function, and then access each argument using the `arguments` object.

> **NOTE:** The `arguments` variable is "array-like", but not an array. It is array-like in that it has a numbered index and a `length` property. However, it does *not* possess all of the array-manipulation methods.

### Some consideration about `arguments` object

The keyword `arguments` can be dangerous to use in your code as is. In ES6, a few methods were introduced that can help better use `arguments`.

We don't get `arguments` in the global object. If I run `arguments` in the console, I'll get an error "Argument is not defined" because **`arguments` is only available to us when we create a function execution context**. So we got the `arguments` object, but you might remember something? **Remember when we talked about how to help the JavaScript Engine optimize our code, and I told you not to use `arguments`?**

_Now, I said that `arguments` is a little bit dangerous to use. Why is that? Well, because **`arguments` looks like an array, but it's not really an array**, so there are many things that you can do with the `arguments` keyword that might make the Compiler or the JavaScript Engine less able to optimize your code because **you can't really use array methods on `arguments`**. And with the new JavaScript, they introduced a few little tools that we can use so that we avoid using `arguments` because there are some cases where we might want to iterate or loop through `arguments` instead of just accessing them regularly_.

_One way to go about it is to say `console.log(Array.from(arguments))` and `Array.from()` method will create an array from whatever we give it_.

_Another way is to use the `spread` operator_.

**So with modern JavaScript, you most likely want to avoid `arguments`, it's one of those tricky things that was initially added to JavaScript that caused a lot of problems and headache**. _But using the techniques that I've shown you, we can actually convert `arguments` into an array like object so that when you do those operations, it'll be helpful for you_.

```js
// Function Execution Context creates arguments object
function showArgs(arg1, arg2) {
  console.log('arguments: ', arguments);
  console.log(Array.from(arguments));
}

showArgs('hello', 'world');
// arguments: { 0: 'hello', 1: 'world' }
// [ 'hello', 'world' ]

function showArgs2(...args) {
  console.log(console.log('arguments: ', args));
  console.log(Array.from(arguments));
  return `${args[0]} ${args[1]}`;
}

showArgs2('hello', 'world');
// arguments: [ 'hello', 'world' ]
// [ 'hello', 'world' ]
// hello world
```

## References

1. [Functions — reusable blocks of code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)

2. [Default parameters - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

3. [The arguments object - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
