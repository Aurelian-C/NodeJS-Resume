# `Array.prototype.map()`

The `map()` method ==creates a **new array** populated with the **results** of calling a provided **function** on every element in the calling array==.

The `map()` method:

- creates a new array from calling a function for every array element;
- calls a function _once_ for each element in an array;
- does ==not execute the function for empty elements==;
- does ==**not change** the original array==.

## Syntax

```js
// Arrow function
array.map((element) => { ... })
array.map((element, index) => { ... })
array.map((element, index, array) => { ... })

// Callback function
array.map(callbackFn)
array.map(callbackFn, thisArg)

// Inline callback function
array.map(function(element) { ... })
array.map(function(element, index) { ... })
array.map(function(element, index, array){ ... })
array.map(function(element, index, array) { ... }, thisArg)
```

## Parameters

#### ==**callbackFn**==

Function that is ==called for every element of array==. Each time `callbackFn` executes, the returned value is added to new array. The function is called with the following arguments:

- ==element== - the current element being processed in the array.
- ==index== - the index of the current element being processed in the array.
- ==array== - the array `map()` was called upon.

#### `thisArg` _(optional)_

Value to use as `this` when executing `callbackFn`. 

If a `thisArg` parameter is provided, it will be used as callback's `this` value. Otherwise, the value `undefined` will be used as its `this` value.

## Return value

A ==**new** array== with each element being the result of the callback function.

## Some consideration about `map()` method

`map()` calls a provided `callbackFn` function ==_once_ for each element== in an array, _in order_, and ==constructs a new array from the results==. `callbackFn` is invoked only for indexes of the array which have assigned values (including `undefined`). It is not called for missing elements of the array, that is:

- indexes that have never been set;
- indexes which have been deleted.

_Since `map()` builds a new array, using it when you aren't using the returned array is an anti-pattern; use `forEach` or `for...of` instead. You shouldn't be using `map()` if_:

- _you're not using the array it returns_; and/or
- _you're not returning a value from the callback_.

`map()` does ==**not mutate** the array== on which it is called (although `callbackFn`, if invoked, may do so).

The range of elements processed by `map()` is set before the first invocation of `callbackFn`. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by `callbackFn`. If existing elements of the array are changed after the call to `map()`, their value will be the value at the time `callbackFn` visits them. Elements that are deleted after the call to `map()` begins and before being visited are not visited.

The `map()` method is a copying method. It does not alter `this`.

## References

1. [`Array.prototype.map()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
2. [`map()` - w3schools](https://www.w3schools.com/jsref/jsref_map.asp)
