# `Number.prototype.toFixed()`

The `toFixed()` method ==formats a number using fixed-point notation==.

The `toFixed()` method:

- converts a number to a string;
- rounds the string to a specified number of decimals;
- if the number of decimals are higher than in the number, zeros are added.

## Syntax

```js
number.toFixed();
number.toFixed(digits);
```

## Parameters

#### `digits` _(optional)_

==The number of digits to appear after the decimal point==; this may be a value between `0` and `20`, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as `0`.

## Return value

==A string== representing the given number using fixed-point notation.

### Exceptions

- [`RangeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)

  If `digits` is too small or too large. Values between `0` and `100`, inclusive, will not cause a `RangeError`. Implementations are allowed to support larger and smaller values as chosen.

- [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)

  If this method is invoked on an object that is not a [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number).

  ## Description

  `toFixed()` ==returns a string== representation that does not use exponential notation and has exactly `digits` digits after the decimal place. ==The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length.== If the absolute value of string representation is greater or equal to `1e+21`, this method calls [`Number.prototype.toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) and returns a string in exponential notation.

## Examples

```js
const numObj = 12345.6789;

numObj.toFixed()       // Returns '12346': rounding, no fractional part
numObj.toFixed(1)      // Returns '12345.7': it rounds up
numObj.toFixed(6)      // Returns '12345.678900': additional zeros
(1.23e+20).toFixed(2)  // Returns '123000000000000000000.00'
(1.23e-10).toFixed(2)  // Returns '0.00'
2.34.toFixed(1)        // Returns '2.3'
2.35.toFixed(1)        // Returns '2.4': it rounds up
2.55.toFixed(1)        // Returns '2.5': it rounds down as it can't
                       // be represented exactly by a float and the
                       // closest representable float is lower
2.449999999999999999.toFixed(1) // Returns '2.5': it rounds up as it less
                       // than NUMBER.EPSILON away from 2.45 and therefore
                       // cannot be distinguished
-2.34.toFixed(1)       // Returns '-2.3': due to operator precedence,
                       // negative number literals don't return a string…
(-2.34).toFixed(1)     // Returns '-2.3'
```

## References

1. [`Number.prototype.toFixed()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
1. [`toFixed()` - w3schools](https://www.w3schools.com/jsref/jsref_tofixed.asp)