# Addition assignment operator `+=`

The addition assignment operator `+=` ==**adds the value of the right operand** to a variable and **assigns the result** to the variable==. The types of the two operands determine the behavior of the addition assignment operator. ==**Addition** _or_ **concatenation** is possible==.

## Syntax

```js
x += y // x = x + y
```

## Examples

```js
let foo = 'foo';

// String + Boolean -> concatenation
foo += false; // "foofalse"

// String + String -> concatenation
foo += 'bar'; // "foobar"

// String + Number -> concatenation
foo += 3; // "foo3"
```

```js
let bar = 5;

// Number + Number -> addition
bar += 2; // 7

// Number + String -> concatenation
bar += 'foo'; // "7foo"
```

## References

1. [Addition assignment (+=) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)
1. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)