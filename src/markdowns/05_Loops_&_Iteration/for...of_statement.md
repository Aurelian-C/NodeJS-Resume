# `for...of` loop

The `for...of` statement ==loops through the **values** of an **iterable object**==, including: built-in `String`, `Array`, array-like objects (e.g., `arguments` or `NodeList`), `TypedArray`, `Map`, `Set`, and user-defined iterables.

## Syntax

```js
for (variable of iterable) {
  // statement;
}
```

## Parameters

#### `variable` 

On each iteration a value of a different property is assigned to `variable`. `variable` may be declared with `const`, `let` or `var`.

The `variable` part of `for...of` accepts anything that can come before the `=` operator. You can use [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) to declare the variable as long as it's not reassigned within the loop body (it can change between iterations, because those are two separate variables). Otherwise, you can use [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let).

#### `iterable` 

An iterable object that has iterable properties.

#### `statement`

A statement to be executed on every iteration. May reference `variable`.

## Description

A `for...of` loop operates on the values sourced from an iterable one by one in ==sequential order==. Each operation of the loop on a value is called an *iteration*, and the loop is said to *iterate over the iterable*. Each iteration executes statements that may refer to the current sequence value.

==Each iteration _creates a new variable_. Reassigning the variable inside the loop body does not affect the original value in the iterable== (an array, in the case below):

```js
const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
```

## Destructuring and `for...of` statement

You can use [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) or an object property like `for (x.y of iterable)`.

```js
const arr = [[1, 'a'], [2, 'b'], [3, 'c'], [4, 'd']];

// With destructuring
for (let [i, j] of arr) {
    console.log(i, j);
}
// 1 'a'
// 2 'b'
// 3 'c'
// 4 'd'

// Without destructuring
for (let i of arr) {
    console.log(i);
}
// [1, 'a']
// [2, 'b']
// [3, 'c']
// [4, 'd']
```

## Closing or skip iterators

[`break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) exits the loop and goes to the first statement after the loop body, while [`continue`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) skips the rest of the statements of the current iteration and proceeds to the next iteration.

In `for...of` loops, abrupt iteration termination can be caused by **`break`**, **`throw`** or **`return`**. In these cases, the iterator is closed.

```js
const source = [1, 2, 3];

for (const o of source) {
  console.log(o);
  if (o === 2) {
    break; // closes iterator, execution continues outside of the loop
  }
}

console.log('done');
```

## Difference between `for...of` and `for...in`

Both `for...of` and [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) statements iterate over something. The main difference between them is in what they iterate over:

- The `for...of` statement iterates over values that the ==**iterable object**== defines to be iterated over.
- The `for...in` statement iterates over the ==**enumerable properties**== of an object.

The following example shows the difference between a `for...of` loop and a `for...in` loop. ==While  `for...of` iterates over property **values**, `for...in` iterates over property **names**==:

```js
const arr = [3, 5, 7];
arr.foo = 'hello';

for (const i of arr) {
  console.log(i); // logs 3, 5, 7
}

for (const i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}
```

## References

1. [`for...of` statement - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
2. [`for...of` statement - w3schools](https://www.w3schools.com/JS/js_loop_forof.asp)
3. [Loops and iteration - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
