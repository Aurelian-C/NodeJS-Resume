# Nullish coalescing operator `??`

The nullish coalescing operator `??` is a logical operator that ==returns its right-hand side operand when its left-hand side operand is `null` _or_ `undefined`, and otherwise returns its left-hand side operand==.

This can be seen as a special case of the [logical OR `||` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR), which returns the right-hand side operand if the left operand is *any* [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value, not only `null` or `undefined`. In other words, if you use `||` to provide some default value to another variable `foo`, you may encounter unexpected behaviors if you consider some falsy values as usable (e.g., `''` or `0`)

The nullish coalescing operator has the fifth-lowest [operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence), directly lower than `||` and directly higher than the [conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

## Syntax

```js
leftExpr ?? rightExpr
```

## Examples

```js
const valA = null ?? "A"; // "A"
const valB = "" ?? "B"; // "" (as the empty string is not null or undefined)
const valC = 42 ?? 0; // 42
```

## Nullish Coalescing operator `??` _vs_ Logical OR `||` operator

Earlier, when one wanted to assign a default value to a variable, a common pattern was to use the logical OR operator `||`:

```js
let foo; //  foo is never assigned any value so it is still undefined
const someDummyText = foo || 'Hello!'; //"Hello"
```

However, due to `||` being a boolean logical operator, the left-hand-side operand was coerced to a boolean for the evaluation and any *falsy* value (`0`, `''`, `NaN`, `null`, `undefined`) was not returned. This behavior may cause unexpected consequences if you consider `0`, `''`, or `NaN` as valid values.

The nullish coalescing operator avoids this pitfall by only returning the second operand when the first one evaluates to either `null` or `undefined` (but no other falsy values):

```js
// With Logical OR
const qty = 0 || 42; // 42
const message = "" || "hi!"; // "hi!"

// With Nullish Coalescing
const qty = 0 ?? 42; // 0
const message = "" ?? "hi!"; // ""
```

## References

1. [Nullish coalescing operator (??) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
1. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)