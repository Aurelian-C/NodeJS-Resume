# `Number.isFinite()`

The `Number.isFinite()` method ==determines whether the passed value is a finite number== — that is, it checks that a given value is a number, and the number is neither positive [`Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity), negative `Infinity`, nor [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).

## Syntax

```js
Number.isFinite(value)
```

## Parameters

#### `value`

The value to be tested for finiteness.

## Return value

The boolean value `true` if the given value is a finite number. Otherwise `false`.

## Difference between `Number.isFinite()` and global [`isFinite()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#difference_between_number.isfinite_and_global_isfinite)

In comparison to the global `isFinite()` function, ==`Number.isFinite()` method doesn't first convert the parameter to a number. This means only values of the type number *and* are finite return `true`, and non-numbers always return `false`==.

> **NOTE**: The global `isFinite()` converts the parameter to a number before testing it.

## References

1. [`Number.isFinite()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)
1. [`isFinite()` - w3schools](https://www.w3schools.com/jsref/jsref_isfinite.asp)