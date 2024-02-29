# Logical OR `||`

The logical OR `||` operator (logical disjunction) for a set of operands is `true` ==only if **one or more** of its operands is== `true`. It is typically used with boolean (logical) values. When it is, it returns a Boolean value. However, the `||` operator actually returns the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value.

## Syntax

```js
expr1 || expr2
```

## Description

If `expr1` can be converted to `true`, returns `expr1`; else, returns `expr2`.

> **Note**: If a value can be converted to `true`, the value is so-called [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). If a value can be converted to `false`, the value is so-called [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

Examples of expressions that can be converted to false are:

- `false`;
- `null`;
- `NaN`;
- `0`;
- empty string (`""` or `''` or ``);
- `undefined`.

## Operator precedence

The following expressions might seem equivalent, but they are not, because the `&&` operator is executed before the `||` operator.

```js
true || false && false		// returns true, because && has a higher precedence than ||
(true || false) && false	// returns false, because grouping has the highest precedence
```

## Short-circuit evaluation

==The logical OR expression is a **short-circuit operator**. As **each operand is converted to a boolean**, if the result of one conversion is found to be `true`, the OR operator stops and _returns the original value of that truthy operand_; it does **not** evaluate any of the remaining operands==.

```js
(some truthy expression) && expression/statement

// The expression/statement part is never evaluated/executed because the first operand (some truthy expression) is evaluated as truthy.
```

> **Note:** If you use the `||` operator to provide a default value to some variable, be aware that any *falsy* value will not be used. If you only need to filter out [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null) or [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined), consider using [the nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator).

## References

1. [Logical OR (||) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
1. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)