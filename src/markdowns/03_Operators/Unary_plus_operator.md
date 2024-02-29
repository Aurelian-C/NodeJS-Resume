# Unary plus operator `+`

The unary plus operator `+` ==precedes its operand and evaluates to its operand but **attempts to convert it into a _number_, if it isn't already**==.

## Syntax

```js
+x
```

## Description

Although unary negation `-` also can convert non-numbers, ==unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number==. It can convert string representations of integers and floats, as well as the non-string values `true`, `false` and `null`. Integers in both decimal and hexadecimal (`0x`-prefixed) formats are supported. Negative numbers are supported (though not for hex). Using the operator on BigInt values throws a TypeError. ==If it cannot parse a particular value, it will evaluate to [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)==.

## Examples

```js
// Usage with numbers
const x = 1;
const y = -1;
console.log(+x); // 1
console.log(+y); // -1

// Usage with non-numbers
+true  // 1
+false // 0
+null  // 0
+function (val) { return val; } // NaN
+1n    // throws TypeError: Cannot convert BigInt value to number
```

## References

1. [Unary plus (+) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
1. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)