# Introduction to Loops & Iteration

Loops offer a quick and easy way to do something ==**repeatedly**==. Loops can ==**execute a block of code a number of times**==. Loops are handy, if you want to ==**run the same code over and over again, each time with a different value**==. 

There are ==**many different kinds of loops**==, but they all essentially do the same thing: they ==**repeat** an action some number of times==. The various loop mechanisms offer different ways to determine the start and end points of the loop.  There are various situations that are more easily served by one type of loop over the others.

This article introduces the different iteration statements available to JavaScript.

## JavaScript supports **different kinds of loops**:

The statements for loops provided in JavaScript are:

- [`for` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)  - loops through a block of code a number of times
- [`for...of` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) - loops through the values of an ==_**iterable**_ object==
- [`for...in` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement) - loops through the ==_**properties**_ of an object==
- [`while` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement) - loops through a block of code ==_while a specified condition_ is== `true`
- [`break` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#break_statement) - breaks out of a loop
- [`continue` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#continue_statement) - skips a value in a loop

![loops](../../img/loops.jpg)

## `for` statement

A [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop ==**repeats until** a specified condition evaluates to== `false`.

```js
for (initialExpression; conditionExpression; incrementExpression) {
	// statement
}
```

## `for...of` statement

The [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) statement creates a loop ==**iterating** over== [iterable objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)== (including [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set), [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

```js
for (variable of object) {
   // statement 
}
```

## `for...in` statement

The [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) statement ==**iterates** a specified variable over all the enumerable properties of an object==.

```js
for (variable in object) {
    // statement
}
```

## `while` statement

A [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) statement ==executes its statements **as long** as a specified condition evaluates to== `true`.

```js
while (condition) {
    // statement
}
```

## `break` statement

Use the [`break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) statement to ==**terminate** a loop==.

## `continue` statement

The [`continue`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) statement can be used to ==**restart**== a `while`, `do-while`, `for` or `label` statement.

## References

1. [Loops and iteration - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
