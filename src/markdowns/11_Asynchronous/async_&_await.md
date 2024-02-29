# Consuming Promises with `async` / `await`

==The [`async`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) keyword gives you **a simpler way to work with asynchronous promise-based code**==. Adding `async` at the start of a function makes it an async function:

```js
async function myFunction() {
  // This is an async function
}
```

==**Inside an `async` function**, you can **use the [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) keyword before a call to a function that returns a Promise**. This makes the code wait at that point until the Promise is settled, at which point the fulfilled value of the Promise is treated as a return value, or the rejected value is thrown.==

==This enables you to write code that uses asynchronous functions but looks like synchronous code==:

```js
async function fetchProducts() {
  try {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'); // after this line, our function will wait for the `fetch()` call to be settled. The `fetch()` call will either return a Response or throw an error  
      
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
      
    const data = await response.json(); // after this line, our function will wait for the `response.json()` call to be settled. The response.json() call will either return the parsed JSON object or throw an error
    console.log(data[0].name);
  }
  catch (error) {
    console.error(`Could not get products: ${error}`);
  }
};

fetchProducts();
```

==Here, we are calling `await fetch()`, and instead of getting a `Promise`, our caller gets back a fully complete `Response` object, just as if `fetch()` were a synchronous function!==

## Error Handling

We can even use a **`try...catch`** block for error handling, exactly as we would if the code were synchronous.

## Rethrow an error

You can use `throw` to rethrow an exception after you catch it. ==The rethrown exception propagates up to the enclosing function or to the top level so that the user sees it.==

## `async`/`await` always return a Promise

Note though that ==async functions always return a Promise==, so you can't do something like:

```js
async function fetchProducts() {
  try {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error(`Could not get products: ${error}`);
  }
};

const promise = fetchProducts();
console.log(promise[0].name);   // "promise" is a Promise object, so this will not work
```

Instead, you'd need to do something like:

```js
async function fetchProducts() {
  try {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
promise.then((data) => console.log(data[0].name));
```

##  You can only use `await` inside an `async` function

Also, note that ==you can only use `await` inside an `async` function, unless your code is in a **[JavaScript module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)**.== That means you can't do this in a normal script:

```js
try {
  // using await outside an async function is only allowed in a module
  const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  console.log(data[0].name);
}
catch(error) {
  console.error(`Could not get products: ${error}`);
}
```

You'll probably use `async` functions a lot where you might otherwise use Promise chains, and they make working with Promises much more intuitive.

==Keep in mind that just like a Promise chain, **`await` forces asynchronous operations to be completed in series**. This is necessary if the result of the next operation depends on the result of the last one, but if that's not the case then something like `Promise.all()` will be more performant==.

## More about `async` functions

An async function is a function declared with the `async` keyword, and the `await` keyword is permitted within it. ==The `async` and `await` keywords enable asynchronous, promise-based behavior to be written in a cleaner style, _avoiding the need to explicitly configure Promise chains_==.

Async functions may also be defined [as expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function).

==Async functions can contain zero or more [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) expressions. Await expressions make Promise-returning functions behave as though they're synchronous by suspending execution until the returned Promise is fulfilled or rejected==. The resolved value of the Promise is treated as the return value of the await expression. Use of `async` and `await` enables the use of ordinary `try` / `catch` blocks around asynchronous code.

>**NOTE**: The purpose of `async`/`await` is to simplify the syntax necessary to consume promise-based APIs.

==**Async functions always return a Promise. If the return value of an async function is not explicitly a Promise, it will be implicitly wrapped in a Promise**==. For example, consider the following code:

```js
async function foo() {
  return 1;
}
```

It is similar to:

```js
function foo() {
  return Promise.resolve(1);
}
```

==The body of an async function can be thought of as being split by zero or more await expressions. Top-level code, up to and including the first await expression (if there is one), is run synchronously. In this way, ==**an async function without an await expression will run synchronously**. If there is an await expression inside the function body, however, the async function will always complete asynchronously.==

For example:

```js
async function foo() {
  await 1;
}
```

It is also equivalent to:

```js
function foo() {
  return Promise.resolve(1).then(() => undefined);
}
```

## More about `await` operator

==The `await` operator is used to wait for a Promise and get its fulfillment value==. It can only be used inside an async function or a [JavaScript module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

> **NOTE:** The `await` keyword is only valid inside async functions within regular JavaScript code. If you use it outside of an async function's body, you will get a [`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError).
>
> `await` can be used on its own with JavaScript modules.

==**The** `await` **expression is usually used to unwrap Promises by passing a Promise as the** `expression`. This causes async function execution to pause until the Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment. When resumed, the value of the `await` expression is that of the fulfilled Promise==. If the Promise is rejected, the `await` expression throws the rejected value.

The `expression` is resolved in the same way as [`Promise.resolve()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve). This means [thenable objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) are supported, and ==if `expression` is not a Promise, it's implicitly wrapped in a `Promise` and then resolved. Even when `expression` is not a Promise, the async function execution still pauses until the next tick, due to the implicit Promise wrapping and unwrapping==. In the meantime, the caller of the async function resumes execution.

Because `await` is only valid inside async functions and modules, which themselves are asynchronous and return Promises, ==the `await` expression never blocks the main thread and only defers execution of code that actually depends on the result==, i.e. anything after the `await` expression.

## Top level `await`

==You can use the `await` keyword on its own (outside of an async function) within a JavaScript module. This means modules, with child modules that use `await`, wait for the child module to execute before they themselves run, all while not blocking other child modules from loading==.

Here is an example of a simple module using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and specifying `await` within the [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) statement. Any modules that include this will wait for the `fetch()` to resolve before running any code:

```js
const colors = fetch("../data/colors.json").then((response) => response.json());
export default await colors;
```

## Conclusion

Promises are the foundation of asynchronous programming in modern JavaScript. They make it easier to express and reason about sequences of asynchronous operations without deeply nested callbacks, and they support a style of error handling that is similar to the synchronous `try...catch` statement.

==The `async` and `await` keywords make it easier to build an operation from a series of consecutive asynchronous function calls, avoiding the need to create explicit Promise chains, and allowing you to write code that looks just like synchronous code==.

## References

1. [How to use promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
2. [async function - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
3. [`await` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
4. [try...catch - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
5. [`fetch()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
6. [Response - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response)
7. [`Response.json()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)
8. [`Response.text()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response/text)
9. [`Response.formData()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response/formData)
10. [`throw` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
11. [Error - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)