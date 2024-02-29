# `String.prototype.trim()`

The `trim()` method ==**removes whitespace** from both sides of a string and returns a new string, without modifying the original string==. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

To return a new string with whitespace trimmed from just one end, use [`trimStart()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) or [`trimEnd()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd).

The `trim()` method:

- removes whitespace from both sides of a string;
- does not change the original string.

## Syntax

```js
string.trim()
```

## Return value

==A new string== representing `str` stripped of whitespace from both its beginning and end. If neither the beginning or end of `str` has any whitespace, a new string is still returned (essentially a copy of `str`), with no exception being thrown.

## References

1. [`String.prototype.trim()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
2. [String `trim()` - w3schools](https://www.w3schools.com/jsref/jsref_trim_string.asp)