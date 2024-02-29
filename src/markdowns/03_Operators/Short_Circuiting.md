# Short Circuiting with `&&` and `||`

The two Short-Circuit operators are represented with the symbol `&&` and `||`, which can be pronounced as "AND" and "OR" respectively. ==They are basically used to **combine expressions**==. An example of Expressions in JavaScript are: `a == b`, `a > b`, `a >= b` and so on.

Although short-circuit operators are basically used to combine expressions, ==you can use them to **execute statements conditionally**==.

## Using the `&&` operator

==true **&&** statement== _(if the first condition is `true`, the ==statement is executed==)_

==false **&&** statement== _(if the first condition is `false`, the ==statement is **NOT** executed==)_

> **Note:** if we are ==using the `&&` operator _to execute a statement_==, we want the Boolean Expression to **pass** before the statement would be executed. Therefore, the `&&` operator executes or is equivalent to the `if` block of a conditional statement.
>
> ```js
> // true && statement
> if (true) {} //statement is executed
>   
> // false && statement
>if (false) {} //statement is NOT executed
> ```

## Using the `||` operator

==true **||** statement== (if the first condition is `true`, the ==statement is **NOT** executed==)

==false **||** statement== (if the first condition is `false`, the ==statement is executed==)

> **Note:** if we are ==using the `||` operator _to execute a statement_==, we want the Boolean Expression to **fail** before the statement would be executed. Therefore the `||` operator executes or is equivalent to the `else` block of a conditional statement.
>
> ```js
> // true || statement
> if (true) {
>   	//this statement is executed
> } else {
>   	//this statement is NOT executed
> }
>
> // false || statement
> if (false) {
>   	//this statement is NOT executed
> } else {
>   	//this statement is executed
> }
> ```

## Examples

```js
// Using the && operator
true && true	// true
true && false	// false
false && true	// false
false && false	// false

// Using the || operator
true || true	// true
true || false	// true
false || true	// true
false || false	// false
```

## Short-circuit operators can also be used as a Ternary or Conditional operator

```js
// Using the && operator
true && statement // Execute statement
false && statement // Don’t execute statement

// Using the || operator
true || statement // Don’t execute statement
false || statement // Execute statement
```

> **Note:** if we are using the `&&` operator to execute a statement, we want the Boolean Expression to **pass** before the statement would be executed. Therefore, the `&&` operator executes or is equivalent to the `if` block of a conditional statement.
>
> **Note:** if we are using the `||` operator to execute a statement, we want the Boolean Expression to **fail** before the statement would be executed. Therefore the `||` operator executes or is equivalent to the `else` block of a conditional statement.

#### Some examples

```js
// Since the Boolean expression by the left is "true", it would execute the statement by the right
5 < 50 && console.log("Peter failed the exam"); // Output: Peter failed the exam

// Since the Boolean expression by the left is false it would NOT execute the statement by the right
60 < 50 && console.log("Peter failed the exam"); // Output: nothing
```

The above expression is equivalent to a conditional statement:

```js
// Conditional statement equivalent
if (5 < 50) {
	console.log("Peter failed the exam")
} else {
	//Do Nothing
}

// Ternary operator equivalent.
5 < 50 ? console.log("Peter failed the exam") : //Do nothing

////////////////////////////////////////////////////////////////////////////////////////

// Conditional statement equivalent.
if (60 > 50) {
	console.log("Peter passed the exam")
} else {
	//Do nothing
}

// Ternary operator equivalent
60 > 50 ? console.log("Peter passed the exam") : //Do nothing
```

## Conclusion

The short-circuit operators are very tricky because they can be used in more than one ways. Therefore, when you see it in an existing code, be sure to detect the intended usage of the programmer. But if you are going to use one, ==be extra careful when using it to execute a statement especially if you are combining two Boolean expressions plus a statement **e.g (Boolean && Boolean && Statement)**==.

## References

1. [A Simpler Understanding of the Short-circuit Operators in JavaScript - medium.com](https://medium.com/@ezekielphlat/a-simpler-understanding-of-the-short-circuit-operators-in-javascript-d275a313cef1)
1. [JavaScript: What is short-circuit evaluation? - codeburst.io](https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c)
1. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
