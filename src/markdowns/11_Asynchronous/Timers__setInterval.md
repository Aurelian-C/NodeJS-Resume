# `setInterval()`

The **`setInterval()`** method, offered on the [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) interface, ==repeatedly calls a function or executes a code snippet, with a fixed time delay between each call==. This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling [`clearInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval).

The `setInterval()` method continues calling the function until `clearInterval()` is called, or the window is closed.

The `setInterval()` function is commonly used to set a delay for functions that are executed again and again, such as animations. You can cancel the interval using `clearInterval()`. If you wish to have your function called *once* after the specified delay, use [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout).

## Syntax

```js
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg0)
setInterval(func, delay, arg0, arg1)
setInterval(func, delay, arg0, arg1, /* … ,*/ argN)
```

## Parameters

#### `func`

A function to be executed every `delay` milliseconds. The first execution happens _after_ `delay` milliseconds.

#### `code`

An optional syntax allows you to include a string instead of a function, which is compiled and executed every `delay` milliseconds. This syntax is **not recommended** for the same reasons that make using [`eval()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) a security risk.

#### `delay` _(optional)_

The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function or code. Defaults to 0 if not specified.

> **Delay restrictions**: it's possible for intervals to be nested; that is, the callback for `setInterval()` can in turn call `setInterval()` to start another interval running, even though the first one is still going. To mitigate the potential impact this can have on performance, once intervals are nested beyond five levels deep, the browser will automatically enforce a 4 ms minimum value for the interval. Attempts to specify a value less than 4 ms in deeply-nested calls to `setInterval()` will be pinned to 4 ms.

#### `arg0, …, argN` _(optional)_

Additional arguments which are passed through to the function specified by *func* once the timer expires.

## Return value

The returned `intervalID` is a numeric, non-zero value which identifies the timer created by the call to `setInterval()`; this value can be passed to [`clearInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval) to cancel the interval.

> It may be helpful to be aware that `setInterval()` and [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) share the same pool of IDs, and that `clearInterval()` and [`clearTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout) can technically be used interchangeably. For clarity, however, you should try to always match them to avoid confusion when maintaining your code.

## References

1. [`setInterval()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
2. [`setInterval()` - w3schools](https://www.w3schools.com/jsref/met_win_setinterval.asp)