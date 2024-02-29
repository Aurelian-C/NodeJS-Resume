# `String.prototype.replace()`

==The `replace()` method returns a new string with one, some, or all matches of a `pattern` replaced by a `replacement`. The `pattern` can be a **string** or a [**`RegExp`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), and the `replacement` can be a **string** or a **function** called for each match. If `pattern` is a string, only the first occurrence will be replaced.== The original string is left unchanged.

The `replace()` method:

- searches a string for a value or a regular expression;
- returns a new string with the value(s) replaced;
- does not change the original string.

> **NOTE**: If you replace a value, only the first instance will be replaced. To replace all instances, use a regular expression with the `g` modifier set, or use [`replaceAll()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) method instead.

## Syntax

```js
string.replace(pattern, replacement)
```

## Parameters

#### `pattern`

Can be a ==string== or an ==object with a [`Symbol.replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) method== — the typical example being a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Any value that doesn't have the `Symbol.replace` method will be coerced to a string.

#### `replacement`

Can be a ==string== or a ==function==.

- If it's a string, it will replace the substring matched by `pattern`. A number of special replacement patterns are supported
- If it's a function, it will be invoked for every match and its return value is used as the replacement text.

## Return value

A new string, with one, some, or all matches of the pattern replaced by the specified replacement.

## Description

A string pattern will only be replaced once.

If `pattern` is an object with a [`Symbol.replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) method (including `RegExp` objects), that method is called with the target string and `replacement` as arguments. Its return value becomes the return value of `replace()`.

If the `pattern` is an empty string, the replacement is prepended to the start of the string.

```js
"xxx".replace("", "_"); // "_xxx"
```

==A `Regexp` with the `g` flag is the only case where `replace()` replaces more than once.==

## References

1. [`String.prototype.replace()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
2. [String `replace()` - w3schools](https://www.w3schools.com/jsref/jsref_replace.asp)