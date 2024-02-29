# `Array.prototype.flatMap()`

The `flatMap()` method ==returns a new array== formed by applying a given ==callback function to each element of the array==, and ==then flattening the result by one level==. It is identical to a `map()` followed by a `flat()` of depth 1, but slightly more efficient than calling those two methods separately.

## Syntax

```js
// Arrow function
array.flatMap((currentValue) => { ... } )
array.flatMap((currentValue, index) => { ... } )
array.flatMap((currentValue, index, array) => { ... } )

// Callback function
array.flatMap(callbackFn)
array.flatMap(callbackFn, thisArg)

// Inline callback function
array.flatMap(function(currentValue) { ... })
array.flatMap(function(currentValue, index) { ... })
array.flatMap(function(currentValue, index, array){ ... })
array.flatMap(function(currentValue, index, array) { ... }, thisArg)
```

## Parameters

#### ==**callbackFn**== 

A function that produces an element of the new Array. The function is called with the following arguments:

- ==currentValue== - the current element being processed in the array;
- ==index== - the index of the current element being processed in the array;
- ==array== - the array `flatMap()` was called upon.

#### ==**thisArg**== _(optional)_

Value to use as `this` when executing `callbackFn`.

## Return value

A ==**new array**== with each element being the result of the callback function and flattened to a depth of 1.

## References

1. [`Array.prototype.flatMap()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
