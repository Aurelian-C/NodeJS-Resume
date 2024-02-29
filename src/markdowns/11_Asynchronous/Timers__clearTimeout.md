# `clearTimeout()`

The global **`clearTimeout()`** method cancels a timeout previously established by calling [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout). If the parameter provided does not identify a previously established action, this method does nothing.

## Syntax

```js
clearTimeout(timeoutID)
```

## Parameters

#### `timeoutID`

The identifier of the timeout you want to cancel. This ID was returned by the corresponding call to `setTimeout()`.

> It's worth noting that the pool of IDs used by [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) and [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) are shared, which means you can technically use `clearTimeout()` and [`clearInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval) interchangeably. However, for clarity, you should avoid doing so.

## Return value

`undefined`

## References

1. [`clearTimeout()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout)
2. [`clearTimeout()` - w3schools](https://www.w3schools.com/jsref/met_win_cleartimeout.asp)