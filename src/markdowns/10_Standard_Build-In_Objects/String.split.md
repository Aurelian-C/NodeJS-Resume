# `String.prototype.split()`

The `split()` method ==takes a **pattern** and **divides a string into an ordered list of substrings** by searching for the pattern, puts these substrings into an array, and returns the array==.

The `split()` method:

- splits a string into an array of substrings;
- returns the new array of strings;
- does not change the original string;
- if `" "` is used as separator, the string is split between words.

## Syntax

```js
string.split()
string.split(separator)
string.split(separator, limit)
```

## Parameters

#### `separator` _(optional)_

==The pattern describing where each split should occur==. Can be a **string** or an **object with a [`Symbol.split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split) method** — the typical example being a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp). If undefined, the original target string is returned wrapped in an array.

#### `limit` _(optional)_

==A non-negative integer specifying a limit on the number of substrings to be included in the array==. If provided, splits the string at each occurrence of the specified `separator`, but stops when `limit` entries have been placed in the array. Any leftover text is not included in the array at all.

- The array may contain fewer entries than `limit` if the end of the string is reached before the limit is reached
- If `limit` is `0`, `[]` is returned

## Return value

An [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of strings, split at each point where the `separator` occurs in the given string.

## Description

If `separator` is a non-empty string, the target string is split by all matches of the `separator` without including `separator` in the results. For example, a string containing tab separated values (TSV) could be parsed by passing a tab character as the separator, like `myString.split("\t")`. If `separator` contains multiple characters, that entire character sequence must be found in order to split. If `separator` appears at the beginning (or end) of the string, it still has the effect of splitting, resulting in an empty (i.e. zero length) string appearing at the first (or last) position of the returned array. If `separator` does not occur in `str`, the returned array contains one element consisting of the entire string.

If `separator` is an empty string (`""`), `str` is converted to an array of each of its UTF-16 "characters", without empty strings on either ends of the resulting string.

> **NOTE:** `"".split("")` is therefore the only way to produce an empty array when a string is passed as `separator`.

If `separator` is a `Regexp` that matches empty strings, whether the match is split by UTF-16 code units or Unicode codepoints depends on if the [`u`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) flag is set.

```js
"😄😄".split(/(?:)/); // [ "\ud83d", "\ude04", "\ud83d", "\ude04" ]
"😄😄".split(/(?:)/u); // [ "😄", "😄" ]
```

## Examples

```js
''.split();		// [""]
''.split('');	// []

"Oh brave new world.".split(' ') // The array has 4 elements: Oh / brave / new / world.
"Oh brave new world.".split() // The array has 1 elements: Oh brave new world.
"Jan,Feb,Mar,Apr".split(',') // The array has 4 elements: Jan / Feb / Mar / Apr
```

### Removing spaces from a string

In the following example, `split()` looks for zero or more spaces, followed by a semicolon, followed by zero or more spaces—and, when found, removes the spaces and the semicolon from the string. `nameList` is the array returned as a result of `split()`.

```js
const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';

const re = /\s*(?:;|$)\s*/;
const nameList = names.split(re);

console.log(nameList); // [ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]
```

### Returning a limited number of splits

In the following example, `split()` looks for spaces in a string and returns the first 3 splits that it finds.

```js
const myString = 'Hello World. How are you doing?'
const splits = myString.split(' ', 3)

console.log(splits) // ["Hello", "World.", "How"]
```

## References

1. [`String.prototype.split()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
2. [String `split()` - w3schools](https://www.w3schools.com/jsref/jsref_split.asp)