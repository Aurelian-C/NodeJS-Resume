# `Array.prototype.filter()`

The `filter()` method ==creates a **new array** with all elements that **pass the test** implemented by the provided **function**==.

The `filter()` method:

- return a new array filled with elements that pass a test provided by a function;
- does not execute the function for empty elements;
- does ==**not mutates** the original== array.

> **Note**: You can use [`Array.prototype.find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) or [`Array.prototype.findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) for ==finding a **single** element/index in an array==, or ==**reduce the amount** of elements in an array== with `filter()` method.

## Syntax

```js
// Arrow function
array.filter((element) => { ... } )
array.filter((element, index) => { ... } )
array.filter((element, index, array) => { ... } )

// Callback function
array.filter(callbackFn)
array.filter(callbackFn, thisArg)

// Inline callback function
array.filter(function(element) { ... })
array.filter(function(element, index) { ... })
array.filter(function(element, index, array){ ... })
array.filter(function(element, index, array) { ... }, thisArg)
```

`filter()` method is a method that expects the `callbackFn` function, which you pass to it to return a value, to be precise it wants `true` or `false`. It wants `true` if the item on which the `callbackFn` function is currently executed should be kept in the newly created array, and `false` if it should be dropped.

## Parameters

#### ==**callbackFn**== 

A function to test each element of the array. Return a value that coerces to `true` to keep the element, or to `false` otherwise. The function is called with the following arguments:

- ==element== - the current element being processed in the array.
- ==index== - the index of the current element being processed in the array.
- ==array== - the array on which `filter()` was called.

#### ==**thisArg**== (optional) 

Value to use as `this` when executing `callbackFn`.

If a `thisArg` parameter is provided to `filter()`, it will be used as the callback's `this` value. Otherwise, the value `undefined` will be used as its `this` value.

## Return value

A ==**new** array== _with the elements that pass the test_. If no elements pass the test, an empty array will be returned.

## Some considerations about `filter()` method

`filter()` calls a provided `callbackFn` function ==_once_ for each element== in an array, and ==constructs a new array== of all the values for which `callbackFn` returns a value that coerces to `true`. `callbackFn` is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. ==Array elements which do not pass the `callbackFn` test are skipped and are not included in the new array==.

`filter()` does ==**not mutate** the array== on which it is called.

The range of elements processed by `filter()` is set before the first invocation of `callbackFn`. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by `callbackFn`. If existing elements of the array are deleted in the same way they will not be visited.

The `filter()` method is a copying method. It does not alter `this` but instead returns a shallow copy that contains the same elements as the ones from the original array (with some filtered out).

## References

1. [`Array.prototype.filter()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
2. [`filter()` - w3schools](https://www.w3schools.com/jsref/jsref_filter.asp)
