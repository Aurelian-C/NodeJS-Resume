# `Array.prototype.every()`

The `every()` method ==tests whether **all elements** in the array **pass the test** implemented by the **provided function**==. It ==**returns a Boolean** value==.

The `every()` method:

- executes a function for each array element;
- returns `true` if the function returns `true` for all elements;
- returns `false` if the function returns `false` for one element;
- does not execute the function for empty elements;
- does not mutates the original array.

## Syntax

```js
// Arrow function
array.every((element) => { ... } )
array.every((element, index) => { ... } )
array.every((element, index, array) => { ... } )

// Callback function
array.every(callbackFn)
array.every(callbackFn, thisArg)

// Inline callback function
array.every(function(element) { ... })
array.every(function(element, index) { ... })
array.every(function(element, index, array){ ... })
array.every(function(element, index, array) { ... }, thisArg)
```

## Parameters

#### ==**callbackFn**==

A function to test for each element. The function is called with the following arguments:

- ==element== - the current element being processed in the array;
- ==index== - the index of the current element being processed in the array;
- ==array== - the array `every()` was called upon.

#### ==**thisArg**== _(optional)_

A value to use as `this` when executing `callbackFn`.

## Return value

`true` if the `callbackFn` function returns a truthy value for every array element. Otherwise, `false`.

## Some considerations about the `every()` method

The `every()` method executes the provided `callbackFn` function ==_once_ for each element== present in the array until it finds the one where `callbackFn` returns a ==falsy value==. If such an element is found, the `every()` method immediately returns `false`. Otherwise, if `callbackFn` returns a ==truthy value== for all elements, `every()` returns `true`.

`callbackFn` is ==invoked only for array indexes which have assigned values==. It is not invoked for indexes which have been deleted, or which have never been assigned values.

If a `thisArg` parameter is provided to `every()`, it will be used as callback's `this` value. Otherwise, the value `undefined` will be used as its `this` value.

`every` does ==**not mutate** the array== on which it is called.

The range of elements processed by `every()` is set before the first invocation of `callbackFn`. Therefore, `callbackFn` will not run on elements that are appended to the array after the call to `every()` begins. If existing elements of the array are changed, their value as passed to `callbackFn` will be the value at the time `every()` visits them. Elements that are deleted are not visited.

> **NOTE**: Calling `every()` method on an empty array will return `true` for any condition!

## References

1. [`Array.prototype.every()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
2. [`every()` - w3schools](https://www.w3schools.com/jsref/jsref_every.asp)
