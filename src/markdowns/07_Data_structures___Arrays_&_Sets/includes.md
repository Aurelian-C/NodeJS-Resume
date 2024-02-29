# `Array.prototype.includes()`

The `includes()` method ==determines whether an array includes a certain **value** among its entries==, returning `true` or `false` as appropriate. The `includes()` method is ==**case sensitive**==.

> **NOTE**: `includes()` is ==only useful for **primitive** values==, because it also just ==checks **values**== like `indexOf()` does.

The `includes()` method:

- returns `true` if an array contains a specified value;
- returns `false` if the value is not found;
- is case sensitive.

## Syntax

```js
array.includes(searchElement);
array.includes(searchElement, fromIndex);
```

## Parameters

#### ==**searchElement**== 

The ==value== to search for.

> **NOTE**: When comparing **strings** and **characters**, `includes()` is ==case-sensitive==.

#### ==**fromIndex**== _(optional)_

The position in the array at which to begin searching for `searchElement`. The first element to be searched is found at `fromIndex` for positive values of `fromIndex`, or at `array.length + fromIndex` for negative values of `fromIndex` (using the absolute value of `fromIndex` as the number of elements from the end of the array at which to start the search). Defaults to 0.

## Return value

A ==boolean== value which is `true` if the value `searchElement` is found within the array (or the part of the array indicated by the index `fromIndex`, if specified).

## Some considerations about `includes()` method

`includes()` is a great choice if you're not interested in the index and also not interested in the value, but just want to know whether an element is part of the array or not.

`includes()` is similar to `array.indexOf(someElement) !== -1`, but of course `includes()` is a bit shorter and saves us for that extra comparison.

## References

1. [`Array.prototype.includes()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
2. [`includes()` - w3schools](https://www.w3schools.com/jsref/jsref_includes_array.asp)
