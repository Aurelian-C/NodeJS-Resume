# `Array.prototype.find()`

The `find()` method ==returns the **first element**== in the provided array that satisfies the provided ==testing function==. If no values satisfy the testing function, `undefined` is returned.

The `find()` method:

- returns the value of the first element that passes a test;
- executes a function for each array element;
- does not execute the function for empty elements;
- returns `undefined` if no elements are found;
- does not mutates the original array.

## Syntax

```js
// Arrow function
array.find(element => {...});
array.find((element, index) => {...});
array.find((element, index, array) => {...});

// Callback function
array.find(callbackFn);
array.find(callbackFn, thisArg);

// Inline callback function
array.find(function (element) {...});
array.find(function (element, index) {...});
array.find(function (element, index, array) {...});
array.find(function (element, index, array) {...}, thisArg);
```

## Parameters

#### ==**callbackFn**== 

A function to execute on each value in the array. The function is called with the following arguments:

- ==element== - the current element in the array;
- ==index== - the index (position) of the current element in the array;
- ==array== - the array that find was called on;

> **NOTE**: The `callbackFn` ==**must return a truthy value** to indicate a matching element has been found==.

#### ==**thisArg**== _(optional)_ 

Object to use as `this` inside `callbackFn`.

## Return value

The ==**first element** in the array that satisfies the provided testing function==. Otherwise, `undefined` is returned.

> **NOTE**: One important thing about `find()`, it ==returns the **same object** as you have in the array==, it does ==**not copy** it== or anything like that. So `find()` does not create a copy of the element that return.

## Some considerations about `find()` method

The `find()` method executes the `callbackFn` function ==_once_ for each index== of the array, until the `callbackFn` returns a ==truthy value==. If so, `find()` immediately returns the value of that element. Otherwise, `find()` returns `undefined`.

> **NOTE**: `callbackFn` is ==invoked for every index of the array==, not just those with assigned values. This means it may be less efficient for sparse arrays, compared to methods that only visit assigned values.

If a `thisArg` parameter is provided to `find()`, it will be used as the `this` value inside each invocation of the `callbackFn`. If it is not provided, then `undefined` is used.

The `find()` method does ==not mutate== the array on which it is called, but the function provided to `callbackFn` can. If so, the elements processed by `find()` are set _before_ the first invocation of `callbackFn`. Therefore:

- `callbackFn` will not visit any elements added to the array after the call to `find()` begins.
- Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by `callbackFn`.
- If an existing, yet-unvisited element of the array is changed by `callbackFn`, its value passed to the `callbackFn` will be the value at the time find visits that element's index.
- Elements that are deleted are still visited.

## Tips

- If you need the ==**index**== of the found element in the array, use [`findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex).
- If you need to find the ==**index of a value**==, use [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) (it's similar to [`findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), but checks each element for equality with the value, instead of using a testing function.)
- If you need to find ==if a **value exists** in an array==, use [`includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes). Again, it checks each element for equality with the value, instead of using a testing function.
- If you need to ==find if any **element** satisfies the provided testing function==, use [`some()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some).

## References

1. [`Array.prototype.find()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
2. [`find()` - w3schools](https://www.w3schools.com/jsref/jsref_find.asp)
