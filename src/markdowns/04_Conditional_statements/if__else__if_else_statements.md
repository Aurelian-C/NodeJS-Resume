# `if`, `else` and `else if` statements

When you're writing code, ==you don't always want to execute exactly the same code top to bottom==. Sometimes you have some condition that should be met for some code to be executed, and execute some other code if the condition is not met.

==**_Conditional_ statements** are used to perform **different actions** based on **different conditions**==. Very often when you write code, you want to perform different actions for different conditions. You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

- Use `if` to specify a block of code to be executed, if a specified condition is `true`;
- Use `else` to specify a block of code to be executed, if the same condition is `false`;
- Use `else if` to specify a new condition to test, if the first condition is `false`;
- Use `switch` to specify many alternative blocks of code to be executed.

The **`if`** statement executes a statement if a specified condition is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). If the condition is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy), another statement in the optional `else` clause will be executed.

## Syntax

```js
if (condition) {
  //  block of code (statement1) to be executed if the condition is true
} else {
  //  block of code (statement2) to be executed if the condition is false
}

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

## Parameters

#### condition

==An _expression_ that is considered to be either truthy or falsy==.

#### statement1

==Statement that is executed if `condition` is truthy==. Can be any statement, including further nested `if` statements. To execute multiple statements, use a [block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block) statement (`{ /* ... */ }`) to group those statements. To execute no statements, use an [empty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Empty) statement.

#### statement2

==Statement that is executed if `condition` is falsy and the `else` clause exists==. Can be any statement, including block statements and further nested `if` statements.

## Description

==Multiple `if...else` statements can be nested to create an `else if` clause==. Note that there is no `elseif` (in one word) keyword in JavaScript.

```js
if (condition1) {
   // statement1
} else if (condition2) {
   // statement2 
} else if (condition3) {
   // statement3 
} else {
   // statementN 
}
```

To see how this works, this is how it would look if the nesting were properly indented:

```js
if (condition1) {
   // statement1 
} else {
   if (condition2) {
      // statement2 
   } else {
       if (condition3) {
          // statement3 
       } else {
           // statementN 
       }
   }
}  
```

## Examples

```js
if (x > 50) {
  /* do something */
} else if (x > 5) {
  /* do something */
} else {
  /* do something */
}
```



## References

1. [JavaScript if, else, and else if - w3schools](https://www.w3schools.com/js/js_if_else.asp)

2. [if...else - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
