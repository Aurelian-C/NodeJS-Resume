# `Array.prototype.some()`

The `some()` method ==**tests** whether **at least one element** in the array **passes the test** implemented by the **provided function**==. It returns `true` if, in the array, it finds an element for which the provided function returns `true`; otherwise it returns `false`. It ==doesn't mutates the original array==.

The `some()` method:

- checks if any array elements pass a test (provided as a callback function);
- executes the callback function once for each array element;
- if the callback function returns `true` for one of the array elements, `some()` returns `true` and stops;
- returns `false` if the function returns `false` for all of the array elements;
- does not execute the function for empty array elements;
- does not mutates the original array.

## Syntax

```js
// Arrow function
some((element) => { ... } )
some((element, index) => { ... } )
some((element, index, array) => { ... } )

// Callback function
some(callbackFn)
some(callbackFn, thisArg)

// Inline callback function
some(function(element) { ... })
some(function(element, index) { ... })
some(function(element, index, array){ ... })
some(function(element, index, array) { ... }, thisArg)
```

## Parameters

#### ==**callbackFn**== 

A function to test for each element. The function is called with the following arguments:

- ==element== - the current element being processed in the array;
- ==index== - the index of the current element being processed in the array;
- ==array== - the array `some()` was called upon.

#### ==**thisArg**== _(optional)_

A value to use as `this` when executing `callbackFn`.

## Return value

`true` _if the callback function returns a truthy value for at least one element_ in the array. Otherwise, `false`.

## Some considerations about the `some()` method

The `some()` method executes the `callbackFn` function ==_once_ for each element== present in the array until it finds the one where `callbackFn` returns a ==truthy value== (a value that becomes `true` when converted to a Boolean). If such an element is found, `some()` immediately returns `true`. Otherwise, `some()` returns `false`. `callbackFn` is ==invoked only for indexes of the array with assigned values==. It is not invoked for indexes which have been deleted or which have never been assigned values.

`some()` does ==**not mutate** the array== on which it is called.

If a `thisArg` parameter is provided to `some()`, it will be used as the callback's `this` value. Otherwise, the value `undefined` will be used as its `this` value.

The range of elements processed by `some()` is set before the first invocation of `callbackFn`. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by `callbackFn`. If an existing, unvisited element of the array is changed by `callbackFn`, its value passed to the visiting `callbackFn` will be the value at the time that `some()` visits that element's index. Elements that are deleted are not visited.

> **NOTE**: Calling `some()` method on an empty array returns `false` for any condition!

## References

1. [`Array.prototype.some()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
2. [`some()` - w3schools](https://www.w3schools.com/jsref/jsref_some.asp)
