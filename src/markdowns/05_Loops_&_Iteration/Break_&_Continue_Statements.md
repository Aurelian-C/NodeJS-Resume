# `break` and `continue` statements

The `break` statement ==**"jumps out"** of a loop==.

The `continue` statement ==**"jumps over"** one iteration== in the loop.

## The `break` statement

The `break` statement can also be used to **"jump out" of a loop**:

#### `break` in `for` loop

```js
// In this example, the break statement ends the loop ("breaks" the loop) when the loop counter (i) is 3.
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += 'The number is ' + i + '<br>';
}
```

#### `break` in `while` loop

```js
// In this example, the break statement ends the loop ("breaks" the loop) when the loop counter (i) is 4.
while (i < 6) {
  if (i === 4) {
    break;
  }
  i += 1;
}
```

#### `break` in `switch` loop

```js
// The following code has a break statement that terminates the switch statement when a case is matched and the corresponding code has run.
const food = "sushi";

switch (food) {
  case "sushi":
    console.log("Sushi is originally from Japan.");
    break;
  case "pizza":
    console.log("Pizza is originally from Italy.");
    break;
  default:
    console.log("I have never heard of that dish.");
    break;
}
```

# The `continue` statement

==The `continue` statement **breaks one iteration** (in the loop) if a specified condition occurs, and continues with the next iteration in the loop==.

In contrast to the `break` statement, `continue` does not terminate the execution of the loop entirely, but instead:

- in a [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) loop, it jumps back to the condition.
- in a [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop, it jumps to the update expression.

#### `continue` in `while` loop

```js
// This example shows a while loop that has a continue statement that executes when the value of i is 3, so the value of 3 is skipped 
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  // code here
}
```

#### `continue` in `for` loop

```js
// This example skips the value of 3
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  // code here
}
```

## References

1. [`break` & `continue` statements - w3schools](https://www.w3schools.com/js/js_break.asp)
2. [`break` statement - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
3. [`continue` statement - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
