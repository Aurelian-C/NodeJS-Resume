# Subtraction assignment operator `-=`

The subtraction assignment operator `-=` ==**subtracts the value of the right operand** from a variable and **assigns the result** to the variable==. 

==**Concatenation is not possible** with `-=` operator==, only `+` and `+=` operators trigger type coercion.

## Syntax

```js
x -= y // x = x - y
```

## Examples

```js
let bar = 5

bar -= 2     // 3
bar -= 'foo' // NaN
```

## References

1. [Subtraction assignment (-=) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)
1. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)