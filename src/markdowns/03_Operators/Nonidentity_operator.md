# Strict inequality operator `!==`

The strict inequality operator `!==` ==checks whether its two operands are not equal, returning a Boolean result==. Unlike the [inequality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality) operator, the strict inequality operator ==always considers operands of different types to be different==.

## Syntax

```js
x !== y
```

## Description

The strict inequality operator checks whether its operands are not equal. It is the negation of the [strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) operator so the following two lines will always give the same result:

```js
x !== y;

!(x === y);
```

For details of the comparison algorithm, see the page for the [strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) operator.

Like the strict equality operator, the strict inequality operator will always consider operands of different types to be different:

```js
3 !== "3"; // true
```

## Examples

```js
// Comparing operands of the same type
"hello" !== "hello"; // false
"hello" !== "hola"; // true
3 !== 3; // false
3 !== 4; // true

// Comparing operands of different types
"3" !== 3; // true
true !== 1; // true
null !== undefined; // true

// Comparing objects
const object1 = { key: "value" };
const object2 = { key: "value" };
object1 !== object2; // true
object1 !== object1; // false
```

## References

1. [Strict inequality (!==) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
2. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)