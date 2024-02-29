# `Array.prototype.pop()`

The `pop()` method ==**removes**== the ==**last item** from an array== and ==returns that item==. The `pop()` method ==mutates the original array==.

The `pop()` method:

- removes (pops) **the last element** of an array;
- mutates the original array;
- returns the removed element.

> **NOTE**: [`Array.prototype.shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) has similar behavior to `pop()`, but applied to the first element in an array.

## Syntax

```js
array.pop();
```

## Parameters

None

## Return Value

The removed item from the array; `undefined` if the array is empty.

## Some considerations about `pop()` method

The `pop()` method is a mutating method. It changes the length and the content of `this`. In case you want the value of `this` to be the same, but return a new array with the last element removed, you can use `arr.slice(0, -1)` instead.

## References

1. [`Array.prototype.pop()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
2. [`pop()` - w3schools](https://www.w3schools.com/jsref/jsref_pop.asp)
