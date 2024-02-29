# `String.prototype.repeat()`

The `repeat()` method ==constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together==.

The `repeat()` method:

- returns a string with a number of copies of a string;
- returns a new string;
- does not change the original string.

## Syntax

```js
string.repeat(count)
```

## Parameters

#### `count`

An integer between `0` and [`+Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY), indicating the number of times to repeat the string.

## Return value

A new string containing the specified number of copies of the given string.

### Exceptions

- [`RangeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Negative_repetition_count): repeat count must be non-negative.
- [`RangeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Resulting_string_too_large): repeat count must be less than infinity and not overflow maximum string size.

## Examples

```js
'abc'.repeat(-1)    // RangeError
'abc'.repeat(0)     // ''
'abc'.repeat(1)     // 'abc'
'abc'.repeat(2)     // 'abcabc'
'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0)   // RangeError
```

## References

1. [`String.prototype.repeat()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
2. [String `repeat()` - w3schools](https://www.w3schools.com/jsref/jsref_repeat.asp)