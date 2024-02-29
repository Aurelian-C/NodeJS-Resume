# Less than `<`, Greater than `>`, Less than or equal `<=`, Greater than or equal `>=`

==The **less than** operator== `<` returns `true` if the left operand is less than the right operand, and `false` otherwise.

==The **greater than** operator== `>` returns `true` if the left operand is greater than the right operand, and `false` otherwise.

==The **less than or equal** operator== `<=` returns `true` if the left operand is less than or equal to the right operand, and `false` otherwise.

==The **greater than or equal** operator== `>=` returns `true` if the left operand is greater than or equal to the right operand, and `false` otherwise.

## Syntax

```js
x < y
x > y
x <= y
x >= y
```

## Description

The operands are compared with multiple rounds of coercion, which can be summarized as follows:

- First, objects are converted to primitives using [`@@toPrimitive()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (with `"number"` as hint), [`valueOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), and [`toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) methods, in that order. The left operand is always coerced before the right one.
- If both values are strings, they are compared as strings, based on the values of the Unicode code points they contain.
- Otherwise JavaScript attempts to convert non-numeric types to numeric values:
  - Boolean values `true` and `false` are converted to 1 and 0 respectively.
  - `null` is converted to 0.
  - `undefined` is converted to `NaN`.
  - Strings are converted based on the values they contain, and are converted as `NaN` if they do not contain numeric values.
- If either value is [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN), the operator returns `false`.
- Otherwise the values are compared as numeric values. BigInt and number values can be compared together.

Other operators, including [`>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than), [`>=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal), and [`<=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal), use the same algorithm as `<`. There are two cases where all four operators return `false`:

- If one of the operands gets converted to a BigInt, while the other gets converted to a string that cannot be converted to a BigInt value (it throws a [syntax error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) when passed to [`BigInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)).
- If one of the operands gets converted to `NaN`. (For example, strings that cannot be converted to numbers, or `undefined`.)

For all other cases, the four operators have the following relationships:

```js
x < y === !(x >= y);
x <= y === !(x > y);
x > y === y < x;
x >= y === y <= x;
```

> **Note:** One observable difference between `<` and `>` is the order of coercion, especially if the coercion to primitive has side effects. All comparison operators coerce the left operand before the right operand.

## Examples

==**Comparisons always coerce their operands to primitives**. This means the same object may end up having different values within one comparison expression==.

```js
// String to string comparison
"a" < "b";	// true
"a" < "a";	// false
"a" < "3";	// false

// String to number comparison
"5" < 3;	// false
"3" < 3;	// false
"3" < 5;	// true
"hello" < 5;	// false
5 < "hello";	// false

// Comparing Boolean, null, undefined, NaN
true < false;	// false
false < true;	// true
0 < true;		// true
true < 1;		// false
null < 0;		// false
null < 1;		// true
undefined < 3;	// false
3 < undefined;	// false
3 < NaN;		// false
NaN < 3;		// false
```

## References

1. [Less than (<) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than)
2. [Greater than (>) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than)
3. [Less than or equal (<=) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
4. [Greater than or equal (>=) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
5. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)