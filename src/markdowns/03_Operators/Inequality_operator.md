# Inequality operator `!=`

The inequality operator `!=` ==checks whether its two operands are not equal, returning a Boolean result==. Unlike the [strict inequality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality) operator, it attempts to ==**convert** _and_ **compare** operands that are of different types==.

## Syntax

```js
x != y
```

## Description

The inequality operator checks whether its operands are not equal. It is the negation of the [equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality) operator so the following two lines will always give the same result:

```js
x != y;

!(x == y);
```

For details of the comparison algorithm, see the page for the [equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality) operator.

Like the equality operator, the inequality operator will attempt to convert and compare operands of different types:

```js
3 != "3"; // false
```

To prevent this, and require that different types are considered to be different, use the [strict inequality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality) operator instead:

```js
3 !== "3"; // true
```

## Examples

```js
// Comparison with no type conversion
1 != 2; // true
"hello" != "hola"; // true
1 != 1; // false
"hello" != "hello"; // false

// Comparison with type conversion
"1" != 1; // false
1 != "1"; // false
0 != false; // false
0 != null; // true
0 != undefined; // true

// Comparison of objects
const object1 = { key: "value" };
const object2 = { key: "value" };
object1 != object2; // true
object1 != object1; // false
```

## References

1. [Inequality (!=) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality)
2. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)