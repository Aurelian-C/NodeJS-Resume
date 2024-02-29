# The `while` statement

The `while` loop loops through a block of code ==**as long as a specified condition** is== `true`.

The `while` statement creates a loop that executes a specified statement ==as long as the _test condition_ evaluates to== `true`. The condition is evaluated before executing the statement.

## Syntax

```js
while (condition) {
  // statement;
}
```

## Parameters

#### `condition`

==An expression evaluated before each pass through the loop==. If the condition evaluates to `true`, `statement` is executed. If the condition becomes `false`, `statement` within the loop stops executing and control passes to the statement following the loop.

The condition test occurs *before* `statement` in the loop is executed. If the condition returns `true`, `statement` is executed and the `condition` is tested again. If the condition returns `false`, execution stops, and control is passed to the statement following `while`.

#### `statement`

An optional statement that is executed as long as the condition evaluates to `true`.

> Note:  Use the [`break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) statement to stop a loop before `condition` evaluates to `true`.

## Avoid infinite loops

==Make sure the condition in a loop eventually becomes== `false` — otherwise, the loop will never terminate! The statements in the following while loop execute forever because the condition never becomes `false`:

```js
while (true) {
  console.log('Hello, world!');
}
```

==If you forget to increase the variable used in the condition==, the loop will never end:

```js
while (i < 10) {
  text += 'The number is ' + i;
  i++;
}
```

## Difference between `for` and `while`

A `while` loop is much the same as a [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop, with `initialExpression` and `incrementExpression` omitted.

```js
// The loop in this example uses a for loop to collect the car names from the cars array:
const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
let i = 0;
let text = '';

for (; cars[i]; ) {
  text += cars[i];
  i++;
}

// The loop in this example uses a while loop to collect the car names from the cars array:
const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
let i = 0;
let text = '';

while (cars[i]) {
  text += cars[i];
  i++;
}
```

## Do NOT initialize a function inside of a loop

The one thing is you want to be careful of initializing functions inside of loops:

```js
// Bad
while (condition) {
    function a() {}
    a()
}

// Good
function a() {}
while (condition) {
    a()
}
```

## References

1. [`while` loop - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
2. [`while` loop - w3schools](https://www.w3schools.com/js/js_loop_while.asp)
3. [Loops and iteration - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement)
