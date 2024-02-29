# Remainder operator `%`

The remainder operator `%` ==**returns the remainder left over** when one operand is divided by a second operand==. It always takes the sign of the dividend.

## Syntax

```js
x % y
```

## Description

For the operation `n % d`, `n` is called the ==dividend== and `d` is called the ==divisor==. The operation returns `NaN` if one of the operands is `NaN`, `n` is ±Infinity, or if `d` is ±0. Otherwise, if `d` is ±Infinity or if `n` is ±0, the dividend `n` is returned.

## Examples

```js
// Remainder with positive dividend
13 % 5	//3
1 % -2	//1
1 % 2	//1
2 % 3	//2
5.5 % 2	//1.5

// Remainder with negative dividend
-13 % 5 //-3
-1 % 2  //-1
-4 % 2  //-0

// Remainder with NaN
NaN % 2 // NaN

// Remainder with Infinity
Infinity % 2 // NaN
Infinity % 0 // NaN
Infinity % Infinity // NaN
2 % Infinity // 2
0 % Infinity // 0
```

## References

1. [Remainder (%) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
1. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)