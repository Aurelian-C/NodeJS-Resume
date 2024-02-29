# `Array.prototype.lastIndexOf()`

The `lastIndexOf()` method ==returns the last index== at which a given element can be found in the array, or ==-1== if it is not present. The array is searched backwards, starting at `fromIndex`.

The `lastIndexOf()` method:

- returns the last index (position) of a specified value;
- returns -1 if the value is not found;
- starts at a specified index and searches from right to left;

By default the search starts at the last element and ends at the first. Negative start values counts from the last element (but still searches from right to left).

## Syntax

```js
array.lastIndexOf(searchElement);
array.lastIndexOf(searchElement, fromIndex);
```

## Parameters

#### ==**searchElement**== 

Element to locate in the array.

#### ==**fromIndex**== _(optional)_ 

The position in the array at which to start searching backwards. Defaults to the array's length minus one (`array.length - 1`), causing the whole array to be searched.

A `fromIndex` value greater than or equal to the length of the array also causes the whole array to be searched. (In this case, you can think of it conceptually as causing the method to start its search at a nonexistent position beyond the end of the array, but to then go backwards from there looking for the real end position of the array, at which point it starts searching backwards through the actual array elements).

A `fromIndex` value greater than 0 is taken as the offset from the beginning of the array.

A `fromIndex` value less than 0 is taken as the offset from the end of the array — in other words, it is taken as specifying the position at `array.length + fromIndex`. Therefore, if `array.length + fromIndex` is less than 0, the array is not searched, and the method returns `-1`. (In this case, because `fromIndex` specifies a nonexistent position before the beginning of the array, you can think of it conceptually as causing the method to start its search at that nonexistent position and to then go backwards from there looking for array elements, which it never finds).

## Return value

The ==**last index** of the element in the array==; ==**-1**== if not found.

## Some considerations about `lastIndexOf()` method

`lastIndexOf()` compares `searchElement` to elements of the array using ==strict equality== (the same method used by the `===`, or triple-equals, operator).

`lastIndexOf()` ==works fine for **primitive**== values, but ==not for **reference**== values:

```js
const array = [{ name: 'Tom' }, { name: 'Brad' }];

array.lastIndexOf({ name: 'Brad' }); // -1
```

Now the reason for this above behavior is the reference value thing. Objects are reference values and therefore, when I pass `{name: 'Brad'}` as argument I'm creating a brand new object and behind the scenes `lastIndexOf()` comparing all values to the value that I passed as argument to `lastIndexOf()` and because `lastIndexOf()` now compares two objects, even if the objects look similar they are never similar because of reference values thing. So `lastIndexOf()` doesn't find any match and therefore it returns `-1`. So `lastIndexOf()` won't work if you have objects.

## References

1. [`Array.prototype.lastIndexOf()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
2. [`lastIndexOf()` - w3schools](https://www.w3schools.com/jsref/jsref_lastindexof_array.asp)
