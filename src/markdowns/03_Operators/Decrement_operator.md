# Decrement operator(--)

The decrement operator `--` ==**decrements** (subtracts one from) its operand== _and_ ==**returns the value** before _or_ after the decrement, _depending on where the operator is placed_==.

## Syntax

```js
x--
--x
```

## Description

If used ==**postfix**==, with operator after operand (for example, `x--`), the decrement operator decrements and ==returns the value **_before_ decrementing**==.

If used ==**prefix**==, with operator before operand (for example, `--x`), the decrement operator decrements and ==returns the value **_after_ decrementing**==.

The decrement operator can only be applied on operands that are references (variables and object properties; i.e. valid [assignment targets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)). `--x` itself evaluates to a value, not a reference, so you ==cannot chain multiple decrement operators together==.

```js
--(--x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Examples

```js
// Postfix decrement returns the value before decrementing
let x = 3;
const y = x--;
// x = 2
// y = 3

// Prefix decrement returns the value after decrementing
let x = 3;
const y = --x;
// x = 2
// y = 2
```

## References

1. [Decrement (--) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
1. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)