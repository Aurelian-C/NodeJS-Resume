# Window: load event

The `load` event is ==fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images==. This is in contrast to [`DOMContentLoaded`](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event), which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading.

> **Note**: This event is not cancelable and does not bubble. 
>
> *All events named `load` will not propagate to `Window`*, even with `bubbles` initialized to `true`. To catch `load` events on the `window`, that `load` event must be dispatched directly to the `window`.

## Syntax

Use the event name in methods like [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), or set an _event handler property_:

```js
addEventListener("load", (event) => {});
// or
onload = (event) => {};
```

## Event type

A generic [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event).

## Examples

### Log a message when the page is fully loaded

```js
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});
```

The same, but using the `onload` event handler property:

```js
window.onload = (event) => {
  console.log("page is fully loaded");
};
```

## References

1. [Window: load event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)