# `Array.prototype.indexOf()`

The `indexOf()` method ==returns the first index== at which a given element can be found in the array, or ==-1== if it is not present.

The `indexOf()` method:

- returns the first index (position) of a specified value;
- returns `-1` if the value is not found;
- starts at a specified index and searches from left to right.

By default the search starts at the first element and ends at the last. Negative start values counts from the last element (but still searches from left to right).

## Syntax

```js
array.indexOf(searchElement);
array.indexOf(searchElement, fromIndex);
```

## Parameters

#### ==**searchElement**== 

Element to locate in the array.

#### ==**fromIndex**== _(optional)_

The index to start the search at. If the index is greater than or equal to the array's length, `-1` is returned, which means the array will not be searched. If the provided index value is a negative number, it is taken as the offset from the end of the array.

> **NOTE**: if the provided index is negative, the array is still searched from front to back. If the provided index is 0, then the whole array will be searched. _Default: 0 (entire array is searched)_.

## Return value

The ==**first index** of the element in the array==; ==**-1**== if not found.

## Some considerations about `indexOf()` method

`indexOf()` compares `searchElement` to elements of the array using ==strict equality== (the same method used by the `===` or triple-equals operator).

`indexOf()` ==works fine for **primitive**== values, but ==not for **reference**== values:

```js
const array = [{ name: 'Tom' }, { name: 'Brad' }];

array.indexOf({ name: 'Tom' }); // -1
```

Now the reason for this above behavior is the reference value thing. Objects are reference values and therefore, when I pass `{name: 'Tom'}` as argument I'm creating a brand new object and behind the scenes `indexOf()` comparing all values to the value that I passed as argument to `indexOf()`, and because `indexOf()` now compares two objects, even if the objects look similar they are never similar because of reference values thing. So `indexOf()` doesn't find any match and therefore it returns `-1`. So index of won't work if you have objects.

> **NOTE**: If you want to ==search for an index in an array that have reference values items== (Objects, Arrays), use [`Array.prototype.findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) method.

## References

1. [`Array.prototype.indexOf()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
2. [`indexOf()` - w3scools](https://www.w3schools.com/jsref/jsref_indexof_array.asp)
