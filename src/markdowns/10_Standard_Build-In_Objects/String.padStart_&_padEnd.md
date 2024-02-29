# `String.prototype.padStart()` & `String.prototype.padEnd()`

The `padStart()`/`padEnd()` method ==pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length==. In the case of `padStart()` the padding is applied from the _start_ of the current string, for `padEnd()` the padding is applied from the _end_ of the current string.

## Syntax

```js
string.padStart(targetLength);
string.padStart(targetLength, padString);

string.padEnd(targetLength);
string.padEnd(targetLength, padString);
```

## Parameters

#### `targetLength`

The length of the resulting string once the current `str` has been padded. If the value is less than `str.length`, then `str` is returned as-is.

#### `padString` _(optional)_

The string to pad the current `str` with. If `padString` is too long to stay within the `targetLength`, it will be truncated from the end. The default value for this parameter is `" "`.

## Return value

A string of the specified `targetLength` with `padString` applied from the start _or_ end of the current `str`.

## Examples

Using `padStart`:

```js
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"
```

Using `padEnd`:

```js
"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"
```

## References

1. [`String.prototype.padStart()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
2. [`String.prototype.padEnd()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)