# `Array.prototype.join()`

The `join()` method ==**creates** and **returns** a new **string** by **concatenating all of the elements in an array** (or an Array-Like object)==, ==separated by commas or a **specified separator string**==. If the array has only one item, then that item will be returned without using the separator.

> **NOTE**: The string conversions of all array elements are joined into ==one string==.

The `join()` method:

- returns an array as a string;
- does not mutates the original array;
- any separator can be specified. The default is comma `,`.

## Syntax

```js
array.join();
array.join(separator);
```

## Parameters

#### ==**separator**== _(optional)_

==Specifies a **string** to separate each pair of adjacent elements of the array==. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma `,`. _If separator is an empty string, all elements are joined without any characters in between them_.

## Return value

A ==string== with all array elements joined. If `array.length` is 0, the ==empty string== is returned.

## Some considerations about `join()` method

The string conversions of all array elements are joined into one string. If an element is `undefined`, `null`, it is converted to an empty string instead of the string "null" or "undefined".

The `join()` method is accessed internally by [`Array.prototype.toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) with no arguments. Overriding `join()` of an array instance will override its `toString()` behavior as well.

When used on [sparse arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), the `join()` method iterates empty slots as if they have the value `undefined`.

```js
// Using join() on sparse arrays
console.log([1, , 3].join());			// '1,,3'
console.log([1, undefined, 3].join());	// '1,,3'
```

## References

1. [`Array.prototype.join()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
2. [`join()` - w3schools](https://www.w3schools.com/jsref/jsref_join.asp)
