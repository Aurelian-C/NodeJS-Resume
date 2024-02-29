# `Math.ceil()`

The `Math.ceil()` function ==**always rounds up** and **returns the smaller integer greater than or equal to a given number**==.

## Syntax

```js
Math.ceil(x)
```

## Parameters

#### `x`

A number.

## Return value

The smallest integer greater than or equal to `x`. It's the same value as [`-Math.floor(-x)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).

## Description

Because ==`ceil()` is a static method of `Math`==, you always use it as `Math.ceil()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

```js
Math.ceil(-Infinity); // -Infinity
Math.ceil(-7.004); // -7
Math.ceil(-4); // -4
Math.ceil(-0.95); // -0
Math.ceil(-0); // -0
Math.ceil(0); // 0
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(Infinity); // Infinity
```

## References

1. [`Math.ceil()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
1. [`Math.ceil()` - w3schools](https://www.w3schools.com/jsref/jsref_ceil.asp)