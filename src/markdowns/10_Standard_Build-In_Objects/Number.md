# Numbers

==The `Number` object is a [primitive wrapper object](https://developer.mozilla.org/en-US/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript) used to represent and manipulate numbers like `37` or `-9.25`==.

The **`Number` constructor** contains constants and methods for working with numbers. Values of other types can be converted to numbers using the **`Number()` function**.

## Creating numbers

Numbers can be ==created as **primitives**, most commonly expressed in literal forms, or as **objects**, using the [`Number()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) constructor==:

```js
const number1 = 12;
const number2 = -42.5;
const number3 = Number(51);
const number4 = Number('51');

const number5 = new Number(23); // Number with new returns a number wrapper object

console.log(typeof number1); // "number"
console.log(typeof number2); // "number"
console.log(typeof number3); // "number"
console.log(typeof number4); // "number"
console.log(typeof number5); // "object"
```

> **NOTE**: _Number function_ and _Number constructor_ produce different results: when `Number` is called as a constructor (with `new`), it creates a [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) object, which is **not** a primitive. For example, `typeof new Number(42) === "object"`, and `new Number(42) !== 42` (although `new Number(42) == 42`). When called instead as a function like `Number()`, it performs type conversion to a [primitive number](https://developer.mozilla.org/en-US/docs/Glossary/Number). If `Number()` can't convert a parameter to a number, will return `NaN`.

> **WARNING:** You should rarely find yourself using `Number` as a constructor.

Numbers are most commonly expressed in literal forms:

```js
123; // one-hundred twenty-three
123.0; // same
123 === 123.0; // true
```

A number literal like `37` in JavaScript code is a floating-point value, not an integer. There is no separate integer type in common everyday use. (JavaScript also has a [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) type, but it's not designed to replace Number for everyday uses. `37` is still a number, not a BigInt.)

When used as a function, `Number(value)` converts a string or other value to the Number type. If the value can't be converted, it returns [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN):

```js
Number("123"); // returns the number 123
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN
```

## Number encoding

The JavaScript `Number` type is a [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) value, like `double` in Java or C#. This means it can represent fractional values, but ==there are some limits to the stored number's magnitude and precision==.

The largest value a number can hold is 21024 - 1 (with the exponent being 1023 and the mantissa being 0.1111… in base 2), which is obtainable via [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Values higher than that are replaced with the special number constant [`Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity).

==Integers can only be represented without loss of precision in the range -253 + 1 to 253 - 1, inclusive (obtainable via [`Number.MIN_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) and [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER))==.

## Number coercion

Many built-in operations that expect numbers first coerce their arguments to numbers (which is largely why `Number` objects behave similarly to number primitives). The operation can be summarized as follows:

- Numbers are returned as-is.
- [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) turns into [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).
- [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null) turns into `0`.
- `true` turns into `1`; `false` turns into `0`.
- Strings are converted by parsing them as if they contain a number literal. Parsing failure results in `NaN`. There are some minor differences compared to an actual number literal:
  - Leading and trailing whitespace/line terminators are ignored.
  - A leading `0` digit does not cause the number to become a octal literal (or get rejected in strict mode).
  - `+` and `-` are allowed at the start of the string to indicate its sign. (In actual code, they "look like" part of the literal, but are actually separate unary operators.) However, the sign can only appear once, and must not be followed by whitespace.
  - `Infinity` and `-Infinity` are recognized as literals. In actual code, they are global variables.
  - Empty or whitespace-only strings are converted to `0`.
  - [Numeric separators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) are not allowed.
- [BigInts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) throw a [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) to prevent unintended implicit coercion causing loss of precision.
- [Symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) throw a [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

==There are two ways to achieve nearly the same effect in JavaScript.==

- ==[Unary plus](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus): `+x` does exactly the number coercion steps explained above to convert `x`.==
- ==The [`Number()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) function: `Number(x)` uses the same algorithm to convert `x`, except that [BigInts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) don't throw a [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError), but return their number value, with possible loss of precision.==

==[`Number.parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat) and [`Number.parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) are similar to `Number()` but only convert strings, and have slightly different parsing rules. For example, `parseInt()` doesn't recognize the decimal point, and `parseFloat()` doesn't recognize the `0x` prefix.==

## References

1. [Number - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
2. [`Number()` constructor - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
3. [How numbers are encoded in JavaScript - 2ality.com](https://2ality.com/2012/04/number-encoding.html)
4. [Dealing with float precision in Javascript - stackoverflow.com](https://stackoverflow.com/questions/11695618/dealing-with-float-precision-in-javascript)
