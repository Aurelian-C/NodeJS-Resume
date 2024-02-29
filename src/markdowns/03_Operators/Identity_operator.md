# Strict equality operator `===`

The strict equality operator `===` ==checks whether its two operands are equal, returning a Boolean result==. Unlike the [equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality) operator, the strict equality operator ==always considers operands of different types to be different==.

## Syntax

```js
x === y
```

## Description

The strict equality operators (`===` and `!==`) provide the [IsStrictlyEqual](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using) semantic.

- If the operands are of different types, return `false`.
- If both operands are objects, return `true` only if they refer to the same object.
- If both operands are `null` or both operands are `undefined`, return `true`.
- If either operand is `NaN`, return `false`.
- Otherwise, compare the two operand's values:
  - Numbers must have the same numeric values. `+0` and `-0` are considered to be the same value.
  - Strings must have the same characters in the same order.
  - Booleans must be both `true` or both `false`.

The most notable difference between this operator and the [equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality) (`==`) operator is that if the operands are of different types, the `==` operator attempts to convert them to the same type before comparing.

## Examples

```js
// Comparing operands of the same type
"hello" === "hello"; // true
"hello" === "hola"; // false
3 === 3; // true
3 === 4; // false

// Comparing operands of different types
"3" === 3; // false
true === 1; // false
null === undefined; // false

// Comparing objects
const object1 = { key: "value" };
const object2 = { key: "value" };
object1 === object2; // false
object1 === object1; // true
```

## References

1. [Strict equality (===) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
2. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)