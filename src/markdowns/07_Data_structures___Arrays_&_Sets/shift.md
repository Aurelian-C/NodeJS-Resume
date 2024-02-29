# `Array.prototype.shift()`

The `shift()` method ==**removes**== the ==**first item** from an array== and ==returns that removed item==. The `shift()` method ==mutates the original array==.

The `shift()` method:

- removes **the first item** of an array;
- mutates the original array;
- returns the shifted/removed element;

> **NOTE**: The [`Array.prototupe.pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) method has similar behavior to `shift()`, but applied to the last item in an array.

## Syntax

```js
array.shift();
```

## Parameters

None

## Return Value

The removed item from the array; `undefined` if the array is empty.

## Some considerations about `shift()` method

The `shift()` method removes the element at the zeroth index and shifts the values at consecutive indexes down, then returns the removed value. If the `length` property is 0, `undefined` is returned.

The `shift()` method is a mutating method. It changes the length and the content of `this`. In case you want the value of `this` to be the same, but return a new array with the first element removed, you can use `arr.slice(1)` instead.

## References

1. [`Array.prototype.shift()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
2. [`shift()` - w3schools](https://www.w3schools.com/jsref/jsref_shift.asp)
