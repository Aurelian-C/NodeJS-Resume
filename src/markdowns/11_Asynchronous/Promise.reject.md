# Promise.reject()

The **`Promise.reject()`** method ==returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) object that is rejected with a given reason==.

The static `Promise.reject` function returns a `Promise` that is rejected. For debugging purposes and selective error catching, it is useful to make `reason` an `instanceof` [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error).

## Syntax

```js
Promise.reject(reason)
```

## Parameters

#### `reason`

Reason why the Promise rejected.

## Return value

A Promise that is rejected with the given reason.

## References

1. [`Promise.reject()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject)