# Increment operator (++)

The increment operator `++` ==**increments** (adds one to) its operand== _and_ ==**returns the value** before _or_ after the increment, _depending on where the operator is placed_==.

## Syntax

```js
x++
++x
```

## Description

If used ==**postfix**==, with operator after operand (for example, `x++`), the increment operator increments and ==returns the value **_before_ incrementing**==.

If used ==**prefix**==, with operator before operand (for example, `++x`), the increment operator increments and ==returns the value **_after_ incrementing**==.

The increment operator can only be applied on operands that are references (variables and object properties; i.e. valid [assignment targets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)). `++x` itself evaluates to a value, not a reference, so ==you cannot chain multiple increment operators together==.

```js
++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Examples

```js
// Postfix increment returns the value before incrementing
let x = 3;
const y = x++;
// x = 4
// y = 3

// Prefix increment returns the value after incrementing
let x = 3;
const y = ++x;
// x = 4
// y = 4
```

## References

1. [Increment (++) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
1. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)