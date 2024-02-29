# `Array.prototype.reduce()`

The `reduce()` method executes a user-supplied =="**reducer**" callback function== on each element of the array, _in order_, ==passing in the return value from the calculation on the preceding element==. The final result of running the reducer across all elements of the array is a ==single value==.

> **NOTE**: The idea behind `reduce()` method is to ==reduce an array to a **single value**==.

_The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0)_.

The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step — until there are no more elements to add.

The reduce() method:

- executes a ==reducer function== for array element;
- ==returns a single value== (the function's accumulated result);
- does not execute the function for empty array elements;
- does ==not change the original== array.

## Syntax

```js
// Arrow function
reduce((previousValue, currentValue) => { ... } )
reduce((previousValue, currentValue, currentIndex) => { ... } )
reduce((previousValue, currentValue, currentIndex, array) => { ... } )
reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function(previousValue, currentValue) { ... })
reduce(function(previousValue, currentValue, currentIndex) { ... })
reduce(function(previousValue, currentValue, currentIndex, array) { ... })
reduce(function(previousValue, currentValue, currentIndex, array) { ... }, initialValue)
```

## Parameters

==**`callbackFn`**== - a "reducer" function. The function is called with the following arguments:

- ==previousValue==: the value resulting from the previous call to `callbackFn`. On first call, `initialValue` if specified, otherwise the value of `array[0]`.
- ==currentValue==: the value of the current element. On first call, the value of `array[0]` if an `initialValue` was specified, otherwise the value of `array[1]`.
- ==currentIndex==: the index position of `currentValue` in the array. On first call, 0 if `initialValue` was specified, otherwise 1.
- ==array==: the array to traverse.

==**`initialValue`**== (optional) - a value to which `previousValue` is initialized the first time the callback is called. If `initialValue` is specified, that also causes `currentValue` to be initialized to the first value in the array. If `initialValue` is not specified, `previousValue` is initialized to the first value in the array, and `currentValue` is initialized to the second value in the array.

## Return value

The ==value== that results from running the "reducer" callback function to completion over the entire array. If the array contains no elements and `initialValue` is not provided, a `TypeError` will be thrown.

## Some considerations about the `reduce()` method

==The `reduce()` method takes two arguments: a **callback function** and an optional **initial value**. If an initial value is provided, `reduce()` calls the "reducer" callback function on each element in the array, _in order_. If no initial value is provided, `reduce()` calls the callback function on each element in the array after the first element==.

_`reduce()` returns the value that is returned from the callback function on the final iteration of the array_.

The `reduce()` method itself does ==**not mutate** the array== it is used on. However, it is possible for code inside the callback function to mutate the array. These are the possible scenarios of array mutations and how `reduce()` behaves in these scenarios:

- If elements are appended to the array _after_ `reduce()` begins to iterate over the array, the callback function does not iterate over the appended elements.
- If existing elements of the array do get changed, the values passed to the callback function will be the values from the time that `reduce()` was first called on the array.
- Array elements that are deleted _after_ the call to `reduce()` begins and before being iterated over are not visited by `reduce()`.

If the array only has one element (regardless of position) and no `initialValue` is provided, or if `initialValue` is provided but the array is empty, the solo value will be returned without calling `callbackFn`.

If `initialValue` is provided and the array is not empty, then the `reduce()` method will always invoke the callback function starting at index 0. If `initialValue` is not provided then the reduce method will act differently for arrays with `length` larger than 1, equal to 1 and 0, as shown in the following example:

```js
const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1
[1, 100].reduce(getMax); // 100

// callback is not invoked
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1

[].reduce(getMax); // TypeError
```

### When to not use `reduce()`

Recursive functions like `reduce()` can be powerful but sometimes ==difficult to understand==, especially for less experienced JavaScript developers. If code becomes clearer when using other array methods, developers must weigh the readability tradeoff against the other benefits of using `reduce()`. In cases where `reduce()` is the best choice, documentation and semantic variable naming can help mitigate readability drawbacks.

## References

1. [`Array.prototype.reduce()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
2. [`reduce()` - w3schools](https://www.w3schools.com/jsref/jsref_reduce.asp)
