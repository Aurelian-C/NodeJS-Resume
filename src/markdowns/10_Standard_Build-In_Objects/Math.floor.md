# `Math.floor()`

The `Math.floor()` function ==**always rounds down** and **returns the largest integer less than or equal to a given number**==.

## Syntax

```js
Math.floor(x)
```

## Parameters

#### `x`

A number.

## Return value

The largest integer smaller than or equal to `x`. It's the same value as [`-Math.ceil(-x)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).

## Description

Because ==`floor()` is a static method of `Math`==, you always use it as `Math.floor()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

```js
Math.floor(-Infinity); // -Infinity
Math.floor(-45.95); // -46
Math.floor(-45.05); // -46
Math.floor(-0); // -0
Math.floor(0); // 0
Math.floor(4); // 4
Math.floor(45.05); // 45
Math.floor(45.95); // 45
Math.floor(Infinity); // Infinity
```

## References

1. [`Math.floor()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
1. [`Math.floor()` - w3schools](https://www.w3schools.com/jsref/jsref_floor.asp)