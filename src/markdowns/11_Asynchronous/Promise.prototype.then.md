# Promise.prototype.then()

The `then()` method returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). It takes up to two arguments: callback functions for the fulfilled and rejected cases of the `Promise`.

As the `then()` and [`Promise.prototype.catch()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) methods return promises, they can be chained — an operation called *composition*.

## Syntax

```js
then(onFulfilled)
then(onFulfilled, onRejected)

then(
  (value) => { /* fulfillment handler */ },
  (reason) => { /* rejection handler */ },
);
```

## Parameters

#### `onFulfilled` _(optional)_

A [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) asynchronously called if the `Promise` is fulfilled. This function has one argument, the *fulfillment value*. If it is not a function, it is internally replaced with an *identity* function (`(x) => x`) which simply passes the fulfillment value forward.

#### `onRejected` _(optional)_

A [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) asynchronously called if the `Promise` is rejected. This function has one argument, the *rejection reason*. If it is not a function, it is internally replaced with a *thrower* function (`(x) => { throw x; }`) which throws the rejection reason it received.

One of the `onFulfilled` and `onRejected` handlers will be executed to handle the current promise's fulfillment or rejection. The call always happens asynchronously, even when the current promise is already settled. The behavior of the returned promise (call it `p`) depends on the handler's execution result, following a specific set of rules. If the handler function:

- returns a value: `p` gets fulfilled with the returned value as its value.
- doesn't return anything: `p` gets fulfilled with `undefined`.
- throws an error: `p` gets rejected with the thrown error as its value.
- returns an already fulfilled promise: `p` gets fulfilled with that promise's value as its value.
- returns an already rejected promise: `p` gets rejected with that promise's value as its value.
- returns another pending promise: the fulfillment/rejection of the promise returned by `then` will be subsequent to the resolution/rejection of the promise returned by the handler. Also, the resolved value of the promise returned by `then` will be the same as the resolved value of the promise returned by the handler.

## Return value

Returns a new Promise immediately. This new promise is always pending when returned, regardless of the current promise's status.

## References

1. [Promise.prototype.then() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)