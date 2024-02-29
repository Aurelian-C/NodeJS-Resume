# `String.prototype.replaceAll()`

==The `replaceAll()` method **returns a new string** with all matches of a `pattern` replaced by a `replacement`. The `pattern` can be a string or a [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), and the `replacement` can be a string or a function to be called for each match.== The original string is left unchanged.

## Syntax

```js
string.replaceAll(pattern, replacement)
```

## Parameters

- `pattern`

  Can be a ==string== or an ==object with a [`Symbol.replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) method== — the typical example being a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Any value that doesn't have the `Symbol.replace` method will be coerced to a string.If `pattern` [is a regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), then it must have the global (`g`) flag set, or a [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) is thrown.

- `replacement`

  Can be a ==string== or a ==function==. The replacement has the same semantics as that of [`String.prototype.replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

## Return value

A new string, with all matches of a pattern replaced by a replacement.

## Description

Unlike [`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), this method would replace all occurrences of a string, not just the first one. This is especially useful if the string is not statically known, as calling the [`RegExp()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) constructor without escaping special characters may unintentionally change its semantics.

## References

1. [`String.prototype.replaceAll()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)