# `String.prototype.slice()`

The `slice()` method ==**extracts a section of a string** and returns it as a new string, without modifying the original string==.

The `slice()` method:

- extracts a part of a string;
- returns the extracted part in a new string;
- does not change the original string;
- the start and end parameters specifies the part of the string to extract (the first position is 0, the second is 1, ...);
- a negative number selects from the end of the string.

## Syntax

```js
string.slice(indexStart)
string.slice(indexStart, indexEnd)
```

## Parameters

#### `indexStart`

The index of the first character to include in the returned substring.

#### `indexEnd` _(optional)_

The index of the first character to exclude from the returned substring. `slice()` extracts up to but not including `indexEnd`. For example, `str.slice(1, 4)` extracts the second character through the fourth character (characters indexed `1`, `2`, and `3`).

## Return value

A new string containing the extracted section of the string.

## Description

`slice()` extracts the text from one string and returns a new string. Changes to the text in one string do not affect the other string.

- If `indexStart >= str.length`, an empty string is returned.
- If `indexStart < 0`, the index is counted from the end of the string. More formally, in this case, the substring starts at `max(indexStart + str.length, 0)`.
- If `indexStart` is omitted, undefined, or cannot be converted to a number (using [`Number(indexStart)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)), it's treated as `0`.
- If `indexEnd` is omitted, undefined, or cannot be converted to a number (using [`Number(indexEnd)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)), or if `indexEnd >= str.length`, `slice()` extracts to the end of the string.
- If `indexEnd < 0`, the index is counted from the end of the string. More formally, in this case, the substring ends at `max(indexEnd + str.length, 0)`.
- If `indexEnd <= indexStart` after normalizing negative values (i.e. `indexEnd` represents a character that's before `indexStart`), an empty string is returned.

## Examples

### Using `slice()` to create a new string

```js
const str1 = "The morning is upon us."; // The length of str1 is 23.
const str2 = str1.slice(1, 8); // he morn
const str3 = str1.slice(4, -2); // morning is upon u
const str4 = str1.slice(12); // is upon us.
const str5 = str1.slice(30); // ""
```

### Using `slice()` with negative indexes

```js
const str = "The morning is upon us.";
str.slice(-3); // 'us.'
str.slice(-3, -1); // 'us'
str.slice(0, -1); // 'The morning is upon us'
str.slice(4, -1); // 'morning is upon us'
```

## References

1. [`String.prototype.slice()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
2. [String `slice()` - w3schools](https://www.w3schools.com/jsref/jsref_slice_string.asp)