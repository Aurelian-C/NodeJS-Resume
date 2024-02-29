# Addition operator `+`

The addition operator `+` ==produces the **sum of numeric operands** _or_ **string concatenation**==.

## Syntax

```js
x + y
```

## Description

The addition operator `+` is overloaded for ==two distinct operations: **numeric addition** and **string concatenation**==. 

When evaluating, it first coerces both operands to primitives, then the two operands types are tested:

- If one side is a string, the other operand is also [converted to a string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) and they are concatenated.
- If they are both [BigInts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt), BigInt addition is performed. If one side is a BigInt but the other is not, a [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) is thrown.
- Otherwise, both sides are [converted to numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), and numeric addition is performed.

String concatenation is often thought to be equivalent with [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) or [`String.prototype.concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat), but they are not. Addition coerces the expression to a *primitive*, which calls [`valueOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) in priority; on the other hand, template literals and `concat()` coerce the expression to a *string*, which calls [`toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) in priority.

>  **Note**: You are advised to not use `"" + x` to perform [string coercion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).

## Examples

Numeric addition:

```js
// Number + Number -> addition
1 + 2 // 3

// Boolean + Number -> addition
true + 1 // 2

// Boolean + Boolean -> addition
false + false // 0
```

String concatenation:

```js
// String + String -> concatenation
'foo' + 'bar' // "foobar"

// Number + String -> concatenation
5 + 'foo' // "5foo"

// String + Boolean -> concatenation
'foo' + false // "foofalse"
```

## References

1. [Addition (+) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
1. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)