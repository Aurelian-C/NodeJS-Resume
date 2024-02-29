# `Array.prototype.slice()`

The `slice()` method ==returns a **shallow copy**== of ==a **portion** of an array== into a new array object selected from `startIndex` to `endIndex` (`endIndex` not included), where `startIndex` and `endIndex` represent the index of items in that array.

==The original array will not be modified==.

The `slice()` method:

- returns selected elements in an array, as a new array;
- selects from a given *start index*, up to a (not inclusive) given *end index*;
- does not mutates the original array.

## Syntax

```javascript
array.slice()
array.slice(startIndex)
array.slice(startIndex, endIndex)
```

## Parameters

#### ==**startIndex**== _(optional)_

Zero-based index at which to start extraction.

A negative index can be used, indicating an offset from the end of the sequence. `array.slice(-2)` extracts the last two elements in the sequence. 

If `startIndex` is `undefined`, slice starts from the index `0`.

If `startIndex` is greater than the index range of the sequence, an empty array is returned.

#### ==**endIndex**== _(optional)_

The ==index of the **first element to exclude** from the returned array==. `slice()` extracts up to but not including end. For example, `array.slice(1, 4)` extracts the second element through the fourth element (elements indexed 1, 2, and 3).

A negative `endIndex` can be used, indicating an offset from the end of the sequence. `array.slice(2,-1)` extracts the third element through the second-to-last element in the sequence.

If `endIndex` is omitted, `slice()` extracts through the end of the sequence (`array.length`).

If `endIndex` is greater than the length of the sequence, `slice()` extracts through to the end of the sequence (`array.length`).

## Return value

A ==**new array** containing the extracted elements==.

## Some consideration about `slice()` method

Arrays are in the end objects and therefore reference values. So if you compare an array to an array that looks totally equal to us humans, it will return `false` because it's not exactly the same object.

Also, if we store an array, store the results in another variable, the arrays will be equal because what you store in the second array is a pointer in place in memory. That's something where `slice()` can help us because it ==returns a brand **new array** based on the **old array**, so a brand new array is created and stored in memory based on that old array==.

```js
const arr1 = [1, 2, 3];

// WITHOUT slice()
const arr2 = arr1;
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]

// WITH slice()
const arr2 = arr1.slice();
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3]
```

`slice()` does ==**not mutates** the original array==. It returns a ==shallow copy== of elements from the original array. Elements of the original array are copied into the returned array as follows:

- For **objects**, `slice()` ==copies **object references**== into the new array. ==Both the original and new array refer to the same object==. If an object changes, the changes are visible to both the new and original arrays.
- For **strings**, **numbers** and **booleans** (not `String`, `Number` and `Boolean` objects), `slice()` ==copies the **values**== into the new array. Changes to the string, number, or boolean in one array do not affect the other array. If a new element is added to either array, the other array is not affected.

The `slice()` method is a copying method. It does not alter `this` but instead returns a shallow copy that contains some of the same elements as the ones from the original array.

## References

1. [`Array.prototype.slice()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
2. [`slice()` - w3schools](https://www.w3schools.com/jsref/jsref_slice_array.asp)
