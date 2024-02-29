# `Array.prototype.forEach()`

The `forEach()` method ==**executes** a provided **function** _once_ for each array element==. The `forEach()` method is ==not executed for empty elements==.

The `forEach()` method:

- calls a function for each element in an array;
- is not executed for empty elements.

## Syntax

```js
// Arrow function
array.forEach((element) => { ... })
array.forEach((element, index) => { ... })
array.forEach((element, index, array) => { ... })

// Callback function
array.forEach(callbackFn)
array.forEach(callbackFn, thisArg)

// Inline callback function
array.forEach(function(element) { ... })
array.forEach(function(element, index) { ... })
array.forEach(function(element, index, array){ ... })
array.forEach(function(element, index, array) { ... }, thisArg)
```

## Parameters

#### ==**callbackFn**==

A function to execute on each element. The function is called with the following arguments:

- ==element== - the current element being processed in the array;
- ==index== - the index of element in the array;
- ==array== - the array `forEach()` was called upon.

#### ==**thisArg**== _(optional)_

A value to use as `this` when executing `callbackFn`.

## Return value

`undefined`.

## Some considerations about `forEach()` method

`forEach()` calls a provided `callbackFn` function ==_once_ for each element== in an array in ==ascending index order==. It is not invoked for index properties that have been deleted or are uninitialized. Unlike `map()` or `reduce()` methods, `forEach()` ==always returns the value **undefined** and is **not chainable**==. The typical use case is to execute side effects at the end of a chain.

`callbackFn` is invoked only for array indexes which have assigned values. It is not invoked for empty slots in [sparse arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

If a `thisArg` parameter is provided to `forEach()`, it will be used as callback's `this` value.

The range of elements processed by `forEach()` is set before the first invocation of `callbackFn`. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by `callbackFn`. If existing elements of the array are changed or deleted, their value as passed to `callbackFn` will be the value at the time `forEach()` visits them; elements that are deleted before being visited are not visited. If elements that are already visited are removed (e.g. using `shift()`) during the iteration, later elements will be skipped.

`forEach()` does ==**not mutate** the array== on which it is called (however, `callbackFn` may do so).

> **NOTE**: There is ==no way to **stop** or **break**== a `forEach()` loop ==other than by throwing an exception==. If you need such behavior, the `forEach()` method is the wrong tool. Early termination may be accomplished with:
>
> - A simple [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop
> - A [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) / [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loops
> - [`Array.prototype.every()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
> - [`Array.prototype.some()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
> - [`Array.prototype.find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
> - [`Array.prototype.findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
>
> Array methods: `every()`, `some()`, `find()`, and `findIndex()` ==test== the array elements with a predicate returning a truthy value to determine if further iteration is required.

`forEach()` ==expects a **synchronous** function==. `forEach()` does ==**not wait for Promises**==. Make sure you are aware of the implications while using Promises (or async functions) as `forEach()` callback.

```js
const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) = a + b;

ratings.forEach(async rating = {
  sum = await sumFunction(sum, rating);
});

console.log(sum);
// Naively expected output: 14
// Actual output: 0
```

## Example

```js
const prices = [10.99, 8.89, 4.96, 6.45];
const tax = 0.19;
const taxAdjustedPrices = [];

prices.forEach(price => {
  taxAdjustedPrices.push(price * (1 + tax));
});
```

## References

1. [`Array.prototype.forEach()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
2. [`forEach()` - w3schools](https://www.w3schools.com/jsref/jsref_foreach.asp)
