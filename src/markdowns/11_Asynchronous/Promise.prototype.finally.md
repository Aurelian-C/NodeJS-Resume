# Promise.prototype.finally()

The **`finally()`** method of a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) schedules a function, the *callback function*, to be called when the promise is settled. Like `then()` and `catch()`, it immediately returns an equivalent Promise object, allowing you to chain calls to another promise method, an operation called *composition*. This lets you avoid duplicating code in both the promise's [`then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) and [`catch()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) handlers.

## Syntax

```js
promise.finally(onFinally)

promise.finally(() => {
  // Code that will run after promise is settled (fulfilled or rejected)
})
```

## Parameters

#### `onFinally`

A [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) called when the Promise is settled. This handler receives no parameters.

## Return value

Returns an equivalent Promise with its `finally` handler set to the specified function. If the handler throws an error or returns a rejected promise, the promise returned by `finally()` will be rejected with that value instead. Otherwise, the return value of the handler does not affect the state of the original promise.

## Description

The `finally()` method can be useful if you want to do some processing or cleanup once the promise is settled, regardless of its outcome.

The `finally()` method is very similar to calling `.then(onFinally, onFinally)`, however, there are a couple of differences:

- When creating a function inline, you can pass it once, instead of being forced to either declare it twice, or create a variable for it.
- A `finally` callback will not receive any argument. This use case is for precisely when you *do not care* about the rejection reason, or the fulfillment value, and so there's no need to provide it.
- A `finally`call will usually chain through an equivalent to the original promise. So for example:
  - Unlike `Promise.resolve(2).then(() => 77, () => {})` (which will return a resolved promise with the result `77`), `Promise.resolve(2).finally(() => 77)` will return a new resolved promise with the result `2`.
  - Similarly, unlike `Promise.reject(3).then(() => {}, () => 88)` (which will return a resolved promise with the value `88`), `Promise.reject(3).finally(() => 88)` will return a rejected promise with the reason `3`.
  - But, both `Promise.reject(3).finally(() => {throw 99})` and `Promise.reject(3).finally(() => Promise.reject(99))` will reject the returned promise with the reason `99`.

## References

1. [Promise.prototype.finally() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)