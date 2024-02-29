# `Number.isNaN()`

==The `Number.isNaN()` method determines whether the passed value is [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) and its type is [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)==. It is a more robust version of the original, global [`isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN).

## Syntax

```js
Number.isNaN(value)
```

## Parameters

#### `value`

The value to be tested for `NaN`.

## Return value

The boolean value `true` if the given value is a number with value `NaN`. Otherwise, `false`.

## Description

Due to both equality operators, [`==`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality) and [`===`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality), evaluating to `false` when checking if `NaN` *is* `NaN`, the function `Number.isNaN()` has become necessary. This situation is unlike all other possible value comparisons in JavaScript.

Since `x !== x` is only true for `NaN` among all possible JavaScript values, `Number.isNaN(x)` can also be replaced with a test for `x !== x`, despite the latter being less readable.

As opposed to the global [`isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) function, ==the `Number.isNaN()` method doesn't force-convert the parameter to a number==. This makes it safe to pass values that would normally convert to `NaN` but aren't actually the same value as `NaN`. This also means that only values of the Number type that are also `NaN` return `true`.

> **NOTE**: The global `isNaN()` method converts the parameter to a number before testing it.

## References

1. [`Number.isNaN()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
1. [`isNaN()` - w3schools](https://www.w3schools.com/jsref/jsref_isnan.asp)