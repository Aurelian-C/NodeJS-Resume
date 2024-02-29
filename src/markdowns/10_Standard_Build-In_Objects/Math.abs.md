# `Math.abs()`

The `Math.abs()` function ==returns the **absolute value** of a number==.

## Syntax

```js
Math.abs(x)
```

## Parameters

#### `x`

A number.

## Return value

The absolute value of `x`. If `x` is negative (including `-0`), returns `-x`. Otherwise, returns `x`. The result is therefore always a positive number or `0`.

## Description

Because ==`abs()` is a static method of `Math`==, you always use it as `Math.abs()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

==`Math.abs()` [coerces its parameter to a number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Non-coercible values will become `NaN`, making `Math.abs()` also return `NaN`==.

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```

## Examples

```js
Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // Infinity
```

## References

1. [`Math.abs()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
1. [`Math.abs()` - w3schools](https://www.w3schools.com/jsref/jsref_abs.asp)