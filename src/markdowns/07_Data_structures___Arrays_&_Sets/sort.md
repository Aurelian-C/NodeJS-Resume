# `Array.prototype.sort()`

The `sort()` method ==sorts the elements of an array== and ==returns the sorted array==.

Without passing a `compareFn` as argument, the ==**default** sort order is **ascending**, built upon **converting the elements into strings**==, then comparing their sequences of UTF-16 code units values.

> **NOTE**: Sorting alphabetically works well for strings ("Apple" comes before "Banana"). But, sorting numbers can produce incorrect results: "25" is bigger than "100", because "2" is bigger than "1". You can fix this by providing a `compareFn` (compare function).

The `sort()` ==**mutates** the original array==.

The time and space complexity of the `sort()` cannot be guaranteed as it depends on the implementation.

The `sort()` method:

- sorts the elements of an array;
- mutates the original array;
- sorts the elements as strings in alphabetical and ascending order.

## Syntax

```js
// Functionless
array.sort()

// Arrow function
array.sort((a, b) => { ... } )

// Compare function
array.sort(compareFn)

// Inline compare function
array.sort(function compareFn(a, b) { ... })
```

## Parameters

#### ==**compareFn**== _(optional)_

Specifies a ==**function** that defines the **sort order**==. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.

- **a** - the first element for comparison.
- **b** - the second element for comparison.

## Return value

The sorted array. Note that the ==array is **overwrite**==, and ==**no copy**== is made.

## Some consideration about `sort()` method

If `compareFn` is not supplied, all non-`undefined` array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All `undefined` elements are sorted to the end of the array.

If `compareFn` is supplied, all non-`undefined` array elements are sorted according to the return value of the compare function (all `undefined` elements are sorted to the end of the array, with no call to `compareFn`).

The `compareFn` function has the following form:

```js
function compareFn(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1; // sort a before b
  }
  if (a is greater than b by the ordering criterion) {
    return 1; // sort b before a
  }
  return 0;	// keep original order of a and b
}
```

The `compareFn` defines a sort order. The `compareFn` should return a negative, zero, or positive value, depending on the arguments.

| `compareFunction(a, b)` return value |             sort order             |
| :----------------------------------: | :--------------------------------: |
|                 > 0                  |        sort `b` before `a`         |
|                 < 0                  |        sort `a` before `b`         |
|                === 0                 | keep original order of `a` and `b` |

To compare numbers instead of strings, the `compareFn` function can subtract `b` from `a`. The following function will sort the array in ascending order (if it doesn't contain `Infinity` and `NaN`):

```js
function compareNumbers(a, b) {
  return a - b;
}
```

## References

1. [`Array.prototype.sort()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
2. [`sort()` - w3schools](https://www.w3schools.com/jsref/jsref_sort.asp)
