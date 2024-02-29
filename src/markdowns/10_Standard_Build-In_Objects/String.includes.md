# `String.prototype.includes()`

The `includes()` method ==performs a **case-sensitive search** to determine whether one string may be found within another string==, returning `true` or `false` as appropriate.

The `includes()` method:

- lets you determine whether or not a string includes another string;
- is case sensitive;
- returns `true` if a string contains a specified string, otherwise return `false`.

## Syntax

```js
string.includes(searchString)
string.includes(searchString, startPosition)
```

## Parameters

#### `searchString`

A string to be searched for within `str`. Cannot be a regex.

#### `startPosition` _(optional)_

The position within the string at which to begin searching for `searchString`. (Defaults to `0`.)

## Return value

**`true`** if the search string is found anywhere within the given string; otherwise, **`false`** if not.

## Examples

```js
const str = "To be, or not to be, that is the question.";

console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
console.log(str.includes("TO BE")); // false
console.log(str.includes("")); // true
```

## References

1. [`String.prototype.includes()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
2. [String `includes()` - w3schools](https://www.w3schools.com/jsref/jsref_includes.asp)