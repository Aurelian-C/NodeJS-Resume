# `Number.isInteger()`

The `Number.isInteger()` method ==determines whether the passed value is an integer==.

## Syntax

```js
Number.isInteger(value)
```

## Parameters

#### `value`

The value to be tested for being an integer.

## Return value

The boolean value `true` if the given value is an integer. Otherwise `false`.

## Description

If the target value is an integer, return `true`, otherwise return `false`. If the value is [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) or [`Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity), return `false`. The method will also return `true` for floating point numbers that can be represented as integer. It will always return `false` if the value is not a number.

Note that some number literals, while looking like non-integers, actually represent integers — due to the precision limit of ECMAScript floating-point number encoding (IEEE-754). For example, `5.0000000000000001` only differs from `5` by `1e-16`, which is too small to be represented. (For reference, [`Number.EPSILON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON) stores the distance between 1 and the next representable floating-point number greater than 1, and that is about `2.22e-16`.) Therefore, `5.0000000000000001` will be represented with the same encoding as `5`, thus making `Number.isInteger(5.0000000000000001)` return `true`.

## References

1. [`Number.isInteger()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
1. [`isInteger()` - w3schools](https://www.w3schools.com/jsref/jsref_isinteger.asp)