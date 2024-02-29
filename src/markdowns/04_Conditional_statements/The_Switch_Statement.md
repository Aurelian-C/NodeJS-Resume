# The `switch` statement

The `switch` statement is used to ==perform **different actions** based on **different conditions**. Use the `switch` statement to select one of many code blocks to be executed==.

This is how it works:

- The `switch` expression is ==**evaluated once**==.
- ==The value of the expression is compared with the values of each case==.
- ==**If there is a _match_**, the associated block of code is executed==.
- ==**If there is _no match_**, the default code block is executed==.

## Syntax

```js
switch(expression) {
  case value1:
    // Statements executed when the result of expression matches value1
    break;
  case value2:
    // Statements executed when the result of expression matches value2
    break;
  case valueN:
    // Statements executed when the result of expression matches valueN
    break;    
  default:
    // Statements executed when none of the values match the value of the expression
    break;
}
```

## Parameters

#### `expression`

==An expression whose result is matched against each `case` clause==.

#### `case` valueN _(optional)_

==A `case` clause used to match against `expression`==. If the `expression` matches the specified `valueN` (which can be any expression), execution starts from the first statement after that `case` clause until either the end of the `switch` statement _or_ the first encountered `break`.

#### `default` _(optional)_

==A `default` clause; if provided, this clause is executed if the value of `expression` doesn't match any of the `case` clauses. A `switch` statement can only have **one** `default` clause==.

## Description

A `switch` statement first evaluates its expression. It then looks for the first `case` clause whose expression evaluates to the same value as the result of the input expression (using the [strict comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators), `===`) and transfers control to that clause, executing all statements following that clause.

==The clause values are only evaluated when necessary — if a match is already found, subsequent `case` clause values will not be evaluated==:

```js
switch (undefined) {
  case console.log(1):
  case console.log(2):
}
// Only logs 1
```

==If no matching `case` clause is found, the program looks for the _optional_ `default` clause, and if found, transfers control to that clause, executing statements following that clause==. _If no `default` clause is found, the program continues execution at the statement following the end of `switch`_. By convention, the `default` clause is the last clause, but it does not need to be so. ==A `switch` statement may only have one `default` clause; multiple `default` clauses will result in a [`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)==.

## `break` and `default` statement

When JavaScript reaches a `break` keyword, it breaks out of the `switch` block. This will stop the execution inside the `switch` block.

> **Note**: It is not necessary to `break` the last case in a `switch` block. The block breaks (ends) there anyway. 
>
> ==If `break` is omitted, execution will proceed to the next case clause, even to the `default` clause, regardless of whether the value of that clause matches. This behavior is called **"fall-through"**==.
>
> ```js
> const foo = 0;
> 
> switch (foo) {
>     case -1:
>        console.log('negative 1');
>        break;
>     case 0: // Value of foo matches this criteria; execution starts from here
>        console.log(0);
>        // Forgotten break! Execution falls through
>     case 1: // no break statement in 'case 0:' so this case will run as well
>        console.log(1);
>        break; // Break encountered; will not continue into 'case 2:'
>     case 2:
>        console.log(2);
>        break;
>     default:
>        console.log('default');
> }
> // Logs "0" and "1"
> ```

The `default` keyword ==specifies the code to run if there is **no case match**==.

> **Note**: The `default` case does not have to be the last case in a `switch` block. If `default` is not the last case in the switch block, remember to end the default case with a `break`.

## Switching details

- If ==**multiple cases matches a expression value**==, the _**first** case is selected_.
- If ==**no matching cases are found**==, the program _continues to the `default` label_.
- If ==**no** `default` **label is found**==, the program _continues to the statement(s) **after** the `switch`_.

## Strict Comparison

- ==`switch` cases use strict comparison `===`==.
- The values must be of the same type to match.
- A strict comparison can only be `true` if the operands are of the same type.

## Examples

The `getDay()` method returns the weekday as a number between 0 and 6 (Sunday=0, Monday=1, Tuesday=2 ...). This example _uses the weekday **number** to calculate the weekday **name**_:

```js
let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
```

In the following example, if `expr` evaluates to `Bananas`, the program matches the value with case `case 'Bananas'` and executes the associated statement. When `break` is encountered, the program breaks out of `switch` and executes the statement following `switch`. If `break` were omitted, the statement for the `case 'Cherries'` would also be executed.

```js
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

console.log("Is there anything else you'd like?");
```

#### Putting the default clause between two case clauses

If no match is found, execution will start from the `default` clause, and execute all statements after that.

```js
const foo = 5;

switch (foo) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log('default')
    // fall-through
  case 1:
    console.log('1');
}
```

It also works when you put `default` before all other `case` clauses.

#### Taking advantage of fall-through

This method takes advantage of the fact that if there is no `break` below a `case` clause, execution will continue to the next `case` clause regardless if that `case` meets the criteria.

The following is an example of a single operation sequential `case` statement, where four different values perform exactly the same.

```js
const Animal = 'Giraffe';

switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal is not extinct.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal is extinct.');
}
```

The following is an example of a multiple-operation sequential `case` clause, where, depending on the provided integer, you can receive different output. This shows you that it will traverse in the order that you put the `case` clauses, and it does not have to be numerically sequential. In JavaScript, you can even mix in definitions of strings into these `case` statements as well.

```js
const foo = 1;
let output = 'Output: ';

switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}
```

The output from this example:

| Value                                                 | Log text                          |
| :---------------------------------------------------- | :-------------------------------- |
| `foo` is `NaN` or not `1`, `2`, `3`, `4`, `5`, or `0` | Please pick a number from 0 to 5! |
| `0`                                                   | Output: So What Is Your Name?     |
| `1`                                                   | Output: What Is Your Name?        |
| `2`                                                   | Output: Your Name?                |
| `3`                                                   | Output: Name?                     |
| `4`                                                   | Output: ?                         |
| `5`                                                   | Output: !                         |

## An alternative to `if...else` chains

You may often find yourself doing a series of [`if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) matches.

```js
if ('fetch' in globalThis) {
  // Fetch a resource with fetch
} else if ('XMLHttpRequest' in globalThis) {
  // Fetch a resource with XMLHttpRequest
} else {
  // Fetch a resource with some custom AJAX logic
}
```

This pattern is not doing a sequence of `===` comparisons, but you can still convert it to a `switch` construct.

```js
switch (true) {
  case 'fetch' in globalThis:
    // Fetch a resource with fetch
    break;
  case 'XMLHttpRequest' in globalThis:
    // Fetch a resource with XMLHttpRequest
    break;
  default:
    // Fetch a resource with some custom AJAX logic
    break;
}
```

==The `switch (true)` pattern as an alternative to `if...else` is especially useful if you want to utilize the **fall-through** behavior==.

```js
switch (true) {
  case isSquare(shape):
    console.log('This shape is a square.');
    // Fall-through, since a square is a rectangle as well!
  case isRectangle(shape):
    console.log('This shape is a rectangle.');
  case isQuadrilateral(shape):
    console.log('This shape is a quadrilateral.');
    break;
  case isCircle(shape):
    console.log('This shape is a circle.');
    break;
}
```

## References

1. [switch - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
2. [switch - w3schools](https://www.w3schools.com/js/js_switch.asp)
3. [break - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)