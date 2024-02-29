# Promise.prototype.catch()

The **`catch()`** method ==returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and deals with rejected cases only==. It behaves the same as calling [`Promise.prototype.then(undefined, onRejected)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) (in fact, calling `obj.catch(onRejected)` internally calls `obj.then(undefined, onRejected)`). This means that you have to provide an `onRejected` function even if you want to fall back to an `undefined` result value - for example `obj.catch(() => {})`.

The `catch()` method is used for error handling in promise composition. Since it returns a promise, it can be chained in the same way as its sister method, [`then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then). `catch()` internally calls `then()`.

## Syntax

```js
p.catch(onRejected)

p.catch(function(reason) {
  // rejection
})
```

## Parameters

#### `onRejected`

A [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) called when the `Promise` is rejected. This function has one argument:

- `reason`

  The rejection reason.

The Promise returned by `catch()` is rejected if `onRejected` throws an error or returns a Promise which is itself rejected; otherwise, it is fulfilled.

## Return value

Internally calls [`Promise.prototype.then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) on the object upon which it was called, passing the parameters `undefined` and the received `onRejected` handler. Returns the value of that call, which is a promise.

## References

1. [Promise.prototype.catch() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)