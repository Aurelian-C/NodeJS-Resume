# `Number.parseFloat()`

The `Number.parseFloat()` method ==**parses an argument** and **returns a floating point number**. If a number cannot be parsed from the argument, it returns [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)==.

`Number.parseFloat()` method has the same functionality as the global [`parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) function:

```js
Number.parseFloat === parseFloat; // true
```

## Syntax

```js
Number.parseFloat(string)
```

## Parameters

#### `string`

The value to parse, [coerced to a string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Leading [whitespace](https://developer.mozilla.org/en-US/docs/Glossary/Whitespace) in this argument is ignored.

## Return value

A floating point number parsed from the given `string` _or_ `NaN` when the first non-whitespace character cannot be converted to a number.

> **NOTE**: ==If the first character cannot be converted, `NaN` is returned.== Leading and trailing spaces are ignored. Only the first number found is returned.

## References

1. [`Number.parseFloat()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat)
1. [`parseFloat()` - w3schools](https://www.w3schools.com/jsref/jsref_parsefloat.asp)