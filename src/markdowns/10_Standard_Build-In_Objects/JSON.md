# JSON

The `JSON` object contains methods for ==**parsing** [JavaScript Object Notation](https://json.org/) ([JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON)) and **converting** values to JSON==. It can't be called or constructed.

## Description

==Unlike most global objects, `JSON` is not a constructor.== You cannot use it with a [`new` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) or invoke the `JSON` object as a function. All properties and methods of `JSON` are static (just like the [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) object).

### JavaScript and JSON differences

JSON is a syntax for serializing objects, arrays, numbers, strings, booleans, and [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null). It is based upon JavaScript syntax, but is distinct from JavaScript: most of JavaScript is *not* JSON. For example:

- Objects and Arrays: property names must be double-quoted strings; [trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) are forbidden.
- Numbers: leading zeros are prohibited. A decimal point must be followed by at least one digit. `NaN` and `Infinity` are unsupported.
- Any JSON text is a valid JavaScript expression, but only after the [JSON superset](https://github.com/tc39/proposal-json-superset) revision. Before the revision, U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR are allowed in string literals and property keys in JSON; but the same use in JavaScript string literals is a [`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError).
- The same text may represent different values in JavaScript object literals vs. JSON as well. For more information, see [Object literal syntax vs. JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Static methods

#### [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

Parse a piece of string text as JSON, optionally transforming the produced value and its properties, and return the value.

#### [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner.

## References

1. [JSON - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)