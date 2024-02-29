# String: `length` property

The **`length`** ==**read-only** property== of a string contains the length of the string in UTF-16 code units. This property ==returns the number of code units in the string==.

==JavaScript uses **[UTF-16](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_codepoints_and_grapheme_clusters) encoding**==, where each Unicode character may be encoded as one or two code units, so it's possible for the value returned by `length` to not match the actual number of Unicode characters in the string.  For common scripts like Latin, Cyrillic, wellknown CJK characters, etc., this should not be an issue, but if you are working with certain scripts, such as emojis, [mathematical symbols](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols), or obscure Chinese characters, you may need to account for the difference between code units and characters.

## Syntax

```js
string.length
```

## Return value

The number of code units in the string.

## Examples

```js
"Mozilla".length // 7
"".length // 0
"😄".length // 2
"𞤲𞥋𞤣𞤫".length // 8
"∀𝑥∈ℝ,𝑥²≥0".length // 11
```

## Assigning to `length`

Because string is a primitive, attempting to assign a value to a string's `length` property has no observable effect, and will throw in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode).

```js
const myString = "bluebells";

myString.length = 4;
console.log(myString); // "bluebells"
console.log(myString.length); // 9
```

## References

1. [String length - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)