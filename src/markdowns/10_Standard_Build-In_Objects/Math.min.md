# `Math.min()`

The `Math.min()` function ==returns the smallest of the numbers given as input parameters, or [`Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity) if there are no parameters==.

## Syntax

```js
Math.min()
Math.min(value0)
Math.min(value0, value1)
Math.min(value0, value1, /* … ,*/ valueN)
```

## Parameters

#### `value1`, `value2`, … , `valueN`

Zero or more numbers among which the lowest value will be selected and returned.

## Return value

The smallest of the given numbers. Returns [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) if any of the parameters is or is converted into `NaN`. Returns [`Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity) if no parameters are provided.

## Description

Because ==`min()` is a static method of `Math`==, you always use it as `Math.min()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

[`Math.min.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) is 2, which weakly signals that ==it's designed to handle at least two parameters==.

## Examples

```js
const x = 10;
const y = -20;
const z = Math.min(x, y); // -20
```

## References

1. [`Math.min()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
1. [`Math.min()` - w3schools](https://www.w3schools.com/jsref/jsref_min.asp)