# `JSON.parse()`

The `JSON.parse()` method ==parses a JSON string, constructing the JavaScript value or object described by the string==. An optional **reviver function** can be provided to perform a transformation on the resulting object before it is returned.

## Syntax

```js
JSON.parse(text)
JSON.parse(text, reviver)
```

## Parameters

#### `text`

==The **string** to parse as JSON.== See the [`JSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) object for a description of JSON syntax.

#### `reviver` _(optional)_

==If a **function**, this prescribes how each value originally produced by parsing is transformed before being returned.== Non-callable values are ignored. The function is called with the following arguments:

- `key` - the key associated with the value;
- `value` - the value produced by parsing.

## Return value

The [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), string, number, boolean, or `null` value corresponding to the given JSON `text`.

A [`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) is thrown if the string to parse is not valid JSON.

## Description

`JSON.parse()` parses a JSON string according to the [JSON grammar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON#full_json_grammar), then evaluates the string as if it's a JavaScript expression. The only instance where a piece of JSON text represents a different value from the same JavaScript expression is when dealing with the `"__proto__"` key.

## Examples

```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
```

### `JSON.parse()` does not allow trailing commas

```js
// Both will throw a SyntaxError
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
```

### `JSON.parse()` does not allow single quotes

```js
// Will throw a SyntaxError
JSON.parse("{'foo': 1}");
```

## References

1. [`JSON.parse()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)