# Building a Promise

We build a Promise with the help of a `Promise()` constructor. ==The **`Promise`** constructor is primarily used to wrap functions that do not already support promises==.

> **NOTE:** If your task is already promise-based, you likely do not need the `Promise()` constructor. A Promise can be created from scratch using its constructor. This should be needed only to wrap old APIs.

In an ideal world, all asynchronous functions would already return Promises. Unfortunately, some APIs still expect success and/or failure callbacks to be passed in the old way. The most obvious example is the [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) function.

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
```

Mixing old-style callbacks and Promises is problematic. ==If `saySomething()` fails or contains a programming error, nothing catches it. `setTimeout` is to blame for this. Luckily we can wrap `setTimeout` in a Promise==. Best practice is to wrap problematic functions at the lowest possible level, and then never call them directly again:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

Basically, the `Promise` constructor takes an executor function that lets us resolve or reject a Promise manually. Since `setTimeout()` doesn't really fail, we left out reject in this case.

> **NOTE:** [`Promise.resolve()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) and [`Promise.reject()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject) are shortcuts to manually create an already resolved or rejected Promise.

## Syntax

```js
const executor = function(resolve, reject) {
    if (true) {
        resolve(value);
    } else {
        reject(reason);
    }
};

const myPromise = new Promise(executor); // Promise() can only be constructed with new. Attempting to call it without new throws a TypeError.
```

## Parameters

#### `executor`

==A **function** to be executed by the constructor.== ==It receives **two functions as parameters**: `resolve` and `reject`.== Any errors thrown in the `executor` will cause the Promise to be rejected, and the return value will be neglected.

The `resolve` and `reject` functions accept a single parameter of any type:

```js
resolve(value)	// call on resolved
reject(reason)	// call on rejected
```

The `resolve` `value` parameter can be another Promise object, in which case the Promise gets dynamically inserted into the [Promise chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises). The `reject` has semantics close to the [`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) statement, so `reason` is typically an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) instance. If either `value` or `reason` is omitted, the Promise is fulfilled/rejected with `undefined`.

## Description

==When called via `new`, the `Promise` constructor _returns a Promise object_==. The Promise object will become *resolved* when either of the functions `resolve` or `reject` are invoked.

About the `executor`, it's important to understand the following:

- The `executor` return value is ignored. `return` statements within the `executor` merely impacts control flow and alters whether a part of the function is executed, but does not have any impact on the Promise's fulfillment value;
- If an error is thrown in the `executor`, the Promise is rejected.

## Summary typical flow

1. ==`executor` typically wraps some asynchronous operation which provides a callback-based API==
2. ==The callback (the one passed to the original callback-based API) is defined within the `executor` code, so it has access to the `resolve` and `reject`==
3. Once `resolve` or `reject` is called, the Promise's state moves from "pending" to either "fulfilled" or "rejected"
4. The `Promise` object (asynchronously) invokes any further handlers associated by `.then(handleFulfilled)` or `.catch(handleRejected)`
5. ==The argument passed to `resolve` or `reject` (the fulfillment value or rejection reason), is passed to the invocation of `handleFulfilled` or `handleRejected` as an input parameter==

```js
const executor = function(resolve, reject) {
    if (true) {
        resolve(value);
    } else {
        reject(reason);
    }
};

const myPromise = new Promise(executor);

myPromise
	.then((value) => {
    	// statement
	})
 	.catch((reason) => {
    	// statement
	})
```

## Why do we need to build a Promise?
The Promise constructor in JavaScript is used to create and return a new Promise object. Promises are a way to handle asynchronous operations, providing a more structured and readable way to work with asynchronous code compared to traditional callback-based approaches. Here are some reasons why the Promise constructor is useful:

- **Asynchronous Operations**: Promises are commonly used for handling asynchronous operations, such as fetching data from a server, reading a file, or making AJAX requests. The Promise constructor allows you to create a Promise that represents the eventual completion or failure of an asynchronous operation.
- **Readability and Maintainability**: Promises provide a more readable and maintainable way to write asynchronous code compared to deeply nested callbacks. The chaining of `.then()` and `.catch()` methods allows for a more linear and structured code flow, making it easier to understand and maintain.
- **Error Handling**: The Promise constructor allows you to handle errors more effectively through the `.catch()` method. This makes it easier to centralize error handling for asynchronous operations, resulting in cleaner and more maintainable code.
- **Composition**: Promises support composition, meaning you can chain multiple asynchronous operations together using the `.then()` method. This enables you to create more modular and reusable code by breaking down complex asynchronous tasks into smaller, manageable pieces.
- **Avoiding Callback Hell**: The Promise pattern helps mitigate the "Callback Hell" or "Pyramid of Doom" problem, which can occur when dealing with multiple nested callbacks. With promises, you can flatten the structure of your asynchronous code, making it more readable and maintainable.
- **Easier Refactoring**: Promises provide a foundation for working with asynchronous code in a way that is easier to refactor. If you need to change the order of asynchronous operations or add additional steps, you can do so more seamlessly using promises.

## References

1. [Promise - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
1. [What is a Promise? - medium.com](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261#.aa7ubggsy)
1. [Using Promises - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)