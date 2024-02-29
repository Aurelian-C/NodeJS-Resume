# `clearInterval()`

The global **`clearInterval()`** method cancels a timed, repeating action which was previously established by a call to [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval). If the parameter provided does not identify a previously established action, this method does nothing.

## Syntax

```js
clearInterval(intervalID)
```

## Parameters

#### `intervalID`

The identifier of the repeated action you want to cancel. This ID was returned by the corresponding call to `setInterval()`.

> It's worth noting that the pool of IDs used by [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) and [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) are shared, which means you can technically use `clearInterval()` and [`clearTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout) interchangeably. However, for clarity, you should avoid doing so.

## Return value

`undefined`

## References

1. [`clearInterval()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval)
2. [`clearInterval()` - w3schools](https://www.w3schools.com/jsref/met_win_clearinterval.asp)