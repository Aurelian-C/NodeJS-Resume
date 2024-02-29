# Spread syntax (`...`) and function calls

Spread syntax `...` allows an ==**iterable**==, such as an ==array== or ==string==, to be ==**expanded**== in places where zero or more arguments (for ==**function** calls==) or elements (for ==**array** literals==) are expected. In an ==**object ** literal== spread syntax allows an _object expression to be expanded_ in places where zero or more key-value pairs are expected.

> **NOTE**: spread operator `...` is an operator that in the end pulls out all elements of an array and gives them to you as a standalone list of elements.

Spread syntax looks exactly like rest syntax. In a way, _spread syntax is the opposite of [rest syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)_. ==Spread syntax **"expands"** an array into its elements, while rest syntax collects multiple elements and **"condenses"** them into a single element==.

```js
// <<<<< Rest syntax >>>>>
function a(param1, ...param2) {
    console.log(param1, param2);
}
a(1, 2, 3, 4, 5); // 1  [2, 3, 4, 5]

// <<<<< Spread syntax >>>>>
const arg = [1, 2, 3, 4, 5];

function a(param1, param2, param3) {
    console.log(param1, param2, param3)
}
a(...arg); // 1 2 3

```

## Syntax

#### For _function calls_:

```js
// pass all elements of iterableObj as arguments to function myFunction
myFunction(a, ...iterableObj, b);
```

#### For _array literals_:

```js
// combine two arrays by inserting all elements from iterableObj
[true, ...iterableObj, '4', 'five', 6];
```

#### For _object literals_:

```js
// pass all key-value pairs from an object
let objClone = { ...obj, key: 'value' };
```

## `spread` syntax vs `rest` syntax (parameters)

Rest syntax `...` looks exactly like Spread syntax `...`. In a way, ==Rest syntax is the opposite of Spread syntax==. ==Spread syntax "**expands**"== an array into its elements, while ==Rest syntax **collects**== multiple elements and "condenses" them into a single element.

## Spread in function calls

### Replace `apply()`

It is common to use `Function.prototype.apply()` in cases where you want to use the elements of an array as arguments to a function.

```js
function myFunction(x, y, z) {}
let args = [0, 1, 2];
myFunction.apply(null, args);
```

With `spread` syntax the above can be written as:

```js
function myFunction(x, y, z) {}
let args = [0, 1, 2];
myFunction(...args);
```

Any argument in the argument list can use `spread` syntax, and the `spread` syntax can be **used multiple times**.

```js
function myFunction(v, w, x, y, z) {}
let args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

### Apply for new operator

When calling a constructor with `new` it's not possible to **directly** use an array and `apply()` (`apply()` does a `[[Call]]` and not a `[[Construct]]`). However, an array can be easily used with new thanks to `spread` syntax:

```js
let dateFields = [1970, 0, 1]; // 1 Jan 1970
let d = new Date(...dateFields);
```

## Spread with many values

==When using spread syntax for function calls, be aware of the possibility of exceeding the JavaScript engine's argument length limit==. See [`Function.prototype.apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) for more details.

## Some considerations about spread syntax

==Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list==. There are three distinct places that accept the spread syntax:

- [Function arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_function_calls) list (`myFunction(a, ...iterableObj, b)`)
- [Array literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_array_literals) (`[1, ...iterableObj, '4', 'five', 6]`)
- [Object literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (`{ ...obj, key: 'value' }`)

Although the syntax looks the same, they come with slightly different semantics.

==Only **iterable** objects, like arrays, can be spread in array and function parameters==. Many objects are not iterable, including all [plain objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) that lack a [`Symbol.iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) method:

```js
const obj = { key1: 'value1' };
const array = [...obj]; // TypeError: obj is not iterable
```

On the other hand, spreading in object literals [enumerates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties#traversing_object_properties) the own properties of the object. ==For typical arrays, all indices are enumerable own properties, so **arrays can be spread into objects**==.

```js
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```

==When using spread syntax for function calls, be aware of the possibility of exceeding the JavaScript engine's argument length limit==. See [`Function.prototype.apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) for more details.

## References

1. [Spread syntax (...) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
1. [ES6 Spread Operator - w3schools](https://www.w3schools.com/react/react_es6_spread.asp)
1. [How to Use the Spread Operator (…) in JavaScript - medium.com](https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab)
