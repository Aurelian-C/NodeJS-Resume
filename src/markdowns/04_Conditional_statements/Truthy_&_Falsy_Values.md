# Truthy and Falsy Values

## Truthy values

In JavaScript, a truthy value is a value that is considered `true` when encountered in a _**[Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) context**_. JavaScript uses [type conversion](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion) to coerce any value to a Boolean in contexts that require it, such as [conditionals](https://developer.mozilla.org/en-US/docs/Glossary/Conditional) and [loops](https://developer.mozilla.org/en-US/docs/Glossary/loop).

All values are truthy unless they are defined as [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). That is, ==**all values are truthy _except_**==:

- `false`
-  `0`, `-0`, `0n`
-  `""`
-  `null`
-  `undefined`
- `NaN`.

JavaScript uses [type coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion) in Boolean contexts. Examples of truthy values in JavaScript (which will be coerced to `true` in boolean contexts, and thus execute the `if` block):

```js
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

#### The logical AND operator `&&`

If the first object is truthy, the [logical AND operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) returns the second operand:

```js
true && "dog"	// returns "dog"
[] && "dog"		// returns "dog"
```

## Falsy values

A falsy value is a value that is considered `false` when encountered in a _**[Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) context**_. JavaScript uses [type conversion](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion) to coerce any value to a Boolean in contexts that require it, such as [conditionals](https://developer.mozilla.org/en-US/docs/Glossary/Conditional) and [loops](https://developer.mozilla.org/en-US/docs/Glossary/loop).

The following table provides a complete list of JavaScript falsy values:

| Value                                                        | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `false`                                                      | The keyword [`false`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#future_reserved_keywords_in_older_standards). |
| `0`                                                          | The [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) zero (so, also `0.0`, etc., and `0x0`). |
| `-0`                                                         | The [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) negative zero (so, also `-0.0`, etc., and `-0x0`). |
| `0n`                                                         | The [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) zero (so, also `0x0n`). Note that there is no [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) negative zero — the negation of `0n` is `0n`. |
| `""`, `''`, ``                                               | Empty [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) value. |
| [null](https://developer.mozilla.org/en-US/docs/Glossary/Null) | [ null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null) — the absence of any value. |
| [undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined) | [ undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) — the primitive value. |
| [NaN](https://developer.mozilla.org/en-US/docs/Glossary/NaN) | [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) — not a number. |
| [`document.all`](https://developer.mozilla.org/en-US/docs/Web/API/Document/all) | Objects are falsy if and only if they have the [[[IsHTMLDDA\]]](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot) internal slot. That slot only exists in [`document.all`](https://developer.mozilla.org/en-US/docs/Web/API/Document/all) and cannot be set using JavaScript. |

JavaScript uses [type coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion) in Boolean contexts. Examples of falsy values in JavaScript (which are coerced to `false` in Boolean contexts, and thus _bypass_ the `if` block):

```js
if (false) {
  // Not reachable
}

if (null) {
  // Not reachable
}

if (undefined) {
  // Not reachable
}

if (0) {
  // Not reachable
}

if (-0) {
  // Not reachable
}

if (0n) {
  // Not reachable
}

if (NaN) {
  // Not reachable
}

if ("") {
  // Not reachable
}
```

#### The logical OR operator `||`

If the first object is falsy, the [logical OR operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR) returns the second operand:

```js
false && "dog")	// returns "dog"
0 && "dog";		// returns "dog"
```

## See also

- [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) and [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- [Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
- [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)

## References

1. [Truthy - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Truthy#:~:text=In%20JavaScript%2C%20a%20truthy%20value,type%20coercion%20in%20Boolean%20contexts.)
2. [Falsy - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)