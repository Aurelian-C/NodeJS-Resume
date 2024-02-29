# AbortController

The **`AbortController`** interface represents a controller object that allows you to ==abort one or more Web requests as and when desired==.

You can create a new `AbortController` object using the [`AbortController()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/AbortController) constructor. Communicating with a DOM request is done using an [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) object.

## Syntax

The **`AbortController()`** constructor creates a new [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) object instance:

```js
// Creates a new AbortController object instance.
const controller = new AbortController();

// Returns an AbortSignal object instance, which can be used to communicate with, or to abort, a DOM request.
const signal = controller.signal; 

// Aborts a DOM request before it has completed. This is able to abort fetch requests, consumption of any response bodies, and streams.
controller.abort(); //or
controller.abort(reason);

```

## Parameters

None.

## Instance properties & methods

### AbortController: `signal` property

The **`signal`** read-only property of the [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) interface returns an [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) object instance, which ==can be used to communicate with/abort a DOM request as desired==.

### AbortController: `abort()` method

The **`abort()`** method of the [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) interface ==aborts a DOM request before it has completed. This is able to abort [fetch requests](https://developer.mozilla.org/en-US/docs/Web/API/fetch), the consumption of any response bodies, or streams==.

```javascript
abort()
abort(reason)
```

#### Parameters

- `reason` _(optional)_: the reason why the operation was aborted, which can be any JavaScript value. If not specified, the reason is set to "AbortError" [`DOMException`](https://developer.mozilla.org/en-US/docs/Web/API/DOMException).

#### Return value

None ([`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Examples

In the following snippet, we aim to download a video using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

We first create a controller using the [`AbortController()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/AbortController) constructor, then grab a reference to its associated [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) object using the [`AbortController.signal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal) property.

When the [fetch request](https://developer.mozilla.org/en-US/docs/Web/API/fetch) is initiated, we pass in the `AbortSignal` as an option inside the request's options object (the `{signal}` below). This associates the signal and controller with the fetch request and allows us to abort it by calling [`AbortController.abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort), as seen below in the second event listener.

![innerHeight](../../img/abort-controller.jpg)

> **Note:** ==When `abort()` is called, the `fetch()` promise rejects with an `Error` of type `DOMException`, with name `AbortError`==.

## References

1. [`AbortController` Interface - MDN](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
1. [`AbortController` Constructor - MDN](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/AbortController)
1. [AbortController: `signal` property - MDN](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal)
1. [AbortController: `abort()` method - MDN](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort)