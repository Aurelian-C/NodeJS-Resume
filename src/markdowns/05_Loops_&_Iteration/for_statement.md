# `for` statement

A `for` statement ==**repeats until** a specified condition evaluates to `false`==.

The `for` statement creates a loop that consists of ==three _optional_ expressions==, enclosed in parentheses and separated by semicolons `;`, followed by a statement (usually a [block statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)) to be executed in the loop.

## Syntax:

```js
for (initialExpression; conditionExpression; incrementExpression) {
  // statement
}
```

## Parameters

#### `initialExpression` _(optional)_

An ==expression== (including [assignment expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)) _or_ ==variable declaration== ==**evaluated once** _before_ the loop begins==. Typically used to initialize a counter variable. This expression may optionally declare new variables with `var` or `let` keywords. Variables declared with `var` are not local to the loop, i.e. they are in the same scope the `for` loop is in. Variables declared with `let` are local to the statement. 

The result of this expression is discarded.

#### `conditionExpression` _(optional)_

==An expression to be **evaluated before each loop iteration**==. If this expression [evaluates to true](https://developer.mozilla.org/en-US/docs/Glossary/Truthy), `statement` is executed. If the expression [evaluates to false](https://developer.mozilla.org/en-US/docs/Glossary/Falsy), execution exits the loop and goes to the first statement after the `for` construct. 

This conditional test is optional. If omitted, the condition always evaluates to `true`.

#### `incrementExpression` _(optional)_

==An expression to be **evaluated at the end of each loop iteration**==. This occurs _before the next evaluation_ of `conditionExpression`. Generally used to update or increment the counter variable.

#### `statement`

A statement that is executed as long as the condition evaluates to `true`. You can use a [block statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block) to execute multiple statements. To execute no statement within the loop, use an [empty statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Empty) (`;`).

## Description

When a for loop executes, the following occurs:

1. `initialExpression` is ==executed (one time)== before the execution of the code block. The initializing expression `initialExpression`, if any, is executed. This expression usually ==initializes one or more loop counters==, _but the syntax allows an expression of any degree of complexity_. This expression can also declare variables.
2. The `conditionExpression` defines the ==condition for executing the code block==. The `conditionExpression` expression is evaluated. If the value of `conditionExpression` is `true`, the loop statements execute. If the value of condition is `false`, the `for` loop terminates. If the condition expression is omitted entirely, the condition is assumed to be `true`.
3. The `incrementExpression` is ==executed (every time) after the code block has been executed==.

## `initialExpression`

Normally you will use `initialExpression` to ==initialize the variable used in the loop== (`let i = 0`). This is not always the case, JavaScript doesn't care. `initialExpression` is ==optional==. You can initiate many values in `initialExpression` (separated by comma):

```js
// Using for statement with two iterating variables
for (let l = 0, r = arr.length - 1; l < r; l++, r--) {
  console.log(arr[l], arr[r]);
}
// 1 6
// 2 5
// 3 4
```

You can omit `initialExpression` (like when your values are set before the loop starts):

```js
let i = 2;
let len = cars.length;
let text = '';
for (; i < len; i++) {
  text += cars[i] + '<br>';
}
```

## `conditionExpression`

Often `conditionExpression` is ==used to evaluate the condition of the initial variable==. This is not always the case, JavaScript doesn't care. `conditionExpression` is also ==optional==. If `conditionExpression` returns `true`, the loop will start over again, if it returns `false`, the loop will end.

> **Note**: If you omit `conditionExpression`, you must provide a **`break`** inside the loop, otherwise the loop will never end (infinite loop). This will crash your browser.

## `incrementExpression`

Often `incrementExpression` ==increments the value of the initial variable==. This is not always the case, JavaScript doesn't care, and `incrementExpression` is ==optional==. `incrementExpression` can do anything like negative increment (`i--`), positive increment (`i = i + 15`), or anything else. `incrementExpression` can also be omitted (like when you increment your values inside the loop):

```js
let i = 0;
let len = cars.length;
let text = '';
for (; i < len; ) {
  text += cars[i] + '<br>';
  i++;
}
```

## You can omit all three expressions

==**You can also omit all three expressions**. Again, make sure to use a [`break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) statement to end the loop and also modify (increase) a variable, so that the condition for the break statement is true at some point==.

```js
let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

However, in the case where you are not fully using all three expression positions — especially if you are not declaring variables with the first expression but mutating something in the upper scope — consider using a [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) loop instead, which makes the intention clearer.

```js
let i = 0;

while (i <= 3) {
  console.log(i);
  i++;
}
```

## Loop Scope

Using `var` in a loop:

```js
var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10
```

Using `let` in a loop:

```js
let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5
```

In the first example, using `var`, the variable declared in the loop redeclares the variable outside the loop. In the second example, using `let`, the variable declared in the loop does not redeclare the variable outside the loop. When `let` is used to declare the `i` variable in a loop, the `i` variable will only be visible within the loop.

## Nested `for` Loops

A ==**nested loop** has one loop inside of another==. When a loop is nested inside another loop, the inner loop runs many times inside the outer loop. In each iteration of the outer loop, the inner loop will be re-started. ==The inner loop must finish all of its iterations before the outer loop can continue to its next iteration==.

```js
for (let i = 0; i <= 1; i++) {
  console.log("First level loop");
    
  for (let j = 0; j <= 2; j++) {
    console.log("Second level loop");
  }
}

// First level loop
// Second level loop
// Second level loop
// First level loop
// Second level loop
// Second level loop
```

## Do NOT initialize a function inside of a loop

The one thing is you want to be careful of initializing functions inside of loops:

```js
// Bad
for (let a = 1; a < 10; a++) {
    function a() {}
    a()
}

// Good
function a() {}
for (let a = 1; a < 10; a++) {
    a()
}
```

## References

1. [`for` loop - w3schools](https://www.w3schools.com/js/js_loop_for.asp)
2. [`for` statement - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
3. [Loops and iteration - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
