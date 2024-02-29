# Control flow and error handling

JavaScript supports a compact set of statements, specifically ==control flow statements==, that you can use to incorporate a great deal of interactivity in your application. This chapter provides an overview of these statements.

==The **semicolon (`;`)** character is used to **separate statements in JavaScript code**.==

Any JavaScript expression is also a statement. See [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators) for complete information about expressions.

## Block statement

==The most basic statement is a **block statement**, which is **used to group statements**.== The block is delimited by a pair of curly brackets:

```js
{
  statement1;
  statement2;
  // …
  statementN;
}
```

Block statements are commonly used with control flow statements (`if`, `for`, `while`):

```js
while (x < 10) {
  x++;
}
```

## Conditional statements

==A conditional statement is a set of commands that executes if a specified condition is true. JavaScript supports two conditional statements: **`if...else`** and **`switch`**.==

```js
// if...else statement
if (condition) {
  statement1;
} else {
  statement2;
}
```

## `switch` statement

==A `switch` statement allows a program to evaluate an expression and attempt to match the expression's value to a `case` label.== If a match is found, the program executes the associated statement.

A `switch` statement looks like this:

```js
switch (expression) {
  case label1:
    statements1;
    break;
  case label2:
    statements2;
    break;
  // …
  default:
    statementsDefault;
}
```

## `break` statements

The optional `break` statement associated with each `case` clause ensures that the program breaks out of `switch` once the matched statement is executed, and then continues execution at the statement following `switch`. If `break` is omitted, the program continues execution inside the `switch` statement (and will evaluate the next `case`, and so on).

```js
switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}

console.log("Is there anything else you'd like?");
```

## Exception handling statements

You can throw exceptions using the `throw` statement and handle them using the `try...catch` statements.

- [`throw` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#throw_statement)
- [`try...catch` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#try...catch_statement)

Use the `throw` statement to throw an exception. A `throw` statement specifies the value to be thrown:

```js
throw expression;
```

You may throw any expression, not just expressions of a specific type. The following code throws several exceptions of varying types:

```js
throw "Error2"; // String type
throw 42; // Number type
throw true; // Boolean type
throw {
  toString() {
    return "I'm an object!";
  },
};
```

### `try...catch` statement

The `try...catch` statement marks a block of statements to try, and specifies one or more responses should an exception be thrown. If an exception is thrown, the `try...catch` statement catches it.

The `try...catch` statement consists of a `try` block, which contains one or more statements, and a `catch` block, containing statements that specify what to do if an exception is thrown in the `try` block.

In other words, you want the `try` block to succeed—but if it does not, you want control to pass to the `catch` block. If any statement within the `try` block (or in a function called from within the `try` block) throws an exception, control *immediately* shifts to the `catch` block. If no exception is thrown in the `try` block, the `catch` block is skipped. The `finally` block executes after the `try` and `catch` blocks execute but before the statements following the `try...catch` statement.

It is also important to note that the `finally` block will execute *whether or not* an exception is thrown. If an exception is thrown, however, the statements in the `finally` block execute even if no `catch` block handles the exception that was thrown. You can use the `finally` block to make your script fail gracefully when an exception occurs. For example, you may need to release a resource that your script has tied up.

```js
openMyFile();

try {
  writeMyFile(theData); // This may throw an error
} catch (e) {
  handleError(e); // If an error occurred, handle it
} finally {
  closeMyFile(); // Always close the resource
}
```

If the `finally` block returns a value, this value becomes the return value of the entire `try…catch…finally` production, regardless of any `return` statements in the `try` and `catch` blocks.

```js
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    // This return statement is suspended
    // until finally block has completed
    return true;
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now
  console.log(5); // not reachable
}

console.log(f()); // 0, 1, 3, false
```

#### Utilizing Error objects

Depending on the type of error, you may be able to use the `name` and `message` properties to get a more refined message.

The `name` property provides the general class of `Error` (such as `DOMException` or `Error`), while `message` generally provides a more succinct message than one would get by converting the error object to a string.

If you are throwing your own exceptions, in order to take advantage of these properties (such as if your `catch` block doesn't discriminate between your own exceptions and system ones), you can use the `Error` constructor.

```js
function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw new Error("The message");
  } else {
    doSomethingToGetAJavaScriptError();
  }
}

try {
  doSomethingErrorProne();
} catch (e) {
  // Now, we actually use `console.error()`
  console.error(e.name); // 'Error'
  console.error(e.message); // 'The message', or a JavaScript error message
}
```

## References

1. [Control flow and error handling - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)