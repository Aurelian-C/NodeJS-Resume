# JavaScript Expressions and Statements

**Statements** and **expressions** are two very important terms in JavaScript. Given how frequently these two ==**terms are used to describe JavaScript code**==, it is important to understand what they mean and the distinction between the two.

## Expressions

==Any unit of code that can be evaluated to a **value** is an expression==. Since ==**expressions produce values**==, _they can appear anywhere in a program where JavaScript expects a value_, such as the arguments of a function invocation. 

JavaScript has the following ==expression **categories**==:

#### ==Arithmetic== expressions

Arithmetic expressions **evaluate to a numeric value**.

```js
10; // Here 10 is an expression that is evaluated to the numeric value 10 by the JS interpreter
10 + 13; // This is another expression that is evaluated to produce the numeric value 23
```

#### ==String== expressions

String expressions are expressions that **evaluate to a string**.

```js
'hello';
'hello' + 'world'; // evaluates to the string 'hello world'
```

#### ==Logical== expressions

Expressions that **evaluate to the Boolean value** ```true``` or ```false``` are considered to be logical expressions. This set of expressions often involve the usage of logical operators:

- `&&` (AND)
- `||` (OR)
-  `!` (NOT).

```js
10 > 9; // evaluates to boolean value true
10 < 20; // evaluates to boolean value false
true; //evaluates to boolean value true
a === 20 && b === 30; // evaluates to true or false based on the values of a and b
```

#### ==Primary== expressions

Primary expressions refer to **stand alone expressions** such as _literal values_, certain _keywords_ and _variable values_.

```js
'hello world'; // A string literal
23; // A numeric literal
true; // Boolean value true
sum; // Value of variable sum
this; // A keyword that evaluates to the current object
```

#### ==Left-hand-side== expressions

Left-hand-side expressions are those that can **appear on the left side of an assignment expression**.

```js
// variables such as i and total
i = 10;
total = 0;

// properties of objects
var obj = {}; // an empty object with no properties
obj.x = 10; // an assignment expression

// elements of arrays
array[0] = 20;
array[1] = 'hello';

// Invalid left-hand-side errors
++(a+1); // SyntaxError. Attempting to increment or decrement an expression that is not an lvalue will lead to errors.
```

#### ==Assignment== expressions

When expressions use the `=` operator to assign a value to a variable, it is called an assignment expression.

```js
average = 55;
var b = (a = 1); // here the assignment expression (a = 1) evaluates to a value that is assigned to the variable b. b = (a = 1) is another assignment expression. var is not part of the expression.
```

The `=` operator expects an value as its left-side operand. The value of an assignment expression is the value of the right-side operand such as `55` in the above example. As a side effect, the `=` operator assigns the value on the right side to the value on the left side.

#### ==Expressions with side effects==

As we just saw with assignment expressions, expressions with side effects are those that result in a change or a side effect such as setting or modifying the value of a variable through the assignment operator `=`, function call, incrementing or decrementing the value of a variable.

```js
sum = 20; // here sum is assigned the value of 20
sum++; // increments the value of sum by 1
function modify() {
  a *= 10;
}
var a = 10;
modify(); // modifies the value of a to 100.
```

## Statements

==A statement is an **instruction to perform a specific action**==. Such actions include creating a variable or a function, looping through an array of elements, evaluating code based on a specific condition etc. ==JavaScript programs are actually a **sequence of statements**==.

Statements in JavaScript can be classified into the following categories:

#### ==Declaration== statements

Such type of statements create variables and functions by using the `var`, `let` or `const` and function statements respectively.

```js
var sum;
var average;
// In the following example, var total is the statement and total = 0 is an assignment expression
var total = 0;
// A function declaration statement
function greet(message) {
  console.log(message);
}
```

#### ==Expression== statements

Wherever JavaScript expects a statement, you can also write an expression. Such statements are referred to as expression statements. But the reverse does not hold. You cannot use a statement in the place of an expression.

```js
var a = var b; // leads to an error cause you cannot use a statement in the place of an expression
var a = (b = 1); // since (b = 1) is an assignment expression and not a statement, this is a perfectly acceptable line of code
console.log(var a); // results in error as you can pass only expressions as a function argument
```

Stand alone primary expressions such as variable values can also pass off as statements depending on the context. Examples of expression statements includes the following:

```js
// In the following example, sum is an expression as it evaluates to the value held by sum but it can also pass off as a valid statement.
sum;
// An expression statement that evaluates an expression with side effects
b = 4 + 38;
```

#### ==Conditional== Statements

Conditional statements execute statements based on the value of an expression. Examples of conditional statements includes the `if..else` and `switch` statements.

```js
// Syntax of an if statement. If the expression following the if statement evaluates to a truthy value, statement 1 is executed else statement 2 is executed.
if (expression) {
  statement 1;
} else {
  statement 2; 
}
```

#### ==Loops== and ==Jumps==

Looping statements includes the following statements: `while`, `do/while`, `for` and `for/in`. Jump statements are used to make the JavaScript interpreter jump to a specific location within the program. Examples of jump statements includes `break`, `continue`, `return` and `throw`.

#### ==Function Expressions== _vs_ ==Function Declarations==

A function expression, particularly a named function expression, and a function declaration may look the same but their behavior is very different.

A function expression is part of a variable assignment expression and may or may not contain a name. Since this type of function appears after the assignment operator `=`, it is evaluated as an expression. Function expressions are typically used to assign a function to a variable. Function expressions are evaluated only when the interpreter reaches the line of code where function expressions are located.

```js
// A function expression. We assign a function to the variable num and use it to call the function.
var num = function message(x) {
  return x + x;
};
num(7); // returns 14
// An anonymous function expression. Behaves exactly like a named function expression.
var num = function (x) {
  return x + x;
};
num(7); // returns 14
```

Only function expressions can be immediately invoked. Such types of function expressions are referred to as Immediately Invoked Function Expression (IIFE).

```js
// An Immediately Invoked Function Expression
(function () {
  console.log('Immediately Invoked Function Expression.');
})();
```

On the other hand, ==**function declarations are statements**== as they perform the action of creating a variable whose value is that of the function. Function declaration falls under the category of declaration statements. Also, function declarations are hoisted to the top of the code unlike function expressions. Function declarations must always be named and cannot be anonymous.

```js
// Example of a function declaration. Function declarations always start with the function keyword.
function greet(message) {
  return 'Hi ' + message;
}
```

## References

1. [JavaScript Expressions and Statements - medium.com](https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74)
