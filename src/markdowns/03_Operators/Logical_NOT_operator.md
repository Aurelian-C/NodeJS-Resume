# Logical NOT operator `!`

The logical NOT `!` operator (logical complement, negation) ==takes truth to falsity and vice versa==. It is typically used with boolean (logical) values. When used with non-Boolean values, it returns `false` if its single operand can be converted to `true`; otherwise, returns `true`.

## Syntax

```js
!expr
```

## Description

Returns `false` if its single operand can be converted to `true`; otherwise, returns `true`.

> **Note**: If a value can be converted to `true`, the value is so-called [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). If a value can be converted to `false`, the value is so-called [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

Examples of expressions that can be converted to false are:

- `false`;
- `null`;
- `NaN`;
- `0`;
- empty string (`""` or `''` or ``);
- `undefined`.

Even though the `!` operator can be used with operands that are not Boolean values, it can still be considered a boolean operator since its return value can always be converted to a [boolean primitive](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type). To explicitly convert its return value (or any expression in general) to the corresponding boolean value, use a double NOT operator (`!!`) or the [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean) constructor.

## Examples

```js
!true	// !t returns false
!false	// !f returns true
!''		// !f returns true
!'Cat'	// !t returns false
```

## References

1. [Logical NOT (!) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)
1. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)