# Function `return` statement

==The **`return`** statement **ends function execution** and **specifies a value to be returned to the function caller**.==

==The `return` statement can only be used within function bodies.== When a `return` statement is used in a function body, the execution of the function is stopped.

The `return` statement has different effects when placed in different functions:

- In a **plain function**, the call to that function evaluates to the return value.
- In an **async function**, the produced promise is resolved with the returned value.
- In a generator function, the produced generator object's `next()` method returns `{ done: true, value: returnedValue }`.
- In an async generator function, the produced async generator object's `next()` method returns a promise fulfilled with `{ done: true, value: returnedValue }`.

==If a `return` statement is executed within a [`try`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block, its `finally` block, if present, is first executed, before the value is actually returned.==

## Return value

==By default, if a function's execution doesn't end at a [`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) statement, or if the `return` keyword doesn't have an expression after it, then the return value is [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined).== The `return` statement allows you to return an arbitrary value from the function.

==One function call can only return one value==, but you can _simulate the effect of returning multiple_ values by returning an object or array and [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) the result.

> **NOTE:** Constructors called with [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) have a different set of logic to determine their return values.

## References

1. [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
1. [`return` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
