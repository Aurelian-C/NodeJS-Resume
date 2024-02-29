# Promise.resolve()

The **`Promise.resolve()`** method =="resolves" a given value to a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)==. If the value is a promise, that promise is returned; if the value is a [thenable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables), `Promise.resolve()` will call the `then()` method with two callbacks it prepared; otherwise the returned promise will be fulfilled with the value.

The static `Promise.resolve` function ==returns a `Promise` that is resolved==.

## Syntax

```js
Promise.resolve(value)
```

## Parameters

#### `value`

Argument to be resolved by this `Promise`. Can also be a `Promise` or a thenable to resolve.

## Return value

A Promise that is resolved with the given value, or the promise passed as value, if the value was a promise object. It may be either fulfilled or rejected — for example, resolving a rejected promise will still result in a rejected promise.

## References

1. [`Promise.resolve()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)