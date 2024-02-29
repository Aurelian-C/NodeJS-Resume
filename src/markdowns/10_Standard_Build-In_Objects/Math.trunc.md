# `Math.trunc()`

The `Math.trunc()` function ==**returns the integer part of a number** by removing any fractional digits==.

## Syntax

```js
Math.trunc(x)
```

## Parameters

#### `x`

A number.

## Return value

The integer part of `x`.

## Description

Unlike the other three `Math` methods: [`Math.floor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [`Math.ceil()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) and [`Math.round()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round), the way `Math.trunc()` works is very simple. ==It *truncates* (cuts off) the dot and the digits to the right of it, no matter whether the argument is a positive or negative number==.

Because ==`trunc()` is a static method of `Math`==, you always use it as `Math.trunc()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

```js
Math.trunc(-Infinity); // -Infinity
Math.trunc("-1.123"); // -1
Math.trunc(-0.123); // -0
Math.trunc(-0); // -0
Math.trunc(0); // 0
Math.trunc(0.123); // 0
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(Infinity); // Infinity
```

## References

1. [`Math.trunc()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)
1. [`Math.trunc()` - w3schools](https://www.w3schools.com/jsref/jsref_trunc.asp)