# `String.prototype.startsWith()` & `String.prototype.endsWith()`

The `startsWith()`/`endsWith()` methods ==determines whether a string begins/ends with the characters of a specified string==, returning `true` or `false` as appropriate.

The `startsWith()` method:

- lets you determine whether or not a string _begins_ with another string;
- is ==case-sensitive==;
- returns `true` if a string _starts_ with a specified string, otherwise it returns `false`.

The `endsWith()` method:

- lets you determine whether or not a string _ends_ with another string;
- is ==case-sensitive==;
- returns `true` if a string _ends_ with a specified string, otherwise it returns `false`.

## Syntax

```js
string.startsWith(searchString);
string.startsWith(searchString, startPosition);

string.endsWith(searchString);
string.endsWith(searchString, endPosition);
```

## Parameters

### For `startsWith`

#### `searchString`

The characters to be searched for at the start of `str`. Cannot be a regex.

#### `startPosition` _(optional)_

The start position at which `searchString` is expected to be found (the index of `searchString`'s first character). Defaults to `0`.

### For `endsWith`

#### `searchString`

The characters to be searched for at the end of `str`. Cannot be a regex.

#### `endPosition` _(optional)_

The end position at which `searchString` is expected to be found (the index of `searchString`'s last character). Defaults to `str.length`.

## Return value

For `startsWith`: 

- **`true`** if the given characters are found at the beginning of the string; otherwise, **`false`**

For `endsWith`:

- **`true`** if the given characters are found at the end of the string; otherwise, **`false`**

## Examples

Using `startsWith()`:

```js
const str = "To be, or not to be, that is the question.";

str.startsWith("To be");			// true
str.startsWith("not to be");		// false
str.startsWith("not to be", 10);	// true
```

Using `endsWith()`:

```js
const str = "To be, or not to be, that is the question.";

str.endsWith("question.");	// true
str.endsWith("to be");		// false
str.endsWith("to be", 19);	// true
```

## References

1. [`String.prototype.startsWith()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
2. [String `startsWith()` - w3schools](https://www.w3schools.com/jsref/jsref_startswith.asp)
3. [`String.prototype.endsWith()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
4. [String `endsWith()` - w3schools](https://www.w3schools.com/jsref/jsref_endswith.asp)