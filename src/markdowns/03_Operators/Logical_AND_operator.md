# Logical AND `&&`

The logical AND `&&` operator for a set of boolean operands will be `true` ==only if **all** the operands are== `true`. Otherwise it will be `false`.

More generally, the operator returns the value of the first [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) operand encountered when evaluating from left to right, or the value of the last operand if they are all [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).

## Syntax

```js
expr1 && expr2
```

## Description

Logical AND `&&` ==evaluates operands from left to right==, _returning immediately with the value of the first [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) operand it encounters; if all values are [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy), the value of the last operand is returned_.

> **Note**: If a value can be converted to `true`, the value is so-called [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). If a value can be converted to `false`, the value is so-called [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

Examples of expressions that can be converted to false are:

- `false`;
- `null`;
- `NaN`;
- `0`;
- empty string (`""` or `''` or ``);
- `undefined`.

## Operator precedence

==The AND operator has a **higher precedence than the OR operator**==, meaning the `&&` operator is executed before the `||` operator.

```js
true || false && false // returns true because && has a higher precedence than ||
true && (false || false) // returns false because grouping has the highest precedence
(2 === 3) || (4 < 0) && (1 === 1) // returns false
```

## Short-circuit evaluation

==The logical AND expression is a **short-circuit operator**. As **each operand is converted to a boolean**, if the result of one conversion is found to be `false`, the AND operator stops and _returns the original value of that falsy operand_; it does **not** evaluate any of the remaining operands==.

```js
(some falsy expression) && expression/statement

// The expression/statement part is never evaluated/executed because the first operand (some falsy expression) is evaluated as falsy.
```

## References

1. [Logical AND (&&) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
1. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)