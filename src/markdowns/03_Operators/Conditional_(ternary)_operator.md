# Conditional (Ternary) operator

The **conditional (ternary) operator** is the only JavaScript operator that takes three operands: a condition followed by a question mark (`?`), then an expression to execute if the condition is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) followed by a colon (`:`), and finally the expression to execute if the condition is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). This operator is frequently used as an alternative to an [`if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement.

## Syntax

```js
condition ? exprIfTrue : exprIfFalse
```

## Parameters

#### `condition`

An ==expression== whose value is used as a condition.

#### `exprIfTrue`

An ==expression== which is executed if the `condition` evaluates to a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value (one which equals or can be converted to `true`).

#### `exprIfFalse`

An ==expression== which is executed if the `condition` is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) (that is, has a value which can be converted to `false`).

## Description

The Conditional (Ternary) operator is mostly used to ==**assigns a value to a variable based on some condition**==. _The ternary operator is not thought as a replacement of `if...else` statement. We still need `if...else` all the time_, for example when we have bigger blocks of code that we need to execute based on a condition. In that case the ternary operator is not gonna work.

```js
// With ternary operator
const drink = age >= 18 && age <= 65 ? 'wine' : 'water';

// With if...else statement (without ternary operator)
let drink;
if (age >= 18 && age <= 65) {
  drink = 'wine';
} else {
  drink = 'water';
}
```

Ternary operator is an expression because produce a value vs `if...else` is a statement.

## Conditional chains

The ternary operator is right-associative, which means it can be "chained" in the following way, similar to an `if … else if … else if … else` chain:

```js
function example() {
  return condition1 ? value1
        : condition2 ? value2
        : condition3 ? value3
        : value4;
}

// This above is equivalent to the following if...else chain.
function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
```

## References

1. [Conditional (ternary) operator - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
1. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
