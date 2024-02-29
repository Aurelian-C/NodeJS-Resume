# `Array.prototype.flat()`

The `flat()` method ==creates a **new array** with **all sub-array elements concatenated into it** recursively up to the **specified depth**==.

## Syntax

```js
array.flat();
array.flat(depth);
```

## Parameters

==**depth**== (optional) - the depth level specifying ==how deep a nested array structure should be flattened==. Defaults to 1.

## Return value

A ==**new array** with the sub-array elements concatenated into it==.

## Some considerations about `flat()` method

The `flat()` method is a copying method. It does not alter `this` but instead returns a shallow copy that contains the same elements as the ones from the original array.

## Example

```js
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

## References

1. [`Array.prototype.flat()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
